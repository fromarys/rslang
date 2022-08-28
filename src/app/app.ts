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
      '/': Textbook,
      auth: Textbook,
      games: Textbook,
      sprint: Textbook,
      textbook: Textbook,
      audiocall: Textbook,
      statistics: Textbook,
    };
    this.router = new Router(this.view, this.routes);
  }

  public start(): void {
    this.router.run();
  }
}
