import { baseUrl } from '../../../basic';
import { IWord } from '../../../basic/interfaces/interfaces';
import { Button } from '../../../components/Button/';
import { Creator } from '../../../components/Creator';
import './gamepage.scss';

const ANSWER_BUTTONS = 5;

export default class GamePage extends Creator {
  onBack!: () => void;
  onNext!: (result: boolean) => void;
  keyHandlerBind: (e: KeyboardEvent) => void;
  btnMass: Button[] = [];
  audioWindow: Creator<HTMLElement>;
  btnNext: Button;
  btnBack: Button;
  word: IWord;
  audio: HTMLAudioElement;
  btnPlay: Button;
  isAnswered: boolean;
  answer = false;
  answers: string[];

  constructor(parent: HTMLElement, curIndex: number, gameWords: IWord[]) {
    super(parent, 'div', 'gamepage');
    this.word = gameWords[curIndex];
    console.log(this.word);
    const progressWnd = new Creator(this.node, 'div', 'gamepage__progress-window');
    for (let i = 0; i < gameWords.length; i++) {
      const item = new Creator(progressWnd.node, 'div', 'gamepage__progress-item');
      if (i <= curIndex) item.node.style.backgroundColor = '#202020';
    }
    this.audioWindow = new Creator(this.node, 'div', 'gamepage__audio-window');
    this.btnPlay = new Button(this.audioWindow.node, 'gamepage__play', '', () => this.playWord());
    this.audio = new Audio(`${baseUrl}/${this.word.audio}`);
    this.audio.oncanplaythrough = () => this.playWord();

    const btnWrapper1 = new Creator(this.node, 'div', 'gamepage__btn-wrapper');
    const answersNum = this.generateRandomSequence(ANSWER_BUTTONS - 1, gameWords.length, curIndex);
    console.log(answersNum);
    answersNum.push(curIndex);
    this.answers = answersNum.sort(() => Math.random() - 0.5).map((num) => gameWords[num].wordTranslate);
    this.answers.forEach((btnText, index) => {
      this.btnMass.push(
        new Button(btnWrapper1.node, 'gamepage__answer', `${index + 1}. ${btnText}`, () => this.onAnswer(index))
      );
    });

    const btnWrapper2 = new Creator(this.node, 'div', 'gamepage__btn-wrapper');
    this.btnNext = new Button(btnWrapper2.node, 'gamepage__next', 'Next', () => {
      if (this.isAnswered) this.onNext(this.answer);
    });
    this.btnBack = new Button(btnWrapper2.node, 'gamepage__back', 'Quit', () => this.onBack());
    this.keyHandlerBind = this.keyHandler.bind(this);
    window.addEventListener('keyup', this.keyHandlerBind);
    this.isAnswered = false;
  }

  /**
   * Обработчик события KeyboardEvent для выбора с клавиатуры
   * @param e Событие KeyboardEvent
   */
  private keyHandler(e: KeyboardEvent) {
    if (e.key > '0' && e.key <= `${ANSWER_BUTTONS}`) {
      this.onAnswer(parseInt(e.key) - 1);
    }
    if (e.key === 'Enter' && this.isAnswered) {
      this.onNext(this.answer);
    }
  }

  public destroy() {
    window.removeEventListener('keyup', this.keyHandlerBind);
    super.destroy();
  }

  private onAnswer(index: number) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    this.answer = this.answers[index] === this.word.wordTranslate;
    this.btnMass[index].node.classList.add(this.answer ? 'answer_right' : 'answer_wrong');

    this.btnPlay.destroy();
    const img = new Creator<HTMLImageElement>(this.audioWindow.node, 'img', 'audio-window__img');
    img.node.src = `${baseUrl}/${this.word.image}`;
    img.node.alt = `${this.word.word}`;
    const rightWnd = new Creator(this.audioWindow.node, 'div', 'audio-window__right-box');
    new Button(rightWnd.node, 'audio-window__play', '', () => this.playWord());
    new Creator(rightWnd.node, 'span', '', this.word.word);
    new Creator(rightWnd.node, 'span', 'audio-window__trascript', this.word.transcription);
    new Creator(rightWnd.node, 'div', 'audio-window__text', this.word.textExample);
    new Creator(rightWnd.node, 'div', 'audio-window__text', this.word.textExampleTranslate);
  }

  private playWord() {
    void this.audio.play();
  }

  /**
   * Возвращает случайное число, не больше maxInt
   * @param maxInt Максимальное число
   * @returns Случайное числе не больше maxInt
   */
  private getRandomInt(maxInt: number): number {
    return Math.floor(Math.random() * maxInt);
  }

  /**
   * Возвращает массив случайных чисел
   * @param amount Количество чисел в массиве
   * @param maxNumber Максимальное число
   * @param exclude Исключить число
   * @returns Массив случайных чисел
   */
  private generateRandomSequence(amount: number, maxNumber: number, exclude: number): number[] {
    const mass: number[] = [];
    while (mass.length < amount) {
      const n = this.getRandomInt(maxNumber);
      if (n === exclude || mass.includes(n)) continue;
      mass.push(n);
    }
    return mass;
  }
}
