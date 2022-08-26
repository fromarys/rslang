import { TextbookView } from './textbook.view';
import { WordGroup, WordGroupButton, WordPagination } from '../../components';
import { groups, maxWordsPages, ITextbook } from '../../basic';

export class Textbook implements ITextbook {
  public readonly textbook: TextbookView;
  constructor() {
    const parentNode = document.querySelector('.root');
    this.textbook = new TextbookView(parentNode as HTMLElement);
  }

  public renderPage(): void {
    Object.entries(groups).forEach((item) => {
      new WordGroupButton(this.textbook, item);
    });
    const pagination: WordPagination = new WordPagination(this.textbook);
    pagination.paginate(maxWordsPages);
    const wordGroup: WordGroup = new WordGroup(this.textbook);
    void wordGroup.renderCards();
  }
}
