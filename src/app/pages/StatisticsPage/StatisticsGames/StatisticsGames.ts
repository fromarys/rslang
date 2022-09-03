import { IStatistic } from '../../../basic';
import { Creator } from '../../../components';

export default class StatisticsGames extends Creator {
  constructor(parent: HTMLElement, stat: IStatistic) {
    super(parent, 'div', 'statistics__games');
    console.log(stat);
  }
}
