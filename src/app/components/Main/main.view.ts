import './main.scss';

export const getTemplate = () => {
  return `<div class="learn">
            <div class="left-content-learn">
              <h2 class="title-learn">Learn English easily and simply with RS Lang</h2>
              <p class="text-learn">Stop learning English, it's time to learn it!</p>
              <p class="text-learn">Start right now!</p>
            </div>
            <div class="right-content-learn">
              <img class="img-learn" src="../public/static/learn.png" alt="learn" />
            </div>
          </div>

          <div class="app-features">
            <div class="card-app-features">
              <img class="card-backgr" src="../public/static/card-backgr1.jpeg" alt="background" />
              <div class="content-card">
                <img class="icon-app-features" src="../public/static/textbook.png" alt="textbook" />
                <p class="text-app-features">Electronic textbook with a database of words to study</p>
              </div>
            </div>
            <div class="card-app-features">
              <img class="card-backgr" src="../public/static/card-backgr2.jpeg" alt="background" />
              <div class="content-card">
                <img class="icon-app-features" src="../public/static/play.png" alt="textbook" />
                <p class="text-app-features">Mini-games for repeating the learned words</p>
              </div>
            </div>
            <div class="card-app-features">
              <img class="card-backgr" src="../public/static/card-backgr3.jpeg" alt="background" />
              <div class="content-card">
                <img class="icon-app-features" src="../public/static/stat.png" alt="textbook" />
                <p class="text-app-features">Detailed statistics of your achievements</p>
              </div>
            </div>
          </div>

          <div class="our-team">
            <h2 class="title-team">Our team</h2>
            <div class="container-team">
              <div class="person">
                <img src="../public/static/person.jpg" alt="person" class="img-person" />
                <div class="info-person">
                  <a class="link-github-team" href="https://github.com/fromarys" target="_blank"
                    ><h4 class="name-person">Yevgenii Mineyev</h4></a
                  >
                  <p class="done-person">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div class="person">
                <img src="../public/static/person.jpg" alt="person" class="img-person" />
                <div class="info-person">
                  <a class="link-github-team" href="https://github.com/fromarys" target="_blank"
                    ><h4 class="name-person">Yevgenii Mineyev</h4></a
                  >
                  <p class="done-person">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div class="person">
                <img src="../public/static/person.jpg" alt="person" class="img-person" />
                <div class="info-person">
                  <a class="link-github-team" href="https://github.com/fromarys" target="_blank"
                    ><h4 class="name-person">Yevgenii Mineyev</h4></a
                  >
                  <p class="done-person">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
          `;
};
