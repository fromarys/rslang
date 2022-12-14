import { TextbookView } from './textbook.view';
import { WordTab, WordGroup } from '../../components';
import { Api, difficult, groups, ITextbook } from '../../basic';
import WordGroupView from '../../components/Textbook/WordGroup/wordGroup.view';
import { GameLinks } from '../../components/';

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
    this.renderGameLinks(textbook);
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

  /**
   * Создает ссылки на игры в учебнике
   * @param textbook Инстанс класса страницы
   */
  private renderGameLinks(textbook: TextbookView): void {
    new GameLinks(textbook.textbook.node);
  }
}
