import { Creator } from '../../Creator';
import { ICreator } from '../../../basic';
import './wordTab.scss';

export default class WordTabView {
  public readonly groupButton: ICreator;
  private readonly left: ICreator;
  private readonly right: ICreator;
  constructor(private parentNode: HTMLElement, private item: string[]) {
    this.groupButton = new Creator(this.parentNode, 'button', 'group__button');
    this.left = new Creator(this.groupButton.node, 'div', 'group__button-left', this.item[1]);
    this.right = new Creator(this.groupButton.node, 'div', 'group__button-right', this.item[0]);
  }
}
