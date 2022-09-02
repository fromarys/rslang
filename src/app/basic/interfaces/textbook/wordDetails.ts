import { ICreator } from '../interfaces';

export interface IWordDetailsView {
  readonly audioButton: ICreator<HTMLElement>;
  readonly difficultButton: ICreator<HTMLElement> | undefined;
  readonly studiedButton: ICreator<HTMLElement> | undefined;
}
