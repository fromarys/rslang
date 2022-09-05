import { ERoutes, IHeaderMenu } from '../../basic';
import { ICardOpportunities } from '../CardOpportunities';
import { ICardTeam } from '../CardTeam';

export const CARD_OPPORTUNITIES: ICardOpportunities[] = [
  {
    srcBackgr: '../public/static/card-backgr1.jpeg',
    srcIcon: '../public/static/textbook.png',
    text: 'Electronic <mark>textbook</mark> with a database of words to study',
    id: IHeaderMenu.Textbook,
    route: ERoutes.textbook,
  },
  {
    srcBackgr: '../public/static/card-backgr2.jpeg',
    srcIcon: '../public/static/play.png',
    text: '<mark>Mini-games</mark> for repeating the learned words',
    id: IHeaderMenu.Games,
    route: ERoutes.games,
  },
  {
    srcBackgr: '../public/static/card-backgr3.jpeg',
    srcIcon: '../public/static/stat.png',
    text: 'Detailed <mark>statistics</mark> of your achievements',
    id: IHeaderMenu.Statistics,
    route: ERoutes.statistics,
  },
];

export const CARD_TEAM: ICardTeam[] = [
  {
    srcPerson: '../public/static/yevgenii-foto.jpg',
    hrefPerson: 'https://github.com/fromarys',
    namePerson: 'Yevgenii Mineyev',
    donePerson:
      '<mark>Team Lead</mark>Configured configs,created a MongoDB database, configured routing, created Textbook',
  },
  {
    srcPerson: '../public/static/oksana-foto.jpg',
    hrefPerson: 'https://github.com/OksanaSeregina',
    namePerson: 'Oksana Seregina',
    donePerson: 'Created the Main page, created the Games page, created Statistics',
  },
  {
    srcPerson: '../public/static/andrey-foto.jpg',
    hrefPerson: 'https://github.com/Andronio2',
    namePerson: 'Andrey Smirnov',
    donePerson: 'Created the Registration page, created API functions, created mini-games "Audio Call" and "Sprint"',
  },
];
