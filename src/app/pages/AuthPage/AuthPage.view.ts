import { Creator } from '../../components/Creator';
import { Button } from '../../components/Button';
import LabelInput from './LabelInput';
import './register.scss';
import { ERegisterButtonText } from '../../basic/enums/enums';
// import { AuthPage } from './AuthPage';

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
  keyboardHandlerThis!: (e: KeyboardEvent) => void;

  constructor(private parent: HTMLElement) {}

  public render(): void {
    this.loginState = true;
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
    this.btnLogin = new Button(this.wnd.node, 'register__button', ERegisterButtonText.login, (text: string) =>
      this.checkFields(text)
    );
    this.btnLogin.node.style.display = this.loginState ? 'inline-block' : 'none';
    this.btnPassword = new Button(this.wnd.node, 'register__button', ERegisterButtonText.register, (text: string) =>
      this.checkFields(text)
    );
    this.btnPassword.node.style.display = !this.loginState ? 'inline-block' : 'none';
    this.btnCancel = new Button(this.wnd.node, 'register__button', ERegisterButtonText.cancel, (text: string) =>
      this.checkFields(text)
    );
    setTimeout(() => (this.screen.node.style.opacity = '1'), 0);
    this.keyboardHandlerThis = this.keyboardHandler.bind(this);
    window.addEventListener('keyup', this.keyboardHandlerThis);
  }

  public destroy() {
    this.screen.node.style.opacity = '0';
    setTimeout(() => this.screen.destroy(), 500);
    window.removeEventListener('keyup', this.keyboardHandlerThis);
  }

  /**
   * Получает из формы имя, логин и пароль
   * @returns Имя, логин и пароль
   */
  public getLoginData(): [string, string, string] {
    return [this.name.getValue().trim(), this.email.getValue().trim(), this.password.getValue().trim()];
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

  private checkFields(text: string): void {
    if (text !== ERegisterButtonText.cancel) {
      const [name, email, password] = this.getLoginData();
      if (!this.loginState && !/^\w+$/.test(name))
        return this.setMessageText('В имени использованы недопустимые символы');
      if (!/^(.+)@(\S+)$/.test(email)) return this.setMessageText('Не правильный e-mail');
      if (!/[A-Za-z0-9]+/.test(password)) return this.setMessageText('Для пароля допустимы латинские символы и цифры');
      if (password.length < 8) return this.setMessageText('Длина пароля должна быть не менее 8 символов');
    }
    this.onClick(text);
  }

  private keyboardHandler(e: KeyboardEvent): void {
    if (e.key === 'Enter') this.checkFields(this.loginState ? ERegisterButtonText.login : ERegisterButtonText.register);
    if (e.key === 'Escape') this.onClick(ERegisterButtonText.cancel);
    return;
  }
}
