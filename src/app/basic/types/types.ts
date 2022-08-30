import { Textbook } from '../../pages';
import { AudioCall } from '../../pages/AudioCallPage';

export type RouteClass = typeof Textbook | typeof AudioCall;
export type RouteInstance = Textbook | AudioCall;
export type TRoutes = Record<string, RouteClass>;
