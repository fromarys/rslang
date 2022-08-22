import { groups } from '../../basic/common';
import TextbookPageView from '../../pages/TextbookPage/textbook.view';
import { WordGroup } from '../WordGroup/wordGroup';
import WordGroupButtonView from './wordGroupButton.view';
/* eslint-disable */
export default class WordGroupButton  {
  view;
  parentNode;
  group;
  constructor(textbook: TextbookPageView, item: string[]) {
    this.group = Object.keys(groups);
    this.parentNode = textbook.group.node;
    this.view = new WordGroupButtonView(this.parentNode, item);
    this.view.group.node.onclick = (event) => this.clickHandler(textbook, event)
  }

  clickHandler(textbook: TextbookPageView, event: MouseEvent) {
    document.querySelector('.words__details')?.remove();
    document.querySelector('.words__container')?.remove();
    const group = new WordGroup(textbook);
    const button = (event.target as HTMLElement).closest('.group__card');
    const level = button?.querySelector('.group__card-right')?.innerHTML;
    if (level) {
      const index = this.group.indexOf(level);
      group.renderCards(index);
    }
  }
}