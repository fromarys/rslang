import { activityClass, IWord, IWordCardView, IWordGroupView, ITextbookView } from '../../../basic';
import WordCardView from './wordCard.view';
import { WordDetails } from '../WordDetails/wordDetails';
export class WordCard {
  private readonly wordCard: IWordCardView;
  private readonly wordsContainer: HTMLElement;
  private readonly difficulty: string | undefined;
  constructor(
    private wordGroup: IWordGroupView,
    private textbook: ITextbookView,
    private wordInfo: IWord,
    private className: string
  ) {
    this.wordsContainer = this.wordGroup.wordsContainer.node;
    this.difficulty = wordInfo.userWord?.difficulty;
    this.wordCard = new WordCardView(this.wordsContainer, wordInfo, className);
    if (this.difficulty) this.wordCard.node.classList.add(this.difficulty);
    if (this.className) this.wordGroup.activeElement = this.wordCard.node;
    if (this.className) this.renderDetails();
    this.wordCard.node.onclick = () => this.clickHandler();
  }

  private clickHandler() {
    this.wordGroup.activeElement.classList.remove(activityClass);
    this.wordGroup.activeElement = this.wordCard.node;
    this.wordGroup.activeElement.classList.add(activityClass);
    this.renderDetails();
  }

  renderDetails() {
    const wordsWrapper = this.wordGroup.details.node;
    new WordDetails(this.textbook, wordsWrapper, this.wordInfo);
  }
}
