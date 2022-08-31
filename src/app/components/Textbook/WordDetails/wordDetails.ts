/* eslint-disable */
import { activityClass, Api, baseUrl, DiffButtonState, IWord, IWordDetailsView, TextbookService } from '../../../basic';
import WordDetailsView from './wordDetails.view';
export class WordDetails {
  private readonly view: IWordDetailsView;
  private readonly audio: HTMLElement;
  difficultButton;
  studiedButton;
  constructor(private parentNode: HTMLElement, private wordInfo: IWord) {
    const currentDetails = this.parentNode.childNodes[2];
    currentDetails?.remove();
    this.view = new WordDetailsView(this.parentNode, this.wordInfo);
    this.audio = this.view.audioButton.node;
    this.audio.onclick = () => this.audioClickHandler(this.wordInfo);
    if (Api.isAuthorized()) {
      console.log(wordInfo);
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
    // const difficulty = {
    //   difficult: DiffButtonState.difficult
    // }
    // if (this.difficultButton) {
    //   const request = TextbookService.setWordState(this.wordInfo.id,)
    // }
    console.log('hello');
  }

  private studiedClickHandler() {
    console.log('hello');
  }
}
