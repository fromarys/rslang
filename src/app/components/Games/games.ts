import { getTemplate } from './games.view';
import { BaseComponent } from '../base-component';

export class Games extends BaseComponent {
  protected element: HTMLElement = document.createElement('main');
  protected template: string = getTemplate();
}
