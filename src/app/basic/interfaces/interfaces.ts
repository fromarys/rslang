export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
}

export interface IAuth {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export interface IError {
  error: boolean;
  errorMessage: string;
}

export interface IUserWord {
  difficulty: 'string';
  optional: Record<string, string>;
}
