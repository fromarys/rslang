import Creator from '../Creator/Creator';

export default class Input extends Creator<HTMLInputElement> {
  constructor(parent: HTMLElement, className: string) {
    super(parent, 'input', className);
    this.node.type = 'text';
  }

  /**
   * Получает значение поля инпута
   * @returns Текст в поле инпута
   */
  public getValue(): string {
    return this.node.value;
  }
}
