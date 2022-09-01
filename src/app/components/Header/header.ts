import { BaseComponent } from '../base-component';
import { getTemplate } from './header.view';
import { IHeaderMenu, AUTH_BUTTON_CLICK_EVENT, ERoutes } from '../../basic';
import { AuthPage } from '../../pages/AuthPage';

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
    (<HTMLElement>this.authButton).removeEventListener('click', this.onAuthClick.bind(this));
    super.destroy();
  }

  protected attachElement(): void {
    this.root?.prepend(this.element);
    this.navButtons = <HTMLElement>document.querySelector('[data-role="header-menu"]');
    this.authButton = <HTMLElement>document.querySelector('[data-role="auth"]');
    const auth = new AuthPage(document.body);
    if (auth.isAuthorized()) {
      this.authButton.classList.add('hidden');
      this.authButton.innerHTML = '';
    } else {
      this.authButton.classList.remove('hidden');
      this.authButton.innerHTML = `<a href="#${ERoutes.auth}"><span>${IHeaderMenu.Login}</span></a>`;
    }
  }

  private listen(): void {
    (<HTMLElement>this.authButton).addEventListener('click', this.onAuthClick.bind(this));
  }

  // Create custom events that can be listened from documents, likes
  // document.addEventListener(IHeaderMenu.Main, (event) => ...)
  private onAuthClick(): void {
    document.dispatchEvent(AUTH_BUTTON_CLICK_EVENT);
  }
}
