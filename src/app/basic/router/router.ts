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

  private getHash() {
    return window.location.hash.slice(1);
  }

  private switchRoute(hash: string): void {
    const key: string = this.routes[hash] ? hash : ERoutes.main;
    const Route: RouteClass = this.routes[key];
    if (key === ERoutes.sprint || key === ERoutes.audiocall) {
      this.loadGame(Route);
    } else {
      this.loadPage(Route, key);
    }
  }

  private loadGame(Route: RouteClass): void {
    const page: number = Number(localStorage.getItem('page')) || 0;
    const group: number = Number(localStorage.getItem('group')) || 0;
    if (this.root) {
      const route = new Route(this.root, group, page);
      this.page = '';
      this.main.renderGame(route);
    }
  }

  private loadPage(Route: RouteClass, key: string): void {
    const route: RouteInstance = new Route(this.mainNode);
    if (key === ERoutes.textbook) {
      this.page = ERoutes.textbook;
    } else {
      this.page = '';
    }
    this.main.renderPage(route);
  }
}
