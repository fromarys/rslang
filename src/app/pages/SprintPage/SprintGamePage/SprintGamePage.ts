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
  keyHandlerBind: (e: KeyboardEvent) => void;
  btnMass: Button[] = [];
  word: IWord;
  translate: string;
  timer: Creator<HTMLElement>;
  burger: Burger;

  constructor(
    parent: HTMLElement,
    curIndex: number,
    gameWords: IWord[],
    private onNext: (result: boolean) => void,
    private audioRight: HTMLAudioElement,
    private audioWrong: HTMLAudioElement,
    curTimer: number,
    private clearTimer: () => void
  ) {
    super(parent, 'div', 'gamepage-sprint');
    this.word = gameWords[curIndex];
    this.burger = new Burger(parent, () => {
      this.clearTimer();
      this.destroy();
    });
    this.timer = new Creator(this.node, 'div', 'gamepage-sprint__timer', ('0' + `${curTimer}`).slice(-2));
    if (curTimer < 10) this.timer.node.classList.add('timer_time-expire');
    new Creator(this.node, 'div', 'gamepage-sprint__progress-window', `Слов: ${curIndex}`);
    const wordWnd = new Creator(this.node, 'div', 'gamepage-sprint__word-window');
    new Creator(wordWnd.node, 'div', 'gamepage-sprint__word', `${gameWords[curIndex].word}`);
    let randomInt;
    do {
      randomInt = this.getRandomInt(gameWords.length);
    } while (randomInt === curIndex);
    this.translate = gameWords[Math.round(Math.random() * 10) % 2 ? randomInt : curIndex].wordTranslate;
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
    this.burger.destroy();
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
    if (count < 10) this.timer.node.classList.add('timer_time-expire');
    this.timer.node.classList.add('timer_tick');
    setTimeout(() => this.timer.node.classList.remove('timer_tick'), 300);
  }
}
