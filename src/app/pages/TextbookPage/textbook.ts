/* eslint-disable */
import { TextbookView } from './textbook.view';
import { WordTab, WordPagination } from '../../components';
import { Api, difficult, groups, ITextbook, maxWordsPages } from '../../basic';
export class Textbook implements ITextbook {
  constructor(private parentNode: HTMLElement) {}

  /**
   * Создает инстанс класса страницы
   */
  public render(): void {
    const textbook = new TextbookView(this.parentNode);
    this.renderGroupButtons(textbook);
    this.renderPagination(textbook);
  }

  /**
   * Создает переключатели групп
   * @param textbook Инстанс класса страницы
   */
  private renderGroupButtons(textbook: TextbookView): void {
    Object.entries(groups).forEach((item) => {
      new WordTab(textbook, item);
    });
    if (!Api.isAuthorized()) {
      new WordTab(textbook, Object.entries(difficult)[0]);
    }
  }

  /**
   * Создает пагинацию
   * @param textbook Инстанс класса страницы
   */
  private renderPagination(textbook: TextbookView): void {
    const pagination: WordPagination = new WordPagination(textbook);
    pagination.paginate(maxWordsPages);
  }
}
