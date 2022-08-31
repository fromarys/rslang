import { activityClass, IWord, TextbookService, IWordGroup, ITextbookView, IWordGroupView } from '../../../basic';
import { WordCard } from '../..';
import WordGroupView from './wordGroup.view';

export class WordGroup implements IWordGroup {
  private readonly view: IWordGroupView;
  constructor(private textbook: ITextbookView, private isGroup: boolean) {
    this.view = new WordGroupView(this.textbook);
  }

  private async getCards(group: string, page: string): Promise<IWord[] | void> {
    const words: IWord[] | void = await TextbookService.getWords(group, page, this.isGroup);
    if (words) {
      this.textbook.wordsContainer.node.innerHTML = '';
      words.forEach((item, index) => {
        let className = '';
        if (index === 0) className = activityClass;
        new WordCard(this.view, this.textbook, item, className);
      });
    }
    return words;
  }

  public renderCards(group?: number, page?: number): void {
    let storagedPage: number = parseInt(localStorage.getItem('page') as string, 10) || 0;
    let storagedGroup: number = parseInt(localStorage.getItem('group') as string, 10) || 0;
    if (page) storagedPage = page;
    if (group) storagedGroup = group;
    void this.getCards(storagedGroup.toString(), storagedPage.toString());
  }
}
