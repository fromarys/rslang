import { Backend, IWord, IWordDetailsView } from '../../../basic';
import { Creator } from '../../Creator';
import './wordDetails.scss';

export default class WordDetailsView implements IWordDetailsView {
  readonly details: Creator;
  readonly image: string;
  readonly headerContent: string;
  readonly information: Creator<HTMLElement>;
  readonly descriptionContent: string;
  readonly description: Creator<HTMLElement>;
  readonly header: Creator;
  readonly audioButton: Creator<HTMLElement>;
  constructor(parentNode: HTMLElement, word: IWord) {
    this.image = `<img src="${Backend.host}/${word.image}" class="words__image"></img>`;
    this.headerContent = this.renderHeader(word);
    this.descriptionContent = this.renderDescription(word);
    this.details = new Creator(parentNode, 'div', 'words__details');
    this.details.node.innerHTML = this.image;
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
}
