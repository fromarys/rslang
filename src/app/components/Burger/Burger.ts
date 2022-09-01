import { Creator } from '../Creator';
import './burger.scss';

export default class Burger extends Creator {
  private menuItems = {
    'Main menu': '',
    Textbook: 'textbook',
    Statistics: 'statistics',
  };
  private burgerShown = false;
  wnd!: Creator<HTMLElement>;

  constructor(private parent: HTMLElement) {
    super(parent, 'div', 'burger-menu', '<span class="burger-menu__span"></span>');
    this.node.onclick = () => this.clickHandler();
  }

  clickHandler() {
    this.burgerShown = !this.burgerShown;
    if (this.burgerShown) {
      // show
      this.node.classList.add('burger-menu_shown');
      this.wnd = new Creator(this.parent, 'div', 'burger-menu__window');
      Object.entries(this.menuItems).forEach((entry) => {
        const [key, value] = entry;
        const item = new Creator(this.wnd.node, 'div', 'burger-menu__item', `${key}`);
        item.node.onclick = () => (location.hash = `${value}`);
      });
      setTimeout(() => (this.wnd.node.style.opacity = '1'), 0);
    } else {
      // удалить бургер
      this.node.classList.remove('burger-menu_shown');
      this.wnd.node.style.opacity = '0';
      setTimeout(() => this.wnd.destroy(), 500);
    }
  }
}
