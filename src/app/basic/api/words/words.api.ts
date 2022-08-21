import { Backend } from '../../common/constants';
import { IWord } from '../../common';

export class WordsApi {
  public static async getWords(group: number, page: number): Promise<IWord[]> {
    return fetch(`${Backend.host}/words?group=${group}&page=${page}`, {
      method: 'GET',
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  }
}
