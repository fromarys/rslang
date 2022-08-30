import { AppView } from '../../app.view';
import { RouteClass, RouteInstance, TRoutes } from '../types';
import { ERoutes } from '../enums';

export class Router {
  page: string;
  mainNode: HTMLElement;
  constructor(private root: HTMLElement | null, private main: AppView, private routes: TRoutes) {
    this.page = '';
    this.mainNode = this.main.main.instance;
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
    //TODO Исправить роутинг так, что бы игры загружались в root, остальные в main.
    if (key === ERoutes.textbook) {
      this.mainNode.innerHTML = '';
      const route: RouteInstance = new Route(this.mainNode);
      this.page = ERoutes.textbook;
      this.main.renderPage(route);
    } else {
      const page: number = Number(localStorage.getItem('page')) || 0;
      const group: number = Number(localStorage.getItem('group')) || 0;
      if (this.root) {
        this.root.innerHTML = '';
        const route = new Route(this.root, group, page);
        this.page = '';
        this.main.renderPage(route);
      }
    }
  }

  private getHash() {
    return window.location.hash.slice(1);
  }
}
