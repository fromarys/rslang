import './card-opportunities.scss';
import { ICardOpportunities } from './models';

export function getTemplate(settings: ICardOpportunities): string {
  return `<div class="card-opportunities">
            <img class="card-backgr" src="${settings.srcBackgr}" alt="background" />
            <div class="content-card">
              <img class="icon-opportunities" src="${settings.srcIcon}" alt="textbook" />
              <p class="text-opportunities">${settings.text}</p>
            </div>
          </div>
  `;
}
