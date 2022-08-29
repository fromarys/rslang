import { activityClass, groups } from '../../../basic';
import { TextbookView } from '../../../pages';
import { WordGroup } from '../WordGroup';
import WordGroupButtonView from './wordGroupButton.view';

export class WordGroupButton {
  private readonly view: WordGroupButtonView;
  private readonly parentNode: HTMLElement;
  private readonly groupClassName: string;
  private readonly groupButton: HTMLElement;
  private readonly groupNumber;
  constructor(private textbook: TextbookView, private item: string[]) {
    this.parentNode = this.textbook.group.node;
    this.groupNumber = Object.keys(groups).indexOf(this.item[0]);
    this.view = new WordGroupButtonView(this.parentNode, this.item);
    this.groupButton = this.view.group.node;
    this.groupClassName = this.groupButton.className;
    this.groupButton.onclick = () => this.clickHandler();
    if (this.groupButton.classList.contains(activityClass)) this.textbook.activeGroup = this.groupButton;
  }

  private clickHandler(): void {
    const group: WordGroup = new WordGroup(this.textbook);
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
