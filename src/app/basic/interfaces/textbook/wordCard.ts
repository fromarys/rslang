import { ICreator } from '../creator';
import { IWord, IWordDetails, IWordGroupView } from '.';
export interface IWordCard {
  readonly wordCard: IWordCardView;
  readonly wordInfo: IWord;
  readonly wordsWrapper: HTMLElement;
  readonly wordsContainer: HTMLElement;
  readonly wordDetails: IWordDetails | undefined;
  readonly wordGroup: IWordGroupView;
}

export type IWordCardView = ICreator;
