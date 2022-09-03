import './games.scss';

export function getTemplate(): string {
  return `
  <div class="mini-games">
    <a class="item-game audio-call">
      <h3 class="title-game game-audio">Audio call</h3>
    </a>
    <a class="item-game sprint">
      <h3 class="title-game game-sprint">Sprint</h3>
    </a>
  </div>
  `;
}
