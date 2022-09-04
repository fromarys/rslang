import { EUserWordStatus } from '../../basic';
import { Api } from '../../basic/api/api';
import { PAGES_PER_GROUP } from '../../basic/common/constants';
import { IError, IStatistic, IUserWord, IWord } from '../../basic/interfaces/interfaces';

const NORMAL_DIFFICULTY = 3;
const DIFFICULT_DIFFICULTY = 5;

export default class AudioCallModel {
  /**
   * Возвращает список слов из определенного раздела
   * @param group Номер раздела
   * @returns Список слов
   */
  public async getWordsFromGroup(group: number, page?: number): Promise<IWord[]> {
    const promises: Promise<IWord[] | IError>[] = [];
    const maxPages = page ? page : PAGES_PER_GROUP;
    for (let i = 0; i < maxPages; i++) {
      promises.push(Api.getWords(`${group}`, `${i}`));
    }
    return Promise.all(promises).then((pages: Array<IWord[] | IError>) => {
      let words: IWord[] = [];
      pages.forEach((page: IWord[] | IError) => {
        if (!('error' in page)) {
          words = words.concat(page);
        }
      });
      return words;
    });
  }

  public saveResultToServer(word: IWord, answer: boolean): void {
    void Api.getUserWord(word.id).then((wordInfo) => {
      if ('difficulty' in wordInfo) {
        // Если запись уже существует, то исправляем и обновляем
        delete wordInfo.id;
        delete wordInfo.wordId;
        if (answer) {
          // Если правильный ответ
          wordInfo.optional.audioCall.right++;
          wordInfo.optional.audioCall.longRight++;
          if (
            (wordInfo.difficulty === EUserWordStatus.normal &&
              wordInfo.optional.audioCall.longRight > NORMAL_DIFFICULTY) ||
            (wordInfo.difficulty === EUserWordStatus.difficult &&
              wordInfo.optional.audioCall.longRight > DIFFICULT_DIFFICULTY)
          ) {
            wordInfo.difficulty = EUserWordStatus.studied;
          }
        } else {
          // Если неправильный
          wordInfo.optional.audioCall.wrong++;
          wordInfo.optional.audioCall.longRight = 0;
          if (wordInfo.difficulty === EUserWordStatus.normal) {
            wordInfo.difficulty = EUserWordStatus.difficult;
          } else if (wordInfo.difficulty === EUserWordStatus.studied) {
            wordInfo.difficulty = EUserWordStatus.normal;
          }
        }
        void Api.updateUserWord(word.id, wordInfo);
      } else {
        // Иначе создаем новую запись
        const newWordInfo: IUserWord = {
          difficulty: answer ? EUserWordStatus.normal : EUserWordStatus.difficult,
          optional: {
            sprint: {
              right: 0,
              wrong: 0,
              longRight: 0,
            },
            audioCall: {
              right: answer ? 1 : 0,
              wrong: !answer ? 1 : 0,
              longRight: answer ? 1 : 0,
            },
          },
        };
        void Api.createUserWord(word.id, newWordInfo);
      }
    });
  }

  public saveRightSequenceToStatistics(result: boolean[]): void {
    let max = 0;
    let curMax = 0;
    result.forEach((res) => {
      if (res) {
        curMax++;
        max = curMax > max ? curMax : max;
      } else {
        curMax = 0;
      }
    });
    void Api.getUserStatistics().then((stat: IError | IStatistic) => {
      let newStat: IStatistic;
      if ('error' in stat) {
        newStat = {
          learnedWords: 0,
          optional: {
            audioCall: `${max}`,
            sprint: '0',
          },
        };
      } else {
        newStat = stat;
        delete newStat.id;
        const oldMax = parseInt(newStat.optional.audioCall);
        max = max > oldMax ? max : oldMax;
        newStat.optional.audioCall = `${max}`;
      }
      void Api.updateUserStatistics(newStat);
    });
  }
}
