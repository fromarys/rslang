import { AppView } from '../../app.view';
import { RouteClass, RouteInstance, TRoutes } from '../types';
import { ERoutes } from '../enums';
import { AuthPage } from '../../pages/AuthPage';

export class Router {
  route: string;
  mainNode: HTMLElement;
  previousRoute: string;
  constructor(private root: HTMLElement | null, private main: AppView, private routes: TRoutes) {
    this.route = '';
    this.mainNode = this.main.main.instance;
    this.previousRoute = '';
  }

  /**
   * Назначает обработчик событий и запускает функцию для переключения роута
   */
  public run(): void {
    this.switchRoute(this.getHash());
    window.addEventListener('hashchange', () => {
      this.switchRoute(this.getHash());
    });
  }

  /**
   * Получает hash из URL
   */
  private getHash(): string {
    return window.location.hash.slice(1);
  }

  /**
   * Создает инстанс класса роута и передает номер страницы и группы в качестве аргумента
   * @param hash URL hash
   */
  private switchRoute(hash: string): void {
    const key: string = this.routes[hash] ? hash : ERoutes.main;
    const Route: RouteClass = this.routes[key];
    if (key === ERoutes.sprint || key === ERoutes.audiocall) {
      this.loadGame(Route);
    } else if (key === ERoutes.auth) {
      this.loadModal(Route as typeof AuthPage);
    } else {
      this.loadPage(Route, key);
    }
  }

  private loadGame(Route: RouteClass): void {
    const page: number = Number(localStorage.getItem('page')) || 0;
    const group: number = Number(localStorage.getItem('group')) || 0;
    if (this.root) {
      const route = new Route(this.root, group, page);
      this.route = '';
      this.main.renderGame(route);
    }
  }

  private loadPage(Route: RouteClass, key: string): void {
    const route: RouteInstance = new Route(this.mainNode);
    if (key === ERoutes.textbook) {
      this.route = ERoutes.textbook;
    } else {
      this.route = '';
    }
    this.previousRoute = key;
    this.main.renderPage(route);
  }

  private loadModal(Route: typeof AuthPage) {
    if (this.root) {
      const route = new Route(this.mainNode);
      this.main.renderModal(route, this.previousRoute);
    }
  }
}
