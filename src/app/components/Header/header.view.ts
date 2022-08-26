import './header.scss';

export function getTemplate(): string {
  return `
        <div class="content-header">
          <div class="logo">
            <a href="#" class="link-logo">
              <img class="img-logo" src="../../../public/static/logo.jpg" alt="logo" />
              <h1 class="title-logo">RSLang</h1>
            </a>
          </div>

          <nav class="header-menu">
            <div class="menu">
              <div class="item">
                <a href="#"><span>Main</span></a>
              </div>
              <div class="item">
                <a href="#"><span>Textbook</span></a>
              </div>
              <div class="item">
                <a href="#"><span>Games</span></a>
              </div>
              <div class="item">
                <a href="#"><span>Statistics</span></a>
              </div>
            </div>
          </nav>

          <div class="log-in">
          <a href="#"><span>Log in</span></a>
            </div>
  `;
}
