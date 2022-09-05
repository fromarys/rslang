import { ERoutes } from '../../basic';
import './games.scss';

export function getTemplate(): string {
  return `
  <div class="mini-games">
    <a href="#${ERoutes.audiocall}" class="item-game audio-call">
      <h3 class="title-game game-audio">Audio call</h3>
    </a>
    <a href="#${ERoutes.sprint}" class="item-game sprint">
      <h3 class="title-game game-sprint">Sprint</h3>
    </a>
  </div>
  `;
}
