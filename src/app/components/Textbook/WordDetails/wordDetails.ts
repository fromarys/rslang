import { activityClass, Api, baseUrl, IWord, IWordDetailsView } from '../../../basic';
import WordDetailsView from './wordDetails.view';

export class WordDetails {
  private readonly view: IWordDetailsView;
  private readonly audio: HTMLElement;
  difficultButton;
  studiedButton;
  constructor(parentNode: HTMLElement, wordInfo: IWord) {
    const currentDetails = parentNode.childNodes[2];
    currentDetails?.remove();
    this.view = new WordDetailsView(parentNode, wordInfo);
    this.audio = this.view.audioButton.node;
    this.audio.onclick = () => this.audioClickHandler(wordInfo);
    if (Api.isAuthorized()) {
      this.difficultButton = this.view.difficultButton?.node;
      this.studiedButton = this.view.studiedButton?.node;
      if (this.difficultButton) this.difficultButton.onclick = () => this.difficultClickHandler();
      if (this.studiedButton) this.studiedButton.onclick = () => this.studiedClickHandler();
    }
  }

  private audioClickHandler(wordInfo: IWord): void {
    const button: HTMLElement | null = this.view.audioButton.node;
    const icon = button.children[0];
    const audio: HTMLAudioElement = new Audio(`${baseUrl}/${wordInfo.audio}`);
    void audio.play();
    icon?.classList.add(activityClass);
    audio.onended = () => icon?.classList.remove(activityClass);
  }

  private difficultClickHandler() {
    console.log('hello');
  }

  private studiedClickHandler() {
    console.log('hello');
  }
}
