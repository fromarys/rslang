import { ICreator } from '../interfaces';

export interface ITextbook {
  readonly textbook: ITextbookView;
  renderPage(): void;
}

export interface ITextbookView {
  readonly textbook: ICreator<HTMLElement>;
  readonly textbookHeader: ICreator<HTMLElement>;
  readonly group: ICreator<HTMLElement>;
  readonly words: ICreator<HTMLElement>;
  readonly title: ICreator<HTMLElement>;
  readonly wordsContainer: ICreator<HTMLElement>;
  activeGroup: HTMLElement;
}
