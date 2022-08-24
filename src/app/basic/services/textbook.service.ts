import { WordsApi } from '../../basic';
import { IWord } from '../common';

export class TextbookService {
  public static async getWords(group: number, page: number): Promise<IWord[]> {
    return await WordsApi.getWords(group, page);
  }
}
