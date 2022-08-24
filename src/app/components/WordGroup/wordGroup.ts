import { activityClass, IWord, TextbookService, IWordGroup, ITextbookView, IWordGroupView } from '../../basic';
import { WordCard } from '../';
import WordGroupView from './wordGroup.view';

export class WordGroup implements IWordGroup {
  readonly view: IWordGroupView;
  readonly textbook: ITextbookView;
  constructor(textbook: ITextbookView) {
    this.textbook = textbook;
    this.view = new WordGroupView(textbook);
  }

  private async getCards(group: number, page: number): Promise<IWord[]> {
    const words: IWord[] = await TextbookService.getWords(group, page);
    words.forEach((item, index) => {
      let className = '';
      if (index === 0) className = activityClass;
      new WordCard(this.view, this.textbook, item, className);
    });
    return words;
  }

  public renderCards(group = 0, page = 0): void {
    const storagedPage: number = parseInt(localStorage.getItem('page') as string, 10) || 0;
    const storagedGroup: number = parseInt(localStorage.getItem('group') as string, 10) || 0;
    void this.getCards(group || storagedGroup, page || storagedPage);
  }
}
