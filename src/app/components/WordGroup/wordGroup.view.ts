import { IWordGroupView, ITextbookView } from '../../basic';

export default class WordGroupView implements IWordGroupView {
  activeElement: HTMLElement;
  constructor(textbook: ITextbookView) {
    this.activeElement = textbook.words.node;
  }
}
