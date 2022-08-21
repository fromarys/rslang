import Creator from './Creator';
import Button from './Button';
import Input from './Input';
import './register.scss';
import { ERegisterButtonText } from '../../basic/enums/enums';

export default class AuthPageView {
  screen: Creator<HTMLElement>;
  wnd: Creator<HTMLElement>;
  name: Input;
  email: Input;
  password: Input;
  message: Creator<HTMLElement>;
  btnLogin: Button;
  btnPassword: Button;

  constructor(parent: HTMLElement, onClick: (text: string) => void) {
    this.screen = new Creator(parent, 'div', 'register');
    this.wnd = new Creator(this.screen.node, 'div', 'register__window');
    this.name = new Input(this.wnd.node, 'Name');
    this.email = new Input(this.wnd.node, 'E-Mail');
    this.password = new Input(this.wnd.node, 'Password');
    this.message = new Creator(this.wnd.node, 'div', 'register__message');
    this.btnLogin = new Button(this.wnd.node, 'register__button', ERegisterButtonText.login, onClick);
    this.btnPassword = new Button(this.wnd.node, 'register__button', ERegisterButtonText.register, onClick);
  }

  public destroy() {
    // TODO Сделать плавное исчезание
    this.screen.destroy();
  }

  /**
   * Получает из формы имя, логин и пароль
   * @returns Имя, логин и пароль
   */
  public getLoginData(): [string, string, string] {
    return [this.name.getValue(), this.email.getValue(), this.password.getValue()];
  }

  /**
   * Выводит сообщение об ошибке
   * @param text Текст для вывода
   */
  public setMessageText(text: string): void {
    this.message.node.textContent = text;
  }
}
