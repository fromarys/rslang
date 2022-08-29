import './advantages.scss';

export function getTemplate(): string {
  return `<div class="advantages" >
            <div class="left-content-advantages">
              <h2 class="title-advantages">Learn English easily and simply with RS Lang</h2>
              <p class="text-advantages">Stop learning English, it's time to learn it!</p>
              <p class="text-advantages">Start right now!</p>
            </div>
            <div class="right-content-advantages">
              <img class="img-advantages" src="../public/static/learn.png" alt="learn" />
            </div>
          </div>
  `;
}
