import './footer.scss';

export function getTemplate(): string {
  return `
  <div class="content-footer">
    <ul class="link-github">
      <li class="item-link-github">&copy;2022</li>
      <a class="link-github-footer" href="https://github.com/fromarys" target="_blank"
      ><li class="item-link-github">Yevgenii Mineyev</li></a
      >
      <a class="link-github-footer" href="https://github.com/OksanaSeregina" target="_blank"
      ><li class="item-link-github">Oksana Seregina</li></a
      >
      <a class="link-github-footer" href="https://github.com/Andronio2" target="_blank"
      ><li class="item-link-github">Andrey Smirnov</li></a
      >
    </ul>
    <a class="rslink-footer" href="https://rs.school/js/" target="_blank"
        ><img src="public/static/rs_school_js.svg" alt="logo" style="height: 50px"
    /></a>
   </div>
  `;
}
