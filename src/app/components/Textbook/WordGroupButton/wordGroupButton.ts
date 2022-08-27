import { activityClass, groups, IWordGroupButton } from '../../../basic';
import { TextbookView } from '../../../pages';
import { WordGroup } from '../WordGroup';
import WordGroupButtonView from './wordGroupButton.view';

export class WordGroupButton implements IWordGroupButton {
  readonly view: WordGroupButtonView;
  readonly parentNode: HTMLElement;
  readonly groupList: string[];
  readonly textbook: TextbookView;
  groupClassName: string;
  group: HTMLElement;
  constructor(textbook: TextbookView, item: string[]) {
    this.groupList = Object.keys(groups);
    this.textbook = textbook;
    this.parentNode = textbook.group.node;
    this.view = new WordGroupButtonView(this.parentNode, item);
    this.group = this.view.group.node;
    this.groupClassName = this.group.className;
    this.view.group.node.onclick = (event: MouseEvent) => this.clickHandler(textbook, event);
    if (this.group.classList.contains(activityClass)) this.textbook.activeGroup = this.group;
  }

  private clickHandler(textbook: TextbookView, event: MouseEvent): void {
    const group: WordGroup = new WordGroup(textbook);
    const switchedGroupButton: HTMLElement | null = (event.target as HTMLElement).closest(`.${this.groupClassName}`);
    const level: string | undefined = switchedGroupButton?.dataset.level;
    this.switchStyles(switchedGroupButton);
    if (level) {
      const newGroupNumber: number = this.groupList.indexOf(level);
      localStorage.setItem('group', JSON.stringify(newGroupNumber));
      group.renderCards(newGroupNumber);
    }
  }

  private switchStyles(newGroupButton: HTMLElement | null): void {
    this.textbook.activeGroup.classList.remove(activityClass);
    if (newGroupButton) {
      this.textbook.activeGroup = newGroupButton;
      this.textbook.activeGroup.classList.add(activityClass);
    }
  }
}
