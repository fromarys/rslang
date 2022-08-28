import { IWord } from '../interfaces';
import { Api } from '../api';

export class TextbookService {
  public static async getWords(group: string, page: string): Promise<void | IWord[]> {
    const result = await Api.getWords(group, page).catch((error) => console.log(error));
    if (Array.isArray(result)) {
      return result;
    }
  }
}
