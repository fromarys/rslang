import { Header, Main, Footer } from './';
import { RouteInstance } from './basic/types';
import { AuthPage } from './pages/AuthPage';

export class AppView {
  private readonly header: Header;
  public readonly main: Main;
  private readonly footer: Footer;
  constructor(private root: HTMLElement | null) {
    this.header = new Header(root);
    this.header.init();
    this.main = new Main(root);
    this.main.init();
    this.footer = new Footer(root);
    this.footer.init();
  }

  /**
   * Генерирует страницу
   * @param route Инстанс класса роута
   */
  public renderGame(route: RouteInstance): void {
    if (this.root) this.root.innerHTML = '';
    route.render();
  }

  public renderPage(route: RouteInstance): void {
    if (this.root) this.root.innerHTML = '';
    this.header.init();
    this.main.init();
    this.main.instance.innerHTML = '';
    this.footer.init();
    route.render();
  }

  public renderMain(): void {
    if (this.root) this.root.innerHTML = '';
    this.header.init();
    this.main.init();
    this.footer.init();
  }

  public renderModal(route: AuthPage, previousRoute: string) {
    route.onExit = () => (window.location.hash = previousRoute);
    route.render();
  }
}
