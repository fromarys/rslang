import './header.scss';
import { IHeaderMenu } from '../../basic/events/models';
import { ERoutes } from '../../basic';

export function getTemplate(menu: typeof IHeaderMenu): string {
  return `
        <div class="content-header">
          <div class="logo">
            <a href="/" class="link-logo">
              <img class="img-logo" src="../../../public/static/logo.jpg" alt="logo" />
              <h1 class="title-logo">RSLang</h1>
            </a>
          </div>

          <nav data-role="header-menu" class="header-menu">
            <div class="menu">
              <div data-id="${menu.Main}" class="item">
                <a href="${ERoutes.main}"><span>${menu.Main}</span></a>
              </div>
              <div data-id="${menu.Textbook}" class="item">
                <a href="#${ERoutes.textbook}"><span>${menu.Textbook}</span></a>
              </div>
              <div data-id="${menu.AudioCall}" class="item">
                <a href="#${ERoutes.audiocall}"><span>${menu.AudioCall}</span></a>
              </div>
              <div data-id="${menu.Sprint}" class="item">
                <a href="#${ERoutes.sprint}"><span>${menu.Sprint}</span></a>
              </div>
              <div data-id="${menu.Statistics}" class="item">
                <a href="#${ERoutes.statistics}"><span>${menu.Statistics}</span></a>
              </div>
            </div>
          </nav>

          <div data-role="auth" class="visible"></div>
          `;
}
