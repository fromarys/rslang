import { BaseComponent } from '../base-component';
import { getTemplate } from './header.view';
import { IHeaderMenu, ERoutes, Api, IUserResponse } from '../../basic';
import { AuthPage } from '../../pages/AuthPage';

export class Header extends BaseComponent {
  private authButton: HTMLElement | null = null;
  private auth: AuthPage = new AuthPage(document.body);

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

  protected async attachElement(): Promise<void> {
    this.root?.prepend(this.element);
    this.authButton = <HTMLElement>document.querySelector('[data-role="auth"]');

    if (this.auth.isAuthorized()) {
      this.authButton.setAttribute('autorized', '');
      const { name } = await this.getUser();
      this.authButton.innerHTML = `${name} <a href="#"><span>${IHeaderMenu.Logout}</span></a>`;
    } else {
      this.authButton.removeAttribute('autorized');
      this.authButton.innerHTML = `<a href="#${ERoutes.auth}"><span>${IHeaderMenu.Login}</span></a>`;
    }
  }

  private async getUser(): Promise<IUserResponse> {
    try {
      const user: IUserResponse = (await Api.getUserInfo()) as IUserResponse;
      return user;
    } catch {
      return {} as IUserResponse;
    }
  }

  private listen(): void {
    (<HTMLElement>this.authButton).addEventListener('click', this.onAuthClick.bind(this));
  }

  private onAuthClick(event: Event): void {
    const isAutorized = !!(<HTMLElement>event.target).closest('[autorized]');
    if (isAutorized) {
      this.auth.unloginUser();
      window.location.reload();
    }
  }
}
