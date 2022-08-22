import Api from '../../basic/api/api';
import { IAuth, IError } from '../../basic/interfaces/interfaces';

export default class AuthPageModel {
  api: Api;

  constructor() {
    this.api = new Api('http://127.0.0.1:8080');
  }

  public registerNewUser(name: string, email: string, password: string) {
    return this.api.createNewUser({ name, email, password });
  }

  /**
   * Производит логин пользователя
   * @param email Логин пользователя
   * @param password Пароль пользователя
   * @returns Токен логина или ошибка
   */
  public async loginUser(email: string, password: string): Promise<IAuth | IError> {
    return this.api.loginUser({ email, password });
  }

  /**
   * Записыват токен и ИД пользователя для дальнейших запросов
   * @param response Токен логина и ИД
   */
  public setAuthData(response: IAuth): void {
    this.api.setAuthData(response);
  }
}
