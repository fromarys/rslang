import { IWord } from '../../basic/common';
import WordCardView from './wordCard.view';
import { WordDetails } from './wordDetails';

export class WordCard {
  card;
  constructor(wordsContainer: HTMLElement | null, wordsWrapper: HTMLElement | null, card: IWord) {
    this.card = new WordCardView(wordsContainer, card.word, card.wordTranslate);
    this.card.node.addEventListener('click', () => {
      
    });
  }
  
  renderDetails() {
    
  }
}
