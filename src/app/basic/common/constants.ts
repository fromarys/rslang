import { EUserWordStatus } from '../enums';

export const groups: Record<string, string> = {
  A1: 'Easy',
  A2: 'Easy',
  B1: 'Medium',
  B2: 'Medium',
  C1: 'Hard',
  C2: 'Hard',
};

export const difficult: Record<string, string> = {
  '': 'Difficult words',
};

export const maxWordsPages = 30;

export const cardOnLoad = 0;

export const activityClass = 'active';

export const baseUrl = 'https://rslang-fromarys.herokuapp.com';

export const GROUP_AMOUNT = 6;

export const PAGES_PER_GROUP = 30;

export const WORDS_PER_PAGE = 20;

export const DIFFICULT_WORDS_PER_PAGE = 3600;

export const USER_WORD_TEMPLATE = {
  difficulty: EUserWordStatus.normal,
  optional: {
    sprint: {
      right: 0,
      wrong: 0,
      longRight: 0,
    },
    audioCall: {
      right: 0,
      wrong: 0,
      longRight: 0,
    },
  },
};

export const DiffButtonState: Record<string, string> = {
  normal: 'Mark as difficult',
  difficult: 'Mark as easy',
};

export const StudButtonState: Record<string, string> = {
  normal: 'Add to studied',
  studied: 'Remove from studied',
};

export const TOTAL_GROUPS = 7;
