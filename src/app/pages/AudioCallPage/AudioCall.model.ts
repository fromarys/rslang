import { EUserWordStatus } from '../../basic';
import { Api } from '../../basic/api/api';
import { PAGES_PER_GROUP } from '../../basic/common/constants';
import { IError, IUserWord, IWord } from '../../basic/interfaces/interfaces';

const NORMAL_DIFFICULTY = 3;
const DIFFICULT_DIFFICULTY = 5;

export default class AudioCallModel {
  constructor() {
    console.log('AudioCallModel constructor');
  }

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

  public saveResultToServer(words: IWord[], answers: boolean[]): void {
    words.forEach((word: IWord, index) => {
      void Api.getUserWord(word.id).then((wordInfo) => {
        if ('difficulty' in wordInfo) {
          const updateWordInfo: IUserWord = {
            difficulty: wordInfo.difficulty,
            optional: {
              gamesRight: wordInfo.optional.gamesRight,
            },
          };
          // Если запись уже существует, то исправляем и обновляем
          if (answers[index]) {
            // Если правильный ответ
            updateWordInfo.optional.gamesRight++;
            if (
              (updateWordInfo.difficulty === EUserWordStatus.normal &&
                updateWordInfo.optional.gamesRight > NORMAL_DIFFICULTY) ||
              (updateWordInfo.difficulty === EUserWordStatus.difficult &&
                updateWordInfo.optional.gamesRight > DIFFICULT_DIFFICULTY)
            ) {
              updateWordInfo.difficulty = EUserWordStatus.studied;
            }
          } else {
            // Если неправильный
            updateWordInfo.optional.gamesRight = 0;
            if (updateWordInfo.difficulty === EUserWordStatus.normal) {
              updateWordInfo.difficulty = EUserWordStatus.difficult;
            } else if (updateWordInfo.difficulty === EUserWordStatus.studied) {
              updateWordInfo.difficulty = EUserWordStatus.normal;
            }
          }
          void Api.updateUserWord(word.id, updateWordInfo);
        } else {
          // Иначе создаем новую запись
          const newWordInfo: IUserWord = {
            difficulty: answers[index] ? EUserWordStatus.normal : EUserWordStatus.difficult,
            optional: {
              gamesRight: answers[index] ? 1 : 0,
            },
          };
          void Api.createUserWord(word.id, newWordInfo);
        }
      });
    });
  }
}
