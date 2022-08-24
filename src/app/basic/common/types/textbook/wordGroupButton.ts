import { ITextbookView } from './textbook';
import { ICreator } from '../creator';

export interface IWordGroupButton {
  readonly view: IWordGroupButtonView;
  readonly parentNode: HTMLElement;
  readonly groupList: string[];
  readonly textbook: ITextbookView;
  groupClassName: string;
  group: HTMLElement;
}

export interface IWordGroupButtonView {
  readonly group: ICreator;
  readonly left: ICreator;
  readonly right: ICreator;
}
