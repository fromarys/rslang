import { IWord } from '../../basic/common';
import WordCardView from './wordCard.view';
import { WordDetails } from '../WordDetails/wordDetails';

/* eslint-disable */
export class WordCard {
  wordCard;
  wordInfo;
  wordsWrapper;
  constructor(wordsContainer: HTMLElement | null, wordsWrapper: HTMLElement, wordInfo: IWord) {
    this.wordsWrapper = wordsWrapper;
    this.wordInfo = wordInfo;
    this.wordCard = new WordCardView(wordsContainer, wordInfo.word, wordInfo.wordTranslate);
    this.wordCard.node.onclick = () => new WordDetails(wordsWrapper, wordInfo);
  }
}
