import { TextbookView } from './textbook.view';
import { WordGroup, WordGroupButton, WordPagination } from '../../components';
import { groups, ITextbook, maxWordsPages } from '../../basic';

export class Textbook implements ITextbook {
  constructor(private parentNode: HTMLElement) {}

  /**
   * Создает инстанс класса страницы
   */
  public render(): void {
    const textbook = new TextbookView(this.parentNode);
    this.renderGroupButtons(textbook);
    this.renderPagination(textbook);
    this.renderGroup(textbook);
  }

  /**
   * Создает переключатели групп
   * @param textbook Инстанс класса страницы
   */
  private renderGroupButtons(textbook: TextbookView): void {
    Object.entries(groups).forEach((item) => {
      new WordGroupButton(textbook, item);
    });
  }

  /**
   * Создает пагинацию
   * @param textbook Инстанс класса страницы
   */
  private renderPagination(textbook: TextbookView): void {
    const pagination: WordPagination = new WordPagination(textbook);
    pagination.paginate(maxWordsPages);
  }

  /**
   * Создает группу карточек
   * @param textbook Инстанс класса страницы
   */
  private renderGroup(textbook: TextbookView): void {
    const wordGroup: WordGroup = new WordGroup(textbook);
    void wordGroup.renderCards();
  }
}
