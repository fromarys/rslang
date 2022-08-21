import TextbookPageView from './textbook.view';
import { TextbookService } from '../../basic';
import { IWord } from '../../basic/common';
/* eslint-disable */
import { WordCard, WordDetails } from '../../components';

export class Textbook {
  textbook: TextbookPageView;
  wordsContainer: HTMLElement;
  selectedCard: number;
  wordsWrapper;
  constructor() {
    const parentNode = document.querySelector('.root');
    this.textbook = new TextbookPageView(parentNode as HTMLElement);
    this.wordsContainer = this.textbook.wordsContainer.node;
    this.wordsWrapper = this.textbook.words.node;
    this.selectedCard = 0;
  }

  public async getCards(group: number, page: number) {
    const words: IWord[] = await TextbookService.getWords(group, page);
    words.forEach((item) => {
      new WordCard(this.wordsContainer, this.wordsWrapper, item);
    });
    return words;
  }

  private setWordDetails(word: IWord) {
    new WordDetails(this.wordsWrapper, word);
  }

  public async renderPage() {
    const words = await this.getCards(0, 1);
    this.setWordDetails(words[this.selectedCard]);
  }
}
