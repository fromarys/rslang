/* eslint-disable */
import { Header, Main, Footer } from './';
import { RouteInstance } from './basic/types';
import { Creator } from './';

export class AppView {
  private readonly header: Header;
  public readonly main: Main;
  private readonly footer: Footer;
  // public mainNode: Creator;
  constructor(private root: HTMLElement | null) {
    this.header = new Header(root);
    this.header.init();
    // this.mainNode = new Creator(root, 'main');
    this.main = new Main(root);
    this.main.init();
    this.footer = new Footer(root);
    this.footer.init();
  }

  // private createMainNode(): void {
  //   this.mainNode = new Creator(this.root, 'main');
  // }

  public renderGame(route: RouteInstance): void {
    if (this.root) this.root.innerHTML = '';
    route.render();
  }

  public renderPage(route: RouteInstance): void {
    if (this.root) this.root.innerHTML = '';
    this.header.init();
    // this.createMainNode();
    this.main.init();
    this.main.instance.innerHTML = '';
    this.footer.init();
    route.render();
  }
}
