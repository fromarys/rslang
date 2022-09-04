import { activityClass, EStorage, groups, TOTAL_GROUPS } from '../../../basic';
import { TextbookView } from '../../../pages';
import { WordGroup } from '../WordGroup';
import WordTabView from './wordTab.view';

export class WordTab {
  private readonly view: WordTabView;
  private readonly parentNode: HTMLElement;
  private readonly groupButton: HTMLElement;
  private readonly groupNumber: number;
  private readonly isGroup: boolean;
  constructor(private textbook: TextbookView, private groupData: string[]) {
    this.isGroup = !!this.groupData[0];
    this.parentNode = this.textbook.group.node;
    this.groupNumber = this.isGroup ? Object.keys(groups).indexOf(this.groupData[0]) : TOTAL_GROUPS;
    this.view = new WordTabView(this.parentNode, this.groupData);
    this.groupButton = this.view.groupButton.node;
    this.groupButton.onclick = () => this.clickHandler();
    this.setActiveTab();
  }

  private clickHandler(): void {
    const group: WordGroup = new WordGroup(this.textbook);
    localStorage.setItem(EStorage.group, JSON.stringify(this.groupNumber));
    group.renderGroup(this.groupNumber, undefined, this.isGroup);
    this.switchStyles();
  }

  private switchStyles(): void {
    this.textbook.activeGroup.classList.remove(activityClass);
    this.textbook.activeGroup = this.groupButton;
    this.textbook.activeGroup.classList.add(activityClass);
  }

  private renderGroupOnLoad(): void {
    if (!WordGroup.instance) {
      const group = new WordGroup(this.textbook);
      group.renderGroup(this.groupNumber, undefined, this.isGroup);
    }
  }

  private setActiveTab(): void {
    const currentGroup = Number(localStorage.getItem(EStorage.group));
    if (currentGroup === this.groupNumber) this.groupButton.classList.add(activityClass);
    if (this.groupButton.classList.contains(activityClass)) {
      this.textbook.activeGroup = this.groupButton;
      this.renderGroupOnLoad();
    }
  }
}
