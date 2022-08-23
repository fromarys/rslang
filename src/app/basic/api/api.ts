import { IAuth, IUser, IUserResponse, IError, IUserWord, IStatistic, ISetting, IWord } from '../interfaces/interfaces';

export default class Api {
  static instance: Api;
  static mainToken = '';
  static refreshToken = '';
  static userId = '';

  constructor(private baseUrl: string) {
    if (typeof Api.instance === 'object') {
      return Api.instance;
    }
    Api.instance = this;
  }

  /**
   * Проверяет авторизирован ли пользователь
   * @returns true - пользователь авторизирован
   */
  public isAuthorized(): boolean {
    return !!Api.mainToken;
  }

  /**
   * Возвращает токен-строку или null, если не авторизирован
   * @returns Токен-строка или null, если не авторизирован
   */
  public getAuthToken(): Pick<IAuth, 'token' | 'userId'> | null {
    return this.isAuthorized() ? { token: Api.mainToken, userId: Api.userId } : null;
  }

  /**
   * Сохраняет токен и ИД пользователя для дальнейших запросов
   * @param response Токен логина и ИД
   */
  public setAuthData(response: IAuth): void {
    Api.mainToken = response.token;
    Api.refreshToken = response.refreshToken;
    Api.userId = response.userId;
  }

  //private async responseHandler<T>(response: Response): Promise<T | IError> {}

