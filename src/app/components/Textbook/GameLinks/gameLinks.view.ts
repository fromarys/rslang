import { ERoutes } from '../../../basic';
import { Creator } from '../../Creator';
import './gameLinks.scss';

export class GameLinksView {
  wrapper;
  sprint: Creator<HTMLLinkElement>;
  audiocall: Creator<HTMLLinkElement>;
  sprintTitle: Creator<HTMLElement>;
  audiocallTitle: Creator<HTMLElement>;
  sprintImage: Creator<HTMLImageElement>;
  audiocallImage: Creator<HTMLImageElement>;
  constructor(parentNode: HTMLElement) {
    this.wrapper = new Creator(parentNode, 'div', 'textbook__games');
    this.sprint = new Creator(this.wrapper.node, 'a', 'textbook__game');
    this.sprint.node.href = `#${ERoutes.sprint}`;
    this.audiocall = new Creator(this.wrapper.node, 'a', 'textbook__game');
    this.audiocall.node.href = `#${ERoutes.audiocall}`;
    this.sprintTitle = new Creator(this.sprint.node, 'h3', 'textbook__title', ERoutes.sprint);
    this.audiocallTitle = new Creator(this.audiocall.node, 'h3', 'textbook__title', ERoutes.audiocall);
    this.sprintImage = new Creator(this.sprint.node, 'img', 'textbook__image');
    this.sprintImage.node.src = 'public/static/sprint.jpg';
    this.audiocallImage = new Creator(this.audiocall.node, 'img', 'textbook__image');
    this.audiocallImage.node.src = 'public/static/audio-call.jpg';
  }
}
