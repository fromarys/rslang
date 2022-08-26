import { BaseComponent } from '../base-component';
import { getTemplate } from './header.view';

export class Header extends BaseComponent {
  protected element: HTMLElement = document.createElement('header');
  protected template: string = getTemplate();

  protected attachElement(): void {
    this.root?.prepend(this.element);
  }
}
