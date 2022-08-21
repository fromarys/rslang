import { IAuth, IUser, IRegisterResponse, IError } from '../interfaces/interfaces';

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
   * Отправляет POST запрос
   * @param url URL адрес
   * @param body Отправляемые данные
   * @returns Respose-ответ без декодирования
   */
  private async sendPost(url: string, body: unknown): Promise<Response> {
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Создает нового пользователя
   * @param user Данные о пользователе
   * @returns Ответ о регистрации или ошибка
   */
  public async createNewUser(user: IUser): Promise<IRegisterResponse | IError> {
    return this.sendPost(`${this.baseUrl}/users`, user).then(async (resp) => {
      if (resp.ok) {
        return (await resp.json()) as IRegisterResponse;
      } else {
        return { error: true, errorMessage: await resp.text() };
      }
    });
  }

  /**
   * Производит логин пользователя
   * @param user Имя и пароль пользователя
   * @returns Токен логина или ошибка
   */
  public async loginUser(user: { email: string; password: string }): Promise<IAuth | IError> {
    return this.sendPost(`${this.baseUrl}/signin`, user).then(async (resp) => {
      if (resp.ok) {
        return (await resp.json()) as IAuth;
      } else {
        return { error: true, errorMessage: await resp.text() };
      }
    });
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
}
