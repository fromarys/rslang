import { Header, Main, Footer } from './';
import { ITextbook } from './basic';

export class AppView {
  private readonly header: Header;
  public readonly main: Main;
  private readonly footer: Footer;
  constructor(root: HTMLElement | null) {
    this.header = new Header(root);
    this.header.init();
    this.main = new Main(root);
    this.main.init();
    this.footer = new Footer(root);
    this.footer.init();
  }

  /**
   * Генерирует страницу
   * @param route Инстанс класса роутера
   */
  public renderPage(route: ITextbook) {
    this.main.instance.innerHTML = '';
    route.render();
  }
}
