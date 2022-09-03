/* eslint-disable */
import { TextbookView } from './textbook.view';
import { WordTab, WordPagination, WordGroup } from '../../components';
import { Api, difficult, groups, ITextbook, maxWordsPages } from '../../basic';
import WordGroupView from '../../components/Textbook/WordGroup/wordGroup.view';
export class Textbook implements ITextbook {
  constructor(private parentNode: HTMLElement) {
    WordGroup.instance = undefined;
    WordGroupView.instance = undefined;
  }

  /**
   * Создает инстанс класса страницы
   */
  public render(): void {
    const textbook = new TextbookView(this.parentNode);
    this.renderGroupButtons(textbook);
  }

  /**
   * Создает переключатели групп
   * @param textbook Инстанс класса страницы
   */
  private renderGroupButtons(textbook: TextbookView): void {
    Object.entries(groups).forEach((item) => {
      new WordTab(textbook, item);
    });
    if (Api.isAuthorized()) {
      new WordTab(textbook, Object.entries(difficult)[0]);
    }
  }
}
