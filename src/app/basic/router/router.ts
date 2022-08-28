import { AppView } from '../../app.view';
import { TRoutes } from '../types';
import { ERoutes } from '../enums';
import { Textbook } from '../../pages';

export class Router {
  page: string;
  parentNode: HTMLElement;
  constructor(private main: AppView, private routes: TRoutes) {
    this.page = '';
    this.parentNode = this.main.main.instance
  }
  public run() {
    this.switchRoute(this.getHash());
    window.addEventListener('hashchange', () => {
      this.switchRoute(this.getHash());
    });
  }

  private switchRoute(hash: string) {
    const key: string = this.routes[hash] ? hash : ERoutes.main;
    const Route: typeof Textbook = this.routes[key];
    let route: Textbook = new Route(this.parentNode);
    if (key === ERoutes.textbook) {
      this.page = ERoutes.textbook;
    } else {
      const page: number = Number(localStorage.getItem('page')) || 0;
      const group: number = Number(localStorage.getItem('group')) || 0;
      route = new Route(this.parentNode, group, page);
      this.page = '';
    }
    this.main.renderPage(route);
  }
  
  private getHash() {
    return window.location.hash.slice(1);
  }
}
