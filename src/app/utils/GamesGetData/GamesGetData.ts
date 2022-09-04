import { Api, EUserWordStatus, IAggregatedWords, IError, IWord, PAGES_PER_GROUP, WORDS_PER_PAGE } from '../../basic';

export class GamesGetData {
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

  /**
   * Возвращает список неизученных слов из определенного раздела
   * @param group Номер раздела
   * @param page Номер страницы
   * @returns Список слов
   */
  public async getAggregatedWordsFromGroup(group: number, page: number): Promise<IWord[]> {
    const promises: Promise<IAggregatedWords[] | IError>[] = [];
    const filter = {
      'userWord.difficulty': { $ne: EUserWordStatus.studied },
    };
    const obj = {
      group: `${group}`,
      page: '0',
      wordsPerPage: `${WORDS_PER_PAGE}`,
      filter: JSON.stringify(filter),
    };

    for (let i = 0; i < page; i++) {
      obj.page = `${i}`;
      promises.push(Api.getUserAllAgregatedWords(obj));
    }
    return Promise.all(promises).then((pages: Array<IAggregatedWords[] | IError>) => {
      let words: IWord[] = [];
      pages.forEach((page: IError | IAggregatedWords[]) => {
        if (!('error' in page)) {
          words = words.concat(page[0].paginatedResults);
        }
      });
      return words.reverse();
    });
  }
}
