import './card-opportunities.scss';
import { ICardOpportunities } from './models';

export function getTemplate(settings: ICardOpportunities): string {
  return `<a href="#${settings.route}">
            <div class="card-opportunities" style="background-image: url('${settings.srcBackgr}')">
              <div class="content-card" style="background-image: url('${settings.srcIcon}')">
              </div>
              <div class="text-opportunities">${settings.text}</div>
            </div>
          </a>
  `;
}
