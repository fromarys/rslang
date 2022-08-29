import './main.scss';

export const getTemplate = () => {
  return `<div data-root="advantages"></div>

          <div class="opportunities" data-root="opportunities"></div>

          <div class="our-team">
            <h2 class="title-team">Our team</h2>
            <div class="container-team" data-root="our-team"></div>
          </div>
          `;
};
