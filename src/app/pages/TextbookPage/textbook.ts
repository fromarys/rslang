import TextbookPageView from './textbook.view';
/* eslint-disable */
import { WordCard, WordDetails, WordGroup } from '../../components';
import WordGroupButton from '../../components/WordGroupCards/wordGroupButton';
import { groups } from '../../basic/common';

export class Textbook {
  textbook: TextbookPageView;
  group;
  textbookHeader;
  constructor() {
    const parentNode = document.querySelector('.root');
    this.textbook = new TextbookPageView(parentNode as HTMLElement);
    this.group = this.textbook.group.node;
    this.textbookHeader = this.textbook.textbookHeader.node;
  }

  public renderPage() {
    Object.entries(groups).forEach((item) => {
      new WordGroupButton(this.textbook, item);
    });
    const wordGroup = new WordGroup(this.textbook);
    wordGroup.renderCards();
  }
}
