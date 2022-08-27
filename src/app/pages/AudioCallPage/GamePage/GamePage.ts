import { IWord } from '../../../basic/interfaces/interfaces';
import { Button } from '../../../components/Button/';
import { Creator } from '../../../components/Creator';

const ANSWER_BUTTONS = 5;

export default class GamePage extends Creator {
  onBack!: () => void;
  onNext!: (str: string) => void;
  btnMass: Button[] = [];
  audioWindow: Creator<HTMLElement>;
  btnNext: Button;
  btnBack: Button;
  word: IWord;

  constructor(parent: HTMLElement, curIndex: number, gameWords: IWord[], words: IWord[]) {
    super(parent);
    this.word = gameWords[curIndex];
    console.log(curIndex, gameWords, words);
    // audio
    this.audioWindow = new Creator(this.node, 'div', 'gamepage__audio-window', 'Here will be sound');
    for (let i = 0; i < ANSWER_BUTTONS; i++) {
      const btnText = gameWords[curIndex].word;
      this.btnMass.push(new Button(this.node, 'gamepage__answer', btnText, () => this.onAnswer(btnText)));
    }
    this.btnNext = new Button(this.node, 'gamepage__next', 'Next', () => this.onNext('aaa'));
    this.btnBack = new Button(this.node, 'gamepage__back', 'Back', () => this.onBack());
    this.initHandler();
  }

  /**
   * Обработчик события KeyboardEvent для выбора с клавиатуры
   * @param e Событие KeyboardEvent
   */
  private keyHandler(e: KeyboardEvent) {
    if (e.key > '0' && e.key <= `${ANSWER_BUTTONS}`) {
      this.onAnswer(e.key);
    }
  }

  private initHandler(): void {
    window.addEventListener('keyup', this.keyHandler.bind(this));
  }

  public destroy() {
    window.removeEventListener('keyup', this.keyHandler.bind(this));
    super.destroy();
  }

  private onAnswer(str: string) {
    console.log(str);
  }
}
