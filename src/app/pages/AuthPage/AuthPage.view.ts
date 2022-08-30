import { Creator } from '../../components/Creator';
import { Button } from '../../components/Button';
import LabelInput from './LabelInput';
import './register.scss';
import { ERegisterButtonText } from '../../basic/enums/enums';

export default class AuthPageView {
  private screen!: Creator<HTMLElement>;
  private wnd!: Creator<HTMLElement>;
  private name!: LabelInput;
  private email!: LabelInput;
  private password!: LabelInput;
  private message!: Creator<HTMLElement>;
  private btnSwitch!: Button;
  private btnLogin!: Button;
  private btnPassword!: Button;
  private btnCancel!: Button;
  public onClick!: (text: string) => void;
  private loginState = true;

  constructor(private parent: HTMLElement) {}

  public render(): void {
    this.screen = new Creator(this.parent, 'div', 'register');
    this.wnd = new Creator(this.screen.node, 'div', 'register__window');
    this.name = new LabelInput(this.wnd.node, 'Name');
    this.name.showInput(!this.loginState);
    this.email = new LabelInput(this.wnd.node, 'E-Mail');
    this.email.setInputType('email');
    this.password = new LabelInput(this.wnd.node, 'Password');
    this.password.setInputType('password');
    this.message = new Creator(this.wnd.node, 'div', 'register__message');
    this.btnSwitch = new Button(this.wnd.node, 'register__button_switch', 'register', () => this.onSwitch());
    this.btnLogin = new Button(this.wnd.node, 'register__button', ERegisterButtonText.login, this.onClick);
    this.btnLogin.node.style.display = this.loginState ? 'inline-block' : 'none';
    this.btnPassword = new Button(this.wnd.node, 'register__button', ERegisterButtonText.register, this.onClick);
    this.btnPassword.node.style.display = !this.loginState ? 'inline-block' : 'none';
    this.btnCancel = new Button(this.wnd.node, 'register__button', ERegisterButtonText.cancel, this.onClick);
    setTimeout(() => (this.screen.node.style.opacity = '1'), 0);
  }

  public destroy() {
    this.screen.node.style.opacity = '0';
    setTimeout(() => this.screen.destroy(), 500);
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

  private onSwitch(): void {
    this.loginState = !this.loginState;
    this.name.showInput(!this.loginState);
    this.btnLogin.node.style.display = this.loginState ? 'inline-block' : 'none';
    this.btnPassword.node.style.display = !this.loginState ? 'inline-block' : 'none';
    this.btnSwitch.node.textContent = this.loginState ? 'register' : 'login';
  }
}
