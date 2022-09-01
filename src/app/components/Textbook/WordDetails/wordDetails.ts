/* eslint-disable */
import { activityClass, Api, baseUrl, DiffButtonState, EUserWordStatus, IUserWord, IWord, IWordDetailsView, StudButtonState, TextbookService, USER_WORD_TEMPLATE } from '../../../basic';
import WordDetailsView from './wordDetails.view';
export class WordDetails {
  private readonly view: IWordDetailsView;
  private readonly audio: HTMLElement;
  static instance: WordDetails;
  userWord: IUserWord | undefined;
  constructor(private parentNode: HTMLElement, private wordInfo: IWord) {
    const currentDetails = this.parentNode.childNodes[2];
    currentDetails?.remove();
    this.userWord = wordInfo.userWord;
    this.view = new WordDetailsView(this.parentNode, this.wordInfo);
    this.audio = this.view.audioButton.node;
    this.audio.onclick = () => this.audioClickHandler(this.wordInfo);
    if (Api.isAuthorized()) {
      this.setButtons();
    }
    if (!WordDetails.instance) {
      WordDetails.instance = this;
    }
    return WordDetails.instance;
  }

  private audioClickHandler(wordInfo: IWord): void {
    const button: HTMLElement | null = this.view.audioButton.node;
    const icon = button.children[0];
    const audio: HTMLAudioElement = new Audio(`${baseUrl}/${wordInfo.audio}`);
    void audio.play();
    icon?.classList.add(activityClass);
    audio.onended = () => icon?.classList.remove(activityClass);
  }

  private diffButtonClickHandler(state: EUserWordStatus | undefined, button: HTMLElement) {
    if (state === EUserWordStatus.normal || state == EUserWordStatus.studied) {
      const body = this.setDifficulty(EUserWordStatus.difficult);
      if (this.userWord) {
        TextbookService.updateUserWord(this.wordInfo._id, body);
      } else {
        TextbookService.createUserWord(this.wordInfo._id, body);
      }
    } else {
      const body = this.setDifficulty(EUserWordStatus.normal);
      if (!this.userWord) {
        TextbookService.updateUserWord(this.wordInfo._id, body);
      } else {
        TextbookService.createUserWord(this.wordInfo._id, body);
      }
    }
  }

  private studButtonClickHandler(state: EUserWordStatus | undefined, button: HTMLElement) {
    // if (state === EUserWordStatus.studied) {
    //   button.innerHTML = StudButtonState.normal;
    // } else {
    //   button.innerHTML = StudButtonState.studied;
    // }
  }

  /**
   * Генерирует кнопки для сложных и изученных слов
   */
  private setButtons(): void {
    const difficulty = this.wordInfo.userWord?.difficulty || EUserWordStatus.normal;
    const difficultButton = this.view.difficultButton?.node;
    const studiedButton = this.view.studiedButton?.node;
    if (difficultButton) {
      if (difficulty === EUserWordStatus.difficult) {
        difficultButton.innerHTML = DiffButtonState.difficult;
      } else {
        difficultButton.innerHTML = DiffButtonState.normal;
      }
      difficultButton.onclick = () => this.diffButtonClickHandler(difficulty, difficultButton);
    }
    if (studiedButton) {
      if (difficulty === EUserWordStatus.studied) {
        studiedButton.innerHTML = StudButtonState.studied;
      } else {
        studiedButton.innerHTML = StudButtonState.normal;
      }
      studiedButton.onclick = () => this.studButtonClickHandler(difficulty, studiedButton);
    }
  }

  private setDifficulty(state: EUserWordStatus): IUserWord {
    if (this.userWord) {
      this.userWord.difficulty = state;
      return this.userWord;
    } else {
      const userWord = USER_WORD_TEMPLATE;
      userWord.difficulty = state;
      return userWord;
    }
  }
}
