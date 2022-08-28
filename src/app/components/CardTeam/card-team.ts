import { BaseComponent } from '../base-component';
import { getTemplate } from './card-team.view';
import { ICardTeam } from './models';

export class CardTeam extends BaseComponent {
  protected element: HTMLElement = document.createElement('div');
  protected template: string = getTemplate(this.settings);

  constructor(root: HTMLElement | null, private settings: ICardTeam) {
    super(root);
  }
}
