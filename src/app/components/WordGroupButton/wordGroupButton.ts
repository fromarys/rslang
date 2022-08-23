import { groups } from '../../basic/common';
import TextbookPageView from '../../pages/TextbookPage/textbook.view';
import { WordGroup } from '../WordGroup/wordGroup';
import WordGroupButtonView from './wordGroupButton.view';
/* eslint-disable */
export class WordGroupButton  {
  view;
  parentNode;
  group;
  constructor(textbook: TextbookPageView, item: string[]) {
    this.group = Object.keys(groups);
    this.parentNode = textbook.group.node;
    this.view = new WordGroupButtonView(this.parentNode, item);
    this.view.group.node.onclick = (event) => this.clickHandler(textbook, event);
  }

  clickHandler(textbook: TextbookPageView, event: MouseEvent) {
    document.querySelector('.words__details')?.remove();
    const wordContainers = Array.from(document.querySelectorAll('.words__container'));
    wordContainers.forEach((container) => container.remove());
    const group = new WordGroup(textbook);
    const newGroupButton: HTMLElement | null = (event.target as HTMLElement).closest('.group__card');
    const level = newGroupButton?.dataset.level;
    this.switchStyles(newGroupButton);
    if (level) {
      const newGroupNumber = this.group.indexOf(level);
      localStorage.setItem('group', JSON.stringify(newGroupNumber));
      group.renderCards(newGroupNumber);
    }
  }

  switchStyles(newGroupButton: HTMLElement | null) {
    const groupNumber = parseInt(localStorage.getItem('group') as string, 10);
    const groupButton = document.querySelector(`[data-level=${this.group[groupNumber]}]`);
    groupButton?.classList.remove('active');
    newGroupButton?.classList.add('active');
  }
}