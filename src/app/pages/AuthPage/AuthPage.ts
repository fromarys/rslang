import { IAuth, IError, IUserResponse } from '../../basic/interfaces/interfaces';
import AuthPageModel from './AuthPage.model';
import AuthPageView from './AuthPage.view';
import { ERegisterButtonText } from '../../basic/enums/enums';
import { Api } from '../../basic';

type AuthFull = (Pick<IAuth, 'token' | 'userId' | 'refreshToken'> & { time?: number }) | null;
const TOKEN_WORK_TIME = 4; //часа

export class AuthPage {
  authPageModel!: AuthPageModel;
  authPageView!: AuthPageView;
  onExit: (() => void) | undefined;
  static instance: AuthPage;

  constructor(private parent: HTMLElement) {
    if (typeof AuthPage.instance === 'object') return AuthPage.instance;
    this.authPageModel = new AuthPageModel();
    this.authPageView = new AuthPageView(this.parent);
    this.authPageView.onClick = (text: string) => this.onClick(text);
    AuthPage.instance = this;
  }

  public render(): void {
    this.authPageView.render();
  }

  /**
   * Обработчик нажатия кнопки регистрации или логина
   * @param text Строка нажатой кнопки
   */
  onClick(text: string): void {
    const [name, login, password] = this.authPageView.getLoginData();
    if (text === ERegisterButtonText.cancel) {
      this.destroy();
      this.tryLaunchExit();
    } else if (text === ERegisterButtonText.login) {
      this.authPageView.setMessageText('Logining ...', 'green');
      this.loginUser(login, password);
    } else {
      void this.authPageModel.registerNewUser(name, login, password).then((response: IUserResponse | IError) => {
        if ('errorMessage' in response) {
          this.authPageView.setMessageText(response.errorMessage);
        } else {
          this.loginUser(login, password);
        }
      });
    }
  }

  /**
   * Производит логин пользователя. В случае успеха закрывает окно
   * @param login Логин
   * @param password Пароль
   */
  loginUser(login: string, password: string): void {
    void this.authPageModel.loginUser(login, password).then((response: IAuth | IError) => {
      if ('errorMessage' in response) {
        this.authPageView.setMessageText(response.errorMessage);
      } else {
        this.authPageModel.setAuthData(response);
        this.saveAuthToLocalStorage();
        this.destroy();
        this.tryLaunchExit();
      }
    });
  }

  /**
   * Удаляет окно из DOM
   */
  public destroy(): void {
    // TODO Сделать плавную анимацию исчезновеня
    this.authPageView.destroy();
  }

  /**
   * Функция запускает переданную функцию перед выходом
   */
  private tryLaunchExit(): void {
    if (this.onExit !== undefined) {
      this.onExit();
    }
  }

  private saveAuthToLocalStorage(): void {
    const auth: AuthFull = Api.getAuthToken();
    if (auth !== null) {
      auth.time = Date.now();
      localStorage.setItem('rslang-auth', JSON.stringify(auth));
    }
  }

  private restoreAuthFromLocalStorage(): boolean {
    const str = localStorage.getItem('rslang-auth');
    if (!str) return false;
    try {
      const auth = JSON.parse(str) as AuthFull;
      if (!auth) return false;
      if (!auth.userId || typeof auth.userId !== 'string') return false;
      if (!auth.token || typeof auth.token !== 'string') return false;
      if (!auth.refreshToken || typeof auth.refreshToken !== 'string') return false;
      if (!auth.time || typeof auth.time !== 'number') return false;
      const timePast = (Date.now() - auth.time) / 60 / 60 / 1000; // в часах
      if (timePast < TOKEN_WORK_TIME) {
        Api.setAuthData(
          {
            message: '',
            token: auth.token,
            refreshToken: auth.refreshToken,
            userId: auth.userId,
            name: '',
          },
          auth.time
        );
        return true;
      } else {
        void Api.getUserNewToken().then((tokens) => {
          if ('token' in tokens) {
            const user = Api.getAuthToken();
            Api.setAuthData(
              {
                message: '',
                token: tokens.token,
                refreshToken: tokens.refreshToken,
                userId: user ? user.userId : '',
                name: '',
              },
              Date.now()
            );
          }
        });
        return true;
      }
    } catch {
      return false;
    }
  }

  public isAuthorized(): boolean {
    if (Api.isAuthorized()) return true;
    if (this.restoreAuthFromLocalStorage()) return true;
    return false;
  }

  public unloginUser(): void {
    Api.unloginUser();
    this.clearAuthInLocalStorage();
  }

  public clearAuthInLocalStorage() {
    localStorage.removeItem('rslang-auth');
  }
}
