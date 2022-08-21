import Creator from '../../basic/common/creator';
import './textbook.scss';
/* eslint-disable */
export default class TextbookPageView {
  textbook;
  textbookHeader;
  category;
  words;
  wordsContainer;
  // wordsDetails;
  title;
  constructor(parentNode: HTMLElement | null) {
    this.textbook = new Creator(parentNode, 'div', 'textbook');
    this.textbookHeader = new Creator(this.textbook.node, 'div', 'textbook__header');
    this.category = new Creator(this.textbookHeader.node, 'div', 'category');
    this.words = new Creator(this.textbook.node, 'div', 'words');
    this.title = new Creator(this.words.node, 'h1', '', 'Слова');
    this.wordsContainer = new Creator(this.words.node, 'div', 'words__container');
    // this.wordsDetails = new Creator(this.words.node, 'div', 'words__details');
  }
}
