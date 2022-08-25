import { ITextbookView } from './textbook';

export interface IGroups {
  [key: string]: string;
}

export interface IWordGroup {
  readonly view: IWordGroupView;
  readonly textbook: ITextbookView;
  renderCards(group: number, page: number): void;
}

export interface IWordGroupView {
  activeElement: HTMLElement;
}
