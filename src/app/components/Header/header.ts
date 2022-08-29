import { BaseComponent } from '../base-component';
import { getTemplate } from './header.view';
import {
  MAIN_CLICK_EVENT,
  IHeaderMenu,
  TEXT_BOOKS_CLICK_EVENT,
  GAMES_CLICK_EVENT,
  STATISTICS_CLICK_EVENT,
  AUTH_BUTTON_CLICK_EVENT,
} from '../../basic';

export class Header extends BaseComponent {
  private navButtons: HTMLElement | null = null;
  private authButton: HTMLElement | null = null;

  protected element: HTMLElement = document.createElement('header');
  protected template: string = getTemplate(IHeaderMenu);

  public init(): void {
    super.init();
    this.listen();
  }

  public destroy(): void {
    (<HTMLElement>this.navButtons).removeEventListener('click', this.onNavClick.bind(this));
    (<HTMLElement>this.authButton).removeEventListener('click', this.onAuthClick.bind(this));
    super.destroy();
  }

  protected attachElement(): void {
    this.root?.prepend(this.element);
    this.navButtons = <HTMLElement>document.querySelector('[data-role="header-menu"]');
    this.authButton = <HTMLElement>document.querySelector('[data-role="auth"]');
  }

  private listen(): void {
    (<HTMLElement>this.navButtons).addEventListener('click', this.onNavClick.bind(this));
    (<HTMLElement>this.authButton).addEventListener('click', this.onAuthClick.bind(this));
  }

  // Create custom events that can be listened from documents, likes
  // document.addEventListener(IHeaderMenu.Main, (event) => ...)
  private onAuthClick(event: Event): void {
    event.preventDefault();
    document.dispatchEvent(AUTH_BUTTON_CLICK_EVENT);
  }

  // Create custom events that can be listened from documents, likes
  // document.addEventListener(IHeaderMenu.Main, (event) => ...)
  private onNavClick(event: Event): void {
    event.preventDefault();
    const element = (event.target as HTMLElement).closest('[data-id]');
    if (!element) {
      return;
    }
    switch (element.getAttribute('data-id')) {
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
