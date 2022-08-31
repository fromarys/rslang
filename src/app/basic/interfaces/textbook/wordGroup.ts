export interface IWordGroup {
  renderCards(group: number, page: number, isGroup: boolean): void;
}

export interface IWordGroupView {
  activeElement: HTMLElement;
}
