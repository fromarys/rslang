import { Api, baseUrl, IWord, IWordDetailsView } from '../../../basic';
import { Creator } from '../../Creator';
import './wordDetails.scss';

export default class WordDetailsView implements IWordDetailsView {
  private readonly details: Creator;
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
  constructor(private parentNode: HTMLElement, private word: IWord) {
    this.image = `<img src="${baseUrl}/${this.word.image}" class="words__image"></img>`;
    this.headerContent = this.renderHeader(this.word);
    this.descriptionContent = this.renderDescription(this.word);
    this.details = new Creator(this.parentNode, 'div', 'words__details');
    this.details.node.innerHTML = this.image;
    this.renderButtons();
    this.information = new Creator(this.details.node, 'div', 'words__information');
    this.header = new Creator(this.information.node, 'div', 'words__header', this.headerContent);
    this.description = new Creator(this.information.node, 'div', 'words__description', this.descriptionContent);
    this.audioButton = new Creator(this.header.node, 'button', 'words__audio', this.renderAudioButton());
  }

  private renderHeader(word: IWord): string {
    return `
      <h2 class="words__word">${word.word}</h2>
      <h3 class="words__translate">${word.wordTranslate}</h3>
      <span class="words__transcription">${word.transcription}</span>
    `;
  }

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

  private renderAudioButton(): string {
    return `
    <svg class="words__audio-icon">
      <use xlink:href="../../../public/static/audio.svg#audio"></use>
    </svg>
    `;
  }

  private renderButtons(): void {
    if (Api.isAuthorized()) {
      this.detailsButtons = new Creator(this.details.node, 'div', 'words__buttons');
      const diffBtnClass = 'words__buttons-difficult';
      const studBtnClass = 'words__buttons-studied';
      this.difficultButton = new Creator(this.detailsButtons.node, 'button', diffBtnClass, 'Mark as difficult');
      this.studiedButton = new Creator(this.detailsButtons.node, 'button', studBtnClass, 'Mark as studied');
    }
  }
}
