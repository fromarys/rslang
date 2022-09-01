import { IHeaderMenu } from '../../basic';
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
}
