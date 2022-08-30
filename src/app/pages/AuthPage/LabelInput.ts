import { Creator } from '../../components/Creator';
import { Input } from '../../components/Input';

export default class LabelInput {
  wnd: Creator<HTMLElement>;
  span: Creator<HTMLElement>;
  input: Input;

  constructor(parent: HTMLElement, name: string) {
    this.wnd = new Creator<HTMLDivElement>(parent, 'div', 'input__wrapper');
    this.span = new Creator<HTMLSpanElement>(this.wnd.node, 'span', 'input__span', name);
    this.input = new Input(this.wnd.node, 'input__input');
  }

  /**
   * Получает значение поля инпута
   * @returns Текст в поле инпута
   */
  public getValue(): string {
    return this.input.getValue();
  }

  /**
   * Устанавливает тип инпута отличный от type='text'
   * @param type Тип инпута
   */
  public setInputType(type: string): void {
    this.input.node.type = type;
  }

  public showInput(show: boolean): void {
    this.wnd.node.style.display = show ? 'block' : 'none';
  }
}
