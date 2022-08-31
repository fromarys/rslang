import { Main } from '../../components';
import { Textbook } from '../../pages';
import { AudioCall } from '../../pages/AudioCallPage';
import { AuthPage } from '../../pages/AuthPage';

export type RouteClass = typeof Textbook | typeof AudioCall | typeof Main | typeof AuthPage;
export type RouteInstance = Textbook | AudioCall | Main | AuthPage;
export type TRoutes = Record<string, RouteClass>;
