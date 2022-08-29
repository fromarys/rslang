import { activityClass, baseUrl, IWord, IWordDetailsView } from '../../../basic';
import WordDetailsView from './wordDetails.view';

export class WordDetails {
  private readonly view: IWordDetailsView;
  private readonly audio: HTMLElement;
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
    void audio.play();
    icon?.classList.add(activityClass);
    audio.onended = () => icon?.classList.remove(activityClass);
  }
}
