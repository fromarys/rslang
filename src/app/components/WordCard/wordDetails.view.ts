import { IWord } from '../../basic/common';
import Creator from '../../basic/common/creator';
import { Backend } from '../../basic/common';
/* eslint-disable */
export default class WordDetailsView {
  details: Creator;
  constructor(parentNode: HTMLElement, word: IWord) {
    const content = this.renderDetails(word);
    this.details = new Creator(parentNode, 'div', 'words__details', content);
  }

  renderDetails(word: IWord) {
    return `        
      <img src="${Backend.host}/${word.image}" class="words__image"></img>
      <div class="words__information">
        <div class="words__header">
          <h2 class="words__word">${word.word}</h2>
          <h3 class="words__translate">${word.wordTranslate}</h3>
        </div>
        <div class="words_description">
          <h3 class="words__subtitle">Значение</h3>
          <p>${word.textMeaning}</p>
          <p>${word.textMeaningTranslate}</p>
          <h3 class="words__subtitle">Пример</h3>
          <p>${word.textExample}</p>
          <p>${word.textExampleTranslate}</p>
        </div>
      </div>
    `;
  }
}