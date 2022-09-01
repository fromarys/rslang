import { Api } from '../../basic';
import LoadingPage from '../LoadingPage/LoadingPage';
import SprintModel from './Sprint.model';
import SprintGamePage from './SprintGamePage/SprintGamePage';
import GameResultPage from '../GameResultPage/GameResultPage';
import SprintRules from './SprintRules/SprintRules';

const WORDS_IN_GAME = 20;

export class Sprint {
  private rules!: SprintRules;
  private sprintModel: SprintModel;
  private parent: HTMLElement;
  public onExit!: () => void;
  counter!: number;
  game!: SprintGamePage;
  timer!: NodeJS.Timer;

  constructor(parent: HTMLElement, private group?: number, private page?: number) {
    this.parent = parent;
    this.sprintModel = new SprintModel();
  }

  public render(): void {
    this.rules = new SprintRules(this.parent, this.page !== undefined);
    this.rules.onClick = (group: number) => {
      this.rules.destroy();
      void this.mainCycle(group);
    };
  }

  private async mainCycle(group: number) {
    const audioWrong = new Audio('../../../public/static/sound/wrong.mp3');
    const audioRight = new Audio('../../../public/static/sound/right.mp3');

    const loading = new LoadingPage(this.parent);
    const currGroup = this.group !== undefined ? this.group : group;
    const words = await this.sprintModel.getWordsFromGroup(currGroup, this.page);
    loading.destroy();
    const answerResult: boolean[] = [];

    const gameWords = words.sort(() => Math.random() - 0.5).slice(0, WORDS_IN_GAME);
    this.counter = 60;
    this.timer = setInterval(timerHandler.bind(this), 1000);
    for (let i = 0; i < gameWords.length; i++) {
      this.game = new SprintGamePage(
        this.parent,
        i,
        gameWords,
        () => this.exitGame(),
        audioRight,
        audioWrong,
        this.counter
      );
      const promise = new Promise<boolean>((resolve) => {
        this.game.onNext = (str) => resolve(str);
      });
      const result: boolean = await promise;
      this.game.destroy();
      answerResult.push(result);
      if (Api.isAuthorized()) {
        void this.sprintModel.saveResultToServer(gameWords[i], result);
      }
    }
    new GameResultPage(this.parent, gameWords, answerResult, () => this.exitGame());

    function timerHandler(this: Sprint) {
      this.counter--;
      if (this.game instanceof SprintGamePage) {
        this.game.showCount(this.counter);
      }
      if (!this.counter) {
        clearInterval(this.timer);
      }
    }
  }

  private exitGame(): void {
    this.parent.innerHTML = '';
    this.onExit();
  }
}
