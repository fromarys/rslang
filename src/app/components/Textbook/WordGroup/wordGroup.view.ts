import { IWordGroupView, ITextbookView } from '../../../basic';
import { Creator } from '../../Creator';

export default class WordGroupView implements IWordGroupView {
  public activeElement: HTMLElement;
  public readonly wordsContainer: Creator<HTMLElement>;
  public readonly details: Creator;
  static instance: WordGroupView | undefined;
  constructor(private textbook: ITextbookView) {
    this.activeElement = textbook.words.node;
    this.wordsContainer = new Creator(this.textbook.words.node, 'div', 'words__container');
    this.details = new Creator(this.textbook.words.node, 'div', 'words__details');
    if (!WordGroupView.instance) {
      WordGroupView.instance = this;
    }
    return WordGroupView.instance;
  }
}
