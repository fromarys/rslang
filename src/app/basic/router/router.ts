import { AppView } from '../../app.view';
import { RouteClass, RouteInstance, TRoutes } from '../types';
import { ERoutes } from '../enums';

export class Router {
  page: string;
  parentNode: HTMLElement;
  constructor(private main: AppView, private routes: TRoutes) {
    this.page = '';
    this.parentNode = this.main.main.instance;
  }

  public run(): void {
    this.switchRoute(this.getHash());
    window.addEventListener('hashchange', () => {
      this.switchRoute(this.getHash());
    });
  }

  private switchRoute(hash: string): void {
    const key: string = this.routes[hash] ? hash : ERoutes.main;
    const Route: RouteClass = this.routes[key];
    if (key === ERoutes.textbook) {
      const route: RouteInstance = new Route(this.parentNode);
      this.page = ERoutes.textbook;
      this.main.renderPage(route);
    } else {
      const page: number = Number(localStorage.getItem('page')) || 0;
      const group: number = Number(localStorage.getItem('group')) || 0;
      const route = new Route(this.parentNode, group, page);
      this.page = '';
      this.main.renderPage(route);
    }
  }

  private getHash() {
    return window.location.hash.slice(1);
  }
}
