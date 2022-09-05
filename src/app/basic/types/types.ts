import { Games, Main } from '../../components';
import { Textbook } from '../../pages';
import { AudioCall } from '../../pages/AudioCallPage';
import { AuthPage } from '../../pages/AuthPage';
import { Sprint } from '../../pages/SprintPage';
import { Statistics } from '../../pages/StatisticsPage';

export type RouteClass =
  | typeof Textbook
  | typeof AudioCall
  | typeof Main
  | typeof AuthPage
  | typeof Statistics
  | typeof Games
  | typeof Sprint;
export type RouteInstance = Textbook | AudioCall | Main | AuthPage | Statistics | Games | Sprint;
export type TRoutes = Record<string, RouteClass>;
