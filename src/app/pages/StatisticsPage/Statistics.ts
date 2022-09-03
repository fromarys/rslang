import { Api, IError, IStatistic } from '../../basic';
import { Creator } from '../../components';
import { AuthPage } from '../AuthPage';
import LoadingPage from '../LoadingPage/LoadingPage';
import './statistics.scss';

export class Statistics {
  auth: AuthPage;
  mainWnd!: Creator<HTMLElement>;

  constructor(private parent: HTMLElement) {
    this.auth = new AuthPage(this.parent);
  }

  public render(): void {
    this.mainWnd = new Creator(this.parent, 'main', 'statstics__main-window');
    if (!this.auth.isAuthorized()) {
      // Не авторизирован
      new Creator(
        this.mainWnd.node,
        'div',
        'statstics__not-authorized',
        'Только авторизированные пользователи могут просматривать статистику'
      );
    } else {
      //Авторизирован
      const load = new LoadingPage(this.parent);
      void Api.getUserStatistics().then((stat: IStatistic | IError) => {
        load.destroy();
        new Creator(this.mainWnd.node, 'div', 'statstic__not-authorized', 'Здесь будет статистика');
        console.log(stat);
      });
    }
  }
}
