import Creator from './Creator';

export default class Input {
  wnd: Creator<HTMLElement>;
  span: Creator<HTMLInputElement>;
  input: Creator<HTMLInputElement>;

  constructor(parent: HTMLElement, name: string) {
    this.wnd = new Creator<HTMLElement>(parent, 'div', 'input__wrapper');
    this.span = new Creator<HTMLInputElement>(this.wnd.node, 'span', 'input__span', name);
    this.input = new Creator<HTMLInputElement>(this.wnd.node, 'input', 'input__input');
    this.input.node.type = 'text';
  }

  /**
   * Получает значение поля инпута
   * @returns Текст в поле инпута
   */
  public getValue(): string {
    return this.input.node.value;
  }
}
