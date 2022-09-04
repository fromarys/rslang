import { GameLinksView } from './gameLinks.view';

export class GameLinks {
  private readonly view: GameLinksView;
  private readonly sprint: HTMLLinkElement;
  private readonly audiocall: HTMLLinkElement;
  constructor(private parentNode: HTMLElement) {
    this.view = new GameLinksView(this.parentNode);
    this.sprint = this.view.sprint.node;
    this.audiocall = this.view.audiocall.node;
    document.addEventListener('DisableLinks', () => this.disableLinks());
    document.addEventListener('EnableLinks', () => this.enableLinks());
  }

  /**
   * Присваивает стили при деактивации ссылок
   */
  private disableLinks(): void {
    this.sprint.style.opacity = '0.8';
    this.audiocall.style.opacity = '0.8';
    this.sprint.style.pointerEvents = 'none';
    this.audiocall.style.pointerEvents = 'none';
  }

  /**
   * Присваивает стили при активации ссылок
   */
  private enableLinks(): void {
    this.sprint.style.opacity = '1';
    this.audiocall.style.opacity = '1';
    this.sprint.style.pointerEvents = 'auto';
    this.audiocall.style.pointerEvents = 'auto';
  }
}
