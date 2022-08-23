import { IWord } from '../../basic/common';
import { WordCard, WordDetails } from '../WordCard';
import { TextbookService } from '../../basic';
import TextbookPageView from '../../pages/TextbookPage/textbook.view';
import WordGroupView from './wordGroup.view';

/* eslint-disable */
export class WordGroup {
  parentNode;
  wordsContainer;
  wordsWrapper;
  selectedCard;
  view: WordGroupView;
  constructor(textbook: TextbookPageView) {
    this.parentNode = textbook.group.node;
    this.view = new WordGroupView(textbook);
    this.wordsContainer = this.view.words.node;
    this.wordsWrapper = textbook.words.node;
    this.selectedCard = 0;
  }

  public async getCards(group: number, page: number) {
    const words: IWord[] = await TextbookService.getWords(group, page);
    words.forEach((item) => {
      new WordCard(this.wordsContainer, this.wordsWrapper, item);
    });
    return words;
  }

  public setWordDetails(word: IWord) {
    new WordDetails(this.wordsWrapper, word);
  }

  public async renderCards(group: number = 0, page: number = 0) {
    const storagedPage = parseInt(localStorage.getItem('page') as string, 10);
    const storagedGroup = parseInt(localStorage.getItem('group') as string, 10);
    const cards = await this.getCards(group || storagedGroup, page || storagedPage);
    this.setWordDetails(cards[this.selectedCard]);
  }
}