import { IAuth, IError, IUserResponse } from '../../basic/interfaces/interfaces';
import AuthPageModel from './AuthPage.model';
import AuthPageView from './AuthPage.view';
import { ERegisterButtonText } from '../../basic/enums/enums';

export default class AuthPage {
  authPageModel: AuthPageModel;
  authPageView: AuthPageView;

  constructor(parent: HTMLElement) {
    this.authPageModel = new AuthPageModel();
    this.authPageView = new AuthPageView(parent, (text) => this.onClick(text));
  }

  /**
   * Обработчик нажатия кнопки регистрации или логина
   * @param text Строка нажатой кнопки
   */
  onClick(text: string): void {
    const [name, login, password] = this.authPageView.getLoginData();
    if (text === ERegisterButtonText.cancel) {
      this.destroy();
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
        this.destroy();
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
}
