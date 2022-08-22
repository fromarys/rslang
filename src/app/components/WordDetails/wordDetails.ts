import { Backend, IWord } from '../../basic/common';
import WordDetailsView from './wordDetails.view';
/* eslint-disable */
export class WordDetails {
  view: WordDetailsView;
  audio;
  constructor(parentNode: HTMLElement, word: IWord) {
    parentNode.querySelector('.words__details')?.remove();
    this.view = new WordDetailsView(parentNode, word);
    this.audio = this.view.audioButton.node;
    this.audio.onclick = () => this.clickHandler(word);
  }

  clickHandler(word: IWord) {
    const icon = document.querySelector('.words__audio-icon');
    const audio = new Audio(`${Backend.host}/${word.audio}`);
    icon?.classList.add('active');
    audio.play();
    audio.onended = () => icon?.classList.remove('active');
  }
}
