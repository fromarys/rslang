import './card-team.scss';
import { ICardTeam } from './models';

export function getTemplate(settings: ICardTeam): string {
  return `<a class="link-github-team" href="${settings.hrefPerson}" target="_blank">
            <div class="person" style="background-image: url('${settings.srcPerson}')">
              <div class="info-person">
                <h4 class="name-person">${settings.namePerson}</h4>
                <p class="done-person">${settings.donePerson}</p>
              </div>
            </div>
          </a>
  `;
}
