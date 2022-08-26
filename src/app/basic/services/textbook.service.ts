import { WordsApi, IWord } from '../../basic';

export class TextbookService {
  public static async getWords(group: number, page: number): Promise<IWord[]> {
    return await WordsApi.getWords(group, page);
  }
}
