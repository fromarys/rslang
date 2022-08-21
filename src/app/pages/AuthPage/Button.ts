import Creator from './Creator';

export default class Button {
  button: Creator<HTMLElement>;

  constructor(parent: HTMLElement, className: string, text: string, onClick: (text: string) => void) {
    this.button = new Creator(parent, 'button', className, text);
    this.button.node.onclick = () => onClick(text);
  }
}
