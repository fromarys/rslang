import { AppView } from './app.view';
import { TRoutes, Router } from './basic';
import { Textbook } from './pages';
import { AudioCall } from './pages/AudioCallPage';

export class App {
  private readonly view: AppView;
  private readonly root: HTMLElement | null;
  private readonly routes: TRoutes;
  private readonly router: Router;
  constructor() {
    this.root = document.querySelector('.root');
    this.view = new AppView(this.root);
    this.routes = {
      '/': Textbook,
      auth: Textbook,
      games: Textbook,
      sprint: Textbook,
      textbook: Textbook,
      audiocall: AudioCall,
      statistics: Textbook,
    };
    this.router = new Router(this.root, this.view, this.routes);
  }

  public start(): void {
    this.router.run();
  }
}
