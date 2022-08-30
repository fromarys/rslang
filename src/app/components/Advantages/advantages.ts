import { BaseComponent } from '../base-component';
import { getTemplate } from './advantages.view';

export class Advantages extends BaseComponent {
  protected element: HTMLElement = document.createElement('div');
  protected template: string = getTemplate();
}
