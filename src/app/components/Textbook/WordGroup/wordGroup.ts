import {
  activityClass,
  IWord,
  TextbookService,
  IWordGroup,
  ITextbookView,
  IWordGroupView,
  EStorage,
  EUserWordStatus,
} from '../../../basic';
import { WordCard, WordPagination } from '../..';
import WordGroupView from './wordGroup.view';

export class WordGroup implements IWordGroup {
  private readonly view: IWordGroupView | undefined;
  public static instance: WordGroup | undefined;
  constructor(private textbook: ITextbookView) {
    if (!WordGroupView.instance) {
      this.view = new WordGroupView(this.textbook);
    }
    if (!WordGroup.instance) {
      WordGroup.instance = this;
    }
    return WordGroup.instance;
  }

  private async getCards(group: string, page: string, isGroup: boolean): Promise<IWord[] | void> {
    const words: IWord[] | void = await TextbookService.getWords(group, page, isGroup);
    this.clearContainers();
    if (words) {
      words.forEach((item, index) => {
        let className = '';
        if (index === 0) className = activityClass;
        this.renderCard(item, className);
      });
      const allStudied = words.every(
        (item) => item.userWord?.difficulty !== EUserWordStatus.normal && item.userWord?.difficulty !== undefined
      );
      allStudied ? this.disableLinks() : this.enableLinks();
    }
    if (isGroup) this.renderPagination();
    return words;
  }

  public renderGroup(group?: number, page?: number, isGroup = true): void {
    //TODO необходимо реализовать сохранение группы "Сложные слова" при перезагрузке
    //TODO можно использовать 7 номер для группы
    let storagedPage: number = Number(localStorage.getItem(EStorage.page)) || 0;
    let storagedGroup: number = Number(localStorage.getItem(EStorage.group)) || 0;
    if (page) storagedPage = page;
    if (group) storagedGroup = group;
    void this.getCards(storagedGroup.toString(), storagedPage.toString(), isGroup);
  }

  private renderPagination(): void {
    const pagination: WordPagination = new WordPagination(this.textbook);
    pagination.paginate();
  }

  private renderCard(item: IWord, className: string): void {
    if (this.view) new WordCard(this.view, this.textbook, item, className);
  }

  private clearContainers(): void {
    if (this.view) {
      this.view.wordsContainer.node.innerHTML = '';
      this.view.details.node.innerHTML = '';
      this.textbook.pagination.node.innerHTML = '';
    }
  }

  private disableLinks(): void {
    const event = new Event('DisableLinks', { bubbles: true });
    document.dispatchEvent(event);
  }

  private enableLinks(): void {
    const event = new Event('EnableLinks', { bubbles: true });
    document.dispatchEvent(event);
  }
}
