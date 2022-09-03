import { IAggregatedWords, IStatistic, IWord } from '../../../basic';
import { Creator } from '../../../components';

export default class StatisticsGames extends Creator {
  constructor(parent: HTMLElement, stat: IStatistic | null, words: IAggregatedWords[] | null) {
    const totalNewWords = !words ? null : words[0].totalCount;
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
      'statistics__games games-window',
      `
        <div class="games-window__title">Статистика игр</div>
        <div class="games-window__games-window">
          <div class="games-window__title-game">Игра "Аудиовызов"</div>
          <div class="games-window__statistic">
            <span class="sing-new"></span>
            <span class="games-window__text">Новых слов за день: ${
              newWordAudioCall ? newWordAudioCall.length : 0
            }</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-pie"></span>
            <span class="games-window__text">Процент правильных: ${
              audioCallRight && audioCallWrong
                ? Math.round((audioCallRight.length * 100) / (audioCallRight.length + audioCallWrong.length))
                : 0
            }</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-right"></span>
            <span class="games-window__text">Отгадано правильно: ${audioCallRight ? audioCallRight.length : 0}</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-wrong"></span>
            <span class="games-window__text">Отгадано неправильно: ${audioCallWrong ? audioCallWrong.length : 0}</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-right"></span>
            <span class="games-window__text">
              Самая длинная правильная последовательность: ${stat ? stat.optional.audioCall : 0}
            </span>
          </div>
        </div>
        
        <div class="games-window__games-window">
          <div class="games-window__title-game">Игра "Спринт"</div>
          <div class="games-window__statistic">
            <span class="sing-new"></span>
            <span class="games-window__text">Новых слов за день: ${newWordSprint ? newWordSprint.length : 0}</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-pie"></span>
            <span class="games-window__text">Процент правильных: ${
              sprintRight && sprintWrong
                ? Math.round((sprintRight.length * 100) / (sprintRight.length + sprintWrong.length))
                : 0
            }</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-right"></span>
            <span class="games-window__text">Отгадано правильно: ${sprintRight ? sprintRight.length : 0}</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-wrong"></span>
            <span class="games-window__text">Отгадано неправильно: ${sprintWrong ? sprintWrong.length : 0}</span>
          </div>
          <div class="games-window__statistic">
            <span class="sing-right"></span>
            <span class="games-window__text">
              Самая длинная правильная последовательность: ${stat ? stat.optional.sprint : 0}
            </span>
          </div>
        </div>
      `
    );
  }
}
