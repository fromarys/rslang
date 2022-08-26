import { IWord } from '../../../basic/interfaces/interfaces';
import Button from '../../../components/Button/Button';
import Creator from '../../../components/Creator/Creator';

const ANSWER_BUTTONS = 5;

export default class GamePage extends Creator {
  onSelect!: (str: string) => void;
  onBack!: () => void;
  btnMass: Button[] = [];
  btnBack: Button;
  audioWindow: Creator<HTMLElement>;

  constructor(parent: HTMLElement, curIndex: number, gameWords: IWord[], words: IWord[]) {
    super(parent);
    console.log(curIndex, gameWords, words);
    // audio
    this.audioWindow = new Creator(this.node, 'div', 'gamepage__audio-window', 'Here will be sound');
    for (let i = 0; i < ANSWER_BUTTONS; i++) {
      const btnText = gameWords[curIndex].word;
      this.btnMass.push(new Button(this.node, 'gamepage__answer', btnText, () => this.onSelect(btnText)));
    }
    this.btnBack = new Button(this.node, 'gamepage__back', 'Back', () => this.onBack());
  }

  /**
   * Обработчик события KeyboardEvent для выбора с клавиатуры
   * @param e Событие KeyboardEvent
   */
  private keyHandler(e: KeyboardEvent) {
    if (e.key > '0' && e.key <= `${PARTS_AMOUNT}`) {
      this.onSelect(parseInt(e.key));
    }
  }

  private initHandler(): void {
    window.addEventListener('keyup', this.keyHandler.bind(this));
  }

  public destroy() {
    window.removeEventListener('keyup', this.keyHandler.bind(this));
    super.destroy();
  }
}
