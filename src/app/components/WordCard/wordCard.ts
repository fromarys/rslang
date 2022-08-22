import { IWord } from '../../basic/common';
import WordCardView from './wordCard.view';
import { WordDetails } from '../WordDetails/wordDetails';

/* eslint-disable */
export class WordCard {
  card;
  constructor(wordsContainer: HTMLElement | null, wordsWrapper: HTMLElement, card: IWord) {
    this.card = new WordCardView(wordsContainer, card.word, card.wordTranslate);
    this.card.node.onclick = () => new WordDetails(wordsWrapper, card);
  }
}
