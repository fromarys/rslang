import {
  activityClass,
  IWord,
  IWordCard,
  IWordCardView,
  IWordDetails,
  IWordGroupView,
  ITextbookView,
} from '../../../basic';
import WordCardView from './wordCard.view';
import { WordDetails } from '../WordDetails/wordDetails';

export class WordCard implements IWordCard {
  readonly wordCard: IWordCardView;
  readonly wordInfo: IWord;
  readonly wordsWrapper: HTMLElement;
  readonly wordsContainer: HTMLElement;
  readonly wordDetails: IWordDetails | undefined;
  readonly wordGroup: IWordGroupView;
  constructor(wordGroup: IWordGroupView, textbook: ITextbookView, wordInfo: IWord, className: string) {
    this.wordGroup = wordGroup;
    this.wordsWrapper = textbook.words.node;
    this.wordsContainer = textbook.wordsContainer.node;
    this.wordInfo = wordInfo;
    this.wordCard = new WordCardView(this.wordsContainer, wordInfo, className);
    if (className) this.wordDetails = new WordDetails(this.wordsWrapper, wordInfo);
    if (className) this.wordGroup.activeElement = this.wordCard.node;
    this.wordCard.node.onclick = () => this.clickHandler();
  }

  private clickHandler() {
    this.wordGroup.activeElement.classList.remove(activityClass);
    this.wordGroup.activeElement = this.wordCard.node;
    this.wordGroup.activeElement.classList.add(activityClass);
    new WordDetails(this.wordsWrapper, this.wordInfo);
  }
}
