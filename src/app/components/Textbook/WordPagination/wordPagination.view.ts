import { Creator } from '../../Creator';
import './wordPagination.scss';
import { ITextbookView } from '../../../basic';

export class WordPaginationView {
  private readonly pagination: HTMLElement;
  private readonly list: Creator<HTMLElement>;
  constructor(private textbook: ITextbookView) {
    this.pagination = this.textbook.pagination.node;
    this.list = new Creator(this.pagination, 'ul');
  }

  public createPage(className: string, content: string): HTMLElement {
    const page: Creator<HTMLElement> = new Creator(this.list.node, 'li', className, content);
    return page.node;
  }
}
