import { Creator } from '../../Creator';
import { ICreator } from '../../../basic';
import './wordHardButton.scss';

export default class WordHardTabView {
  public readonly group: ICreator;
  private readonly left: ICreator;
  private readonly right: ICreator;
  constructor(private parentNode: HTMLElement, private item: string[]) {
    this.group = new Creator(this.parentNode, 'button', 'group__button');
    this.left = new Creator(this.group.node, 'div', 'group__button-left', this.item[1]);
    this.right = new Creator(this.group.node, 'div', 'group__button-right');
  }
}
