import {
  activityClass,
  Api,
  baseUrl,
  DiffButtonState,
  StudButtonState,
  EUserWordStatus,
  IUserWord,
  IWord,
  IWordDetailsView,
  TextbookService,
  USER_WORD_TEMPLATE,
  ITextbookView,
} from '../../../basic';
import { WordGroup } from '../WordGroup';
import WordDetailsView from './wordDetails.view';

export class WordDetails {
  private readonly view: IWordDetailsView;
  private readonly audio: HTMLElement;
  static instance: WordDetails;
  private userWord: IUserWord | undefined;
  constructor(private textbook: ITextbookView, private parentNode: HTMLElement, private wordInfo: IWord) {
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

  /**
   * Обрабатывает клики по иконке аудио
   * @param wordInfo объект слова IWord
   */
  private audioClickHandler(wordInfo: IWord): void {
    const button: HTMLElement | null = this.view.audioButton.node;
    const icon = button.children[0];
    const audio: HTMLAudioElement = new Audio(`${baseUrl}/${wordInfo.audio}`);
    void audio.play();
    icon?.classList.add(activityClass);
    audio.onended = () => icon?.classList.remove(activityClass);
  }

  /**
   * Обрабатывает клики по кнопке 'Mark as difficult'
   * @param state
   */
  private async diffButtonClickHandler(state: EUserWordStatus | undefined) {
    const body =
      state !== EUserWordStatus.difficult
        ? this.setDifficulty(EUserWordStatus.difficult)
        : this.setDifficulty(EUserWordStatus.normal);
    if (this.userWord) {
      await TextbookService.updateUserWord(this.wordInfo._id, body);
    } else {
      await TextbookService.createUserWord(this.wordInfo._id, body);
    }
    this.reloadWords();
  }

  /**
   * Обрабатывает клики по кнопке 'Add to studied'
   * @param state Сложность слова
   */
  private async studButtonClickHandler(state: EUserWordStatus | undefined): Promise<void> {
    const body =
      state !== EUserWordStatus.studied
        ? this.setDifficulty(EUserWordStatus.studied)
        : this.setDifficulty(EUserWordStatus.normal);
    if (this.userWord) {
      await TextbookService.updateUserWord(this.wordInfo._id, body);
    } else {
      await TextbookService.createUserWord(this.wordInfo._id, body);
    }
    this.reloadWords();
  }

  /**
   * Генерирует кнопки для сложных и изученных слов
   */
  private setButtons(): void {
    const difficulty = this.wordInfo.userWord?.difficulty || EUserWordStatus.normal;
    const difficultButton = this.view.difficultButton?.node;
    const studiedButton = this.view.studiedButton?.node;
    if (difficultButton) {
      difficultButton.innerHTML = DiffButtonState[difficulty] || DiffButtonState[EUserWordStatus.normal];
      difficultButton.onclick = () => this.diffButtonClickHandler(difficulty);
    }
    if (studiedButton) {
      studiedButton.innerHTML = StudButtonState[difficulty] || StudButtonState[EUserWordStatus.normal];
      studiedButton.onclick = () => this.studButtonClickHandler(difficulty);
    }
  }

  /**
   * Создает тело запроса к базе данных
   * @param state Сложность слова
   * @returns Объект IUserWord, для дальнейшего обновления слова
   */
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

  private reloadWords(): void {
    const group = new WordGroup(this.textbook);
    group.renderGroup();
  }
}
