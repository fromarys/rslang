import Creator from '../../basic/common/creator';
import TextbookPageView from '../../pages/TextbookPage/textbook.view';
import './wordPagination.scss';
/* eslint-disable */
export class WordPaginationView {
  pagination;
  ul
  // page;
  constructor(textbook: TextbookPageView) {
    this.pagination = new Creator(textbook.textbook.node, 'div', 'pagination');
    this.ul = new Creator(this.pagination.node, 'ul');
  }
  
  createPage(className: string, content: string) {
    const page = new Creator(this.ul.node, 'li', className, content);
    return page.node;
  }

  destroy(): void {
    this.pagination.node.remove();
  }
}