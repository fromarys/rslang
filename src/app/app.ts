import { AppView } from './app.view';
import { TRoutes, Router } from './basic';
import { Textbook } from './pages';

export class App {
  private readonly view: AppView;
  private readonly root: HTMLElement | null;
  private readonly routes: TRoutes;
  private readonly router: Router;
  private readonly parentNode: HTMLElement;
  constructor() {
    this.root = document.querySelector('.root');
    this.view = new AppView(this.root);
    this.parentNode = this.view.main.instance;
    this.routes = {
      '/': new Textbook(this.parentNode),
      auth: new Textbook(this.parentNode),
      games: new Textbook(this.parentNode),
      sprint: new Textbook(this.parentNode),
      textbook: new Textbook(this.parentNode),
      audiocall: new Textbook(this.parentNode),
      statistics: new Textbook(this.parentNode),
    };
    this.router = new Router(this.view, this.routes);
  }

  public start(): void {
    this.router.run();
  }
}
