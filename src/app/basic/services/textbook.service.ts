import { IAggregatedWords, IError, IWord } from '../interfaces';
import { WORDS_PER_PAGE } from '../common';
import { Api } from '../api';

export class TextbookService {
  public static async getWords(group: string, page: string): Promise<void | IWord[]> {
    const response: void | IWord[] = Api.isAuthorized()
      ? await this.getAggregatedWords(group, page)
      : await this.getAllWords(group, page);
    return response;
  }

  private static async getAggregatedWords(group: string, page: string): Promise<IWord[] | void> {
    const query: Record<string, string> = {
      group: group,
      page: page,
      wordsPerPage: `${WORDS_PER_PAGE}`,
    };
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
}
