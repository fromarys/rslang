import { EUserWordStatus } from '../enums';

import { ITextbook } from './textbook';

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
  id?: string;
  wordId?: string;
  difficulty: EUserWordStatus;
  optional: {
    sprint: {
      right: number;
      wrong: number;
      longRight: number;
    };
    audioCall: {
      right: number;
      wrong: number;
      longRight: number;
    };
  };
}

export interface IWord {
  id: string;
  _id: string;
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
  userWord?: IUserWord;
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

export interface IRoutes {
  textbook: ITextbook;
}

export interface IAggregatedWords {
  paginatedResults: IWord[];
  totalCount: Record<string, number>;
}
