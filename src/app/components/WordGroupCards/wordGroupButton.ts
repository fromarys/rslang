import TextbookPageView from '../../pages/TextbookPage/textbook.view';
import { WordGroup } from '../WordGroup/wordGroup';
import WordGroupButtonView from './wordGroupButton.view';
/* eslint-disable */
export default class WordGroupButton  {
  view;
  parentNode;
  constructor(textbook: TextbookPageView, item: string[]) {
    this.parentNode = textbook.group.node;
    this.view = new WordGroupButtonView(this.parentNode, item);
    this.view.group.node.addEventListener('click', async () => {
      document.querySelector('.words__details')?.remove();
      document.querySelector('.words__container')?.remove();
      const group = new WordGroup(textbook);
      await group.renderCards();
    })
  }
}