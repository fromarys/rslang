import { IWord } from '../../basic';
import { Api } from '../api';

export class TextbookService {
  public static async getWords(group: string, page: string): Promise<void | IWord[]> {
    const result = await Api.getWords(group, page);
    if (Array.isArray(result)) {
      return result;
    } else {
      console.log(result.errorMessage);
    }
  }
}
