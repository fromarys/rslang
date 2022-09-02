import { Api, IWord } from '../../basic';
import LoadingPage from '../LoadingPage/LoadingPage';
import SprintModel from './Sprint.model';
import SprintGamePage from './SprintGamePage/SprintGamePage';
import GameResultPage from '../GameResultPage/GameResultPage';
import SprintRules from './SprintRules/SprintRules';

export class Sprint {
  private rules!: SprintRules;
  private sprintModel: SprintModel;
  private parent: HTMLElement;
  public onExit!: () => void;
  counter!: number;
  game!: SprintGamePage;
  timer!: NodeJS.Timer;
  gameWords!: IWord[];
  index!: number;
  answerResult!: boolean[];

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
    audioWrong.volume = 0.5;
    const audioRight = new Audio('../../../public/static/sound/right.mp3');

    const loading = new LoadingPage(this.parent);
    const currGroup = this.group !== undefined ? this.group : group;
    const words = await this.sprintModel.getWordsFromGroup(currGroup, this.page);
    loading.destroy();
    this.answerResult = [];

    this.gameWords = words.sort(() => Math.random() - 0.5);
    this.counter = 60;
    this.timer = setInterval(() => this.timerHandler(), 1000);
    for (this.index = 0; this.index < this.gameWords.length; this.index++) {
      this.game = new SprintGamePage(
        this.parent,
        this.index,
        this.gameWords,
        // () => this.exitGame(),
        audioRight,
        audioWrong,
        this.counter
      );
      const promise = new Promise<boolean>((resolve) => {
        this.game.onNext = (str) => resolve(str);
      });
      const result: boolean = await promise;
      this.game.destroy();
      this.answerResult.push(result);
      if (Api.isAuthorized()) {
        void this.sprintModel.saveResultToServer(this.gameWords[this.index], result);
      }
    }

    this.endGame();
  }

  private timerHandler(this: Sprint): void {
    this.counter--;
    if (this.game instanceof SprintGamePage) {
      this.game.showCount(this.counter);
    }
    if (!this.counter) {
      this.game.destroy();
      this.endGame();
    }
  }

  private endGame() {
    clearInterval(this.timer);
    const words = this.gameWords.slice(0, this.index);
    const answers = this.answerResult.slice(0, this.index);
    new GameResultPage(this.parent, words, answers, () => this.exitGame());
  }

  private exitGame(): void {
    this.parent.innerHTML = '';
    location.hash = '';
  }
}
