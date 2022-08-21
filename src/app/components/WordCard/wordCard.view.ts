import Creator from '../../basic/common/creator';

export default class WordCardView extends Creator {
  constructor(parentNode: HTMLElement | null, word: string, translate: string) {
    const content = `<h2 class="words__word">${word}</h2>
    <h3 class="words__translate">${translate}</h3>`;
    super(parentNode, 'button', 'words__card', content);
  }
}
