import { AppView } from '../../app.view';
import { TRoutes } from '../types';
import { ERoutes } from '../enums';
import { Textbook } from '../../pages';
/* eslint-disable*/
export class Router {
  page: string;
  parentNode: HTMLElement;
  constructor(private main: AppView, private routes: TRoutes) {
    this.page = '';
    this.parentNode = this.main.main.instance;
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
   * Создает инстанс класса роута и передает номер страницы и группы в качестве аргумента
   * @param hash URL hash
   */
  private switchRoute(hash: string): void {
    const key: string = this.routes[hash] ? hash : ERoutes.main;
    const Route: typeof Textbook = this.routes[key];
    let route: Textbook = new Route(this.parentNode);
    if (key === ERoutes.textbook) {
      this.page = ERoutes.textbook;
    } else {
      const page: number = Number(localStorage.getItem('page')) || 0;
      const group: number = Number(localStorage.getItem('group')) || 0;
      // route = new Route(this.parentNode, group, page);
      this.page = '';
    }
    this.main.renderPage(route);
  }

  /**
   * Получает hash из URL
   * @returns URL hash
   */
  private getHash(): string {
    return window.location.hash.slice(1);
  }
}
