import Api from '../../basic/api/api';
import { IAuth, IError } from '../../basic/interfaces/interfaces';

export default class AuthPageModel {
  public registerNewUser(name: string, email: string, password: string) {
    return Api.createNewUser({ name, email, password });
  }

  /**
   * Производит логин пользователя
   * @param email Логин пользователя
   * @param password Пароль пользователя
   * @returns Токен логина или ошибка
   */
  public async loginUser(email: string, password: string): Promise<IAuth | IError> {
    return Api.loginUser({ email, password });
  }

  /**
   * Записыват токен и ИД пользователя для дальнейших запросов
   * @param response Токен логина и ИД
   */
  public setAuthData(response: IAuth): void {
    Api.setAuthData(response);
  }
}
