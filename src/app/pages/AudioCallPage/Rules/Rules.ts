import { Button } from '../../../components/Button';
import { Creator } from '../../../components/Creator';
import { GROUP_AMOUNT } from '../../../basic/common/constants';
import './rules.scss';

export default class Rules extends Creator {
  onClick!: (num: number) => void;
  keyHandlerBind!: (e: KeyboardEvent) => void;

  constructor(parent: HTMLElement, fromBook = false) {
    super(parent, 'div', 'rules');
    const wnd = new Creator(
      this.node,
      'div',
      'rules__window',
      `
        <h2 class="rules__title">Правила игры "Аудиовызов"</h2>
        <p class="rules__rules">Игра "Аудиовызов" позволяет улучшить восприятие слов на слух.</p>
        <p class="rules__rules">Вы должны выбрать перевод услышанного слова.</p>
        <p class="rules__rules">Управлять можно кнопками 1 - 5 выбор, Enter - следущий</p>
      `
    );
    const btnWrapper = new Creator(wnd.node, 'div', 'rules__btn-wrapper');
    if (fromBook) {
      new Button(btnWrapper.node, 'rules__button', 'Ok', () => this.onClick(0));
    } else {
      btnWrapper.node.innerHTML += '<p class="rules__rules">Выберите группу сложности:</p>';
      for (let i = 1; i <= GROUP_AMOUNT; i++) {
        const btn = new Button(btnWrapper.node, 'rules__button', `${i}`, () => this.onClick(i));
        btn.node.style.backgroundColor = this.getColorFromNumber(i);
      }
    }
    this.keyHandlerBind = this.keyHandler.bind(this);
    window.addEventListener('keyup', this.keyHandlerBind);
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

  public destroy() {
    window.removeEventListener('keyup', this.keyHandlerBind);
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
