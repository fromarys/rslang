import './card-team.scss';
import { ICardTeam } from './models';

export function getTemplate(settings: ICardTeam): string {
  return `<div class="person" style="background-image: url('${settings.srcPerson}')">
            <div class="info-person">
              <a class="link-github-team" href="${settings.hrefPerson}" target="_blank">
              <h4 class="name-person">${settings.namePerson}</h4></a>
              <p class="done-person">${settings.donePerson}</p>
            </div>
          </div>
  `;
}
