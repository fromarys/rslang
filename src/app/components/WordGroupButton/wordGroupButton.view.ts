import Creator from '../../basic/common/creator';
/* eslint-disable */
export default class WordGroupButtonView  {
  group: Creator;
  left: Creator;
  right: Creator;
  constructor(parentNode: HTMLElement, item: string[]) {
    this.group = new Creator(parentNode, 'button', 'group__card');
    this.left = new Creator(this.group.node, 'div', 'group__card-left', item[1]);
    this.group.node.dataset.level = item[0];
    this.right = new Creator(this.group.node, 'div', 'group__card-right', item[0]);
  }
}