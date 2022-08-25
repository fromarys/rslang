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
  difficulty: string;
  optional: Record<string, string>;
}

export interface IWord {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

export interface IStatistic {
  learnedWords: number;
  optional: Record<string, string>;
}

export interface ISetting {
  wordsPerDay: number;
  optional: Record<string, string>;
}

export interface ICreator<NodeType extends HTMLElement = HTMLElement> {
  node: NodeType;
  destroy(): void;
}
