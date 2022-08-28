import { baseUrl, IWord, IWordDetails, IWordDetailsView } from '../../../basic';
import WordDetailsView from './wordDetails.view';

export class WordDetails implements IWordDetails {
  readonly view: IWordDetailsView;
  readonly audio: HTMLElement;
  constructor(parentNode: HTMLElement, wordInfo: IWord) {
    const currentDetails = parentNode.childNodes[2];
    currentDetails?.remove();
    this.view = new WordDetailsView(parentNode, wordInfo);
    this.audio = this.view.audioButton.node;
    this.audio.onclick = () => this.clickHandler(wordInfo);
  }

  private clickHandler(wordInfo: IWord): void {
    const button: HTMLElement | null = this.view.audioButton.node;
    const icon = button.children[0];
    const audio: HTMLAudioElement = new Audio(`${baseUrl}/${wordInfo.audio}`);
    icon?.classList.add('active');
    void audio.play();
    audio.onended = () => icon?.classList.remove('active');
  }
}
