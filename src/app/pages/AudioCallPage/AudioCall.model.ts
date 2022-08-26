import Api from '../../basic/api/api';
import { PAGES_PER_GROUP, PAGES_PER_PART } from '../../basic/common/constants';
import { IError, IWord } from '../../basic/interfaces/interfaces';

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
}
