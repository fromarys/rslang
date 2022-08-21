import Creator from '../../components/Creator/Creator';
import Button from '../../components/Button/Button';
import LabelInput from './LabelInput';
import './register.scss';
import { ERegisterButtonText } from '../../basic/enums/enums';

export default class AuthPageView {
  screen: Creator<HTMLElement>;
  wnd: Creator<HTMLElement>;
  name: LabelInput;
  email: LabelInput;
  password: LabelInput;
  message: Creator<HTMLElement>;
  btnLogin: Button;
  btnPassword: Button;
  btnCancel: Button;

  constructor(parent: HTMLElement, onClick: (text: string) => void) {
    this.screen = new Creator(parent, 'div', 'register');
    this.wnd = new Creator(this.screen.node, 'div', 'register__window');
    this.name = new LabelInput(this.wnd.node, 'Name');
    this.email = new LabelInput(this.wnd.node, 'E-Mail');
    this.email.setInputType('email');
    this.password = new LabelInput(this.wnd.node, 'Password');
    this.password.setInputType('password');
    this.message = new Creator(this.wnd.node, 'div', 'register__message');
    this.btnLogin = new Button(this.wnd.node, 'register__button', ERegisterButtonText.login, onClick);
    this.btnPassword = new Button(this.wnd.node, 'register__button', ERegisterButtonText.register, onClick);
    this.btnCancel = new Button(this.wnd.node, 'register__button', ERegisterButtonText.cancel, onClick);
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
  public setMessageText(text: string, color?: string): void {
    this.message.node.textContent = text;
    this.message.node.style.color = color ? color : '';
  }
}
