import { activityClass, groups } from '../../../basic';
import { TextbookView } from '../../../pages';
import { WordGroup } from '../WordGroup';
import WordTabView from './wordTab.view';

export class WordTab {
  private readonly view: WordTabView;
  private readonly parentNode: HTMLElement;
  private readonly groupClassName: string;
  private readonly groupButton: HTMLElement;
  private readonly groupNumber;
  private readonly group;
  isGroup: boolean;
  constructor(private textbook: TextbookView, private groupData: string[]) {
    this.isGroup = !!this.groupData[0];
    this.parentNode = this.textbook.group.node;
    this.groupNumber = this.isGroup ? Object.keys(groups).indexOf(this.groupData[0]) : 0;
    this.view = new WordTabView(this.parentNode, this.groupData);
    this.group = new WordGroup(this.textbook, this.isGroup);
    this.group.renderCards();
    this.groupButton = this.view.groupButton.node;
    this.groupClassName = this.groupButton.className;
    this.groupButton.onclick = () => this.clickHandler();
    if (this.groupButton.classList.contains(activityClass)) this.textbook.activeGroup = this.groupButton;
  }

  private clickHandler(): void {
    const group: WordGroup = new WordGroup(this.textbook, this.isGroup);
    localStorage.setItem('group', JSON.stringify(this.groupNumber));
    group.renderCards(this.groupNumber);
    this.switchStyles();
  }

  private switchStyles(): void {
    this.textbook.activeGroup.classList.remove(activityClass);
    this.textbook.activeGroup = this.groupButton;
    this.textbook.activeGroup.classList.add(activityClass);
  }
}
