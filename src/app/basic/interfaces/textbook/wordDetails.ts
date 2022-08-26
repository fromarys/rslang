import { ICreator } from '../interfaces';

export interface IWordDetails {
  readonly view: IWordDetailsView;
  readonly audio: HTMLElement;
}

export interface IWordDetailsView {
  readonly details: ICreator;
  readonly image: string;
  readonly headerContent: string;
  readonly information: ICreator<HTMLElement>;
  readonly descriptionContent: string;
  readonly description: ICreator<HTMLElement>;
  readonly header: ICreator;
  readonly audioButton: ICreator<HTMLElement>;
}
