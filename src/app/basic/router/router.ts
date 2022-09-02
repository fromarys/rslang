import { AppView } from '../../app.view';
import { RouteClass, RouteInstance, TRoutes } from '../types';
import { ERoutes } from '../enums';
import { AuthPage } from '../../pages/AuthPage';
import { Textbook } from '../../pages';

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
    } else if (key === ERoutes.main) {
      this.main.renderMain();
      this.clearLocalStorage();
    } else {
      this.loadPage(Route, key);
    }
  }

  private loadGame(Route: RouteClass): void {
    const page: number | undefined =
      this.previousRoute === ERoutes.textbook ? Number(localStorage.getItem('page')) : undefined;
    const group: number | undefined =
      this.previousRoute === ERoutes.textbook ? Number(localStorage.getItem('group')) : undefined;
    if (this.root) {
      const route = new Route(this.root, group, page);
      this.route = '';
      this.main.renderGame(route);
      this.clearLocalStorage();
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
    this.clearLocalStorage();
  }

  private loadModal(Route: typeof AuthPage) {
    if (this.root) {
      const route = new Route(this.mainNode);
      this.main.renderModal(route, this.previousRoute);
    }
  }

  clearLocalStorage() {
    const route = this.routes[this.previousRoute];
    if (!(route === Textbook)) {
      localStorage.setItem('group', '');
      localStorage.setItem('page', '');
    }
  }
}
