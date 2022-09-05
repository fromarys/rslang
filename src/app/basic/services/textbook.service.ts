import { IAggregatedWords, IError, IUserWord, IWord } from '../interfaces';
import { WORDS_PER_PAGE, DIFFICULT_WORDS_PER_PAGE } from '../common';
import { Api } from '../api';
import { EUserWordStatus } from '../enums';

export class TextbookService {
  public static async getWords(group: string, page: string, isGroup: boolean): Promise<void | IWord[]> {
    const response: void | IWord[] = Api.isAuthorized()
      ? await this.getUserAggregatedWords(group, page, isGroup)
      : await this.getAllWords(group, page);
    return response;
  }

  private static async getUserAggregatedWords(group: string, page: string, isGroup: boolean): Promise<IWord[] | void> {
    const query = this.setQuery(group, page, isGroup);
    const response: void | IError | IAggregatedWords[] = await Api.getUserAllAgregatedWords(query).catch((error) =>
      console.log(error)
    );
    if (Array.isArray(response)) {
      return response[0].paginatedResults;
    }
  }

  private static async getAllWords(group: string, page: string): Promise<IWord[] | void> {
    const response: void | IWord[] | IError = await Api.getWords(group, page).catch((error) => console.log(error));
    if (Array.isArray(response)) {
      return response;
    }
  }

  private static setQuery(group: string, page: string, isGroup: boolean): Record<string, string> {
    const filter = {
      'userWord.difficulty': EUserWordStatus.difficult,
    };
    const query: Record<string, string> = {
      group: group,
      page: page,
      wordsPerPage: `${WORDS_PER_PAGE}`,
    };
    if (!isGroup) {
      query.filter = JSON.stringify(filter);
      query.wordsPerPage = `${DIFFICULT_WORDS_PER_PAGE}`;
      delete query.group;
      delete query.page;
    }
    return query;
  }

  public static async createUserWord(wordId: string, body: IUserWord) {
    return await Api.createUserWord(wordId, body).catch((error: IError) => console.log(error.errorMessage));
  }

  public static async updateUserWord(wordId: string, body: IUserWord) {
    return await Api.updateUserWord(wordId, body).catch((error: IError) => console.log(error.errorMessage));
  }
}
