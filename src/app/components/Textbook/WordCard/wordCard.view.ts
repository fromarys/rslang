import { IWord, IWordCardView } from '../../../basic';
import { Creator } from '../../Creator';
import './wordCard.scss';

export default class WordCardView extends Creator implements IWordCardView {
  constructor(parentNode: HTMLElement | null, wordInfo: IWord, className: string) {
    const content = `<h2 class="words__word">${wordInfo.word}</h2>
    <h3 class="words__translate">${wordInfo.wordTranslate}</h3>`;
    super(parentNode, 'button', `words__card ${className}`, content);
  }
}
