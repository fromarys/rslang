import Creator from '../../basic/common/creator';
import './textbook.scss';
/* eslint-disable */
export default class TextbookPageView {
  textbook;
  textbookHeader;
  group;
  words;
  title;
  constructor(parentNode: HTMLElement | null) {
    this.textbook = new Creator(parentNode, 'div', 'textbook');
    this.textbookHeader = new Creator(this.textbook.node, 'div', 'textbook__header');
    this.group = new Creator(this.textbookHeader.node, 'div', 'group');
    this.words = new Creator(this.textbook.node, 'div', 'words');
    this.title = new Creator(this.words.node, 'h1', '', 'Слова');
  }
}
