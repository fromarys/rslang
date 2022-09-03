import { EUserWordStatus, IAggregatedWords, IWord } from '../../../basic';
import { Creator } from '../../../components';

export default class StatisticsWords extends Creator {
  constructor(parent: HTMLElement, words: IAggregatedWords[] | null) {
    const totalNewWords = words ? words[0].totalCount[0].count : 0;
    const totalStudiedWords = !words
      ? null
      : words[0].paginatedResults.filter((word: IWord) => {
          const userWord = word.userWord;
          return !!userWord && userWord.difficulty === EUserWordStatus.studied;
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
      'statistics__window words-window',
      `
        <div class="statistics__window-title">Статистика по словам</div>
        <div class="words-window__words-window">
          <div class="words-window__statistic">
            <span class="sing-new"></span>
            <span class="statistics__text">Новых слов за день: ${totalNewWords}</span>
          </div>
          <div class="words-window__statistic">
            <span class="sing-exclamation"></span>
            <span class="statistics__text">Изученных слов за день: ${
              totalStudiedWords ? totalStudiedWords.length : 0
            }</span>
          </div>
          <div class="words-window__statistic">
            <span class="sing-pie"></span>
            <span class="statistics__text">процент правильных ответов за день: ${
              sprintRight && sprintWrong && audioCallRight && audioCallWrong
                ? Math.round(
                    ((sprintRight.length + audioCallRight.length) * 100) /
                      (sprintRight.length + sprintWrong.length + audioCallRight.length + audioCallWrong.length)
                  )
                : 0
            } %</span>
          </div>
        </div>
      `
    );
  }
}
