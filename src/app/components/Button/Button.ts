import { Creator } from '../Creator/';

export class Button extends Creator<HTMLButtonElement> {
  constructor(parent: HTMLElement, className: string, text: string, onClick: (text: string) => void) {
    super(parent, 'button', className, text);
    this.node.onclick = () => onClick(text);
  }
}
