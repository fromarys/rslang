import { TextbookView } from '../../pages';
import { WordGroup } from '../';
import { WordPaginationView } from './wordPagination.view';

export class WordPagination {
  private readonly textbook: TextbookView;
  constructor(textbook: TextbookView) {
    this.textbook = textbook;
  }

  public paginate(totalPages: number, page?: number): void {
    const currentPage: number = page || (JSON.parse(localStorage.getItem('page') as string) as number | undefined) || 1;
    const pagination: WordPaginationView = new WordPaginationView(this.textbook);
    if (currentPage > 1) {
      this.showPreviousButton(pagination, totalPages, currentPage);
    }
    if (currentPage > 2) {
      this.showFirstItem(pagination, totalPages, currentPage);
    }
    this.showActiveItem(pagination, totalPages, currentPage);
    if (currentPage < totalPages - 1) {
      this.showLastItem(pagination, totalPages, currentPage);
    }
    if (currentPage < totalPages) {
      this.showNextButton(pagination, totalPages, currentPage);
    }
  }

  private clickHandler(pagination: WordPaginationView, totalPages: number, page: number): void {
    const serverPagination: number = page - 1;
    document.querySelector('.words__details')?.remove();
    document.querySelector('.words__container')?.remove();
    pagination.destroy();
    this.paginate(totalPages, page);
    const wordGroup: WordGroup = new WordGroup(this.textbook);
    localStorage.setItem('page', JSON.stringify(serverPagination));
    void wordGroup.renderCards(undefined, serverPagination);
  }

  private showFirstItem(pagination: WordPaginationView, totalPages: number, page: number): void {
    const element: HTMLElement = pagination.createPage('first number', `<span>1</span>`);
    element.onclick = () => this.clickHandler(pagination, totalPages, 1);
    if (page > 3) {
      pagination.createPage('dots', '<span>...</span>');
    }
  }

  private showPreviousButton(pagination: WordPaginationView, totalPages: number, page: number): void {
    const element: HTMLElement = pagination.createPage('pagination__button prev', 'Пред.');
    element.onclick = () => this.clickHandler(pagination, totalPages, page - 1);
  }

  private showNextButton(pagination: WordPaginationView, totalPages: number, page: number): void {
    const element: HTMLElement = pagination.createPage('pagination__button next', `<span>След.</span>`);
    element.onclick = () => this.clickHandler(pagination, totalPages, page + 1);
  }

  private showActiveItem(pagination: WordPaginationView, totalPages: number, page: number): void {
    let beforePage: number = page - 1;
    let afterPage: number = page + 1;
    let active;
    if (page == totalPages) {
      beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
      beforePage = beforePage - 1;
    }

    if (page == 1) {
      afterPage = afterPage + 2;
    } else if (page == 2) {
      afterPage = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        continue;
      }
      if (plength == 0) {
        plength = plength + 1;
      }
      if (page == plength) {
        active = 'active';
      } else {
        active = '';
      }
      const element: HTMLElement = pagination.createPage(`number ${active}`, `<span>${plength}</span>`);
      element.onclick = () => this.clickHandler(pagination, totalPages, plength);
    }
  }

  private showLastItem(pagination: WordPaginationView, totalPages: number, page: number): void {
    if (page < totalPages - 2) {
      pagination.createPage('dots', '<span>...</span>');
    }
    const element: HTMLElement = pagination.createPage('last number', `<span>${totalPages}</span>`);
    element.onclick = () => this.clickHandler(pagination, totalPages, totalPages);
  }
}
