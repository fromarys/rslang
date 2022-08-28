import { AppView } from '../../app.view';
import { DEFAULT_ROUTE } from '../common';
import { TRoutes } from '../types';

export class Router {
  constructor(private main: AppView, private routes: TRoutes) {}
  public run() {
    this.switchRoute(this.getHash());
    window.addEventListener('hashchange', () => {
      this.switchRoute(this.getHash());
    });
  }

  private switchRoute(route: string) {
    const key = this.routes[route] ? route : DEFAULT_ROUTE;
    const page = this.routes[key];
    this.main.renderPage(page);
  }

  private getHash() {
    return window.location.hash.slice(1);
  }
}
