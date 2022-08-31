import { Api } from '../../basic';
import LoadingPage from '../LoadingPage/LoadingPage';
import AudioCallModel from './AudioCall.model';
import AudioCallGamePage from './AudioCallGamePage/AudioCallGamePage';
import AudioCallResultPage from './AudioCallResultPage/AudioCallResultPage';
import AudioCallRules from './AudioCallRules/AudioCallRules';

const WORDS_IN_GAME = 20;

export class AudioCall {
  private rules!: AudioCallRules;
  private audioCallModel: AudioCallModel;
  private parent: HTMLElement;
  public onExit!: () => void;

  constructor(parent: HTMLElement, private group?: number, private page?: number) {
    this.parent = parent;
    this.audioCallModel = new AudioCallModel();
  }

  public render(): void {
    this.rules = new AudioCallRules(this.parent, this.page !== undefined);
    this.rules.onClick = (group: number) => {
      this.rules.destroy();
      void this.mainCycle(group);
    };
  }

  private async mainCycle(group: number) {
    const loading = new LoadingPage(this.parent);
    const currGroup = this.group !== undefined ? this.group : group;
    const words = await this.audioCallModel.getWordsFromGroup(currGroup, this.page);
    loading.destroy();
    const answerResult: boolean[] = [];

    const gameWords = words.sort(() => Math.random() - 0.5).slice(0, WORDS_IN_GAME);
    console.log(gameWords);
    for (let i = 0; i < gameWords.length; i++) {
      const game = new AudioCallGamePage(this.parent, i, gameWords, () => this.exitGame());
      const promise = new Promise<boolean>((resolve) => {
        game.onNext = (str) => resolve(str);
      });
      const result: boolean = await promise;
      game.destroy();
      answerResult.push(result);
      if (Api.isAuthorized()) {
        void this.audioCallModel.saveResultToServer(gameWords[i], result);
      }
    }
    new AudioCallResultPage(this.parent, gameWords, answerResult, () => this.exitGame());
  }

  private exitGame(): void {
    this.parent.innerHTML = '';
    this.onExit();
  }
}
