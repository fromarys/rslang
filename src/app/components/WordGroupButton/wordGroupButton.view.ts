import { Creator } from '../../basic';
import { ICreator } from '../../basic';
import './wordGroupButton.scss';

export default class WordGroupButtonView {
  public readonly group: ICreator;
  public readonly left: ICreator;
  public readonly right: ICreator;
  constructor(parentNode: HTMLElement, item: string[]) {
    this.group = new Creator(parentNode, 'button', 'group__button');
    this.left = new Creator(this.group.node, 'div', 'group__button-left', item[1]);
    this.group.node.dataset.level = item[0];
    this.right = new Creator(this.group.node, 'div', 'group__button-right', item[0]);
  }
}
