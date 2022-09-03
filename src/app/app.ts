import { AppView } from './app.view';
import { TRoutes, Router } from './basic';
import { Games, Main } from './components';
import { Textbook } from './pages';
import { AudioCall } from './pages/AudioCallPage';
import { AuthPage } from './pages/AuthPage';
import { Sprint } from './pages/SprintPage';
import { Statistics } from './pages/StatisticsPage';

export class App {
  private readonly view: AppView;
  private readonly root: HTMLElement | null;
  private readonly routes: TRoutes;
  private readonly router: Router;
  constructor() {
    this.root = document.querySelector('.root');
    this.view = new AppView(this.root);
    this.routes = {
      '/': Main,
      auth: AuthPage,
      games: Games,
      sprint: Sprint,
      textbook: Textbook,
      audiocall: AudioCall,
      statistics: Statistics,
    };
    this.router = new Router(this.root, this.view, this.routes);
  }

  public start(): void {
    this.router.run();
  }
}
