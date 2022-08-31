import {
  IAuth,
  IUser,
  IUserResponse,
  IError,
  IUserWord,
  IStatistic,
  ISetting,
  IWord,
  IAggregatedWords,
} from '../interfaces';
import { baseUrl } from '../common/constants';
/* eslint-disable */
export class Api {
  static mainToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGNmZWY4ZjBiODhlNGViYzY4MDk5OCIsImlhdCI6MTY2MTk0NjI5OCwiZXhwIjoxNjYxOTYwNjk4fQ.SDaQvgo-eshq1Thb_6Vk3Cp5Ql-RBufcEAu_jKv4Qp0';
  static refreshToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGNmZWY4ZjBiODhlNGViYzY4MDk5OCIsInRva2VuSWQiOiIxZTQxNzZhZi01ZTcyLTQzNTQtYTZkMS1hNjQwZjQyYTQwYTEiLCJpYXQiOjE2NjE5NDYyOTgsImV4cCI6MTY2MTk2MjQ5OH0.gwvVGXQaCW9Zr13D-sfaS1SCau8Ovy74z-CDTNKI164';
  static userId = '630cfef8f0b88e4ebc680998';
  static tokenTime = 0;

  constructor(...rest: unknown[]) {
    throw new Error("This class can't be invoked through constructor");
    console.log(rest);
  }

  /**
   * Проверяет авторизирован ли пользователь
   * @returns true - пользователь авторизирован
   */
  static isAuthorized(): boolean {
    return !!Api.mainToken;
  }

  /**
   * Возвращает токен-строку или null, если не авторизирован
   * @returns Токен-строка или null, если не авторизирован
   */
  static getAuthToken(): Pick<IAuth, 'token' | 'userId' | 'refreshToken'> | null {
    return Api.isAuthorized() ? { token: Api.mainToken, userId: Api.userId, refreshToken: Api.refreshToken } : null;
  }

  /**
   * Сохраняет токен и ИД пользователя для дальнейших запросов
   * @param response Токен логина и ИД
   */
  static setAuthData(response: IAuth, time?: number): void {
    Api.mainToken = response.token;
    Api.refreshToken = response.refreshToken;
    Api.userId = response.userId;
    Api.tokenTime = time ? time : Date.now();
  }

  //static async responseHandler<T>(response: Response): Promise<T | IError> {}

  /**
   * Отправляет POST запрос
   * @param url URL адрес
   * @param body Отправляемые данные
   * @returns Respose-ответ без декодирования
   */
  static async sendPost<T>(url: string, body: unknown, auth = false): Promise<T | IError> {
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
  static async getGetAuth<T>(url: string, mainToken = true): Promise<T | IError> {
    return fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${mainToken ? Api.mainToken : Api.refreshToken}`,
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
  static async getGet<T>(url: string): Promise<T | IError> {
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
  static async sendPut<T>(url: string, body: unknown): Promise<T | IError> {
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
  static async sendDelete(url: string): Promise<boolean> {
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
  static async getWords(group: string, page: string): Promise<IWord[] | IError> {
    return Api.getGet<IWord[]>(`${baseUrl}/words?group=${group}&page=${page}`);
  }

  /**
   * Возвращает слово по ИД
   * @param id ID слова
   * @returns Массив слов заданной группы и страницы
   */
  static async getWordsById(id: string): Promise<IWord | IError> {
    return Api.getGet<IWord>(`${baseUrl}/words/${id}`);
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
  static async createNewUser(user: IUser): Promise<IUserResponse | IError> {
    return Api.sendPost<IUserResponse>(`${baseUrl}/users`, user);
  }

  /**
   * Возвращает имя и пароль текущего пользователя
   * @returns Имя и пароль пользователя
   */
  static async getUserInfo(): Promise<IUserResponse | IError> {
    return Api.getGetAuth<IUserResponse>(`${baseUrl}/users/${Api.userId}`);
  }

  static async getUserNewToken(): Promise<IAuth | IError> {
    return Api.getGetAuth<IAuth>(`${baseUrl}/users/${Api.userId}/tokens`, false);
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
  static async getUserAllWords(): Promise<IUserWord[] | IError> {
    return Api.getGetAuth<IUserWord[]>(`${baseUrl}/users/${Api.userId}/words`);
  }

  /**
   * Создает новое пользовательское слово
   * @param wordId ID пользовательского слова
   * @param body Информация о слове
   * @returns Информация о слове
   */
  static async createUserWord(wordId: string, body: IUserWord): Promise<IUserWord | IError> {
    return Api.sendPost<IUserWord>(`${baseUrl}/users/${Api.userId}/words/${wordId}`, body, true);
  }

  /**
   * Возвращает информацию о слове пользователя
   * @param wordId ID слова пользователя
   * @returns Информацию о слове пользователя
   */
  static async getUserWord(wordId: string): Promise<IUserWord | IError> {
    return Api.getGetAuth<IUserWord>(`${baseUrl}/users/${Api.userId}/words/${wordId}`);
  }

  /**
   * Обновляет пользовательское слово
   * @param wordId ID пользовательского слова
   * @param body Информация о слове
   * @returns Информация о слове
   */
  static async updateUserWord(wordId: string, body: IUserWord): Promise<IUserWord | IError> {
    return Api.sendPut<IUserWord>(`${baseUrl}/users/${Api.userId}/words/${wordId}`, body);
  }

  /**
   * Удаляет пользовательское слово
   * @param wordId ID пользовательского слова
   * @returns Удачно или нет
   */
  static async deleteUserWord(wordId: string): Promise<boolean> {
    return Api.sendDelete(`${baseUrl}/users/${Api.userId}/words/${wordId}`);
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
  static async getUserAllAgregatedWords(query: Record<string, string>): Promise<IAggregatedWords[] | IError> {
    const queryString = Object.entries(query)
      .reduce((acc, cur) => acc + `${cur[0]}=${cur[1]}&`, '?')
      .slice(0, -1);
    return Api.getGetAuth<IAggregatedWords[]>(`${baseUrl}/users/${Api.userId}/aggregatedWords${queryString}`);
  }

  /**
   * Возвращает информацию о Agregated слове
   * @param wordId ID Agregated слова
   * @returns Информацию о Agregated слове
   */
  static async getUserAgregatedWord(wordId: string): Promise<IUserWord | IError> {
    return Api.getGetAuth<IUserWord>(`${baseUrl}/users/${Api.userId}/aggregatedWords/${wordId}`);
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
  static async getUserStatistics(): Promise<IStatistic | IError> {
    return Api.getGetAuth<IStatistic>(`${baseUrl}/users/${Api.userId}/statistics`);
  }

  /**
   * Устанавливает новую статистику
   * @param body Новая статистика
   * @returns Новая статистика
   */
  static async updateUserStatistics(body: IStatistic): Promise<IStatistic | IError> {
    return Api.sendPut<IStatistic>(`${baseUrl}/users/${Api.userId}/statistics`, body);
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
  static async getUserSettings(): Promise<ISetting | IError> {
    return Api.getGetAuth<ISetting>(`${baseUrl}/users/${Api.userId}/settings`);
  }

  /**
   * Устанавливает новые настройки
   * @param body Новая статистика
   * @returns Новая статистика
   */
  static async updateUserSettings(body: ISetting): Promise<ISetting | IError> {
    return Api.sendPut<ISetting>(`${baseUrl}/users/${Api.userId}/settings`, body);
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
  static async loginUser(user: { email: string; password: string }): Promise<IAuth | IError> {
    return Api.sendPost<IAuth>(`${baseUrl}/signin`, user);
  }
}
