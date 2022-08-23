/* eslint-disable */
import TextbookPageView from '../../pages/TextbookPage/textbook.view';
import { WordGroup } from '../WordGroup';
import { WordPaginationView } from './wordPagination.view';
export class WordPagination {
  textbook;
  constructor(textbook: TextbookPageView) {
    this.textbook = textbook;
  }

  paginate(totalPages: number, page?: number) {
    const currentPage = page ? page : JSON.parse(localStorage.getItem('page') as string);
    const pagination = new WordPaginationView(this.textbook);
    if (currentPage > 1) {
      this.showPreviousButton(pagination, totalPages, currentPage);
    }
    if(currentPage > 2) {
      this.showFirstItem(pagination, totalPages, currentPage);
    }
    this.showActiveItem(pagination, totalPages, currentPage);
    if(currentPage < totalPages - 1) {
      this.showLastItem(pagination, totalPages, currentPage);
    }
    if (currentPage < totalPages) {
      this.showNextButton(pagination, totalPages, currentPage);
    }
  }

  clickHandler(pagination: WordPaginationView,totalPages: number, page: number) {
    document.querySelector('.words__details')?.remove();
    document.querySelector('.words__container')?.remove();
    pagination.destroy();
    this.paginate(totalPages, page);
    const wordGroup = new WordGroup(this.textbook);
    wordGroup.renderCards(undefined, page);
    localStorage.setItem('page', JSON.stringify(page));
  }

  showFirstItem(pagination: WordPaginationView,totalPages: number, page: number) {
    const elem = pagination.createPage('first number', `<span>1</span>`);
    elem.onclick = () => this.clickHandler(pagination, totalPages, 1);
    if (page > 3) {
      pagination.createPage('dots', '<span>...</span>');
    }
  }

  showPreviousButton(pagination: WordPaginationView,totalPages: number, page: number) {
    const elem = pagination.createPage('pagination__button prev', 'Пред.');
    elem.onclick = () => this.clickHandler(pagination, totalPages, page - 1);
  }

  showNextButton(pagination: WordPaginationView,totalPages: number, page: number) {
    const elem = pagination.createPage('pagination__button next', `<span>След.</span>`);
    elem.onclick = () => this.clickHandler(pagination, totalPages, page + 1);
  }

  showActiveItem(pagination: WordPaginationView,totalPages: number, page: number) {
    let beforePage = page - 1;
    let afterPage = page + 1;
    let active;
    if (page == totalPages) {
      beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
      beforePage = beforePage - 1;
    }

    if (page == 1) {
      afterPage = afterPage + 2;
    } else if (page == 2) {
      afterPage  = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        continue;
      }
      if (plength == 0) {
        plength = plength + 1;
      }
      if(page == plength) {
        active = "active";
      } else {
        active = "";
      }
      const elem = pagination.createPage(`number ${active}`, `<span>${plength}</span>`);
      elem.onclick = () => this.clickHandler(pagination, totalPages, plength);
    }
  }

  showLastItem(pagination: WordPaginationView,totalPages: number, page: number) {
    if(page < totalPages - 2) {
      pagination.createPage('dots', '<span>...</span>');
    }
    const elem = pagination.createPage('last number', `<span>${totalPages}</span>`);
    elem.onclick = () => this.clickHandler(pagination, totalPages, totalPages);
  }
}