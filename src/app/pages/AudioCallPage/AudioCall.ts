import { IWord } from '../../basic/interfaces/interfaces';
import LoadingPage from '../LoadingPage/LoadingPage';
import AudioCallModel from './AudioCall.model';
import GamePage from './GamePage/GamePage';
import Rules from './Rules/Rules';

const WORDS_IN_GAME = 30;

export class AudioCall {
  private rules: Rules;
  private audioCallModel: AudioCallModel;
  private parent: HTMLElement;

  constructor(parent: HTMLElement, private group?: number, private page?: number) {
    this.parent = parent;
    this.audioCallModel = new AudioCallModel();
    this.rules = new Rules(this.parent, !!this.page);
    this.rules.onClick = (group: number) => {
      this.rules.destroy();
      void this.mainCycle(group);
    };
  }

  private async mainCycle(group: number) {
    const loading = new LoadingPage(this.parent);
    const currGroup = this.group ? this.group : group;
    const words = await this.audioCallModel.getWordsFromGroup(currGroup, this.page);
    loading.destroy();
    const gameWords: IWord[] = [];

    for (let i = 0; i < WORDS_IN_GAME; i++) {
      gameWords.push(words[this.getRandomInt(words.length)]);
    }
    for (let i = 0; i < WORDS_IN_GAME; i++) {
      const game = new GamePage(this.parent, i, gameWords, words);
      game.onSelect
    }

  }

  private getRandomInt(maxInt: number): number {
    return Math.floor(Math.random() * maxInt);
  }
}
