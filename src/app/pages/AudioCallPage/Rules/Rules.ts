import Button from '../../../components/Button/Button';
import Creator from '../../../components/Creator/Creator';
import { GROUP_AMOUNT } from '../../../basic/common/constants';

export default class Rules extends Creator {
  onClick!: (num: number) => void;

  constructor(parent: HTMLElement, fromBook = false) {
    super(parent, 'div', 'rules_window');
    this.node.innerHTML = `
      <h2 class="rules__title">Правила игры "Аудиовызов"</h2>
      <p class="rules__rules">Игра "Аудиовызов" позволяет улучшить восприятие слов на слух.</p>
      <p class="rules__rules">Вы должны выбрать перевод услышанного слова.</p>
      `;
    if (fromBook) {
      new Button(this.node, 'rules_button', 'Ok', () => this.onClick(0));
    } else {
      this.node.innerHTML += '<p class="rules__rules">Выберите раздел</p>';
      for (let i = 1; i <= GROUP_AMOUNT; i++) {
        const btn = new Button(this.node, 'rules_button', `${i}`, () => this.onClick(i));
        btn.node.style.backgroundColor = this.getColorFromNumber(i);
      }
    }
    this.initHandler();
  }

  /**
   * Обработчик события KeyboardEvent для выбора с клавиатуры
   * @param e Событие KeyboardEvent
   */
  private keyHandler(e: KeyboardEvent) {
    if (e.key > '0' && e.key <= `${GROUP_AMOUNT}`) {
      this.onClick(parseInt(e.key));
    }
  }

  private initHandler(): void {
    window.addEventListener('keyup', this.keyHandler.bind(this));
  }

  public destroy() {
    window.removeEventListener('keyup', this.keyHandler.bind(this));
    super.destroy();
  }

  private getColorFromNumber(num: number): string {
    let str = '#';
    str += num & 1 ? 'ff' : '00';
    str += num & 2 ? 'ff' : '00';
    str += num & 4 ? 'ff' : '00';
    return str;
  }
}
