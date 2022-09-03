import { Api, IError, IStatistic } from '../../basic';
import { Creator } from '../../components';
import { AuthPage } from '../AuthPage';
import LoadingPage from '../LoadingPage/LoadingPage';
import StatisticsModel from './Statistics.model';

export class Statistics {
  statisticsModel: StatisticsModel;
  auth: AuthPage;
  mainWnd!: Creator<HTMLElement>;

  constructor(private parent: HTMLElement) {
    this.statisticsModel = new StatisticsModel();
    this.auth = new AuthPage(this.parent);
  }

  public render(): void {
    this.mainWnd = new Creator(this.parent, 'main', 'statstics__main-window');
    if (!this.auth.isAuthorized()) {
      // Не авторизирован
      new Creator(
        this.mainWnd.node,
        'div',
        'statstic__not-authorized',
        'Только авторизированные пользователи могут просматривать статистику'
      );
    } else {
      //Авторизирован
      const load = new LoadingPage(this.parent);
      void Api.getUserStatistics().then((stat: IStatistic | IError) => {
        load.destroy();

      });
    }
  }
}
