import { Creator, ITextbookView } from '../../basic';
import './textbook.scss';

export class TextbookView implements ITextbookView {
  public readonly textbook: Creator<HTMLElement>;
  public readonly textbookHeader: Creator<HTMLElement>;
  public readonly group: Creator<HTMLElement>;
  public readonly words: Creator<HTMLElement>;
  public readonly title: Creator<HTMLElement>;
  public readonly wordsContainer: Creator<HTMLElement>;
  public activeGroup: HTMLElement;
  constructor(parentNode: HTMLElement | null) {
    this.textbook = new Creator(parentNode, 'div', 'textbook');
    this.textbookHeader = new Creator(this.textbook.node, 'div', 'textbook__header');
    this.group = new Creator(this.textbookHeader.node, 'div', 'group');
    this.words = new Creator(this.textbook.node, 'div', 'words');
    this.title = new Creator(this.words.node, 'h1', 'words__title', 'Слова');
    this.wordsContainer = new Creator(this.words.node, 'div', 'words__container');
    this.activeGroup = this.title.node;
  }
}