  /**
   * Отправляет POST запрос
   * @param url URL адрес
   * @param body Отправляемые данные
   * @returns Respose-ответ без декодирования
   */
  private async sendPost<T>(url: string, body: unknown, auth = false): Promise<T | IError> {
    return fetch(url, {
      method: 'POST',
      headers: {
        Authorization: auth ? `Bearer ${Api.mainToken}` : '',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(async (resp: Response) => {
      return resp.ok ? ((await resp.json()) as T) : { error: true, errorMessage: await resp.text() };
    });
  }

  /**
   * Отправляет GET запрос с авторизацией
   * @param url URL адрес
   * @returns Respose-ответ без декодирования
   */
  private async getGetAuth<T>(url: string): Promise<T | IError> {
    return fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Api.mainToken}`,
        Accept: 'application/json',
      },
    }).then(async (resp: Response) => {
      return resp.ok ? ((await resp.json()) as T) : { error: true, errorMessage: await resp.text() };
    });
  }

  /**
   * Отправляет GET запрос без авторизации
   * @param url URL адрес
   * @returns Respose-ответ без декодирования
   */
  private async getGet<T>(url: string): Promise<T | IError> {
    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }).then(async (resp: Response) => {
      return resp.ok ? ((await resp.json()) as T) : { error: true, errorMessage: await resp.text() };
    });
  }

  /**
   * Отправляет PUT запрос
   * @param url URL адрес
   * @param body Отправляемые данные
   * @returns Respose-ответ без декодирования
   */
  private async sendPut<T>(url: string, body: unknown): Promise<T | IError> {
    return fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${Api.mainToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(async (resp: Response) => {
      return resp.ok ? ((await resp.json()) as T) : { error: true, errorMessage: await resp.text() };
    });
  }

  /**
   * Отправляет DELETE запрос
   * @param url URL адрес
   * @returns Respose-ответ без декодирования
   */
  private async sendDelete(url: string): Promise<boolean> {
    return fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Api.mainToken}`,
      },
    }).then((resp: Response) => resp.ok);
  }

  /*
   *
   *  Раздел Words
   *
   */

  /**
   * Возвращает список слов заданной группы и страницы
   * @param group Номер группы
   * @param page Номер страницы
   * @returns Массив слов заданной группы и страницы
   */
  public async getWords(group: string, page: string): Promise<IWord[] | IError> {
    return this.getGet<IWord[]>(`${this.baseUrl}/words?group=${group}&page=${page}`);
  }

  /**
   * Возвращает слово по ИД
   * @param id ID слова
   * @returns Массив слов заданной группы и страницы
   */
  public async getWordsById(id: string): Promise<IWord | IError> {
    return this.getGet<IWord>(`${this.baseUrl}/words/${id}`);
  }

  /*
   *
   *  Раздел Users
   *
   */

  /**
   * Создает нового пользователя
   * @param user Данные о пользователе
   * @returns Ответ о регистрации или ошибка
   */
  public async createNewUser(user: IUser): Promise<IUserResponse | IError> {
    return this.sendPost<IUserResponse>(`${this.baseUrl}/users`, user);
  }

  /**
   * Возвращает имя и пароль текущего пользователя
   * @returns Имя и пароль пользователя
   */
  public async getUserInfo(): Promise<IUserResponse | IError> {
    return this.getGetAuth<IUserResponse>(`${this.baseUrl}/users/${Api.userId}`);
  }

  /*
   *
   *  Раздел Users/Words
   *
   */

  /**
   * Возвращает массив пользовательских слов
   * @returns Массив пользовательских слов
   */
  public async getUserAllWords(): Promise<IUserWord[] | IError> {
    return this.getGetAuth<IUserWord[]>(`${this.baseUrl}/users/${Api.userId}/words`);
  }

  /**
   * Создает новое пользовательское слово
   * @param wordId ID пользовательского слова
   * @param body Информация о слове
   * @returns Информация о слове
   */
  public async createUserWord(wordId: string, body: IUserWord): Promise<IUserWord | IError> {
    return this.sendPost<IUserWord>(`${this.baseUrl}/users/${Api.userId}/words/${wordId}`, body);
  }

  /**
   * Возвращает информацию о слове пользователя
   * @param wordId ID слова пользователя
   * @returns Информацию о слове пользователя
   */
  public async getUserWord(wordId: string): Promise<IUserWord | IError> {
    return this.getGetAuth<IUserWord>(`${this.baseUrl}/users/${Api.userId}/words/${wordId}`);
  }

  /**
   * Обновляет пользовательское слово
   * @param wordId ID пользовательского слова
   * @param body Информация о слове
   * @returns Информация о слове
   */
  public async updateUserWord(wordId: string, body: IUserWord): Promise<IUserWord | IError> {
    return this.sendPut<IUserWord>(`${this.baseUrl}/users/${Api.userId}/words/${wordId}`, body);
  }

  /**
   * Удаляет пользовательское слово
   * @param wordId ID пользовательского слова
   * @returns Удачно или нет
   */
  public async deleteUserWord(wordId: string): Promise<boolean> {
    return this.sendDelete(`${this.baseUrl}/users/${Api.userId}/words/${wordId}`);
  }

  /*
   *
   *  Раздел Users/AggregatedWords
   *
   */

  /**
   * Возвращает массив Agregated слов
   * @param query query-параметры запроса
   * @returns Массив Agregated слов
   */
  public async getUserAllAgregatedWords(query: Record<string, string>): Promise<IUser[] | IError> {
    const queryString = Object.entries(query)
      .reduce((acc, cur) => acc + `${cur[0]}=${cur[1]}&`, '?')
      .slice(0, -1);
    return this.getGetAuth<IUser[]>(`${this.baseUrl}/users/${Api.userId}/aggregatedWords${queryString}`);
  }

  /**
   * Возвращает информацию о Agregated слове
   * @param wordId ID Agregated слова
   * @returns Информацию о Agregated слове
   */
  public async getUserAgregatedWord(wordId: string): Promise<IUserWord | IError> {
    return this.getGetAuth<IUserWord>(`${this.baseUrl}/users/${Api.userId}/aggregatedWords/${wordId}`);
  }

  /*
   *
   *  Раздел Users/Statistic
   *
   */

  /**
   * Возвращает статистику о пользователе
   * @returns Статистика о пользователе
   */
  public async getUserStatistics(): Promise<IStatistic | IError> {
    return this.getGetAuth<IStatistic>(`${this.baseUrl}/users/${Api.userId}/statistics`);
  }

  /**
   * Устанавливает новую статистику
   * @param body Новая статистика
   * @returns Новая статистика
   */
  public async updateUserStatistics(body: IStatistic): Promise<IStatistic | IError> {
    return this.sendPut<IStatistic>(`${this.baseUrl}/users/${Api.userId}/statistics`, body);
  }

  /*
   *
   *  Раздел Users/Setting
   *
   */

  /**
   * Возвращает настройки пользователя
   * @returns Настройки пользователя
   */
  public async getUserSettings(): Promise<ISetting | IError> {
    return this.getGetAuth<ISetting>(`${this.baseUrl}/users/${Api.userId}/settings`);
  }

  /**
   * Устанавливает новые настройки
   * @param body Новая статистика
   * @returns Новая статистика
   */
  public async updateUserSettings(body: ISetting): Promise<ISetting | IError> {
    return this.sendPut<ISetting>(`${this.baseUrl}/users/${Api.userId}/settings`, body);
  }

  /*
   *
   *  Раздел Sign In
   *
   */

  /**
   * Производит логин пользователя
   * @param user Имя и пароль пользователя
   * @returns Токен логина или ошибка
   */
  public async loginUser(user: { email: string; password: string }): Promise<IAuth | IError> {
    return this.sendPost<IAuth>(`${this.baseUrl}/signin`, user);
  }
}
