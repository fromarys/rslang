import { Api, baseUrl, DiffButtonState, IWord, IWordDetailsView, StudButtonState } from '../../../basic';
import { Creator } from '../../Creator';
import './wordDetails.scss';

export default class WordDetailsView implements IWordDetailsView {
  private readonly image: string;
  private readonly headerContent: string;
  private readonly information: Creator<HTMLElement>;
  private readonly descriptionContent: string;
  private readonly description: Creator<HTMLElement>;
  private readonly header: Creator;
  public readonly audioButton: Creator<HTMLElement>;
  private detailsButtons: Creator<HTMLElement> | undefined;
  public difficultButton: Creator<HTMLElement> | undefined;
  public studiedButton: Creator<HTMLElement> | undefined;
  constructor(private details: HTMLElement, private word: IWord) {
    this.image = `<img src="${baseUrl}/${this.word.image}" class="words__image"></img>`;
    this.headerContent = this.renderHeader(this.word);
    this.descriptionContent = this.renderDescription(this.word);
    this.details.innerHTML = this.image;
    if (Api.isAuthorized()) this.renderButtons();
    this.information = new Creator(this.details, 'div', 'words__information');
    this.header = new Creator(this.information.node, 'div', 'words__header', this.headerContent);
    this.description = new Creator(this.information.node, 'div', 'words__description', this.descriptionContent);
    this.audioButton = new Creator(this.header.node, 'button', 'words__audio', this.renderAudioButton());
    if (Api.isAuthorized()) this.details.insertAdjacentHTML('beforeend', this.renderStatistics());
  }

  /**
   * Создает шапку блока для определенного слова
   * @param word Объект слова
   * @returns  Шапка блока
   */
  private renderHeader(word: IWord): string {
    return `
      <h2 class="words__word">${word.word}</h2>
      <h3 class="words__translate">${word.wordTranslate}</h3>
      <span class="words__transcription">${word.transcription}</span>
    `;
  }

  /**
   * Создает элемент description для определенного слова
   * @param word Объект слова
   * @returns  Элемент description
   */
  private renderDescription(word: IWord): string {
    return `
      <h3 class="words__subtitle">Значение</h3>
      <p>${word.textMeaning}</p>
      <p>${word.textMeaningTranslate}</p>
      <h3 class="words__subtitle">Пример</h3>
      <p>${word.textExample}</p>
      <p>${word.textExampleTranslate}</p>
    `;
  }

  /**
   * Создает иконку для кнопки аудио
   * @returns svg иконку
   */
  private renderAudioButton(): string {
    return `
    <svg class="words__audio-icon">
      <use xlink:href="public/static/audio.svg#audio"></use>
    </svg>
    `;
  }

  /**
   * Если пользователь авторизован создает кнопки для блока
   */
  private renderButtons(): void {
    this.detailsButtons = new Creator(this.details, 'div', 'words__buttons');
    const diffBtnClass = 'words__buttons-difficult';
    const studBtnClass = 'words__buttons-studied';
    this.difficultButton = new Creator(this.detailsButtons.node, 'button', diffBtnClass, DiffButtonState.normal);
    this.studiedButton = new Creator(this.detailsButtons.node, 'button', studBtnClass, StudButtonState.normal);
  }

  /**
   * Если пользователь авторизован создает статистику для блока
   * @returns Статистика по играм
   */
  private renderStatistics(): string {
    const statistics = this.word.userWord?.optional;
    const audiocall = statistics?.audioCall;
    const sprint = statistics?.sprint;
    return `
      <div class="words__statistics">
        <div class="words__statistics-wrapper">
          <div class="words__statistics-game">Audiocall</div>
          <div class="words__statistics-score">
            <span class="words__statistics-right">${audiocall?.right || 0}</span>
            <span class="words__statistics-wrong">${audiocall?.wrong || 0}</span>
          </div>
        </div>
        <div class="words__statistics-wrapper">
          <div class="words__statistics-game">Sprint</div>
          <div class="words__statistics-score">
            <span class="words__statistics-right">${sprint?.right || 0}</span>
            <span class="words__statistics-wrong">${sprint?.wrong || 0}</span>
          </div>
        </div>
      </div>
      `;
  }
}
