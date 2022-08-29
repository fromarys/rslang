import { ICreator } from '../interfaces';

export interface ITextbook {
  render(): void;
}

export interface ITextbookView {
  readonly textbook: ICreator<HTMLElement>;
  readonly group: ICreator<HTMLElement>;
  readonly words: ICreator<HTMLElement>;
  readonly wordsContainer: ICreator<HTMLElement>;
  activeGroup: HTMLElement;
}
