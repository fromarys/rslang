import { Api, IWord } from '../../basic';
import LoadingPage from '../LoadingPage/LoadingPage';
import AudioCallModel from './AudioCall.model';
import AudioCallGamePage from './AudioCallGamePage/AudioCallGamePage';
import GameResultPage from '../GameResultPage/GameResultPage';
import AudioCallRules from './AudioCallRules/AudioCallRules';
import { AuthPage } from '../AuthPage';
import { GamesGetData } from '../../utils/GamesGetData';

const WORDS_IN_GAME = 20;

export class AudioCall {
  private rules!: AudioCallRules;
  private audioCallModel: AudioCallModel;
  private parent: HTMLElement;
  public onExit!: () => void;
  gamesGetData: GamesGetData;

  constructor(parent: HTMLElement, private group?: number, private page?: number) {
    this.parent = parent;
    this.audioCallModel = new AudioCallModel();
    this.gamesGetData = new GamesGetData();
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
    const auth = new AuthPage(document.body);
    const words: IWord[] =
      group !== -1 || !auth.isAuthorized()
        ? await this.gamesGetData.getWordsFromGroup(currGroup, this.page)
        : await this.gamesGetData.getAggregatedWordsFromGroup(this.group as number, this.page as number);
    loading.destroy();
    const answerResult: boolean[] = [];

    const gameWords = words.sort(() => Math.random() - 0.5).slice(0, WORDS_IN_GAME);
    for (let i = 0; i < gameWords.length; i++) {
      const game = new AudioCallGamePage(this.parent, i, gameWords /* , () => this.exitGame() */);
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
    if (Api.isAuthorized()) {
      void this.audioCallModel.saveRightSequenceToStatistics(answerResult);
    }

    new GameResultPage(this.parent, gameWords, answerResult, () => this.exitGame());
  }

  private exitGame(): void {
    this.parent.innerHTML = '';
    location.href = '';
  }
}
