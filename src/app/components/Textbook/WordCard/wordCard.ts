/* eslint-disable */
import { activityClass, IWord, IUserWord, IWordCardView, IWordGroupView, ITextbookView, EUserWordStatus } from '../../../basic';
import WordCardView from './wordCard.view';
import { WordDetails } from '../WordDetails/wordDetails';
export class WordCard {
  private readonly wordCard: IWordCardView;
  private readonly wordsWrapper: HTMLElement;
  private readonly wordsContainer: HTMLElement;
  private readonly wordDetails: WordDetails | undefined;
  private readonly difficulty: string | undefined;
  constructor(private wordGroup: IWordGroupView, textbook: ITextbookView, private wordInfo: IWord, className: string) {
    this.wordsWrapper = textbook.words.node;
    this.wordsContainer = textbook.wordsContainer.node;
    this.difficulty = wordInfo.userWord?.difficulty;
    this.wordCard = new WordCardView(this.wordsContainer, wordInfo, className);
    if (this.difficulty) this.wordCard.node.classList.add(this.difficulty);
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
