import { WordGroup } from '../..';
import { WordPaginationView } from './wordPagination.view';
import { activityClass, ITextbookView, maxWordsPages } from '../../../basic';

export class WordPagination {
  private readonly wordsContainer: HTMLElement;
  constructor(private textbook: ITextbookView) {
    this.wordsContainer = this.textbook.words.node;
  }

  /**
   * Создает пагинацию, выполняет перемещение по страницам
   * @param totalPages максимальное количество страниц
   * @param page номер страницы
   */
  public paginate(totalPages: number = maxWordsPages, page?: number): void {
    const currentPage: number = page || Number(localStorage.getItem('page')) + 1 || 1;
    this.destroyPagination();
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

  /**
   * Обрабатывает клик по номеру страницы
   * @param totalPages максимальное количество страниц
   * @param page номер страницы
   */
  private clickHandler(totalPages: number, page: number): void {
    const serverPagination: number = page - 1;
    this.paginate(totalPages, page);
    this.renderWordGroup(undefined, serverPagination);
  }

  /**
   * Отображает первый элемент пагинации, назначет обработчик события click
   * @param pagination инстанс класса WordPaginationView
   * @param totalPages максимально количество страниц
   * @param page номер страницы
   */
  private showFirstItem(pagination: WordPaginationView, totalPages: number, page: number): void {
    const element: HTMLElement = pagination.createPage('first number', `<span>1</span>`);
    element.onclick = () => this.clickHandler(totalPages, 1);
    if (page > 3) {
      pagination.createPage('dots', '<span>...</span>');
    }
  }

  /**
   * Отображает кнопку для перемещения по страницам назад, назначет обработчик события click
   * @param pagination нстанс класса WordPaginationView
   * @param totalPages максимально количество страниц
   * @param page номер страницы
   */
  private showPreviousButton(pagination: WordPaginationView, totalPages: number, page: number): void {
    const element: HTMLElement = pagination.createPage('pagination__button prev', 'Previous');
    element.onclick = () => this.clickHandler(totalPages, page - 1);
  }

  /**
   * Отображает кнопку для перемещения по страницам вперёд, назначет обработчик события click
   * @param pagination нстанс класса WordPaginationView
   * @param totalPages максимально количество страниц
   * @param page номер страницы
   */
  private showNextButton(pagination: WordPaginationView, totalPages: number, page: number): void {
    const element: HTMLElement = pagination.createPage('pagination__button next', `<span>Next</span>`);
    element.onclick = () => this.clickHandler(totalPages, page + 1);
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
        active = activityClass;
      } else {
        active = '';
      }
      const element: HTMLElement = pagination.createPage(`number ${active}`, `<span>${plength}</span>`);
      element.onclick = () => this.clickHandler(totalPages, plength);
    }
  }

  /**
   * Отображает последний элемент пагинации, назначет обработчик события click
   * @param pagination инстанс класса WordPaginationView
   * @param totalPages максимально количество страниц
   * @param page номер страницы
   */
  private showLastItem(pagination: WordPaginationView, totalPages: number, page: number): void {
    if (page < totalPages - 2) {
      pagination.createPage('dots', '<span>...</span>');
    }
    const element: HTMLElement = pagination.createPage('last number', `<span>${totalPages}</span>`);
    element.onclick = () => this.clickHandler(totalPages, totalPages);
  }

  /**
   * Обновляет группу при пагинации
   * @param group номер группы
   * @param page номер страницы
   */
  private renderWordGroup(group: number | undefined, page: number) {
    const wordGroup: WordGroup = new WordGroup(this.textbook);
    localStorage.setItem('page', JSON.stringify(page));
    void wordGroup.renderGroup(group, page);
  }

  /**
   * Очищает родительский блок для пагинации
   */
  private destroyPagination(): void {
    this.textbook.pagination.node.innerHTML = '';
  }
}
