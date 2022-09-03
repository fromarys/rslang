import { ITextbookView, ICreator } from '../../basic';
import { Creator } from '../../components';
import './textbook.scss';

export class TextbookView implements ITextbookView {
  private readonly textbookHeader: ICreator<HTMLElement>;
  private readonly title: ICreator<HTMLElement>;
  public readonly textbook: ICreator<HTMLElement>;
  public readonly group: ICreator<HTMLElement>;
  public readonly words: ICreator<HTMLElement>;
  public pagination: ICreator<HTMLElement>;
  public activeGroup: HTMLElement;
  constructor(parentNode: HTMLElement | null) {
    this.textbook = new Creator(parentNode, 'div', 'textbook');
    this.textbookHeader = new Creator(this.textbook.node, 'div', 'textbook__header');
    this.group = new Creator(this.textbookHeader.node, 'div', 'group');
    this.title = new Creator(this.textbook.node, 'h1', 'textbook__title', 'Слова');
    this.words = new Creator(this.textbook.node, 'div', 'words');
    this.pagination = new Creator(this.textbook.node, 'div', 'pagination');
    this.activeGroup = this.title.node;
  }
}
