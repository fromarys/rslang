import { ICreator } from '../interfaces';

export interface IWordGroup {
  renderGroup(group: number, page: number, isGroup: boolean): void;
}

export interface IWordGroupView {
  activeElement: HTMLElement;
  wordsContainer: ICreator<HTMLElement>;
  details: ICreator<HTMLElement>;
}
