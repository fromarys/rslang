import { IWord } from '../../basic/common';
import WordDetailsView from './wordDetails.view';
/* eslint-disable */
export class WordDetails {
  view: WordDetailsView;
  constructor(parentNode: HTMLElement, word: IWord) {
    this.view = new WordDetailsView(parentNode, word);
  }

  destroy() {
    this.view.details.destroy();
  }
}
