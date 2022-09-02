import { IWord } from '../../../basic/interfaces/interfaces';
import Burger from '../../../components/Burger/Burger';
import { Button } from '../../../components/Button';
import { Creator } from '../../../components/Creator';
import './gamepage.scss';

const ANSWER_BUTTONS = 2;
enum EAnswer {
  right,
  wrong,
}

export default class SprintGamePage extends Creator {
  onNext!: (result: boolean) => void;
  keyHandlerBind: (e: KeyboardEvent) => void;
  btnMass: Button[] = [];
  btnBack: Button;
  word: IWord;
  translate: string;
  timer: Creator<HTMLElement>;

  constructor(
    parent: HTMLElement,
    curIndex: number,
    gameWords: IWord[],
    onExit: () => void,
    private audioRight: HTMLAudioElement,
    private audioWrong: HTMLAudioElement,
    curTimer: number
  ) {
    super(parent, 'div', 'gamepage-sprint');
    this.word = gameWords[curIndex];
    new Burger(parent);
    this.timer = new Creator(this.node, 'div', 'gamepage-sprint__timer', `${curTimer}`);
    new Creator(this.node, 'div', 'gamepage-sprint__progress-window', `Слов: ${curIndex}`);
    const wordWnd = new Creator(this.node, 'div', 'gamepage-sprint__word-window');
    new Creator(wordWnd.node, 'div', 'gamepage-sprint__word', `${gameWords[curIndex].word}`);
    let randomInt;
    do {
      randomInt = this.getRandomInt(gameWords.length);
    } while (randomInt === curIndex);
    this.translate = gameWords[Math.random() > 0.5 ? randomInt : curIndex].wordTranslate;
    new Creator(wordWnd.node, 'div', 'gamepage-sprint__word', `${this.translate}`);
    const btnWrapper1 = new Creator(this.node, 'div', 'gamepage-sprint__btn-wrapper');
    this.btnMass.push(
      new Button(btnWrapper1.node, 'gamepage-sprint__answer btn_right', '1 Верно', () => this.onAnswer(EAnswer.right))
    );
    this.btnMass.push(
      new Button(btnWrapper1.node, 'gamepage-sprint__answer btn_wrong', '2 Не верно', () =>
        this.onAnswer(EAnswer.wrong)
      )
    );

    const btnWrapper2 = new Creator(this.node, 'div', 'gamepage-sprint__btn-wrapper');
    this.btnBack = new Button(btnWrapper2.node, 'gamepage-sprint__back', 'Quit', () => onExit());
    this.keyHandlerBind = this.keyHandler.bind(this);
    window.addEventListener('keyup', this.keyHandlerBind);
  }

  /**
   * Обработчик события KeyboardEvent для выбора с клавиатуры
   * @param e Событие KeyboardEvent
   */
  private keyHandler(e: KeyboardEvent) {
    if (e.key > '0' && e.key <= `${ANSWER_BUTTONS}`) {
      this.onAnswer(e.key === '1' ? EAnswer.right : EAnswer.wrong);
    }
  }

  public destroy() {
    window.removeEventListener('keyup', this.keyHandlerBind);
    super.destroy();
  }

  private onAnswer(index: number) {
    const answer = (this.translate === this.word.wordTranslate) === (index === EAnswer.right);
    this.btnMass[index].node.classList.add(answer ? 'answer_right' : 'answer_wrong');
    if (answer) {
      void this.audioRight.play();
    } else {
      void this.audioWrong.play();
    }
    setTimeout(() => this.onNext(answer), 500);
  }

  /**
   * Возвращает случайное число, не больше maxInt
   * @param maxInt Максимальное число
   * @returns Случайное числе не больше maxInt
   */
  private getRandomInt(maxInt: number): number {
    return Math.floor(Math.random() * maxInt);
  }

  public showCount(count: number): void {
    this.timer.node.textContent = ('0' + `${count}`).slice(-2);
  }
}
