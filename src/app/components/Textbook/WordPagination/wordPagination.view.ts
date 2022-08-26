import { Creator } from '../../Creator';
import { TextbookView } from '../../../pages';
import './wordPagination.scss';

export class WordPaginationView {
  private readonly pagination: Creator<HTMLElement>;
  private readonly list: Creator<HTMLElement>;
  constructor(textbook: TextbookView) {
    this.pagination = new Creator(textbook.textbook.node, 'div', 'pagination');
    this.list = new Creator(this.pagination.node, 'ul');
  }

  public createPage(className: string, content: string): HTMLElement {
    const page: Creator<HTMLElement> = new Creator(this.list.node, 'li', className, content);
    return page.node;
  }

  public destroy(): void {
    this.pagination.node.remove();
  }
}
