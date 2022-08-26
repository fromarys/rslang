import { ITextbookView, ICreator } from '../../basic';
import { Creator } from '../../components';
import './textbook.scss';

export class TextbookView implements ITextbookView {
  public readonly textbook: ICreator<HTMLElement>;
  public readonly textbookHeader: ICreator<HTMLElement>;
  public readonly group: ICreator<HTMLElement>;
  public readonly words: ICreator<HTMLElement>;
  public readonly title: ICreator<HTMLElement>;
  public readonly wordsContainer: ICreator<HTMLElement>;
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
