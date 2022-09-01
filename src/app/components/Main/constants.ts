import { ERoutes, IHeaderMenu } from '../../basic';
import { ICardOpportunities } from '../CardOpportunities';
import { ICardTeam } from '../CardTeam';

export const CARD_OPPORTUNITIES: ICardOpportunities[] = [
  {
    srcBackgr: '../public/static/card-backgr1.jpeg',
    srcIcon: '../public/static/textbook.png',
    text: 'Electronic textbook with a database of words to study',
    id: IHeaderMenu.Textbook,
    route: ERoutes.textbook,
  },
  {
    srcBackgr: '../public/static/card-backgr2.jpeg',
    srcIcon: '../public/static/play.png',
    text: 'Mini-games for repeating the learned words',
    id: IHeaderMenu.Games,
    route: ERoutes.audiocall,
  },
  {
    srcBackgr: '../public/static/card-backgr3.jpeg',
    srcIcon: '../public/static/stat.png',
    text: 'Detailed statistics of your achievements',
    id: IHeaderMenu.Statistics,
    route: ERoutes.statistics,
  },
];

export const CARD_TEAM: ICardTeam[] = [
  {
    srcPerson: '../public/static/person.jpg',
    hrefPerson: 'https://github.com/fromarys',
    namePerson: 'Yevgenii Mineyev',
    donePerson: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    srcPerson: '../public/static/person.jpg',
    hrefPerson: 'https://github.com/OksanaSeregina',
    namePerson: 'Oksana Seregina',
    donePerson: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    srcPerson: '../public/static/person.jpg',
    hrefPerson: 'https://github.com/Andronio2',
    namePerson: 'Andrey Smirnov',
    donePerson: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];
