import {
  GAMES_CLICK_EVENT,
  IHeaderMenu,
  MAIN_CLICK_EVENT,
  STATISTICS_CLICK_EVENT,
  TEXT_BOOKS_CLICK_EVENT,
} from '../../basic';
import { BaseComponent } from '../base-component';
import { getTemplate } from './card-opportunities.view';
import { ICardOpportunities } from './models';

export class CardOpportunities extends BaseComponent {
  protected element: HTMLElement = document.createElement('div');
  protected template: string = getTemplate(this.settings);

  get id(): IHeaderMenu {
    return this.settings.id;
  }

  constructor(root: HTMLElement | null, private settings: ICardOpportunities) {
    super(root);
  }

  public init(): void {
    super.init();
    this.listen();
  }

  public destroy(): void {
    (<HTMLDivElement>this.element).removeEventListener('click', this.onCardClick.bind(this));
    super.destroy();
  }

  private listen(): void {
    this.element.addEventListener('click', this.onCardClick.bind(this));
  }

  private onCardClick(): void {
    switch (this.id) {
      case IHeaderMenu.Main:
        document.dispatchEvent(MAIN_CLICK_EVENT);
        break;
      case IHeaderMenu.Textbook:
        document.dispatchEvent(TEXT_BOOKS_CLICK_EVENT);
        break;
      case IHeaderMenu.Games:
        document.dispatchEvent(GAMES_CLICK_EVENT);
        break;
      case IHeaderMenu.Statistics:
        document.dispatchEvent(STATISTICS_CLICK_EVENT);
        break;
    }
  }
}
