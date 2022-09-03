import { Api, IAggregatedWords, IError, IStatistic } from '../../basic';
import { Creator } from '../../components';
import { AuthPage } from '../AuthPage';
import LoadingPage from '../LoadingPage/LoadingPage';
import './statistics.scss';
import StatisticsGames from './StatisticsGames/StatisticsGames';

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
      const filter = {
        userWord: { $ne: null },
      };

      const obj = {
        // group: '1',
        // page: '1',
        wordsPerPage: '4000',
        filter: JSON.stringify(filter),
      };
      const promises: [Promise<IStatistic | IError>, Promise<IError | IAggregatedWords[]>] = [
        Api.getUserStatistics(),
        Api.getUserAllAgregatedWords(obj),
      ];

      void Promise.all(promises).then(([stat, words]) => {
        load.destroy();
        new StatisticsGames(this.parent, 'error' in stat ? null : stat, 'error' in words ? null : words);
      });
    }
  }
}
