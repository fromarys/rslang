import { TextbookView } from './textbook.view';
import { WordGroup, WordGroupButton, WordPagination } from '../../components';
import { groups, ITextbook, maxWordsPages } from '../../basic';

export class Textbook implements ITextbook {
  parentNode;
  constructor(parentNode: HTMLElement) {
    this.parentNode = parentNode;
  }

  public render(): void {
    const textbook = new TextbookView(this.parentNode);
    this.renderGroupButtons(textbook);
    this.renderPagination(textbook);
    this.renderGroup(textbook);
  }

  private renderGroupButtons(textbook: TextbookView): void {
    Object.entries(groups).forEach((item) => {
      new WordGroupButton(textbook, item);
    });
  }

  private renderPagination(textbook: TextbookView): void {
    const pagination: WordPagination = new WordPagination(textbook);
    pagination.paginate(maxWordsPages);
  }

  private renderGroup(textbook: TextbookView): void {
    const wordGroup: WordGroup = new WordGroup(textbook);
    void wordGroup.renderCards();
  }
}
