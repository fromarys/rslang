import { IAggregatedWords, IStatistic, IWord } from '../../../basic';
import { Creator } from '../../../components';

export default class StatisticsGames extends Creator {
  constructor(parent: HTMLElement, stat: IStatistic | null, words: IAggregatedWords[] | null) {
    const newWordAudioCall = !words
      ? null
      : words[0].paginatedResults.filter((word: IWord) => {
          const userWord = word.userWord;
          if (userWord) {
            if (userWord.optional.audioCall.right > 0) return true;
            if (userWord.optional.audioCall.wrong > 0) return true;
          }
          return false;
        });

    const audioCallRight = !words
      ? null
      : words[0].paginatedResults.filter((word: IWord) => {
          const userWord = word.userWord;
          if (userWord) {
            if (userWord.optional.audioCall.right > 0) return true;
          }
          return false;
        });

    const audioCallWrong = !words
      ? null
      : words[0].paginatedResults.filter((word: IWord) => {
          const userWord = word.userWord;
          if (userWord) {
            if (userWord.optional.audioCall.wrong > 0) return true;
          }
          return false;
        });

    const newWordSprint = !words
      ? null
      : words[0].paginatedResults.filter((word: IWord) => {
          const userWord = word.userWord;
          if (userWord) {
            if (userWord.optional.sprint.right > 0) return true;
            if (userWord.optional.sprint.wrong > 0) return true;
          }
          return false;
        });

    const sprintRight = !words
      ? null
      : words[0].paginatedResults.filter((word: IWord) => {
          const userWord = word.userWord;
          if (userWord) {
            if (userWord.optional.sprint.right > 0) return true;
          }
          return false;
        });

    const sprintWrong = !words
      ? null
      : words[0].paginatedResults.filter((word: IWord) => {
          const userWord = word.userWord;
          if (userWord) {
            if (userWord.optional.sprint.wrong > 0) return true;
          }
          return false;
        });

    super(
      parent,
      'div',
      'statistics__window games-window',
      `
        <div class="statistics__window-title">???????????????????? ??????</div>
        <div class="games-window__games-window">
          <div class="games-window__title-game">???????? "????????????????????"</div>
          <div class="games-window__statistic">
            <span class="sing-new"></span>
            <span class="statistics__text">?????????? ???????? ???? ????????: ${newWordAudioCall ? newWordAudioCall.length : 0}</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-pie"></span>
            <span class="statistics__text">?????????????? ????????????????????: ${
              audioCallRight && audioCallWrong && (audioCallRight.length > 0 || audioCallWrong.length > 0)
                ? Math.round((audioCallRight.length * 100) / (audioCallRight.length + audioCallWrong.length))
                : 0
            } %</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-right"></span>
            <span class="statistics__text">???????????????? ??????????????????: ${audioCallRight ? audioCallRight.length : 0}</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-wrong"></span>
            <span class="statistics__text">???????????????? ??????????????????????: ${audioCallWrong ? audioCallWrong.length : 0}</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-right"></span>
            <span class="statistics__text">
              ?????????? ?????????????? ???????????????????? ????????????????????????????????????: ${stat ? stat.optional.audioCall : 0}
            </span>
          </div>
        </div>
        
        <div class="games-window__games-window">
          <div class="games-window__title-game">???????? "????????????"</div>
          <div class="games-window__statistic">
            <span class="sing-new"></span>
            <span class="statistics__text">?????????? ???????? ???? ????????: ${newWordSprint ? newWordSprint.length : 0}</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-pie"></span>
            <span class="statistics__text">?????????????? ????????????????????: ${
              sprintRight && sprintWrong && (sprintRight.length > 0 || sprintWrong.length > 0)
                ? Math.round((sprintRight.length * 100) / (sprintRight.length + sprintWrong.length))
                : 0
            } %</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-right"></span>
            <span class="statistics__text">???????????????? ??????????????????: ${sprintRight ? sprintRight.length : 0}</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-wrong"></span>
            <span class="statistics__text">???????????????? ??????????????????????: ${sprintWrong ? sprintWrong.length : 0}</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-right"></span>
            <span class="statistics__text">
              ?????????? ?????????????? ???????????????????? ????????????????????????????????????: ${stat ? stat.optional.sprint : 0}
            </span>
          </div>
        </div>
      `
    );
  }
}
