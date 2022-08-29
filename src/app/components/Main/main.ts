import { Advantages } from '../Advantages';
import { CardOpportunities } from '../CardOpportunities';
import { CardTeam } from '../CardTeam';
import { Root } from './models';
import { getTemplate } from './main.view';
import { BaseComponent } from '../base-component';
import { CARD_OPPORTUNITIES, CARD_TEAM } from './constants';

export class Main extends BaseComponent {
  private cardsOpportunities: CardOpportunities[] = [];
  private cardsTeam: CardTeam[] = [];

  protected element: HTMLElement = document.createElement('main');
  protected template: string = getTemplate();

  protected attachElement(): void {
    super.attachElement();
    this.initAdvantages();
    this.initOpportunities();
    this.initTeam();
  }

  private initAdvantages(): void {
    const root: HTMLElement | null = document.querySelector(Root.Advantages);
    const advantages: Advantages = new Advantages(root);
    advantages.init();
  }

  private initOpportunities(): void {
    const root: HTMLElement | null = document.querySelector(Root.Opportunities);
    CARD_OPPORTUNITIES.forEach((value) => {
      this.cardsOpportunities = [...this.cardsOpportunities, new CardOpportunities(root, value)];
    });
    this.cardsOpportunities.forEach((card) => card.init());
  }

  private initTeam(): void {
    const root: HTMLElement | null = document.querySelector(Root.Team);
    CARD_TEAM.forEach((value) => {
      this.cardsTeam = [...this.cardsTeam, new CardTeam(root, value)];
      this.cardsTeam.forEach((member) => member.init());
    });
  }
}
