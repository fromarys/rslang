import { Main } from '../../components';
import { Textbook } from '../../pages';
import { AudioCall } from '../../pages/AudioCallPage';

export type RouteClass = typeof Textbook | typeof AudioCall | typeof Main;
export type RouteInstance = Textbook | AudioCall | Main;
export type TRoutes = Record<string, RouteClass>;
