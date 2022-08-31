/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/components/Advantages/advantages.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/Advantages/advantages.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/CardOpportunities/card-opportunities.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/CardOpportunities/card-opportunities.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/CardTeam/card-team.scss":
/*!****************************************************!*\
  !*** ./src/app/components/CardTeam/card-team.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Footer/footer.scss":
/*!***********************************************!*\
  !*** ./src/app/components/Footer/footer.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Header/header.scss":
/*!***********************************************!*\
  !*** ./src/app/components/Header/header.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Main/main.scss":
/*!*******************************************!*\
  !*** ./src/app/components/Main/main.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Textbook/WordCard/wordCard.scss":
/*!************************************************************!*\
  !*** ./src/app/components/Textbook/WordCard/wordCard.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Textbook/WordDetails/wordDetails.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/Textbook/WordDetails/wordDetails.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Textbook/WordGroupButton/wordGroupButton.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/Textbook/WordGroupButton/wordGroupButton.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Textbook/WordPagination/wordPagination.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/Textbook/WordPagination/wordPagination.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/pages/TextbookPage/textbook.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/TextbookPage/textbook.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _app_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.view */ "./src/app/app.view.ts");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ "./src/app/basic/index.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");



class App {
    constructor() {
        this.root = document.querySelector('.root');
        this.view = new _app_view__WEBPACK_IMPORTED_MODULE_0__.AppView(this.root);
        this.parentNode = this.view.main.instance;
        this.routes = {
            '/': _pages__WEBPACK_IMPORTED_MODULE_2__.Textbook,
            auth: _pages__WEBPACK_IMPORTED_MODULE_2__.Textbook,
            games: _pages__WEBPACK_IMPORTED_MODULE_2__.Textbook,
            sprint: _pages__WEBPACK_IMPORTED_MODULE_2__.Textbook,
            textbook: _pages__WEBPACK_IMPORTED_MODULE_2__.Textbook,
            audiocall: _pages__WEBPACK_IMPORTED_MODULE_2__.Textbook,
            statistics: _pages__WEBPACK_IMPORTED_MODULE_2__.Textbook,
        };
        this.router = new _basic__WEBPACK_IMPORTED_MODULE_1__.Router(this.view, this.routes);
    }
    start() {
        this.router.run();
    }
}


/***/ }),

/***/ "./src/app/app.view.ts":
/*!*****************************!*\
  !*** ./src/app/app.view.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppView": () => (/* binding */ AppView)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/app/index.ts");

class AppView {
    constructor(root) {
        this.header = new ___WEBPACK_IMPORTED_MODULE_0__.Header(root);
        this.header.init();
        this.main = new ___WEBPACK_IMPORTED_MODULE_0__.Main(root);
        this.main.init();
        this.footer = new ___WEBPACK_IMPORTED_MODULE_0__.Footer(root);
        this.footer.init();
    }
    renderPage(route) {
        this.main.instance.innerHTML = '';
        route.render();
    }
}


/***/ }),

/***/ "./src/app/basic/api/api.ts":
/*!**********************************!*\
  !*** ./src/app/basic/api/api.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/app/basic/common/constants.ts");

class Api {
    constructor(...rest) {
        throw new Error("This class can't be invoked through constructor");
        console.log(rest);
    }
    /**
     * Проверяет авторизирован ли пользователь
     * @returns true - пользователь авторизирован
     */
    static isAuthorized() {
        return !!Api.mainToken;
    }
    /**
     * Возвращает токен-строку или null, если не авторизирован
     * @returns Токен-строка или null, если не авторизирован
     */
    static getAuthToken() {
        return Api.isAuthorized() ? { token: Api.mainToken, userId: Api.userId, refreshToken: Api.refreshToken } : null;
    }
    /**
     * Сохраняет токен и ИД пользователя для дальнейших запросов
     * @param response Токен логина и ИД
     */
    static setAuthData(response, time) {
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
    static async sendPost(url, body, auth = false) {
        return fetch(url, {
            method: 'POST',
            headers: {
                Authorization: auth ? `Bearer ${Api.mainToken}` : '',
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then(async (resp) => {
            return resp.ok ? (await resp.json()) : { error: true, errorMessage: await resp.text() };
        });
    }
    /**
     * Отправляет GET запрос с авторизацией
     * @param url URL адрес
     * @returns Respose-ответ без декодирования
     */
    static async getGetAuth(url, mainToken = true) {
        return fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${mainToken ? Api.mainToken : Api.refreshToken}`,
                Accept: 'application/json',
            },
        }).then(async (resp) => {
            return resp.ok ? (await resp.json()) : { error: true, errorMessage: await resp.text() };
        });
    }
    /**
     * Отправляет GET запрос без авторизации
     * @param url URL адрес
     * @returns Respose-ответ без декодирования
     */
    static async getGet(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }).then(async (resp) => {
            return resp.ok ? (await resp.json()) : { error: true, errorMessage: await resp.text() };
        });
    }
    /**
     * Отправляет PUT запрос
     * @param url URL адрес
     * @param body Отправляемые данные
     * @returns Respose-ответ без декодирования
     */
    static async sendPut(url, body) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${Api.mainToken}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then(async (resp) => {
            return resp.ok ? (await resp.json()) : { error: true, errorMessage: await resp.text() };
        });
    }
    /**
     * Отправляет DELETE запрос
     * @param url URL адрес
     * @returns Respose-ответ без декодирования
     */
    static async sendDelete(url) {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${Api.mainToken}`,
            },
        }).then((resp) => resp.ok);
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
    static async getWords(group, page) {
        return Api.getGet(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/words?group=${group}&page=${page}`);
    }
    /**
     * Возвращает слово по ИД
     * @param id ID слова
     * @returns Массив слов заданной группы и страницы
     */
    static async getWordsById(id) {
        return Api.getGet(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/words/${id}`);
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
    static async createNewUser(user) {
        return Api.sendPost(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users`, user);
    }
    /**
     * Возвращает имя и пароль текущего пользователя
     * @returns Имя и пароль пользователя
     */
    static async getUserInfo() {
        return Api.getGetAuth(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}`);
    }
    static async getUserNewToken() {
        return Api.getGetAuth(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/tokens`, false);
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
    static async getUserAllWords() {
        return Api.getGetAuth(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/words`);
    }
    /**
     * Создает новое пользовательское слово
     * @param wordId ID пользовательского слова
     * @param body Информация о слове
     * @returns Информация о слове
     */
    static async createUserWord(wordId, body) {
        return Api.sendPost(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/words/${wordId}`, body, true);
    }
    /**
     * Возвращает информацию о слове пользователя
     * @param wordId ID слова пользователя
     * @returns Информацию о слове пользователя
     */
    static async getUserWord(wordId) {
        return Api.getGetAuth(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/words/${wordId}`);
    }
    /**
     * Обновляет пользовательское слово
     * @param wordId ID пользовательского слова
     * @param body Информация о слове
     * @returns Информация о слове
     */
    static async updateUserWord(wordId, body) {
        return Api.sendPut(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/words/${wordId}`, body);
    }
    /**
     * Удаляет пользовательское слово
     * @param wordId ID пользовательского слова
     * @returns Удачно или нет
     */
    static async deleteUserWord(wordId) {
        return Api.sendDelete(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/words/${wordId}`);
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
    static async getUserAllAgregatedWords(query) {
        const queryString = Object.entries(query)
            .reduce((acc, cur) => acc + `${cur[0]}=${cur[1]}&`, '?')
            .slice(0, -1);
        return Api.getGetAuth(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/aggregatedWords${queryString}`);
    }
    /**
     * Возвращает информацию о Agregated слове
     * @param wordId ID Agregated слова
     * @returns Информацию о Agregated слове
     */
    static async getUserAgregatedWord(wordId) {
        return Api.getGetAuth(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/aggregatedWords/${wordId}`);
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
    static async getUserStatistics() {
        return Api.getGetAuth(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/statistics`);
    }
    /**
     * Устанавливает новую статистику
     * @param body Новая статистика
     * @returns Новая статистика
     */
    static async updateUserStatistics(body) {
        return Api.sendPut(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/statistics`, body);
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
    static async getUserSettings() {
        return Api.getGetAuth(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/settings`);
    }
    /**
     * Устанавливает новые настройки
     * @param body Новая статистика
     * @returns Новая статистика
     */
    static async updateUserSettings(body) {
        return Api.sendPut(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/users/${Api.userId}/settings`, body);
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
    static async loginUser(user) {
        return Api.sendPost(`${_common_constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/signin`, user);
    }
}
Api.mainToken = '';
Api.refreshToken = '';
Api.userId = '';
Api.tokenTime = 0;


/***/ }),

/***/ "./src/app/basic/api/index.ts":
/*!************************************!*\
  !*** ./src/app/basic/api/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.Api)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/app/basic/api/api.ts");



/***/ }),

/***/ "./src/app/basic/common/constants.ts":
/*!*******************************************!*\
  !*** ./src/app/basic/common/constants.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ROUTE": () => (/* binding */ DEFAULT_ROUTE),
/* harmony export */   "GROUP_AMOUNT": () => (/* binding */ GROUP_AMOUNT),
/* harmony export */   "PAGES_PER_GROUP": () => (/* binding */ PAGES_PER_GROUP),
/* harmony export */   "WORDS_PER_PAGE": () => (/* binding */ WORDS_PER_PAGE),
/* harmony export */   "activityClass": () => (/* binding */ activityClass),
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl),
/* harmony export */   "cardOnLoad": () => (/* binding */ cardOnLoad),
/* harmony export */   "groups": () => (/* binding */ groups),
/* harmony export */   "maxWordsPages": () => (/* binding */ maxWordsPages)
/* harmony export */ });
const groups = {
    A1: 'Easy',
    A2: 'Easy',
    B1: 'Medium',
    B2: 'Medium',
    C1: 'Hard',
    C2: 'Hard',
};
const maxWordsPages = 30;
const cardOnLoad = 0;
const activityClass = 'active';
const baseUrl = 'https://rslang-fromarys.herokuapp.com';
const GROUP_AMOUNT = 6;
const PAGES_PER_GROUP = 30;
const WORDS_PER_PAGE = 20;
const DEFAULT_ROUTE = '/';


/***/ }),

/***/ "./src/app/basic/common/index.ts":
/*!***************************************!*\
  !*** ./src/app/basic/common/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ROUTE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_ROUTE),
/* harmony export */   "GROUP_AMOUNT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.GROUP_AMOUNT),
/* harmony export */   "PAGES_PER_GROUP": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PAGES_PER_GROUP),
/* harmony export */   "WORDS_PER_PAGE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.WORDS_PER_PAGE),
/* harmony export */   "activityClass": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.activityClass),
/* harmony export */   "baseUrl": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.baseUrl),
/* harmony export */   "cardOnLoad": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.cardOnLoad),
/* harmony export */   "groups": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.groups),
/* harmony export */   "maxWordsPages": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.maxWordsPages)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/app/basic/common/constants.ts");



/***/ }),

/***/ "./src/app/basic/enums/enums.ts":
/*!**************************************!*\
  !*** ./src/app/basic/enums/enums.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERegisterButtonText": () => (/* binding */ ERegisterButtonText),
/* harmony export */   "ERoutes": () => (/* binding */ ERoutes),
/* harmony export */   "EUserWordStatus": () => (/* binding */ EUserWordStatus)
/* harmony export */ });
var ERegisterButtonText;
(function (ERegisterButtonText) {
    ERegisterButtonText["register"] = "Register";
    ERegisterButtonText["login"] = "Login";
    ERegisterButtonText["cancel"] = "Cancel";
})(ERegisterButtonText || (ERegisterButtonText = {}));
var ERoutes;
(function (ERoutes) {
    ERoutes["main"] = "/";
    ERoutes["textbook"] = "textbook";
})(ERoutes || (ERoutes = {}));
var EUserWordStatus;
(function (EUserWordStatus) {
    EUserWordStatus["studied"] = "studied";
    EUserWordStatus["normal"] = "normal";
    EUserWordStatus["difficult"] = "difficult";
})(EUserWordStatus || (EUserWordStatus = {}));


/***/ }),

/***/ "./src/app/basic/enums/index.ts":
/*!**************************************!*\
  !*** ./src/app/basic/enums/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERegisterButtonText": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_0__.ERegisterButtonText),
/* harmony export */   "ERoutes": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_0__.ERoutes),
/* harmony export */   "EUserWordStatus": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_0__.EUserWordStatus)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./src/app/basic/enums/enums.ts");



/***/ }),

/***/ "./src/app/basic/events/auth-button-click.event.ts":
/*!*********************************************************!*\
  !*** ./src/app/basic/events/auth-button-click.event.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_BUTTON_CLICK_EVENT": () => (/* binding */ AUTH_BUTTON_CLICK_EVENT)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/app/basic/events/models/index.ts");

const AUTH_BUTTON_CLICK_EVENT = new Event(_models__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Login);


/***/ }),

/***/ "./src/app/basic/events/games-click.event.ts":
/*!***************************************************!*\
  !*** ./src/app/basic/events/games-click.event.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GAMES_CLICK_EVENT": () => (/* binding */ GAMES_CLICK_EVENT)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/app/basic/events/models/index.ts");

const GAMES_CLICK_EVENT = new Event(_models__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Games);


/***/ }),

/***/ "./src/app/basic/events/index.ts":
/*!***************************************!*\
  !*** ./src/app/basic/events/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_BUTTON_CLICK_EVENT": () => (/* reexport safe */ _auth_button_click_event__WEBPACK_IMPORTED_MODULE_4__.AUTH_BUTTON_CLICK_EVENT),
/* harmony export */   "GAMES_CLICK_EVENT": () => (/* reexport safe */ _games_click_event__WEBPACK_IMPORTED_MODULE_2__.GAMES_CLICK_EVENT),
/* harmony export */   "IHeaderMenu": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_5__.IHeaderMenu),
/* harmony export */   "MAIN_CLICK_EVENT": () => (/* reexport safe */ _main_click_event__WEBPACK_IMPORTED_MODULE_0__.MAIN_CLICK_EVENT),
/* harmony export */   "STATISTICS_CLICK_EVENT": () => (/* reexport safe */ _statistics_click_event__WEBPACK_IMPORTED_MODULE_3__.STATISTICS_CLICK_EVENT),
/* harmony export */   "TEXT_BOOKS_CLICK_EVENT": () => (/* reexport safe */ _text_books_click_event__WEBPACK_IMPORTED_MODULE_1__.TEXT_BOOKS_CLICK_EVENT)
/* harmony export */ });
/* harmony import */ var _main_click_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-click.event */ "./src/app/basic/events/main-click.event.ts");
/* harmony import */ var _text_books_click_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-books-click.event */ "./src/app/basic/events/text-books-click.event.ts");
/* harmony import */ var _games_click_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./games-click.event */ "./src/app/basic/events/games-click.event.ts");
/* harmony import */ var _statistics_click_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistics-click.event */ "./src/app/basic/events/statistics-click.event.ts");
/* harmony import */ var _auth_button_click_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-button-click.event */ "./src/app/basic/events/auth-button-click.event.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models */ "./src/app/basic/events/models/index.ts");








/***/ }),

/***/ "./src/app/basic/events/main-click.event.ts":
/*!**************************************************!*\
  !*** ./src/app/basic/events/main-click.event.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAIN_CLICK_EVENT": () => (/* binding */ MAIN_CLICK_EVENT)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/app/basic/events/models/index.ts");

const MAIN_CLICK_EVENT = new Event(_models__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Main);


/***/ }),

/***/ "./src/app/basic/events/models/header-menu.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/basic/events/models/header-menu.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IHeaderMenu": () => (/* binding */ IHeaderMenu)
/* harmony export */ });
var IHeaderMenu;
(function (IHeaderMenu) {
    IHeaderMenu["Main"] = "MAIN";
    IHeaderMenu["Textbook"] = "TEXTBOOK";
    IHeaderMenu["Games"] = "GAMES";
    IHeaderMenu["Statistics"] = "STATISTICS";
    IHeaderMenu["Login"] = "LOG IN";
})(IHeaderMenu || (IHeaderMenu = {}));


/***/ }),

/***/ "./src/app/basic/events/models/index.ts":
/*!**********************************************!*\
  !*** ./src/app/basic/events/models/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IHeaderMenu": () => (/* reexport safe */ _header_menu_model__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu)
/* harmony export */ });
/* harmony import */ var _header_menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-menu.model */ "./src/app/basic/events/models/header-menu.model.ts");



/***/ }),

/***/ "./src/app/basic/events/statistics-click.event.ts":
/*!********************************************************!*\
  !*** ./src/app/basic/events/statistics-click.event.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATISTICS_CLICK_EVENT": () => (/* binding */ STATISTICS_CLICK_EVENT)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/app/basic/events/models/index.ts");

const STATISTICS_CLICK_EVENT = new Event(_models__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Statistics);


/***/ }),

/***/ "./src/app/basic/events/text-books-click.event.ts":
/*!********************************************************!*\
  !*** ./src/app/basic/events/text-books-click.event.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEXT_BOOKS_CLICK_EVENT": () => (/* binding */ TEXT_BOOKS_CLICK_EVENT)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/app/basic/events/models/index.ts");

const TEXT_BOOKS_CLICK_EVENT = new Event(_models__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Textbook);


/***/ }),

/***/ "./src/app/basic/index.ts":
/*!********************************!*\
  !*** ./src/app/basic/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_BUTTON_CLICK_EVENT": () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_5__.AUTH_BUTTON_CLICK_EVENT),
/* harmony export */   "Api": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.Api),
/* harmony export */   "DEFAULT_ROUTE": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ROUTE),
/* harmony export */   "ERegisterButtonText": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_4__.ERegisterButtonText),
/* harmony export */   "ERoutes": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_4__.ERoutes),
/* harmony export */   "EUserWordStatus": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_4__.EUserWordStatus),
/* harmony export */   "GAMES_CLICK_EVENT": () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_5__.GAMES_CLICK_EVENT),
/* harmony export */   "GROUP_AMOUNT": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.GROUP_AMOUNT),
/* harmony export */   "IHeaderMenu": () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_5__.IHeaderMenu),
/* harmony export */   "MAIN_CLICK_EVENT": () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_5__.MAIN_CLICK_EVENT),
/* harmony export */   "PAGES_PER_GROUP": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.PAGES_PER_GROUP),
/* harmony export */   "Router": () => (/* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_6__.Router),
/* harmony export */   "STATISTICS_CLICK_EVENT": () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_5__.STATISTICS_CLICK_EVENT),
/* harmony export */   "TEXT_BOOKS_CLICK_EVENT": () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_5__.TEXT_BOOKS_CLICK_EVENT),
/* harmony export */   "TextbookService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.TextbookService),
/* harmony export */   "WORDS_PER_PAGE": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.WORDS_PER_PAGE),
/* harmony export */   "activityClass": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.activityClass),
/* harmony export */   "baseUrl": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.baseUrl),
/* harmony export */   "cardOnLoad": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.cardOnLoad),
/* harmony export */   "groups": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.groups),
/* harmony export */   "maxWordsPages": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.maxWordsPages)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/app/basic/api/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/basic/services/index.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/app/basic/common/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ "./src/app/basic/interfaces/index.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums */ "./src/app/basic/enums/index.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events */ "./src/app/basic/events/index.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ "./src/app/basic/router/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./src/app/basic/types/index.ts");










/***/ }),

/***/ "./src/app/basic/interfaces/index.ts":
/*!*******************************************!*\
  !*** ./src/app/basic/interfaces/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textbook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textbook */ "./src/app/basic/interfaces/textbook/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "./src/app/basic/interfaces/interfaces.ts");




/***/ }),

/***/ "./src/app/basic/interfaces/interfaces.ts":
/*!************************************************!*\
  !*** ./src/app/basic/interfaces/interfaces.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/app/basic/interfaces/textbook/index.ts":
/*!****************************************************!*\
  !*** ./src/app/basic/interfaces/textbook/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textbook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textbook */ "./src/app/basic/interfaces/textbook/textbook.ts");
/* harmony import */ var _wordCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wordCard */ "./src/app/basic/interfaces/textbook/wordCard.ts");
/* harmony import */ var _wordGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wordGroup */ "./src/app/basic/interfaces/textbook/wordGroup.ts");
/* harmony import */ var _wordDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wordDetails */ "./src/app/basic/interfaces/textbook/wordDetails.ts");
/* harmony import */ var _wordGroupButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wordGroupButton */ "./src/app/basic/interfaces/textbook/wordGroupButton.ts");







/***/ }),

/***/ "./src/app/basic/interfaces/textbook/textbook.ts":
/*!*******************************************************!*\
  !*** ./src/app/basic/interfaces/textbook/textbook.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/app/basic/interfaces/textbook/wordCard.ts":
/*!*******************************************************!*\
  !*** ./src/app/basic/interfaces/textbook/wordCard.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/app/basic/interfaces/textbook/wordDetails.ts":
/*!**********************************************************!*\
  !*** ./src/app/basic/interfaces/textbook/wordDetails.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/app/basic/interfaces/textbook/wordGroup.ts":
/*!********************************************************!*\
  !*** ./src/app/basic/interfaces/textbook/wordGroup.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/app/basic/interfaces/textbook/wordGroupButton.ts":
/*!**************************************************************!*\
  !*** ./src/app/basic/interfaces/textbook/wordGroupButton.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/app/basic/router/index.ts":
/*!***************************************!*\
  !*** ./src/app/basic/router/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_0__.Router)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/app/basic/router/router.ts");



/***/ }),

/***/ "./src/app/basic/router/router.ts":
/*!****************************************!*\
  !*** ./src/app/basic/router/router.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/app/basic/enums/index.ts");

/* eslint-disable*/
class Router {
    constructor(main, routes) {
        this.main = main;
        this.routes = routes;
        this.page = '';
        this.parentNode = this.main.main.instance;
    }
    run() {
        this.switchRoute(this.getHash());
        window.addEventListener('hashchange', () => {
            this.switchRoute(this.getHash());
        });
    }
    switchRoute(hash) {
        const key = this.routes[hash] ? hash : _enums__WEBPACK_IMPORTED_MODULE_0__.ERoutes.main;
        const Route = this.routes[key];
        let route = new Route(this.parentNode);
        if (key === _enums__WEBPACK_IMPORTED_MODULE_0__.ERoutes.textbook) {
            this.page = _enums__WEBPACK_IMPORTED_MODULE_0__.ERoutes.textbook;
        }
        else {
            // const page: number = Number(localStorage.getItem('page')) || 0;
            // const group: number = Number(localStorage.getItem('group')) || 0;
            // route = new Route(this.parentNode, group, page);
            this.page = '';
        }
        this.main.renderPage(route);
    }
    getHash() {
        return window.location.hash.slice(1);
    }
}


/***/ }),

/***/ "./src/app/basic/services/index.ts":
/*!*****************************************!*\
  !*** ./src/app/basic/services/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextbookService": () => (/* reexport safe */ _textbook_service__WEBPACK_IMPORTED_MODULE_0__.TextbookService)
/* harmony export */ });
/* harmony import */ var _textbook_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textbook.service */ "./src/app/basic/services/textbook.service.ts");



/***/ }),

/***/ "./src/app/basic/services/textbook.service.ts":
/*!****************************************************!*\
  !*** ./src/app/basic/services/textbook.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextbookService": () => (/* binding */ TextbookService)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/app/basic/api/index.ts");

class TextbookService {
    static async getWords(group, page) {
        const result = await _api__WEBPACK_IMPORTED_MODULE_0__.Api.getWords(group, page).catch((error) => console.log(error));
        if (Array.isArray(result)) {
            return result;
        }
    }
}


/***/ }),

/***/ "./src/app/basic/types/index.ts":
/*!**************************************!*\
  !*** ./src/app/basic/types/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/app/basic/types/types.ts");



/***/ }),

/***/ "./src/app/basic/types/types.ts":
/*!**************************************!*\
  !*** ./src/app/basic/types/types.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/app/components/Advantages/advantages.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/Advantages/advantages.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Advantages": () => (/* binding */ Advantages)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/app/components/base-component.ts");
/* harmony import */ var _advantages_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advantages.view */ "./src/app/components/Advantages/advantages.view.ts");


class Advantages extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super(...arguments);
        this.element = document.createElement('div');
        this.template = (0,_advantages_view__WEBPACK_IMPORTED_MODULE_1__.getTemplate)();
    }
}


/***/ }),

/***/ "./src/app/components/Advantages/advantages.view.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/Advantages/advantages.view.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplate": () => (/* binding */ getTemplate)
/* harmony export */ });
/* harmony import */ var _advantages_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advantages.scss */ "./src/app/components/Advantages/advantages.scss");

function getTemplate() {
    return `<div class="advantages" >
            <div class="left-content-advantages">
              <h2 class="title-advantages">Learn English easily and simply with RS Lang</h2>
              <p class="text-advantages">Stop learning English, it's time to learn it!</p>
              <p class="text-advantages">Start right now!</p>
            </div>
            <div class="right-content-advantages">
              <img class="img-advantages" src="../public/static/learn.png" alt="learn" />
            </div>
          </div>
  `;
}


/***/ }),

/***/ "./src/app/components/Advantages/index.ts":
/*!************************************************!*\
  !*** ./src/app/components/Advantages/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Advantages": () => (/* reexport safe */ _advantages__WEBPACK_IMPORTED_MODULE_0__.Advantages)
/* harmony export */ });
/* harmony import */ var _advantages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advantages */ "./src/app/components/Advantages/advantages.ts");



/***/ }),

/***/ "./src/app/components/Button/Button.ts":
/*!*********************************************!*\
  !*** ./src/app/components/Button/Button.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _Creator___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Creator/ */ "./src/app/components/Creator/index.ts");

class Button extends _Creator___WEBPACK_IMPORTED_MODULE_0__.Creator {
    constructor(parent, className, text, onClick) {
        super(parent, 'button', className, text);
        this.node.onclick = () => onClick(text);
    }
}


/***/ }),

/***/ "./src/app/components/Button/index.ts":
/*!********************************************!*\
  !*** ./src/app/components/Button/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.Button)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/app/components/Button/Button.ts");



/***/ }),

/***/ "./src/app/components/CardOpportunities/card-opportunities.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/CardOpportunities/card-opportunities.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardOpportunities": () => (/* binding */ CardOpportunities)
/* harmony export */ });
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic */ "./src/app/basic/index.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-component */ "./src/app/components/base-component.ts");
/* harmony import */ var _card_opportunities_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-opportunities.view */ "./src/app/components/CardOpportunities/card-opportunities.view.ts");



class CardOpportunities extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(root, settings) {
        super(root);
        this.settings = settings;
        this.element = document.createElement('div');
        this.template = (0,_card_opportunities_view__WEBPACK_IMPORTED_MODULE_2__.getTemplate)(this.settings);
    }
    get id() {
        return this.settings.id;
    }
    init() {
        super.init();
        this.listen();
    }
    destroy() {
        this.element.removeEventListener('click', this.onCardClick.bind(this));
        super.destroy();
    }
    listen() {
        this.element.addEventListener('click', this.onCardClick.bind(this));
    }
    onCardClick() {
        switch (this.id) {
            case _basic__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Main:
                document.dispatchEvent(_basic__WEBPACK_IMPORTED_MODULE_0__.MAIN_CLICK_EVENT);
                break;
            case _basic__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Textbook:
                document.dispatchEvent(_basic__WEBPACK_IMPORTED_MODULE_0__.TEXT_BOOKS_CLICK_EVENT);
                break;
            case _basic__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Games:
                document.dispatchEvent(_basic__WEBPACK_IMPORTED_MODULE_0__.GAMES_CLICK_EVENT);
                break;
            case _basic__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Statistics:
                document.dispatchEvent(_basic__WEBPACK_IMPORTED_MODULE_0__.STATISTICS_CLICK_EVENT);
                break;
        }
    }
}


/***/ }),

/***/ "./src/app/components/CardOpportunities/card-opportunities.view.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/CardOpportunities/card-opportunities.view.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplate": () => (/* binding */ getTemplate)
/* harmony export */ });
/* harmony import */ var _card_opportunities_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-opportunities.scss */ "./src/app/components/CardOpportunities/card-opportunities.scss");

function getTemplate(settings) {
    return `<div class="card-opportunities">
            <img class="card-backgr" src="${settings.srcBackgr}" alt="background" />
            <div class="content-card">
              <img class="icon-opportunities" src="${settings.srcIcon}" alt="textbook" />
              <p class="text-opportunities">${settings.text}</p>
            </div>
          </div>
  `;
}


/***/ }),

/***/ "./src/app/components/CardOpportunities/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/CardOpportunities/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardOpportunities": () => (/* reexport safe */ _card_opportunities__WEBPACK_IMPORTED_MODULE_1__.CardOpportunities)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/app/components/CardOpportunities/models/index.ts");
/* harmony import */ var _card_opportunities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-opportunities */ "./src/app/components/CardOpportunities/card-opportunities.ts");




/***/ }),

/***/ "./src/app/components/CardOpportunities/models/card-opportunities.model.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/CardOpportunities/models/card-opportunities.model.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/app/components/CardOpportunities/models/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/CardOpportunities/models/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_opportunities_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-opportunities.model */ "./src/app/components/CardOpportunities/models/card-opportunities.model.ts");



/***/ }),

/***/ "./src/app/components/CardTeam/card-team.ts":
/*!**************************************************!*\
  !*** ./src/app/components/CardTeam/card-team.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardTeam": () => (/* binding */ CardTeam)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/app/components/base-component.ts");
/* harmony import */ var _card_team_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-team.view */ "./src/app/components/CardTeam/card-team.view.ts");


class CardTeam extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(root, settings) {
        super(root);
        this.settings = settings;
        this.element = document.createElement('div');
        this.template = (0,_card_team_view__WEBPACK_IMPORTED_MODULE_1__.getTemplate)(this.settings);
    }
}


/***/ }),

/***/ "./src/app/components/CardTeam/card-team.view.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/CardTeam/card-team.view.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplate": () => (/* binding */ getTemplate)
/* harmony export */ });
/* harmony import */ var _card_team_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-team.scss */ "./src/app/components/CardTeam/card-team.scss");

function getTemplate(settings) {
    return `<div class="person">
            <img class="img-person" src="${settings.srcPerson}" />
            <div class="info-person">
              <a class="link-github-team" href="${settings.hrefPerson}" target="_blank">
              <h4 class="name-person">${settings.namePerson}</h4></a>
              <p class="done-person">${settings.donePerson}</p>
            </div>
          </div>
  `;
}


/***/ }),

/***/ "./src/app/components/CardTeam/index.ts":
/*!**********************************************!*\
  !*** ./src/app/components/CardTeam/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardTeam": () => (/* reexport safe */ _card_team__WEBPACK_IMPORTED_MODULE_1__.CardTeam)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/app/components/CardTeam/models/index.ts");
/* harmony import */ var _card_team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-team */ "./src/app/components/CardTeam/card-team.ts");




/***/ }),

/***/ "./src/app/components/CardTeam/models/card-team.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/CardTeam/models/card-team.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/app/components/CardTeam/models/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/CardTeam/models/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_team_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-team.model */ "./src/app/components/CardTeam/models/card-team.model.ts");



/***/ }),

/***/ "./src/app/components/Creator/Creator.ts":
/*!***********************************************!*\
  !*** ./src/app/components/Creator/Creator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Creator": () => (/* binding */ Creator)
/* harmony export */ });
class Creator {
    constructor(parentNode, tagName = 'div', className = '', content = '') {
        const el = document.createElement(tagName);
        if (className)
            el.className = className;
        el.innerHTML = content;
        if (parentNode) {
            parentNode.append(el);
        }
        this.node = el;
    }
    destroy() {
        this.node.remove();
    }
}


/***/ }),

/***/ "./src/app/components/Creator/index.ts":
/*!*********************************************!*\
  !*** ./src/app/components/Creator/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Creator": () => (/* reexport safe */ _Creator__WEBPACK_IMPORTED_MODULE_0__.Creator)
/* harmony export */ });
/* harmony import */ var _Creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Creator */ "./src/app/components/Creator/Creator.ts");



/***/ }),

/***/ "./src/app/components/Footer/footer.ts":
/*!*********************************************!*\
  !*** ./src/app/components/Footer/footer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/app/components/base-component.ts");
/* harmony import */ var _footer_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.view */ "./src/app/components/Footer/footer.view.ts");


class Footer extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super(...arguments);
        this.element = document.createElement('footer');
        this.template = (0,_footer_view__WEBPACK_IMPORTED_MODULE_1__.getTemplate)();
    }
}


/***/ }),

/***/ "./src/app/components/Footer/footer.view.ts":
/*!**************************************************!*\
  !*** ./src/app/components/Footer/footer.view.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplate": () => (/* binding */ getTemplate)
/* harmony export */ });
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ "./src/app/components/Footer/footer.scss");

function getTemplate() {
    return `
  <div class="content-footer">
    <ul class="link-github">
      <li class="item-link-github">&copy;2022</li>
      <a class="link-github-footer" href="https://github.com/fromarys" target="_blank"
      ><li class="item-link-github">Yevgenii Mineyev</li></a
      >
      <a class="link-github-footer" href="https://github.com/OksanaSeregina" target="_blank"
      ><li class="item-link-github">Oksana Seregina</li></a
      >
      <a class="link-github-footer" href="https://github.com/Andronio2" target="_blank"
      ><li class="item-link-github">Andrey Smirnov</li></a
      >
    </ul>
    <a class="rslink-footer" href="https://rs.school/js/" target="_blank"
        ><img src="../public/static/rs_school_js.svg" alt="logo" style="height: 50px"
    /></a>
   </div>
  `;
}


/***/ }),

/***/ "./src/app/components/Footer/index.ts":
/*!********************************************!*\
  !*** ./src/app/components/Footer/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_0__.Footer)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/app/components/Footer/footer.ts");



/***/ }),

/***/ "./src/app/components/Header/header.ts":
/*!*********************************************!*\
  !*** ./src/app/components/Header/header.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/app/components/base-component.ts");
/* harmony import */ var _header_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.view */ "./src/app/components/Header/header.view.ts");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../basic */ "./src/app/basic/index.ts");



class Header extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super(...arguments);
        this.navButtons = null;
        this.authButton = null;
        this.element = document.createElement('header');
        this.template = (0,_header_view__WEBPACK_IMPORTED_MODULE_1__.getTemplate)(_basic__WEBPACK_IMPORTED_MODULE_2__.IHeaderMenu);
    }
    init() {
        super.init();
        this.listen();
    }
    destroy() {
        this.navButtons.removeEventListener('click', this.onNavClick.bind(this));
        this.authButton.removeEventListener('click', this.onAuthClick.bind(this));
        super.destroy();
    }
    attachElement() {
        this.root?.prepend(this.element);
        this.navButtons = document.querySelector('[data-role="header-menu"]');
        this.authButton = document.querySelector('[data-role="auth"]');
    }
    listen() {
        this.navButtons.addEventListener('click', this.onNavClick.bind(this));
        this.authButton.addEventListener('click', this.onAuthClick.bind(this));
    }
    // Create custom events that can be listened from documents, likes
    // document.addEventListener(IHeaderMenu.Main, (event) => ...)
    onAuthClick(event) {
        event.preventDefault();
        document.dispatchEvent(_basic__WEBPACK_IMPORTED_MODULE_2__.AUTH_BUTTON_CLICK_EVENT);
    }
    // Create custom events that can be listened from documents, likes
    // document.addEventListener(IHeaderMenu.Main, (event) => ...)
    onNavClick(event) {
        event.preventDefault();
        const element = event.target.closest('[data-id]');
        if (!element) {
            return;
        }
        switch (element.getAttribute('data-id')) {
            case _basic__WEBPACK_IMPORTED_MODULE_2__.IHeaderMenu.Main:
                document.dispatchEvent(_basic__WEBPACK_IMPORTED_MODULE_2__.MAIN_CLICK_EVENT);
                break;
            case _basic__WEBPACK_IMPORTED_MODULE_2__.IHeaderMenu.Textbook:
                document.dispatchEvent(_basic__WEBPACK_IMPORTED_MODULE_2__.TEXT_BOOKS_CLICK_EVENT);
                break;
            case _basic__WEBPACK_IMPORTED_MODULE_2__.IHeaderMenu.Games:
                document.dispatchEvent(_basic__WEBPACK_IMPORTED_MODULE_2__.GAMES_CLICK_EVENT);
                break;
            case _basic__WEBPACK_IMPORTED_MODULE_2__.IHeaderMenu.Statistics:
                document.dispatchEvent(_basic__WEBPACK_IMPORTED_MODULE_2__.STATISTICS_CLICK_EVENT);
                break;
        }
    }
}


/***/ }),

/***/ "./src/app/components/Header/header.view.ts":
/*!**************************************************!*\
  !*** ./src/app/components/Header/header.view.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplate": () => (/* binding */ getTemplate)
/* harmony export */ });
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./src/app/components/Header/header.scss");

function getTemplate(menu) {
    return `
        <div class="content-header">
          <div class="logo">
            <a href="/" class="link-logo">
              <img class="img-logo" src="../../../public/static/logo.jpg" alt="logo" />
              <h1 class="title-logo">RSLang</h1>
            </a>
          </div>

          <nav data-role="header-menu" class="header-menu">
            <div class="menu">
              <div data-id="${menu.Main}" class="item">
                <a href="#"><span>${menu.Main}</span></a>
              </div>
              <div data-id="${menu.Textbook}" class="item">
                <a href="#"><span>${menu.Textbook}</span></a>
              </div>
              <div data-id="${menu.Games}" class="item">
                <a href="#"><span>${menu.Games}</span></a>
              </div>
              <div data-id="${menu.Statistics}" class="item">
                <a href="#"><span>${menu.Statistics}</span></a>
              </div>
            </div>
          </nav>

          <div data-role="auth" class="log-in">
            <a href="#"><span>${menu.Login}</span></a>
          </div>
  `;
}


/***/ }),

/***/ "./src/app/components/Header/index.ts":
/*!********************************************!*\
  !*** ./src/app/components/Header/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_0__.Header)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/app/components/Header/header.ts");



/***/ }),

/***/ "./src/app/components/Input/Input.ts":
/*!*******************************************!*\
  !*** ./src/app/components/Input/Input.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _Creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Creator */ "./src/app/components/Creator/index.ts");

class Input extends _Creator__WEBPACK_IMPORTED_MODULE_0__.Creator {
    constructor(parent, className) {
        super(parent, 'input', className);
        this.node.type = 'text';
    }
    /**
     * Получает значение поля инпута
     * @returns Текст в поле инпута
     */
    getValue() {
        return this.node.value;
    }
}


/***/ }),

/***/ "./src/app/components/Input/index.ts":
/*!*******************************************!*\
  !*** ./src/app/components/Input/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_0__.Input)
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/app/components/Input/Input.ts");



/***/ }),

/***/ "./src/app/components/Main/constants.ts":
/*!**********************************************!*\
  !*** ./src/app/components/Main/constants.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CARD_OPPORTUNITIES": () => (/* binding */ CARD_OPPORTUNITIES),
/* harmony export */   "CARD_TEAM": () => (/* binding */ CARD_TEAM)
/* harmony export */ });
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic */ "./src/app/basic/index.ts");

const CARD_OPPORTUNITIES = [
    {
        srcBackgr: '../public/static/card-backgr1.jpeg',
        srcIcon: '../public/static/textbook.png',
        text: 'Electronic textbook with a database of words to study',
        id: _basic__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Textbook,
    },
    {
        srcBackgr: '../public/static/card-backgr2.jpeg',
        srcIcon: '../public/static/play.png',
        text: 'Mini-games for repeating the learned words',
        id: _basic__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Games,
    },
    {
        srcBackgr: '../public/static/card-backgr3.jpeg',
        srcIcon: '../public/static/stat.png',
        text: 'Detailed statistics of your achievements',
        id: _basic__WEBPACK_IMPORTED_MODULE_0__.IHeaderMenu.Statistics,
    },
];
const CARD_TEAM = [
    {
        srcPerson: '../public/static/person.jpg',
        hrefPerson: 'https://github.com/fromarys',
        namePerson: 'Yevgenii Mineyev',
        donePerson: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        srcPerson: '../public/static/person.jpg',
        hrefPerson: 'https://github.com/OksanaSeregina',
        namePerson: 'Oksana Seregina',
        donePerson: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        srcPerson: '../public/static/person.jpg',
        hrefPerson: 'https://github.com/Andronio2',
        namePerson: 'Andrey Smirnov',
        donePerson: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
];


/***/ }),

/***/ "./src/app/components/Main/index.ts":
/*!******************************************!*\
  !*** ./src/app/components/Main/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* reexport safe */ _main__WEBPACK_IMPORTED_MODULE_1__.Main),
/* harmony export */   "Root": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_0__.Root)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/app/components/Main/models/index.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/app/components/Main/main.ts");




/***/ }),

/***/ "./src/app/components/Main/main.ts":
/*!*****************************************!*\
  !*** ./src/app/components/Main/main.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _Advantages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Advantages */ "./src/app/components/Advantages/index.ts");
/* harmony import */ var _CardOpportunities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CardOpportunities */ "./src/app/components/CardOpportunities/index.ts");
/* harmony import */ var _CardTeam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardTeam */ "./src/app/components/CardTeam/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models */ "./src/app/components/Main/models/index.ts");
/* harmony import */ var _main_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.view */ "./src/app/components/Main/main.view.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-component */ "./src/app/components/base-component.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/app/components/Main/constants.ts");







class Main extends _base_component__WEBPACK_IMPORTED_MODULE_5__.BaseComponent {
    constructor() {
        super(...arguments);
        this.cardsOpportunities = [];
        this.cardsTeam = [];
        this.element = document.createElement('main');
        this.template = (0,_main_view__WEBPACK_IMPORTED_MODULE_4__.getTemplate)();
    }
    attachElement() {
        super.attachElement();
        this.initAdvantages();
        this.initOpportunities();
        this.initTeam();
    }
    initAdvantages() {
        const root = document.querySelector(_models__WEBPACK_IMPORTED_MODULE_3__.Root.Advantages);
        const advantages = new _Advantages__WEBPACK_IMPORTED_MODULE_0__.Advantages(root);
        advantages.init();
    }
    initOpportunities() {
        const root = document.querySelector(_models__WEBPACK_IMPORTED_MODULE_3__.Root.Opportunities);
        _constants__WEBPACK_IMPORTED_MODULE_6__.CARD_OPPORTUNITIES.forEach((value) => {
            this.cardsOpportunities = [...this.cardsOpportunities, new _CardOpportunities__WEBPACK_IMPORTED_MODULE_1__.CardOpportunities(root, value)];
        });
        this.cardsOpportunities.forEach((card) => card.init());
    }
    initTeam() {
        const root = document.querySelector(_models__WEBPACK_IMPORTED_MODULE_3__.Root.Team);
        _constants__WEBPACK_IMPORTED_MODULE_6__.CARD_TEAM.forEach((value) => {
            this.cardsTeam = [...this.cardsTeam, new _CardTeam__WEBPACK_IMPORTED_MODULE_2__.CardTeam(root, value)];
            this.cardsTeam.forEach((member) => member.init());
        });
    }
}


/***/ }),

/***/ "./src/app/components/Main/main.view.ts":
/*!**********************************************!*\
  !*** ./src/app/components/Main/main.view.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplate": () => (/* binding */ getTemplate)
/* harmony export */ });
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/app/components/Main/main.scss");

const getTemplate = () => {
    return `<div data-root="advantages"></div>

          <div class="opportunities" data-root="opportunities"></div>

          <div class="our-team">
            <h2 class="title-team">Our team</h2>
            <div class="container-team" data-root="our-team"></div>
          </div>
          `;
};


/***/ }),

/***/ "./src/app/components/Main/models/index.ts":
/*!*************************************************!*\
  !*** ./src/app/components/Main/models/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Root": () => (/* reexport safe */ _root_enum__WEBPACK_IMPORTED_MODULE_0__.Root)
/* harmony export */ });
/* harmony import */ var _root_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.enum */ "./src/app/components/Main/models/root.enum.ts");



/***/ }),

/***/ "./src/app/components/Main/models/root.enum.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/Main/models/root.enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Root": () => (/* binding */ Root)
/* harmony export */ });
var Root;
(function (Root) {
    Root["Advantages"] = "[data-root=\"advantages\"]";
    Root["Opportunities"] = "[data-root=\"opportunities\"]";
    Root["Team"] = "[data-root=\"our-team\"]";
})(Root || (Root = {}));


/***/ }),

/***/ "./src/app/components/Textbook/WordCard/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/Textbook/WordCard/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordCard": () => (/* reexport safe */ _wordCard__WEBPACK_IMPORTED_MODULE_0__.WordCard),
/* harmony export */   "WordDetails": () => (/* reexport safe */ _WordDetails_wordDetails__WEBPACK_IMPORTED_MODULE_1__.WordDetails)
/* harmony export */ });
/* harmony import */ var _wordCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordCard */ "./src/app/components/Textbook/WordCard/wordCard.ts");
/* harmony import */ var _WordDetails_wordDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WordDetails/wordDetails */ "./src/app/components/Textbook/WordDetails/wordDetails.ts");




/***/ }),

/***/ "./src/app/components/Textbook/WordCard/wordCard.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/Textbook/WordCard/wordCard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordCard": () => (/* binding */ WordCard)
/* harmony export */ });
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic */ "./src/app/basic/index.ts");
/* harmony import */ var _wordCard_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wordCard.view */ "./src/app/components/Textbook/WordCard/wordCard.view.ts");
/* harmony import */ var _WordDetails_wordDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WordDetails/wordDetails */ "./src/app/components/Textbook/WordDetails/wordDetails.ts");



class WordCard {
    constructor(wordGroup, textbook, wordInfo, className) {
        this.wordGroup = wordGroup;
        this.wordsWrapper = textbook.words.node;
        this.wordsContainer = textbook.wordsContainer.node;
        this.wordInfo = wordInfo;
        this.wordCard = new _wordCard_view__WEBPACK_IMPORTED_MODULE_1__["default"](this.wordsContainer, wordInfo, className);
        if (className)
            this.wordDetails = new _WordDetails_wordDetails__WEBPACK_IMPORTED_MODULE_2__.WordDetails(this.wordsWrapper, wordInfo);
        if (className)
            this.wordGroup.activeElement = this.wordCard.node;
        this.wordCard.node.onclick = () => this.clickHandler();
    }
    clickHandler() {
        this.wordGroup.activeElement.classList.remove(_basic__WEBPACK_IMPORTED_MODULE_0__.activityClass);
        this.wordGroup.activeElement = this.wordCard.node;
        this.wordGroup.activeElement.classList.add(_basic__WEBPACK_IMPORTED_MODULE_0__.activityClass);
        new _WordDetails_wordDetails__WEBPACK_IMPORTED_MODULE_2__.WordDetails(this.wordsWrapper, this.wordInfo);
    }
}


/***/ }),

/***/ "./src/app/components/Textbook/WordCard/wordCard.view.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/Textbook/WordCard/wordCard.view.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WordCardView)
/* harmony export */ });
/* harmony import */ var _Creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Creator */ "./src/app/components/Creator/index.ts");
/* harmony import */ var _wordCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wordCard.scss */ "./src/app/components/Textbook/WordCard/wordCard.scss");


class WordCardView extends _Creator__WEBPACK_IMPORTED_MODULE_0__.Creator {
    constructor(parentNode, wordInfo, className) {
        const content = `<h2 class="words__word">${wordInfo.word}</h2>
    <h3 class="words__translate">${wordInfo.wordTranslate}</h3>`;
        super(parentNode, 'button', `words__card ${className}`, content);
    }
}


/***/ }),

/***/ "./src/app/components/Textbook/WordDetails/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/Textbook/WordDetails/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordDetails": () => (/* reexport safe */ _wordDetails__WEBPACK_IMPORTED_MODULE_0__.WordDetails)
/* harmony export */ });
/* harmony import */ var _wordDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordDetails */ "./src/app/components/Textbook/WordDetails/wordDetails.ts");



/***/ }),

/***/ "./src/app/components/Textbook/WordDetails/wordDetails.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/Textbook/WordDetails/wordDetails.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordDetails": () => (/* binding */ WordDetails)
/* harmony export */ });
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic */ "./src/app/basic/index.ts");
/* harmony import */ var _wordDetails_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wordDetails.view */ "./src/app/components/Textbook/WordDetails/wordDetails.view.ts");


class WordDetails {
    constructor(parentNode, wordInfo) {
        const currentDetails = parentNode.childNodes[2];
        currentDetails?.remove();
        this.view = new _wordDetails_view__WEBPACK_IMPORTED_MODULE_1__["default"](parentNode, wordInfo);
        this.audio = this.view.audioButton.node;
        this.audio.onclick = () => this.clickHandler(wordInfo);
    }
    clickHandler(wordInfo) {
        const button = this.view.audioButton.node;
        const icon = button.children[0];
        const audio = new Audio(`${_basic__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${wordInfo.audio}`);
        icon?.classList.add('active');
        void audio.play();
        audio.onended = () => icon?.classList.remove('active');
    }
}


/***/ }),

/***/ "./src/app/components/Textbook/WordDetails/wordDetails.view.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/Textbook/WordDetails/wordDetails.view.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WordDetailsView)
/* harmony export */ });
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic */ "./src/app/basic/index.ts");
/* harmony import */ var _Creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Creator */ "./src/app/components/Creator/index.ts");
/* harmony import */ var _wordDetails_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wordDetails.scss */ "./src/app/components/Textbook/WordDetails/wordDetails.scss");



class WordDetailsView {
    constructor(parentNode, word) {
        this.image = `<img src="${_basic__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${word.image}" class="words__image"></img>`;
        this.headerContent = this.renderHeader(word);
        this.descriptionContent = this.renderDescription(word);
        this.details = new _Creator__WEBPACK_IMPORTED_MODULE_1__.Creator(parentNode, 'div', 'words__details');
        this.details.node.innerHTML = this.image;
        this.information = new _Creator__WEBPACK_IMPORTED_MODULE_1__.Creator(this.details.node, 'div', 'words__information');
        this.header = new _Creator__WEBPACK_IMPORTED_MODULE_1__.Creator(this.information.node, 'div', 'words__header', this.headerContent);
        this.description = new _Creator__WEBPACK_IMPORTED_MODULE_1__.Creator(this.information.node, 'div', 'words__description', this.descriptionContent);
        this.audioButton = new _Creator__WEBPACK_IMPORTED_MODULE_1__.Creator(this.header.node, 'button', 'words__audio', this.renderAudioButton());
    }
    renderHeader(word) {
        return `
      <h2 class="words__word">${word.word}</h2>
      <h3 class="words__translate">${word.wordTranslate}</h3>
      <span class="words__transcription">${word.transcription}</span>
    `;
    }
    renderDescription(word) {
        return `
      <h3 class="words__subtitle">Значение</h3>
      <p>${word.textMeaning}</p>
      <p>${word.textMeaningTranslate}</p>
      <h3 class="words__subtitle">Пример</h3>
      <p>${word.textExample}</p>
      <p>${word.textExampleTranslate}</p>
    `;
    }
    renderAudioButton() {
        return `
    <svg class="words__audio-icon">
      <use xlink:href="../../../public/static/audio.svg#audio"></use>
    </svg>
    `;
    }
}


/***/ }),

/***/ "./src/app/components/Textbook/WordGroupButton/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/Textbook/WordGroupButton/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordGroupButton": () => (/* reexport safe */ _wordGroupButton__WEBPACK_IMPORTED_MODULE_0__.WordGroupButton)
/* harmony export */ });
/* harmony import */ var _wordGroupButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordGroupButton */ "./src/app/components/Textbook/WordGroupButton/wordGroupButton.ts");



/***/ }),

/***/ "./src/app/components/Textbook/WordGroupButton/wordGroupButton.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/Textbook/WordGroupButton/wordGroupButton.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordGroupButton": () => (/* binding */ WordGroupButton)
/* harmony export */ });
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic */ "./src/app/basic/index.ts");
/* harmony import */ var _WordGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WordGroup */ "./src/app/components/Textbook/WordGroup/index.ts");
/* harmony import */ var _wordGroupButton_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wordGroupButton.view */ "./src/app/components/Textbook/WordGroupButton/wordGroupButton.view.ts");



class WordGroupButton {
    constructor(textbook, item) {
        this.groupList = Object.keys(_basic__WEBPACK_IMPORTED_MODULE_0__.groups);
        this.textbook = textbook;
        this.parentNode = textbook.group.node;
        this.view = new _wordGroupButton_view__WEBPACK_IMPORTED_MODULE_2__["default"](this.parentNode, item);
        this.group = this.view.group.node;
        this.groupClassName = this.group.className;
        this.view.group.node.onclick = (event) => this.clickHandler(textbook, event);
        if (this.group.classList.contains(_basic__WEBPACK_IMPORTED_MODULE_0__.activityClass))
            this.textbook.activeGroup = this.group;
    }
    clickHandler(textbook, event) {
        const group = new _WordGroup__WEBPACK_IMPORTED_MODULE_1__.WordGroup(textbook);
        const switchedGroupButton = event.target.closest(`.${this.groupClassName}`);
        const level = switchedGroupButton?.dataset.level;
        this.switchStyles(switchedGroupButton);
        if (level) {
            const newGroupNumber = this.groupList.indexOf(level);
            localStorage.setItem('group', JSON.stringify(newGroupNumber));
            group.renderCards(newGroupNumber);
        }
    }
    switchStyles(newGroupButton) {
        this.textbook.activeGroup.classList.remove(_basic__WEBPACK_IMPORTED_MODULE_0__.activityClass);
        if (newGroupButton) {
            this.textbook.activeGroup = newGroupButton;
            this.textbook.activeGroup.classList.add(_basic__WEBPACK_IMPORTED_MODULE_0__.activityClass);
        }
    }
}


/***/ }),

/***/ "./src/app/components/Textbook/WordGroupButton/wordGroupButton.view.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/Textbook/WordGroupButton/wordGroupButton.view.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WordGroupButtonView)
/* harmony export */ });
/* harmony import */ var _Creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Creator */ "./src/app/components/Creator/index.ts");
/* harmony import */ var _wordGroupButton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wordGroupButton.scss */ "./src/app/components/Textbook/WordGroupButton/wordGroupButton.scss");


class WordGroupButtonView {
    constructor(parentNode, item) {
        this.group = new _Creator__WEBPACK_IMPORTED_MODULE_0__.Creator(parentNode, 'button', 'group__button');
        this.left = new _Creator__WEBPACK_IMPORTED_MODULE_0__.Creator(this.group.node, 'div', 'group__button-left', item[1]);
        this.group.node.dataset.level = item[0];
        this.right = new _Creator__WEBPACK_IMPORTED_MODULE_0__.Creator(this.group.node, 'div', 'group__button-right', item[0]);
    }
}


/***/ }),

/***/ "./src/app/components/Textbook/WordGroup/index.ts":
/*!********************************************************!*\
  !*** ./src/app/components/Textbook/WordGroup/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordGroup": () => (/* reexport safe */ _wordGroup__WEBPACK_IMPORTED_MODULE_0__.WordGroup)
/* harmony export */ });
/* harmony import */ var _wordGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordGroup */ "./src/app/components/Textbook/WordGroup/wordGroup.ts");



/***/ }),

/***/ "./src/app/components/Textbook/WordGroup/wordGroup.ts":
/*!************************************************************!*\
  !*** ./src/app/components/Textbook/WordGroup/wordGroup.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordGroup": () => (/* binding */ WordGroup)
/* harmony export */ });
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic */ "./src/app/basic/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./src/app/components/index.ts");
/* harmony import */ var _wordGroup_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wordGroup.view */ "./src/app/components/Textbook/WordGroup/wordGroup.view.ts");



class WordGroup {
    constructor(textbook) {
        this.textbook = textbook;
        this.view = new _wordGroup_view__WEBPACK_IMPORTED_MODULE_2__["default"](textbook);
    }
    async getCards(group, page) {
        const words = await _basic__WEBPACK_IMPORTED_MODULE_0__.TextbookService.getWords(group, page);
        if (words) {
            this.textbook.wordsContainer.node.innerHTML = '';
            words.forEach((item, index) => {
                let className = '';
                if (index === 0)
                    className = _basic__WEBPACK_IMPORTED_MODULE_0__.activityClass;
                new ___WEBPACK_IMPORTED_MODULE_1__.WordCard(this.view, this.textbook, item, className);
            });
        }
        return words;
    }
    renderCards(group, page) {
        let storagedPage = parseInt(localStorage.getItem('page'), 10) || 0;
        let storagedGroup = parseInt(localStorage.getItem('group'), 10) || 0;
        if (page)
            storagedPage = page;
        if (group)
            storagedGroup = group;
        void this.getCards(storagedGroup.toString(), storagedPage.toString());
    }
}


/***/ }),

/***/ "./src/app/components/Textbook/WordGroup/wordGroup.view.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/Textbook/WordGroup/wordGroup.view.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WordGroupView)
/* harmony export */ });
class WordGroupView {
    constructor(textbook) {
        this.activeElement = textbook.words.node;
    }
}


/***/ }),

/***/ "./src/app/components/Textbook/WordPagination/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/Textbook/WordPagination/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordPagination": () => (/* reexport safe */ _wordPagination__WEBPACK_IMPORTED_MODULE_0__.WordPagination)
/* harmony export */ });
/* harmony import */ var _wordPagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordPagination */ "./src/app/components/Textbook/WordPagination/wordPagination.ts");



/***/ }),

/***/ "./src/app/components/Textbook/WordPagination/wordPagination.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/Textbook/WordPagination/wordPagination.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordPagination": () => (/* binding */ WordPagination)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/app/components/index.ts");
/* harmony import */ var _wordPagination_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wordPagination.view */ "./src/app/components/Textbook/WordPagination/wordPagination.view.ts");


class WordPagination {
    constructor(textbook) {
        this.textbook = textbook;
        this.wordsContainer = textbook.wordsContainer.node;
    }
    paginate(totalPages, page) {
        const currentPage = page || JSON.parse(localStorage.getItem('page')) + 1 || 1;
        const pagination = new _wordPagination_view__WEBPACK_IMPORTED_MODULE_1__.WordPaginationView(this.textbook);
        if (currentPage > 1) {
            this.showPreviousButton(pagination, totalPages, currentPage);
        }
        if (currentPage > 2) {
            this.showFirstItem(pagination, totalPages, currentPage);
        }
        this.showActiveItem(pagination, totalPages, currentPage);
        if (currentPage < totalPages - 1) {
            this.showLastItem(pagination, totalPages, currentPage);
        }
        if (currentPage < totalPages) {
            this.showNextButton(pagination, totalPages, currentPage);
        }
    }
    clickHandler(pagination, totalPages, page) {
        const serverPagination = page - 1;
        this.wordsContainer.innerHTML = '';
        pagination.destroy();
        this.paginate(totalPages, page);
        const wordGroup = new ___WEBPACK_IMPORTED_MODULE_0__.WordGroup(this.textbook);
        localStorage.setItem('page', JSON.stringify(serverPagination));
        void wordGroup.renderCards(undefined, serverPagination);
    }
    showFirstItem(pagination, totalPages, page) {
        const element = pagination.createPage('first number', `<span>1</span>`);
        element.onclick = () => this.clickHandler(pagination, totalPages, 1);
        if (page > 3) {
            pagination.createPage('dots', '<span>...</span>');
        }
    }
    showPreviousButton(pagination, totalPages, page) {
        const element = pagination.createPage('pagination__button prev', 'Пред.');
        element.onclick = () => this.clickHandler(pagination, totalPages, page - 1);
    }
    showNextButton(pagination, totalPages, page) {
        const element = pagination.createPage('pagination__button next', `<span>След.</span>`);
        element.onclick = () => this.clickHandler(pagination, totalPages, page + 1);
    }
    showActiveItem(pagination, totalPages, page) {
        let beforePage = page - 1;
        let afterPage = page + 1;
        let active;
        if (page == totalPages) {
            beforePage = beforePage - 2;
        }
        else if (page == totalPages - 1) {
            beforePage = beforePage - 1;
        }
        if (page == 1) {
            afterPage = afterPage + 2;
        }
        else if (page == 2) {
            afterPage = afterPage + 1;
        }
        for (let plength = beforePage; plength <= afterPage; plength++) {
            if (plength > totalPages) {
                continue;
            }
            if (plength == 0) {
                plength = plength + 1;
            }
            if (page == plength) {
                active = 'active';
            }
            else {
                active = '';
            }
            const element = pagination.createPage(`number ${active}`, `<span>${plength}</span>`);
            element.onclick = () => this.clickHandler(pagination, totalPages, plength);
        }
    }
    showLastItem(pagination, totalPages, page) {
        if (page < totalPages - 2) {
            pagination.createPage('dots', '<span>...</span>');
        }
        const element = pagination.createPage('last number', `<span>${totalPages}</span>`);
        element.onclick = () => this.clickHandler(pagination, totalPages, totalPages);
    }
}


/***/ }),

/***/ "./src/app/components/Textbook/WordPagination/wordPagination.view.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/Textbook/WordPagination/wordPagination.view.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordPaginationView": () => (/* binding */ WordPaginationView)
/* harmony export */ });
/* harmony import */ var _Creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Creator */ "./src/app/components/Creator/index.ts");
/* harmony import */ var _wordPagination_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wordPagination.scss */ "./src/app/components/Textbook/WordPagination/wordPagination.scss");


class WordPaginationView {
    constructor(textbook) {
        this.pagination = new _Creator__WEBPACK_IMPORTED_MODULE_0__.Creator(textbook.textbook.node, 'div', 'pagination');
        this.list = new _Creator__WEBPACK_IMPORTED_MODULE_0__.Creator(this.pagination.node, 'ul');
    }
    createPage(className, content) {
        const page = new _Creator__WEBPACK_IMPORTED_MODULE_0__.Creator(this.list.node, 'li', className, content);
        return page.node;
    }
    destroy() {
        this.pagination.node.remove();
    }
}


/***/ }),

/***/ "./src/app/components/Textbook/index.ts":
/*!**********************************************!*\
  !*** ./src/app/components/Textbook/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordCard": () => (/* reexport safe */ _WordCard__WEBPACK_IMPORTED_MODULE_0__.WordCard),
/* harmony export */   "WordDetails": () => (/* reexport safe */ _WordCard__WEBPACK_IMPORTED_MODULE_0__.WordDetails),
/* harmony export */   "WordGroup": () => (/* reexport safe */ _WordGroup__WEBPACK_IMPORTED_MODULE_2__.WordGroup),
/* harmony export */   "WordGroupButton": () => (/* reexport safe */ _WordGroupButton__WEBPACK_IMPORTED_MODULE_3__.WordGroupButton),
/* harmony export */   "WordPagination": () => (/* reexport safe */ _WordPagination__WEBPACK_IMPORTED_MODULE_4__.WordPagination)
/* harmony export */ });
/* harmony import */ var _WordCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WordCard */ "./src/app/components/Textbook/WordCard/index.ts");
/* harmony import */ var _WordDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WordDetails */ "./src/app/components/Textbook/WordDetails/index.ts");
/* harmony import */ var _WordGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WordGroup */ "./src/app/components/Textbook/WordGroup/index.ts");
/* harmony import */ var _WordGroupButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WordGroupButton */ "./src/app/components/Textbook/WordGroupButton/index.ts");
/* harmony import */ var _WordPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WordPagination */ "./src/app/components/Textbook/WordPagination/index.ts");







/***/ }),

/***/ "./src/app/components/base-component.ts":
/*!**********************************************!*\
  !*** ./src/app/components/base-component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
class BaseComponent {
    constructor(root) {
        this.root = root;
    }
    get instance() {
        return this.element;
    }
    init() {
        this.render();
    }
    render() {
        this.element.innerHTML = this.template;
        if (this.root) {
            this.attachElement();
        }
    }
    destroy() {
        if (this.root) {
            this.root.innerHTML = '';
        }
    }
    attachElement() {
        this.root?.appendChild(this.element);
    }
}


/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Advantages": () => (/* reexport safe */ _Advantages__WEBPACK_IMPORTED_MODULE_4__.Advantages),
/* harmony export */   "Button": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_2__.Button),
/* harmony export */   "CardOpportunities": () => (/* reexport safe */ _CardOpportunities__WEBPACK_IMPORTED_MODULE_5__.CardOpportunities),
/* harmony export */   "CardTeam": () => (/* reexport safe */ _CardTeam__WEBPACK_IMPORTED_MODULE_6__.CardTeam),
/* harmony export */   "Creator": () => (/* reexport safe */ _Creator__WEBPACK_IMPORTED_MODULE_1__.Creator),
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_7__.Footer),
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_8__.Header),
/* harmony export */   "Input": () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_3__.Input),
/* harmony export */   "Main": () => (/* reexport safe */ _Main__WEBPACK_IMPORTED_MODULE_9__.Main),
/* harmony export */   "Root": () => (/* reexport safe */ _Main__WEBPACK_IMPORTED_MODULE_9__.Root),
/* harmony export */   "WordCard": () => (/* reexport safe */ _Textbook__WEBPACK_IMPORTED_MODULE_0__.WordCard),
/* harmony export */   "WordDetails": () => (/* reexport safe */ _Textbook__WEBPACK_IMPORTED_MODULE_0__.WordDetails),
/* harmony export */   "WordGroup": () => (/* reexport safe */ _Textbook__WEBPACK_IMPORTED_MODULE_0__.WordGroup),
/* harmony export */   "WordGroupButton": () => (/* reexport safe */ _Textbook__WEBPACK_IMPORTED_MODULE_0__.WordGroupButton),
/* harmony export */   "WordPagination": () => (/* reexport safe */ _Textbook__WEBPACK_IMPORTED_MODULE_0__.WordPagination)
/* harmony export */ });
/* harmony import */ var _Textbook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Textbook */ "./src/app/components/Textbook/index.ts");
/* harmony import */ var _Creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Creator */ "./src/app/components/Creator/index.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/app/components/Button/index.ts");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./src/app/components/Input/index.ts");
/* harmony import */ var _Advantages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Advantages */ "./src/app/components/Advantages/index.ts");
/* harmony import */ var _CardOpportunities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardOpportunities */ "./src/app/components/CardOpportunities/index.ts");
/* harmony import */ var _CardTeam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardTeam */ "./src/app/components/CardTeam/index.ts");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./src/app/components/Footer/index.ts");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ "./src/app/components/Header/index.ts");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Main */ "./src/app/components/Main/index.ts");












/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Advantages": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Advantages),
/* harmony export */   "App": () => (/* reexport safe */ _app__WEBPACK_IMPORTED_MODULE_1__.App),
/* harmony export */   "Button": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Button),
/* harmony export */   "CardOpportunities": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.CardOpportunities),
/* harmony export */   "CardTeam": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.CardTeam),
/* harmony export */   "Creator": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Creator),
/* harmony export */   "Footer": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Footer),
/* harmony export */   "Header": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Header),
/* harmony export */   "Input": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Input),
/* harmony export */   "Main": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Main),
/* harmony export */   "Root": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Root),
/* harmony export */   "WordCard": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.WordCard),
/* harmony export */   "WordDetails": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.WordDetails),
/* harmony export */   "WordGroup": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.WordGroup),
/* harmony export */   "WordGroupButton": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.WordGroupButton),
/* harmony export */   "WordPagination": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.WordPagination)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app/app.ts");




/***/ }),

/***/ "./src/app/pages/TextbookPage/index.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/TextbookPage/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Textbook": () => (/* reexport safe */ _textbook__WEBPACK_IMPORTED_MODULE_0__.Textbook),
/* harmony export */   "TextbookView": () => (/* reexport safe */ _textbook_view__WEBPACK_IMPORTED_MODULE_1__.TextbookView)
/* harmony export */ });
/* harmony import */ var _textbook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textbook */ "./src/app/pages/TextbookPage/textbook.ts");
/* harmony import */ var _textbook_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textbook.view */ "./src/app/pages/TextbookPage/textbook.view.ts");




/***/ }),

/***/ "./src/app/pages/TextbookPage/textbook.ts":
/*!************************************************!*\
  !*** ./src/app/pages/TextbookPage/textbook.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Textbook": () => (/* binding */ Textbook)
/* harmony export */ });
/* harmony import */ var _textbook_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textbook.view */ "./src/app/pages/TextbookPage/textbook.view.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./src/app/components/index.ts");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../basic */ "./src/app/basic/index.ts");



class Textbook {
    constructor(parentNode) {
        this.parentNode = parentNode;
    }
    render() {
        const textbook = new _textbook_view__WEBPACK_IMPORTED_MODULE_0__.TextbookView(this.parentNode);
        this.renderGroupButtons(textbook);
        this.renderPagination(textbook);
        this.renderGroup(textbook);
    }
    renderGroupButtons(textbook) {
        Object.entries(_basic__WEBPACK_IMPORTED_MODULE_2__.groups).forEach((item) => {
            new _components__WEBPACK_IMPORTED_MODULE_1__.WordGroupButton(textbook, item);
        });
    }
    renderPagination(textbook) {
        const pagination = new _components__WEBPACK_IMPORTED_MODULE_1__.WordPagination(textbook);
        pagination.paginate(_basic__WEBPACK_IMPORTED_MODULE_2__.maxWordsPages);
    }
    renderGroup(textbook) {
        const wordGroup = new _components__WEBPACK_IMPORTED_MODULE_1__.WordGroup(textbook);
        void wordGroup.renderCards();
    }
}


/***/ }),

/***/ "./src/app/pages/TextbookPage/textbook.view.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/TextbookPage/textbook.view.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextbookView": () => (/* binding */ TextbookView)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components */ "./src/app/components/index.ts");
/* harmony import */ var _textbook_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textbook.scss */ "./src/app/pages/TextbookPage/textbook.scss");


class TextbookView {
    constructor(parentNode) {
        this.textbook = new _components__WEBPACK_IMPORTED_MODULE_0__.Creator(parentNode, 'div', 'textbook');
        this.textbookHeader = new _components__WEBPACK_IMPORTED_MODULE_0__.Creator(this.textbook.node, 'div', 'textbook__header');
        this.group = new _components__WEBPACK_IMPORTED_MODULE_0__.Creator(this.textbookHeader.node, 'div', 'group');
        this.words = new _components__WEBPACK_IMPORTED_MODULE_0__.Creator(this.textbook.node, 'div', 'words');
        this.title = new _components__WEBPACK_IMPORTED_MODULE_0__.Creator(this.words.node, 'h1', 'words__title', 'Слова');
        this.wordsContainer = new _components__WEBPACK_IMPORTED_MODULE_0__.Creator(this.words.node, 'div', 'words__container');
        this.activeGroup = this.title.node;
    }
}


/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Textbook": () => (/* reexport safe */ _TextbookPage__WEBPACK_IMPORTED_MODULE_0__.Textbook),
/* harmony export */   "TextbookView": () => (/* reexport safe */ _TextbookPage__WEBPACK_IMPORTED_MODULE_0__.TextbookView)
/* harmony export */ });
/* harmony import */ var _TextbookPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextbookPage */ "./src/app/pages/TextbookPage/index.ts");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app/index.ts");


const app = new _app__WEBPACK_IMPORTED_MODULE_1__.App();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUM1QixnQkFBZ0IscUNBQUc7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvQWR2YW50YWdlcy9hZHZhbnRhZ2VzLnNjc3M/OThmZSIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2FyZE9wcG9ydHVuaXRpZXMvY2FyZC1vcHBvcnR1bml0aWVzLnNjc3M/YjA5NSIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2FyZFRlYW0vY2FyZC10ZWFtLnNjc3M/OTkxNSIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL2Zvb3Rlci5zY3NzPzIxYTUiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIuc2Nzcz9lOWViIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluL21haW4uc2Nzcz9kMzg5Iiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9UZXh0Ym9vay9Xb3JkQ2FyZC93b3JkQ2FyZC5zY3NzPzQ4NjQiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL1RleHRib29rL1dvcmREZXRhaWxzL3dvcmREZXRhaWxzLnNjc3M/NjVmOCIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGV4dGJvb2svV29yZEdyb3VwQnV0dG9uL3dvcmRHcm91cEJ1dHRvbi5zY3NzPzljNjEiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL1RleHRib29rL1dvcmRQYWdpbmF0aW9uL3dvcmRQYWdpbmF0aW9uLnNjc3M/NDEwYiIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL3BhZ2VzL1RleHRib29rUGFnZS90ZXh0Ym9vay5zY3NzPzE5NTYiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzM4YTUiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9hcHAudmlldy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2Jhc2ljL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9iYXNpYy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9iYXNpYy9jb21tb24vY29uc3RhbnRzLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvYmFzaWMvY29tbW9uL2luZGV4LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvYmFzaWMvZW51bXMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9iYXNpYy9lbnVtcy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2Jhc2ljL2V2ZW50cy9hdXRoLWJ1dHRvbi1jbGljay5ldmVudC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2Jhc2ljL2V2ZW50cy9nYW1lcy1jbGljay5ldmVudC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2Jhc2ljL2V2ZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2Jhc2ljL2V2ZW50cy9tYWluLWNsaWNrLmV2ZW50LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvYmFzaWMvZXZlbnRzL21vZGVscy9oZWFkZXItbWVudS5tb2RlbC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2Jhc2ljL2V2ZW50cy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9iYXNpYy9ldmVudHMvc3RhdGlzdGljcy1jbGljay5ldmVudC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2Jhc2ljL2V2ZW50cy90ZXh0LWJvb2tzLWNsaWNrLmV2ZW50LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvYmFzaWMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9iYXNpYy9pbnRlcmZhY2VzL2luZGV4LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvYmFzaWMvaW50ZXJmYWNlcy9pbnRlcmZhY2VzLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvYmFzaWMvaW50ZXJmYWNlcy90ZXh0Ym9vay9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2Jhc2ljL2ludGVyZmFjZXMvdGV4dGJvb2svdGV4dGJvb2sudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9iYXNpYy9pbnRlcmZhY2VzL3RleHRib29rL3dvcmRDYXJkLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvYmFzaWMvaW50ZXJmYWNlcy90ZXh0Ym9vay93b3JkRGV0YWlscy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2Jhc2ljL2ludGVyZmFjZXMvdGV4dGJvb2svd29yZEdyb3VwLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvYmFzaWMvaW50ZXJmYWNlcy90ZXh0Ym9vay93b3JkR3JvdXBCdXR0b24udHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9iYXNpYy9yb3V0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9iYXNpYy9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvYmFzaWMvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9iYXNpYy9zZXJ2aWNlcy90ZXh0Ym9vay5zZXJ2aWNlLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvYmFzaWMvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9iYXNpYy90eXBlcy90eXBlcy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvQWR2YW50YWdlcy9hZHZhbnRhZ2VzLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9BZHZhbnRhZ2VzL2FkdmFudGFnZXMudmlldy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvQWR2YW50YWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9DYXJkT3Bwb3J0dW5pdGllcy9jYXJkLW9wcG9ydHVuaXRpZXMudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL0NhcmRPcHBvcnR1bml0aWVzL2NhcmQtb3Bwb3J0dW5pdGllcy52aWV3LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9DYXJkT3Bwb3J0dW5pdGllcy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2FyZE9wcG9ydHVuaXRpZXMvbW9kZWxzL2NhcmQtb3Bwb3J0dW5pdGllcy5tb2RlbC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2FyZE9wcG9ydHVuaXRpZXMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9DYXJkVGVhbS9jYXJkLXRlYW0udHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL0NhcmRUZWFtL2NhcmQtdGVhbS52aWV3LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9DYXJkVGVhbS9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2FyZFRlYW0vbW9kZWxzL2NhcmQtdGVhbS5tb2RlbC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ2FyZFRlYW0vbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdG9yL0NyZWF0b3IudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIudmlldy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLnZpZXcudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL0hlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvSW5wdXQvSW5wdXQudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL0lucHV0L2luZGV4LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbi9tYWluLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluL21haW4udmlldy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbi9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW4vbW9kZWxzL3Jvb3QuZW51bS50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGV4dGJvb2svV29yZENhcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL1RleHRib29rL1dvcmRDYXJkL3dvcmRDYXJkLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9UZXh0Ym9vay9Xb3JkQ2FyZC93b3JkQ2FyZC52aWV3LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9UZXh0Ym9vay9Xb3JkRGV0YWlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGV4dGJvb2svV29yZERldGFpbHMvd29yZERldGFpbHMudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL1RleHRib29rL1dvcmREZXRhaWxzL3dvcmREZXRhaWxzLnZpZXcudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL1RleHRib29rL1dvcmRHcm91cEJ1dHRvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGV4dGJvb2svV29yZEdyb3VwQnV0dG9uL3dvcmRHcm91cEJ1dHRvbi50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGV4dGJvb2svV29yZEdyb3VwQnV0dG9uL3dvcmRHcm91cEJ1dHRvbi52aWV3LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9UZXh0Ym9vay9Xb3JkR3JvdXAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL1RleHRib29rL1dvcmRHcm91cC93b3JkR3JvdXAudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL1RleHRib29rL1dvcmRHcm91cC93b3JkR3JvdXAudmlldy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGV4dGJvb2svV29yZFBhZ2luYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL1RleHRib29rL1dvcmRQYWdpbmF0aW9uL3dvcmRQYWdpbmF0aW9uLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9UZXh0Ym9vay9Xb3JkUGFnaW5hdGlvbi93b3JkUGFnaW5hdGlvbi52aWV3LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvY29tcG9uZW50cy9UZXh0Ym9vay9pbmRleC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9wYWdlcy9UZXh0Ym9va1BhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9wYWdlcy9UZXh0Ym9va1BhZ2UvdGV4dGJvb2sudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2FwcC9wYWdlcy9UZXh0Ym9va1BhZ2UvdGV4dGJvb2sudmlldy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvYXBwL3BhZ2VzL2luZGV4LnRzIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2xhbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBBcHBWaWV3IH0gZnJvbSAnLi9hcHAudmlldyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4vYmFzaWMnO1xyXG5pbXBvcnQgeyBUZXh0Ym9vayB9IGZyb20gJy4vcGFnZXMnO1xyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290Jyk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IEFwcFZpZXcodGhpcy5yb290KTtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSB0aGlzLnZpZXcubWFpbi5pbnN0YW5jZTtcclxuICAgICAgICB0aGlzLnJvdXRlcyA9IHtcclxuICAgICAgICAgICAgJy8nOiBUZXh0Ym9vayxcclxuICAgICAgICAgICAgYXV0aDogVGV4dGJvb2ssXHJcbiAgICAgICAgICAgIGdhbWVzOiBUZXh0Ym9vayxcclxuICAgICAgICAgICAgc3ByaW50OiBUZXh0Ym9vayxcclxuICAgICAgICAgICAgdGV4dGJvb2s6IFRleHRib29rLFxyXG4gICAgICAgICAgICBhdWRpb2NhbGw6IFRleHRib29rLFxyXG4gICAgICAgICAgICBzdGF0aXN0aWNzOiBUZXh0Ym9vayxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcih0aGlzLnZpZXcsIHRoaXMucm91dGVzKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLnJ1bigpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEhlYWRlciwgTWFpbiwgRm9vdGVyIH0gZnJvbSAnLi8nO1xyXG5leHBvcnQgY2xhc3MgQXBwVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb290KSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKHJvb3QpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyLmluaXQoKTtcclxuICAgICAgICB0aGlzLm1haW4gPSBuZXcgTWFpbihyb290KTtcclxuICAgICAgICB0aGlzLm1haW4uaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3Rlcihyb290KTtcclxuICAgICAgICB0aGlzLmZvb3Rlci5pbml0KCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJQYWdlKHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLmluc3RhbmNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHJvdXRlLnJlbmRlcigpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGJhc2VVcmwgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcclxuZXhwb3J0IGNsYXNzIEFwaSB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5yZXN0KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBjbGFzcyBjYW4ndCBiZSBpbnZva2VkIHRocm91Z2ggY29uc3RydWN0b3JcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNGP0LXRgiDQsNCy0YLQvtGA0LjQt9C40YDQvtCy0LDQvSDQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjFxyXG4gICAgICogQHJldHVybnMgdHJ1ZSAtINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQsNCy0YLQvtGA0LjQt9C40YDQvtCy0LDQvVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBdXRob3JpemVkKCkge1xyXG4gICAgICAgIHJldHVybiAhIUFwaS5tYWluVG9rZW47XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGC0L7QutC10L0t0YHRgtGA0L7QutGDINC40LvQuCBudWxsLCDQtdGB0LvQuCDQvdC1INCw0LLRgtC+0YDQuNC30LjRgNC+0LLQsNC9XHJcbiAgICAgKiBAcmV0dXJucyDQotC+0LrQtdC9LdGB0YLRgNC+0LrQsCDQuNC70LggbnVsbCwg0LXRgdC70Lgg0L3QtSDQsNCy0YLQvtGA0LjQt9C40YDQvtCy0LDQvVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0QXV0aFRva2VuKCkge1xyXG4gICAgICAgIHJldHVybiBBcGkuaXNBdXRob3JpemVkKCkgPyB7IHRva2VuOiBBcGkubWFpblRva2VuLCB1c2VySWQ6IEFwaS51c2VySWQsIHJlZnJlc2hUb2tlbjogQXBpLnJlZnJlc2hUb2tlbiB9IDogbnVsbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog0KHQvtGF0YDQsNC90Y/QtdGCINGC0L7QutC10L0g0Lgg0JjQlCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LTQu9GPINC00LDQu9GM0L3QtdC50YjQuNGFINC30LDQv9GA0L7RgdC+0LJcclxuICAgICAqIEBwYXJhbSByZXNwb25zZSDQotC+0LrQtdC9INC70L7Qs9C40L3QsCDQuCDQmNCUXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXRBdXRoRGF0YShyZXNwb25zZSwgdGltZSkge1xyXG4gICAgICAgIEFwaS5tYWluVG9rZW4gPSByZXNwb25zZS50b2tlbjtcclxuICAgICAgICBBcGkucmVmcmVzaFRva2VuID0gcmVzcG9uc2UucmVmcmVzaFRva2VuO1xyXG4gICAgICAgIEFwaS51c2VySWQgPSByZXNwb25zZS51c2VySWQ7XHJcbiAgICAgICAgQXBpLnRva2VuVGltZSA9IHRpbWUgPyB0aW1lIDogRGF0ZS5ub3coKTtcclxuICAgIH1cclxuICAgIC8vc3RhdGljIGFzeW5jIHJlc3BvbnNlSGFuZGxlcjxUPihyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPFQgfCBJRXJyb3I+IHt9XHJcbiAgICAvKipcclxuICAgICAqINCe0YLQv9GA0LDQstC70Y/QtdGCIFBPU1Qg0LfQsNC/0YDQvtGBXHJcbiAgICAgKiBAcGFyYW0gdXJsIFVSTCDQsNC00YDQtdGBXHJcbiAgICAgKiBAcGFyYW0gYm9keSDQntGC0L/RgNCw0LLQu9GP0LXQvNGL0LUg0LTQsNC90L3Ri9C1XHJcbiAgICAgKiBAcmV0dXJucyBSZXNwb3NlLdC+0YLQstC10YIg0LHQtdC3INC00LXQutC+0LTQuNGA0L7QstCw0L3QuNGPXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBzZW5kUG9zdCh1cmwsIGJvZHksIGF1dGggPSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGF1dGggPyBgQmVhcmVyICR7QXBpLm1haW5Ub2tlbn1gIDogJycsXHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgIH0pLnRoZW4oYXN5bmMgKHJlc3ApID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Aub2sgPyAoYXdhaXQgcmVzcC5qc29uKCkpIDogeyBlcnJvcjogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBhd2FpdCByZXNwLnRleHQoKSB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0L/RgNCw0LLQu9GP0LXRgiBHRVQg0LfQsNC/0YDQvtGBINGBINCw0LLRgtC+0YDQuNC30LDRhtC40LXQuVxyXG4gICAgICogQHBhcmFtIHVybCBVUkwg0LDQtNGA0LXRgVxyXG4gICAgICogQHJldHVybnMgUmVzcG9zZS3QvtGC0LLQtdGCINCx0LXQtyDQtNC10LrQvtC00LjRgNC+0LLQsNC90LjRj1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0R2V0QXV0aCh1cmwsIG1haW5Ub2tlbiA9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHttYWluVG9rZW4gPyBBcGkubWFpblRva2VuIDogQXBpLnJlZnJlc2hUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkudGhlbihhc3luYyAocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5vayA/IChhd2FpdCByZXNwLmpzb24oKSkgOiB7IGVycm9yOiB0cnVlLCBlcnJvck1lc3NhZ2U6IGF3YWl0IHJlc3AudGV4dCgpIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqINCe0YLQv9GA0LDQstC70Y/QtdGCIEdFVCDQt9Cw0L/RgNC+0YEg0LHQtdC3INCw0LLRgtC+0YDQuNC30LDRhtC40LhcclxuICAgICAqIEBwYXJhbSB1cmwgVVJMINCw0LTRgNC10YFcclxuICAgICAqIEByZXR1cm5zIFJlc3Bvc2Ut0L7RgtCy0LXRgiDQsdC10Lcg0LTQtdC60L7QtNC40YDQvtCy0LDQvdC40Y9cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEdldCh1cmwpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLnRoZW4oYXN5bmMgKHJlc3ApID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Aub2sgPyAoYXdhaXQgcmVzcC5qc29uKCkpIDogeyBlcnJvcjogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBhd2FpdCByZXNwLnRleHQoKSB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0L/RgNCw0LLQu9GP0LXRgiBQVVQg0LfQsNC/0YDQvtGBXHJcbiAgICAgKiBAcGFyYW0gdXJsIFVSTCDQsNC00YDQtdGBXHJcbiAgICAgKiBAcGFyYW0gYm9keSDQntGC0L/RgNCw0LLQu9GP0LXQvNGL0LUg0LTQsNC90L3Ri9C1XHJcbiAgICAgKiBAcmV0dXJucyBSZXNwb3NlLdC+0YLQstC10YIg0LHQtdC3INC00LXQutC+0LTQuNGA0L7QstCw0L3QuNGPXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBzZW5kUHV0KHVybCwgYm9keSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FwaS5tYWluVG9rZW59YCxcclxuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSkudGhlbihhc3luYyAocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5vayA/IChhd2FpdCByZXNwLmpzb24oKSkgOiB7IGVycm9yOiB0cnVlLCBlcnJvck1lc3NhZ2U6IGF3YWl0IHJlc3AudGV4dCgpIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqINCe0YLQv9GA0LDQstC70Y/QtdGCIERFTEVURSDQt9Cw0L/RgNC+0YFcclxuICAgICAqIEBwYXJhbSB1cmwgVVJMINCw0LTRgNC10YFcclxuICAgICAqIEByZXR1cm5zIFJlc3Bvc2Ut0L7RgtCy0LXRgiDQsdC10Lcg0LTQtdC60L7QtNC40YDQvtCy0LDQvdC40Y9cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIHNlbmREZWxldGUodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7QXBpLm1haW5Ub2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3ApID0+IHJlc3Aub2spO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgICAqXHJcbiAgICAgKiAg0KDQsNC30LTQtdC7IFdvcmRzXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICAvKipcclxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0L/QuNGB0L7QuiDRgdC70L7QsiDQt9Cw0LTQsNC90L3QvtC5INCz0YDRg9C/0L/RiyDQuCDRgdGC0YDQsNC90LjRhtGLXHJcbiAgICAgKiBAcGFyYW0gZ3JvdXAg0J3QvtC80LXRgCDQs9GA0YPQv9C/0YtcclxuICAgICAqIEBwYXJhbSBwYWdlINCd0L7QvNC10YAg0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICogQHJldHVybnMg0JzQsNGB0YHQuNCyINGB0LvQvtCyINC30LDQtNCw0L3QvdC+0Lkg0LPRgNGD0L/Qv9GLINC4INGB0YLRgNCw0L3QuNGG0YtcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGdldFdvcmRzKGdyb3VwLCBwYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIEFwaS5nZXRHZXQoYCR7YmFzZVVybH0vd29yZHM/Z3JvdXA9JHtncm91cH0mcGFnZT0ke3BhZ2V9YCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0LvQvtCy0L4g0L/QviDQmNCUXHJcbiAgICAgKiBAcGFyYW0gaWQgSUQg0YHQu9C+0LLQsFxyXG4gICAgICogQHJldHVybnMg0JzQsNGB0YHQuNCyINGB0LvQvtCyINC30LDQtNCw0L3QvdC+0Lkg0LPRgNGD0L/Qv9GLINC4INGB0YLRgNCw0L3QuNGG0YtcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGdldFdvcmRzQnlJZChpZCkge1xyXG4gICAgICAgIHJldHVybiBBcGkuZ2V0R2V0KGAke2Jhc2VVcmx9L3dvcmRzLyR7aWR9YCk7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgICpcclxuICAgICAqICDQoNCw0LfQtNC10LsgVXNlcnNcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIC8qKlxyXG4gICAgICog0KHQvtC30LTQsNC10YIg0L3QvtCy0L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgICogQHBhcmFtIHVzZXIg0JTQsNC90L3Ri9C1INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtVxyXG4gICAgICogQHJldHVybnMg0J7RgtCy0LXRgiDQviDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC40LvQuCDQvtGI0LjQsdC60LBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZU5ld1VzZXIodXNlcikge1xyXG4gICAgICAgIHJldHVybiBBcGkuc2VuZFBvc3QoYCR7YmFzZVVybH0vdXNlcnNgLCB1c2VyKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LjQvNGPINC4INC/0LDRgNC+0LvRjCDRgtC10LrRg9GJ0LXQs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgICogQHJldHVybnMg0JjQvNGPINC4INC/0LDRgNC+0LvRjCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiBBcGkuZ2V0R2V0QXV0aChgJHtiYXNlVXJsfS91c2Vycy8ke0FwaS51c2VySWR9YCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0VXNlck5ld1Rva2VuKCkge1xyXG4gICAgICAgIHJldHVybiBBcGkuZ2V0R2V0QXV0aChgJHtiYXNlVXJsfS91c2Vycy8ke0FwaS51c2VySWR9L3Rva2Vuc2AsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICAgKlxyXG4gICAgICogINCg0LDQt9C00LXQuyBVc2Vycy9Xb3Jkc1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvNCw0YHRgdC40LIg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40YUg0YHQu9C+0LJcclxuICAgICAqIEByZXR1cm5zINCc0LDRgdGB0LjQsiDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjRhSDRgdC70L7QslxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0VXNlckFsbFdvcmRzKCkge1xyXG4gICAgICAgIHJldHVybiBBcGkuZ2V0R2V0QXV0aChgJHtiYXNlVXJsfS91c2Vycy8ke0FwaS51c2VySWR9L3dvcmRzYCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqINCh0L7Qt9C00LDQtdGCINC90L7QstC+0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC+0LUg0YHQu9C+0LLQvlxyXG4gICAgICogQHBhcmFtIHdvcmRJZCBJRCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7Qs9C+INGB0LvQvtCy0LBcclxuICAgICAqIEBwYXJhbSBib2R5INCY0L3RhNC+0YDQvNCw0YbQuNGPINC+INGB0LvQvtCy0LVcclxuICAgICAqIEByZXR1cm5zINCY0L3RhNC+0YDQvNCw0YbQuNGPINC+INGB0LvQvtCy0LVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZVVzZXJXb3JkKHdvcmRJZCwgYm9keSkge1xyXG4gICAgICAgIHJldHVybiBBcGkuc2VuZFBvc3QoYCR7YmFzZVVybH0vdXNlcnMvJHtBcGkudXNlcklkfS93b3Jkcy8ke3dvcmRJZH1gLCBib2R5LCB0cnVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LjQvdGE0L7RgNC80LDRhtC40Y4g0L4g0YHQu9C+0LLQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICAqIEBwYXJhbSB3b3JkSWQgSUQg0YHQu9C+0LLQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICAqIEByZXR1cm5zINCY0L3RhNC+0YDQvNCw0YbQuNGOINC+INGB0LvQvtCy0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBnZXRVc2VyV29yZCh3b3JkSWQpIHtcclxuICAgICAgICByZXR1cm4gQXBpLmdldEdldEF1dGgoYCR7YmFzZVVybH0vdXNlcnMvJHtBcGkudXNlcklkfS93b3Jkcy8ke3dvcmRJZH1gKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog0J7QsdC90L7QstC70Y/QtdGCINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQvtC1INGB0LvQvtCy0L5cclxuICAgICAqIEBwYXJhbSB3b3JkSWQgSUQg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC+0LPQviDRgdC70L7QstCwXHJcbiAgICAgKiBAcGFyYW0gYm9keSDQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDRgdC70L7QstC1XHJcbiAgICAgKiBAcmV0dXJucyDQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDRgdC70L7QstC1XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyB1cGRhdGVVc2VyV29yZCh3b3JkSWQsIGJvZHkpIHtcclxuICAgICAgICByZXR1cm4gQXBpLnNlbmRQdXQoYCR7YmFzZVVybH0vdXNlcnMvJHtBcGkudXNlcklkfS93b3Jkcy8ke3dvcmRJZH1gLCBib2R5KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog0KPQtNCw0LvRj9C10YIg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC+0LUg0YHQu9C+0LLQvlxyXG4gICAgICogQHBhcmFtIHdvcmRJZCBJRCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7Qs9C+INGB0LvQvtCy0LBcclxuICAgICAqIEByZXR1cm5zINCj0LTQsNGH0L3QviDQuNC70Lgg0L3QtdGCXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBkZWxldGVVc2VyV29yZCh3b3JkSWQpIHtcclxuICAgICAgICByZXR1cm4gQXBpLnNlbmREZWxldGUoYCR7YmFzZVVybH0vdXNlcnMvJHtBcGkudXNlcklkfS93b3Jkcy8ke3dvcmRJZH1gKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICAgKlxyXG4gICAgICogINCg0LDQt9C00LXQuyBVc2Vycy9BZ2dyZWdhdGVkV29yZHNcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIC8qKlxyXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LzQsNGB0YHQuNCyIEFncmVnYXRlZCDRgdC70L7QslxyXG4gICAgICogQHBhcmFtIHF1ZXJ5IHF1ZXJ5LdC/0LDRgNCw0LzQtdGC0YDRiyDQt9Cw0L/RgNC+0YHQsFxyXG4gICAgICogQHJldHVybnMg0JzQsNGB0YHQuNCyIEFncmVnYXRlZCDRgdC70L7QslxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0VXNlckFsbEFncmVnYXRlZFdvcmRzKHF1ZXJ5KSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBPYmplY3QuZW50cmllcyhxdWVyeSlcclxuICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGAke2N1clswXX09JHtjdXJbMV19JmAsICc/JylcclxuICAgICAgICAgICAgLnNsaWNlKDAsIC0xKTtcclxuICAgICAgICByZXR1cm4gQXBpLmdldEdldEF1dGgoYCR7YmFzZVVybH0vdXNlcnMvJHtBcGkudXNlcklkfS9hZ2dyZWdhdGVkV29yZHMke3F1ZXJ5U3RyaW5nfWApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviBBZ3JlZ2F0ZWQg0YHQu9C+0LLQtVxyXG4gICAgICogQHBhcmFtIHdvcmRJZCBJRCBBZ3JlZ2F0ZWQg0YHQu9C+0LLQsFxyXG4gICAgICogQHJldHVybnMg0JjQvdGE0L7RgNC80LDRhtC40Y4g0L4gQWdyZWdhdGVkINGB0LvQvtCy0LVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJBZ3JlZ2F0ZWRXb3JkKHdvcmRJZCkge1xyXG4gICAgICAgIHJldHVybiBBcGkuZ2V0R2V0QXV0aChgJHtiYXNlVXJsfS91c2Vycy8ke0FwaS51c2VySWR9L2FnZ3JlZ2F0ZWRXb3Jkcy8ke3dvcmRJZH1gKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICAgKlxyXG4gICAgICogINCg0LDQt9C00LXQuyBVc2Vycy9TdGF0aXN0aWNcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIC8qKlxyXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YHRgtCw0YLQuNGB0YLQuNC60YMg0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C1XHJcbiAgICAgKiBAcmV0dXJucyDQodGC0LDRgtC40YHRgtC40LrQsCDQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70LVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJTdGF0aXN0aWNzKCkge1xyXG4gICAgICAgIHJldHVybiBBcGkuZ2V0R2V0QXV0aChgJHtiYXNlVXJsfS91c2Vycy8ke0FwaS51c2VySWR9L3N0YXRpc3RpY3NgKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0L3QvtCy0YPRjiDRgdGC0LDRgtC40YHRgtC40LrRg1xyXG4gICAgICogQHBhcmFtIGJvZHkg0J3QvtCy0LDRjyDRgdGC0LDRgtC40YHRgtC40LrQsFxyXG4gICAgICogQHJldHVybnMg0J3QvtCy0LDRjyDRgdGC0LDRgtC40YHRgtC40LrQsFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgdXBkYXRlVXNlclN0YXRpc3RpY3MoYm9keSkge1xyXG4gICAgICAgIHJldHVybiBBcGkuc2VuZFB1dChgJHtiYXNlVXJsfS91c2Vycy8ke0FwaS51c2VySWR9L3N0YXRpc3RpY3NgLCBib2R5KTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICAgKlxyXG4gICAgICogINCg0LDQt9C00LXQuyBVc2Vycy9TZXR0aW5nXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICAvKipcclxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90LDRgdGC0YDQvtC50LrQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICAqIEByZXR1cm5zINCd0LDRgdGC0YDQvtC50LrQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJTZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gQXBpLmdldEdldEF1dGgoYCR7YmFzZVVybH0vdXNlcnMvJHtBcGkudXNlcklkfS9zZXR0aW5nc2ApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9GB0YLQsNC90LDQstC70LjQstCw0LXRgiDQvdC+0LLRi9C1INC90LDRgdGC0YDQvtC50LrQuFxyXG4gICAgICogQHBhcmFtIGJvZHkg0J3QvtCy0LDRjyDRgdGC0LDRgtC40YHRgtC40LrQsFxyXG4gICAgICogQHJldHVybnMg0J3QvtCy0LDRjyDRgdGC0LDRgtC40YHRgtC40LrQsFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgdXBkYXRlVXNlclNldHRpbmdzKGJvZHkpIHtcclxuICAgICAgICByZXR1cm4gQXBpLnNlbmRQdXQoYCR7YmFzZVVybH0vdXNlcnMvJHtBcGkudXNlcklkfS9zZXR0aW5nc2AsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgICAqXHJcbiAgICAgKiAg0KDQsNC30LTQtdC7IFNpZ24gSW5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LjQt9Cy0L7QtNC40YIg0LvQvtCz0LjQvSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICAqIEBwYXJhbSB1c2VyINCY0LzRjyDQuCDQv9Cw0YDQvtC70Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICAgKiBAcmV0dXJucyDQotC+0LrQtdC9INC70L7Qs9C40L3QsCDQuNC70Lgg0L7RiNC40LHQutCwXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBsb2dpblVzZXIodXNlcikge1xyXG4gICAgICAgIHJldHVybiBBcGkuc2VuZFBvc3QoYCR7YmFzZVVybH0vc2lnbmluYCwgdXNlcik7XHJcbiAgICB9XHJcbn1cclxuQXBpLm1haW5Ub2tlbiA9ICcnO1xyXG5BcGkucmVmcmVzaFRva2VuID0gJyc7XHJcbkFwaS51c2VySWQgPSAnJztcclxuQXBpLnRva2VuVGltZSA9IDA7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vYXBpJztcclxuIiwiZXhwb3J0IGNvbnN0IGdyb3VwcyA9IHtcclxuICAgIEExOiAnRWFzeScsXHJcbiAgICBBMjogJ0Vhc3knLFxyXG4gICAgQjE6ICdNZWRpdW0nLFxyXG4gICAgQjI6ICdNZWRpdW0nLFxyXG4gICAgQzE6ICdIYXJkJyxcclxuICAgIEMyOiAnSGFyZCcsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBtYXhXb3Jkc1BhZ2VzID0gMzA7XHJcbmV4cG9ydCBjb25zdCBjYXJkT25Mb2FkID0gMDtcclxuZXhwb3J0IGNvbnN0IGFjdGl2aXR5Q2xhc3MgPSAnYWN0aXZlJztcclxuZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9yc2xhbmctZnJvbWFyeXMuaGVyb2t1YXBwLmNvbSc7XHJcbmV4cG9ydCBjb25zdCBHUk9VUF9BTU9VTlQgPSA2O1xyXG5leHBvcnQgY29uc3QgUEFHRVNfUEVSX0dST1VQID0gMzA7XHJcbmV4cG9ydCBjb25zdCBXT1JEU19QRVJfUEFHRSA9IDIwO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9ST1VURSA9ICcvJztcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xyXG4iLCJleHBvcnQgdmFyIEVSZWdpc3RlckJ1dHRvblRleHQ7XHJcbihmdW5jdGlvbiAoRVJlZ2lzdGVyQnV0dG9uVGV4dCkge1xyXG4gICAgRVJlZ2lzdGVyQnV0dG9uVGV4dFtcInJlZ2lzdGVyXCJdID0gXCJSZWdpc3RlclwiO1xyXG4gICAgRVJlZ2lzdGVyQnV0dG9uVGV4dFtcImxvZ2luXCJdID0gXCJMb2dpblwiO1xyXG4gICAgRVJlZ2lzdGVyQnV0dG9uVGV4dFtcImNhbmNlbFwiXSA9IFwiQ2FuY2VsXCI7XHJcbn0pKEVSZWdpc3RlckJ1dHRvblRleHQgfHwgKEVSZWdpc3RlckJ1dHRvblRleHQgPSB7fSkpO1xyXG5leHBvcnQgdmFyIEVSb3V0ZXM7XHJcbihmdW5jdGlvbiAoRVJvdXRlcykge1xyXG4gICAgRVJvdXRlc1tcIm1haW5cIl0gPSBcIi9cIjtcclxuICAgIEVSb3V0ZXNbXCJ0ZXh0Ym9va1wiXSA9IFwidGV4dGJvb2tcIjtcclxufSkoRVJvdXRlcyB8fCAoRVJvdXRlcyA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgRVVzZXJXb3JkU3RhdHVzO1xyXG4oZnVuY3Rpb24gKEVVc2VyV29yZFN0YXR1cykge1xyXG4gICAgRVVzZXJXb3JkU3RhdHVzW1wic3R1ZGllZFwiXSA9IFwic3R1ZGllZFwiO1xyXG4gICAgRVVzZXJXb3JkU3RhdHVzW1wibm9ybWFsXCJdID0gXCJub3JtYWxcIjtcclxuICAgIEVVc2VyV29yZFN0YXR1c1tcImRpZmZpY3VsdFwiXSA9IFwiZGlmZmljdWx0XCI7XHJcbn0pKEVVc2VyV29yZFN0YXR1cyB8fCAoRVVzZXJXb3JkU3RhdHVzID0ge30pKTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9lbnVtcyc7XHJcbiIsImltcG9ydCB7IElIZWFkZXJNZW51IH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5leHBvcnQgY29uc3QgQVVUSF9CVVRUT05fQ0xJQ0tfRVZFTlQgPSBuZXcgRXZlbnQoSUhlYWRlck1lbnUuTG9naW4pO1xyXG4iLCJpbXBvcnQgeyBJSGVhZGVyTWVudSB9IGZyb20gJy4vbW9kZWxzJztcclxuZXhwb3J0IGNvbnN0IEdBTUVTX0NMSUNLX0VWRU5UID0gbmV3IEV2ZW50KElIZWFkZXJNZW51LkdhbWVzKTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9tYWluLWNsaWNrLmV2ZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi90ZXh0LWJvb2tzLWNsaWNrLmV2ZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9nYW1lcy1jbGljay5ldmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGlzdGljcy1jbGljay5ldmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC1idXR0b24tY2xpY2suZXZlbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL21vZGVscyc7XHJcbiIsImltcG9ydCB7IElIZWFkZXJNZW51IH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5leHBvcnQgY29uc3QgTUFJTl9DTElDS19FVkVOVCA9IG5ldyBFdmVudChJSGVhZGVyTWVudS5NYWluKTtcclxuIiwiZXhwb3J0IHZhciBJSGVhZGVyTWVudTtcclxuKGZ1bmN0aW9uIChJSGVhZGVyTWVudSkge1xyXG4gICAgSUhlYWRlck1lbnVbXCJNYWluXCJdID0gXCJNQUlOXCI7XHJcbiAgICBJSGVhZGVyTWVudVtcIlRleHRib29rXCJdID0gXCJURVhUQk9PS1wiO1xyXG4gICAgSUhlYWRlck1lbnVbXCJHYW1lc1wiXSA9IFwiR0FNRVNcIjtcclxuICAgIElIZWFkZXJNZW51W1wiU3RhdGlzdGljc1wiXSA9IFwiU1RBVElTVElDU1wiO1xyXG4gICAgSUhlYWRlck1lbnVbXCJMb2dpblwiXSA9IFwiTE9HIElOXCI7XHJcbn0pKElIZWFkZXJNZW51IHx8IChJSGVhZGVyTWVudSA9IHt9KSk7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vaGVhZGVyLW1lbnUubW9kZWwnO1xyXG4iLCJpbXBvcnQgeyBJSGVhZGVyTWVudSB9IGZyb20gJy4vbW9kZWxzJztcclxuZXhwb3J0IGNvbnN0IFNUQVRJU1RJQ1NfQ0xJQ0tfRVZFTlQgPSBuZXcgRXZlbnQoSUhlYWRlck1lbnUuU3RhdGlzdGljcyk7XHJcbiIsImltcG9ydCB7IElIZWFkZXJNZW51IH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5leHBvcnQgY29uc3QgVEVYVF9CT09LU19DTElDS19FVkVOVCA9IG5ldyBFdmVudChJSGVhZGVyTWVudS5UZXh0Ym9vayk7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuZXhwb3J0ICogZnJvbSAnLi9lbnVtcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnRzJztcclxuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcclxuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0Ym9vayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbiIsImV4cG9ydCB7fTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0Ym9vayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vd29yZENhcmQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3dvcmRHcm91cCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vd29yZERldGFpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3dvcmRHcm91cEJ1dHRvbic7XHJcbiIsImV4cG9ydCB7fTtcclxuIiwiZXhwb3J0IHt9O1xyXG4iLCJleHBvcnQge307XHJcbiIsImV4cG9ydCB7fTtcclxuIiwiZXhwb3J0IHt9O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3JvdXRlcic7XHJcbiIsImltcG9ydCB7IEVSb3V0ZXMgfSBmcm9tICcuLi9lbnVtcyc7XHJcbi8qIGVzbGludC1kaXNhYmxlKi9cclxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCByb3V0ZXMpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xyXG4gICAgICAgIHRoaXMucGFnZSA9ICcnO1xyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IHRoaXMubWFpbi5tYWluLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuc3dpdGNoUm91dGUodGhpcy5nZXRIYXNoKCkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFJvdXRlKHRoaXMuZ2V0SGFzaCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN3aXRjaFJvdXRlKGhhc2gpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnJvdXRlc1toYXNoXSA/IGhhc2ggOiBFUm91dGVzLm1haW47XHJcbiAgICAgICAgY29uc3QgUm91dGUgPSB0aGlzLnJvdXRlc1trZXldO1xyXG4gICAgICAgIGxldCByb3V0ZSA9IG5ldyBSb3V0ZSh0aGlzLnBhcmVudE5vZGUpO1xyXG4gICAgICAgIGlmIChrZXkgPT09IEVSb3V0ZXMudGV4dGJvb2spIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gRVJvdXRlcy50ZXh0Ym9vaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHBhZ2U6IG51bWJlciA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFnZScpKSB8fCAwO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBncm91cDogbnVtYmVyID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdncm91cCcpKSB8fCAwO1xyXG4gICAgICAgICAgICAvLyByb3V0ZSA9IG5ldyBSb3V0ZSh0aGlzLnBhcmVudE5vZGUsIGdyb3VwLCBwYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFpbi5yZW5kZXJQYWdlKHJvdXRlKTtcclxuICAgIH1cclxuICAgIGdldEhhc2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdGV4dGJvb2suc2VydmljZSc7XHJcbiIsImltcG9ydCB7IEFwaSB9IGZyb20gJy4uL2FwaSc7XHJcbmV4cG9ydCBjbGFzcyBUZXh0Ym9va1NlcnZpY2Uge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldFdvcmRzKGdyb3VwLCBwYWdlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpLmdldFdvcmRzKGdyb3VwLCBwYWdlKS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL3R5cGVzJztcclxuIiwiZXhwb3J0IHt9O1xyXG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBnZXRUZW1wbGF0ZSB9IGZyb20gJy4vYWR2YW50YWdlcy52aWV3JztcclxuZXhwb3J0IGNsYXNzIEFkdmFudGFnZXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdldFRlbXBsYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL2FkdmFudGFnZXMuc2Nzcyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImFkdmFudGFnZXNcIiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnQtYWR2YW50YWdlc1wiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlLWFkdmFudGFnZXNcIj5MZWFybiBFbmdsaXNoIGVhc2lseSBhbmQgc2ltcGx5IHdpdGggUlMgTGFuZzwvaDI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWFkdmFudGFnZXNcIj5TdG9wIGxlYXJuaW5nIEVuZ2xpc2gsIGl0J3MgdGltZSB0byBsZWFybiBpdCE8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWFkdmFudGFnZXNcIj5TdGFydCByaWdodCBub3chPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnQtYWR2YW50YWdlc1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctYWR2YW50YWdlc1wiIHNyYz1cIi4uL3B1YmxpYy9zdGF0aWMvbGVhcm4ucG5nXCIgYWx0PVwibGVhcm5cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9hZHZhbnRhZ2VzJztcclxuIiwiaW1wb3J0IHsgQ3JlYXRvciB9IGZyb20gJy4uL0NyZWF0b3IvJztcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENyZWF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50LCBjbGFzc05hbWUsIHRleHQsIG9uQ2xpY2spIHtcclxuICAgICAgICBzdXBlcihwYXJlbnQsICdidXR0b24nLCBjbGFzc05hbWUsIHRleHQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbmNsaWNrID0gKCkgPT4gb25DbGljayh0ZXh0KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL0J1dHRvbic7XHJcbiIsImltcG9ydCB7IEdBTUVTX0NMSUNLX0VWRU5ULCBJSGVhZGVyTWVudSwgTUFJTl9DTElDS19FVkVOVCwgU1RBVElTVElDU19DTElDS19FVkVOVCwgVEVYVF9CT09LU19DTElDS19FVkVOVCwgfSBmcm9tICcuLi8uLi9iYXNpYyc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGdldFRlbXBsYXRlIH0gZnJvbSAnLi9jYXJkLW9wcG9ydHVuaXRpZXMudmlldyc7XHJcbmV4cG9ydCBjbGFzcyBDYXJkT3Bwb3J0dW5pdGllcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3Iocm9vdCwgc2V0dGluZ3MpIHtcclxuICAgICAgICBzdXBlcihyb290KTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdldFRlbXBsYXRlKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmlkO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW4oKTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhcmRDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBsaXN0ZW4oKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhcmRDbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIG9uQ2FyZENsaWNrKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5pZCkge1xyXG4gICAgICAgICAgICBjYXNlIElIZWFkZXJNZW51Lk1haW46XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KE1BSU5fQ0xJQ0tfRVZFTlQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSUhlYWRlck1lbnUuVGV4dGJvb2s6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFRFWFRfQk9PS1NfQ0xJQ0tfRVZFTlQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSUhlYWRlck1lbnUuR2FtZXM6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KEdBTUVTX0NMSUNLX0VWRU5UKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIElIZWFkZXJNZW51LlN0YXRpc3RpY3M6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFNUQVRJU1RJQ1NfQ0xJQ0tfRVZFTlQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9jYXJkLW9wcG9ydHVuaXRpZXMuc2Nzcyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZShzZXR0aW5ncykge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY2FyZC1vcHBvcnR1bml0aWVzXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWJhY2tnclwiIHNyYz1cIiR7c2V0dGluZ3Muc3JjQmFja2dyfVwiIGFsdD1cImJhY2tncm91bmRcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImljb24tb3Bwb3J0dW5pdGllc1wiIHNyYz1cIiR7c2V0dGluZ3Muc3JjSWNvbn1cIiBhbHQ9XCJ0ZXh0Ym9va1wiIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW9wcG9ydHVuaXRpZXNcIj4ke3NldHRpbmdzLnRleHR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9tb2RlbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NhcmQtb3Bwb3J0dW5pdGllcyc7XHJcbiIsImV4cG9ydCB7fTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9jYXJkLW9wcG9ydHVuaXRpZXMubW9kZWwnO1xyXG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBnZXRUZW1wbGF0ZSB9IGZyb20gJy4vY2FyZC10ZWFtLnZpZXcnO1xyXG5leHBvcnQgY2xhc3MgQ2FyZFRlYW0gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgc3VwZXIocm9vdCk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBnZXRUZW1wbGF0ZSh0aGlzLnNldHRpbmdzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJy4vY2FyZC10ZWFtLnNjc3MnO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVtcGxhdGUoc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInBlcnNvblwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXBlcnNvblwiIHNyYz1cIiR7c2V0dGluZ3Muc3JjUGVyc29ufVwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXBlcnNvblwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwibGluay1naXRodWItdGVhbVwiIGhyZWY9XCIke3NldHRpbmdzLmhyZWZQZXJzb259XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibmFtZS1wZXJzb25cIj4ke3NldHRpbmdzLm5hbWVQZXJzb259PC9oND48L2E+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkb25lLXBlcnNvblwiPiR7c2V0dGluZ3MuZG9uZVBlcnNvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL21vZGVscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2FyZC10ZWFtJztcclxuIiwiZXhwb3J0IHt9O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL2NhcmQtdGVhbS5tb2RlbCc7XHJcbiIsImV4cG9ydCBjbGFzcyBDcmVhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudE5vZGUsIHRhZ05hbWUgPSAnZGl2JywgY2xhc3NOYW1lID0gJycsIGNvbnRlbnQgPSAnJykge1xyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgICAgICBpZiAoY2xhc3NOYW1lKVxyXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZChlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZSA9IGVsO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9DcmVhdG9yJztcclxuIiwiaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgZ2V0VGVtcGxhdGUgfSBmcm9tICcuL2Zvb3Rlci52aWV3JztcclxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ2V0VGVtcGxhdGUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJy4vZm9vdGVyLnNjc3MnO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWZvb3RlclwiPlxyXG4gICAgPHVsIGNsYXNzPVwibGluay1naXRodWJcIj5cclxuICAgICAgPGxpIGNsYXNzPVwiaXRlbS1saW5rLWdpdGh1YlwiPiZjb3B5OzIwMjI8L2xpPlxyXG4gICAgICA8YSBjbGFzcz1cImxpbmstZ2l0aHViLWZvb3RlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZnJvbWFyeXNcIiB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICA+PGxpIGNsYXNzPVwiaXRlbS1saW5rLWdpdGh1YlwiPllldmdlbmlpIE1pbmV5ZXY8L2xpPjwvYVxyXG4gICAgICA+XHJcbiAgICAgIDxhIGNsYXNzPVwibGluay1naXRodWItZm9vdGVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Pa3NhbmFTZXJlZ2luYVwiIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgID48bGkgY2xhc3M9XCJpdGVtLWxpbmstZ2l0aHViXCI+T2tzYW5hIFNlcmVnaW5hPC9saT48L2FcclxuICAgICAgPlxyXG4gICAgICA8YSBjbGFzcz1cImxpbmstZ2l0aHViLWZvb3RlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQW5kcm9uaW8yXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgPjxsaSBjbGFzcz1cIml0ZW0tbGluay1naXRodWJcIj5BbmRyZXkgU21pcm5vdjwvbGk+PC9hXHJcbiAgICAgID5cclxuICAgIDwvdWw+XHJcbiAgICA8YSBjbGFzcz1cInJzbGluay1mb290ZXJcIiBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICA+PGltZyBzcmM9XCIuLi9wdWJsaWMvc3RhdGljL3JzX3NjaG9vbF9qcy5zdmdcIiBhbHQ9XCJsb2dvXCIgc3R5bGU9XCJoZWlnaHQ6IDUwcHhcIlxyXG4gICAgLz48L2E+XHJcbiAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9mb290ZXInO1xyXG4iLCJpbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBnZXRUZW1wbGF0ZSB9IGZyb20gJy4vaGVhZGVyLnZpZXcnO1xyXG5pbXBvcnQgeyBNQUlOX0NMSUNLX0VWRU5ULCBJSGVhZGVyTWVudSwgVEVYVF9CT09LU19DTElDS19FVkVOVCwgR0FNRVNfQ0xJQ0tfRVZFTlQsIFNUQVRJU1RJQ1NfQ0xJQ0tfRVZFTlQsIEFVVEhfQlVUVE9OX0NMSUNLX0VWRU5ULCB9IGZyb20gJy4uLy4uL2Jhc2ljJztcclxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLm5hdkJ1dHRvbnMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXV0aEJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdldFRlbXBsYXRlKElIZWFkZXJNZW51KTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuKCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubmF2QnV0dG9ucy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25OYXZDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmF1dGhCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQXV0aENsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGF0dGFjaEVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5yb290Py5wcmVwZW5kKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5uYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImhlYWRlci1tZW51XCJdJyk7XHJcbiAgICAgICAgdGhpcy5hdXRoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImF1dGhcIl0nKTtcclxuICAgIH1cclxuICAgIGxpc3RlbigpIHtcclxuICAgICAgICB0aGlzLm5hdkJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTmF2Q2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5hdXRoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkF1dGhDbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIC8vIENyZWF0ZSBjdXN0b20gZXZlbnRzIHRoYXQgY2FuIGJlIGxpc3RlbmVkIGZyb20gZG9jdW1lbnRzLCBsaWtlc1xyXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihJSGVhZGVyTWVudS5NYWluLCAoZXZlbnQpID0+IC4uLilcclxuICAgIG9uQXV0aENsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KEFVVEhfQlVUVE9OX0NMSUNLX0VWRU5UKTtcclxuICAgIH1cclxuICAgIC8vIENyZWF0ZSBjdXN0b20gZXZlbnRzIHRoYXQgY2FuIGJlIGxpc3RlbmVkIGZyb20gZG9jdW1lbnRzLCBsaWtlc1xyXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihJSGVhZGVyTWVudS5NYWluLCAoZXZlbnQpID0+IC4uLilcclxuICAgIG9uTmF2Q2xpY2soZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtaWRdJyk7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSUhlYWRlck1lbnUuTWFpbjpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoTUFJTl9DTElDS19FVkVOVCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJSGVhZGVyTWVudS5UZXh0Ym9vazpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoVEVYVF9CT09LU19DTElDS19FVkVOVCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJSGVhZGVyTWVudS5HYW1lczpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoR0FNRVNfQ0xJQ0tfRVZFTlQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSUhlYWRlck1lbnUuU3RhdGlzdGljczpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoU1RBVElTVElDU19DTElDS19FVkVOVCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL2hlYWRlci5zY3NzJztcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlKG1lbnUpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzPVwibGluay1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1sb2dvXCIgc3JjPVwiLi4vLi4vLi4vcHVibGljL3N0YXRpYy9sb2dvLmpwZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlLWxvZ29cIj5SU0xhbmc8L2gxPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8bmF2IGRhdGEtcm9sZT1cImhlYWRlci1tZW51XCIgY2xhc3M9XCJoZWFkZXItbWVudVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1pZD1cIiR7bWVudS5NYWlufVwiIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48c3Bhbj4ke21lbnUuTWFpbn08L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1pZD1cIiR7bWVudS5UZXh0Ym9va31cIiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4+JHttZW51LlRleHRib29rfTwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBkYXRhLWlkPVwiJHttZW51LkdhbWVzfVwiIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48c3Bhbj4ke21lbnUuR2FtZXN9PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtaWQ9XCIke21lbnUuU3RhdGlzdGljc31cIiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4+JHttZW51LlN0YXRpc3RpY3N9PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGRhdGEtcm9sZT1cImF1dGhcIiBjbGFzcz1cImxvZy1pblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuPiR7bWVudS5Mb2dpbn08L3NwYW4+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL2hlYWRlcic7XHJcbiIsImltcG9ydCB7IENyZWF0b3IgfSBmcm9tICcuLi9DcmVhdG9yJztcclxuZXhwb3J0IGNsYXNzIElucHV0IGV4dGVuZHMgQ3JlYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHBhcmVudCwgJ2lucHV0JywgY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLm5vZGUudHlwZSA9ICd0ZXh0JztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC70YPRh9Cw0LXRgiDQt9C90LDRh9C10L3QuNC1INC/0L7Qu9GPINC40L3Qv9GD0YLQsFxyXG4gICAgICogQHJldHVybnMg0KLQtdC60YHRgiDQsiDQv9C+0LvQtSDQuNC90L/Rg9GC0LBcclxuICAgICAqL1xyXG4gICAgZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS52YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL0lucHV0JztcclxuIiwiaW1wb3J0IHsgSUhlYWRlck1lbnUgfSBmcm9tICcuLi8uLi9iYXNpYyc7XHJcbmV4cG9ydCBjb25zdCBDQVJEX09QUE9SVFVOSVRJRVMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc3JjQmFja2dyOiAnLi4vcHVibGljL3N0YXRpYy9jYXJkLWJhY2tncjEuanBlZycsXHJcbiAgICAgICAgc3JjSWNvbjogJy4uL3B1YmxpYy9zdGF0aWMvdGV4dGJvb2sucG5nJyxcclxuICAgICAgICB0ZXh0OiAnRWxlY3Ryb25pYyB0ZXh0Ym9vayB3aXRoIGEgZGF0YWJhc2Ugb2Ygd29yZHMgdG8gc3R1ZHknLFxyXG4gICAgICAgIGlkOiBJSGVhZGVyTWVudS5UZXh0Ym9vayxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjQmFja2dyOiAnLi4vcHVibGljL3N0YXRpYy9jYXJkLWJhY2tncjIuanBlZycsXHJcbiAgICAgICAgc3JjSWNvbjogJy4uL3B1YmxpYy9zdGF0aWMvcGxheS5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICdNaW5pLWdhbWVzIGZvciByZXBlYXRpbmcgdGhlIGxlYXJuZWQgd29yZHMnLFxyXG4gICAgICAgIGlkOiBJSGVhZGVyTWVudS5HYW1lcyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjQmFja2dyOiAnLi4vcHVibGljL3N0YXRpYy9jYXJkLWJhY2tncjMuanBlZycsXHJcbiAgICAgICAgc3JjSWNvbjogJy4uL3B1YmxpYy9zdGF0aWMvc3RhdC5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICdEZXRhaWxlZCBzdGF0aXN0aWNzIG9mIHlvdXIgYWNoaWV2ZW1lbnRzJyxcclxuICAgICAgICBpZDogSUhlYWRlck1lbnUuU3RhdGlzdGljcyxcclxuICAgIH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBDQVJEX1RFQU0gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc3JjUGVyc29uOiAnLi4vcHVibGljL3N0YXRpYy9wZXJzb24uanBnJyxcclxuICAgICAgICBocmVmUGVyc29uOiAnaHR0cHM6Ly9naXRodWIuY29tL2Zyb21hcnlzJyxcclxuICAgICAgICBuYW1lUGVyc29uOiAnWWV2Z2VuaWkgTWluZXlldicsXHJcbiAgICAgICAgZG9uZVBlcnNvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjUGVyc29uOiAnLi4vcHVibGljL3N0YXRpYy9wZXJzb24uanBnJyxcclxuICAgICAgICBocmVmUGVyc29uOiAnaHR0cHM6Ly9naXRodWIuY29tL09rc2FuYVNlcmVnaW5hJyxcclxuICAgICAgICBuYW1lUGVyc29uOiAnT2tzYW5hIFNlcmVnaW5hJyxcclxuICAgICAgICBkb25lUGVyc29uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzcmNQZXJzb246ICcuLi9wdWJsaWMvc3RhdGljL3BlcnNvbi5qcGcnLFxyXG4gICAgICAgIGhyZWZQZXJzb246ICdodHRwczovL2dpdGh1Yi5jb20vQW5kcm9uaW8yJyxcclxuICAgICAgICBuYW1lUGVyc29uOiAnQW5kcmV5IFNtaXJub3YnLFxyXG4gICAgICAgIGRvbmVQZXJzb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LicsXHJcbiAgICB9LFxyXG5dO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL21vZGVscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWFpbic7XHJcbiIsImltcG9ydCB7IEFkdmFudGFnZXMgfSBmcm9tICcuLi9BZHZhbnRhZ2VzJztcclxuaW1wb3J0IHsgQ2FyZE9wcG9ydHVuaXRpZXMgfSBmcm9tICcuLi9DYXJkT3Bwb3J0dW5pdGllcyc7XHJcbmltcG9ydCB7IENhcmRUZWFtIH0gZnJvbSAnLi4vQ2FyZFRlYW0nO1xyXG5pbXBvcnQgeyBSb290IH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBnZXRUZW1wbGF0ZSB9IGZyb20gJy4vbWFpbi52aWV3JztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ0FSRF9PUFBPUlRVTklUSUVTLCBDQVJEX1RFQU0gfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNPcHBvcnR1bml0aWVzID0gW107XHJcbiAgICAgICAgdGhpcy5jYXJkc1RlYW0gPSBbXTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdldFRlbXBsYXRlKCk7XHJcbiAgICB9XHJcbiAgICBhdHRhY2hFbGVtZW50KCkge1xyXG4gICAgICAgIHN1cGVyLmF0dGFjaEVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLmluaXRBZHZhbnRhZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0T3Bwb3J0dW5pdGllcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRlYW0oKTtcclxuICAgIH1cclxuICAgIGluaXRBZHZhbnRhZ2VzKCkge1xyXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFJvb3QuQWR2YW50YWdlcyk7XHJcbiAgICAgICAgY29uc3QgYWR2YW50YWdlcyA9IG5ldyBBZHZhbnRhZ2VzKHJvb3QpO1xyXG4gICAgICAgIGFkdmFudGFnZXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdE9wcG9ydHVuaXRpZXMoKSB7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoUm9vdC5PcHBvcnR1bml0aWVzKTtcclxuICAgICAgICBDQVJEX09QUE9SVFVOSVRJRVMuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkc09wcG9ydHVuaXRpZXMgPSBbLi4udGhpcy5jYXJkc09wcG9ydHVuaXRpZXMsIG5ldyBDYXJkT3Bwb3J0dW5pdGllcyhyb290LCB2YWx1ZSldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FyZHNPcHBvcnR1bml0aWVzLmZvckVhY2goKGNhcmQpID0+IGNhcmQuaW5pdCgpKTtcclxuICAgIH1cclxuICAgIGluaXRUZWFtKCkge1xyXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFJvb3QuVGVhbSk7XHJcbiAgICAgICAgQ0FSRF9URUFNLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZHNUZWFtID0gWy4uLnRoaXMuY2FyZHNUZWFtLCBuZXcgQ2FyZFRlYW0ocm9vdCwgdmFsdWUpXTtcclxuICAgICAgICAgICAgdGhpcy5jYXJkc1RlYW0uZm9yRWFjaCgobWVtYmVyKSA9PiBtZW1iZXIuaW5pdCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcclxuZXhwb3J0IGNvbnN0IGdldFRlbXBsYXRlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGRhdGEtcm9vdD1cImFkdmFudGFnZXNcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3Bwb3J0dW5pdGllc1wiIGRhdGEtcm9vdD1cIm9wcG9ydHVuaXRpZXNcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3VyLXRlYW1cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGUtdGVhbVwiPk91ciB0ZWFtPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci10ZWFtXCIgZGF0YS1yb290PVwib3VyLXRlYW1cIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgYDtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9yb290LmVudW0nO1xyXG4iLCJleHBvcnQgdmFyIFJvb3Q7XHJcbihmdW5jdGlvbiAoUm9vdCkge1xyXG4gICAgUm9vdFtcIkFkdmFudGFnZXNcIl0gPSBcIltkYXRhLXJvb3Q9XFxcImFkdmFudGFnZXNcXFwiXVwiO1xyXG4gICAgUm9vdFtcIk9wcG9ydHVuaXRpZXNcIl0gPSBcIltkYXRhLXJvb3Q9XFxcIm9wcG9ydHVuaXRpZXNcXFwiXVwiO1xyXG4gICAgUm9vdFtcIlRlYW1cIl0gPSBcIltkYXRhLXJvb3Q9XFxcIm91ci10ZWFtXFxcIl1cIjtcclxufSkoUm9vdCB8fCAoUm9vdCA9IHt9KSk7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vd29yZENhcmQnO1xyXG5leHBvcnQgKiBmcm9tICcuLi9Xb3JkRGV0YWlscy93b3JkRGV0YWlscyc7XHJcbiIsImltcG9ydCB7IGFjdGl2aXR5Q2xhc3MsIH0gZnJvbSAnLi4vLi4vLi4vYmFzaWMnO1xyXG5pbXBvcnQgV29yZENhcmRWaWV3IGZyb20gJy4vd29yZENhcmQudmlldyc7XHJcbmltcG9ydCB7IFdvcmREZXRhaWxzIH0gZnJvbSAnLi4vV29yZERldGFpbHMvd29yZERldGFpbHMnO1xyXG5leHBvcnQgY2xhc3MgV29yZENhcmQge1xyXG4gICAgY29uc3RydWN0b3Iod29yZEdyb3VwLCB0ZXh0Ym9vaywgd29yZEluZm8sIGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMud29yZEdyb3VwID0gd29yZEdyb3VwO1xyXG4gICAgICAgIHRoaXMud29yZHNXcmFwcGVyID0gdGV4dGJvb2sud29yZHMubm9kZTtcclxuICAgICAgICB0aGlzLndvcmRzQ29udGFpbmVyID0gdGV4dGJvb2sud29yZHNDb250YWluZXIubm9kZTtcclxuICAgICAgICB0aGlzLndvcmRJbmZvID0gd29yZEluZm87XHJcbiAgICAgICAgdGhpcy53b3JkQ2FyZCA9IG5ldyBXb3JkQ2FyZFZpZXcodGhpcy53b3Jkc0NvbnRhaW5lciwgd29yZEluZm8sIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZSlcclxuICAgICAgICAgICAgdGhpcy53b3JkRGV0YWlscyA9IG5ldyBXb3JkRGV0YWlscyh0aGlzLndvcmRzV3JhcHBlciwgd29yZEluZm8pO1xyXG4gICAgICAgIGlmIChjbGFzc05hbWUpXHJcbiAgICAgICAgICAgIHRoaXMud29yZEdyb3VwLmFjdGl2ZUVsZW1lbnQgPSB0aGlzLndvcmRDYXJkLm5vZGU7XHJcbiAgICAgICAgdGhpcy53b3JkQ2FyZC5ub2RlLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsaWNrSGFuZGxlcigpO1xyXG4gICAgfVxyXG4gICAgY2xpY2tIYW5kbGVyKCkge1xyXG4gICAgICAgIHRoaXMud29yZEdyb3VwLmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShhY3Rpdml0eUNsYXNzKTtcclxuICAgICAgICB0aGlzLndvcmRHcm91cC5hY3RpdmVFbGVtZW50ID0gdGhpcy53b3JkQ2FyZC5ub2RlO1xyXG4gICAgICAgIHRoaXMud29yZEdyb3VwLmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChhY3Rpdml0eUNsYXNzKTtcclxuICAgICAgICBuZXcgV29yZERldGFpbHModGhpcy53b3Jkc1dyYXBwZXIsIHRoaXMud29yZEluZm8pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENyZWF0b3IgfSBmcm9tICcuLi8uLi9DcmVhdG9yJztcclxuaW1wb3J0ICcuL3dvcmRDYXJkLnNjc3MnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JkQ2FyZFZpZXcgZXh0ZW5kcyBDcmVhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudE5vZGUsIHdvcmRJbmZvLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gYDxoMiBjbGFzcz1cIndvcmRzX193b3JkXCI+JHt3b3JkSW5mby53b3JkfTwvaDI+XHJcbiAgICA8aDMgY2xhc3M9XCJ3b3Jkc19fdHJhbnNsYXRlXCI+JHt3b3JkSW5mby53b3JkVHJhbnNsYXRlfTwvaDM+YDtcclxuICAgICAgICBzdXBlcihwYXJlbnROb2RlLCAnYnV0dG9uJywgYHdvcmRzX19jYXJkICR7Y2xhc3NOYW1lfWAsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vd29yZERldGFpbHMnO1xyXG4iLCJpbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnLi4vLi4vLi4vYmFzaWMnO1xyXG5pbXBvcnQgV29yZERldGFpbHNWaWV3IGZyb20gJy4vd29yZERldGFpbHMudmlldyc7XHJcbmV4cG9ydCBjbGFzcyBXb3JkRGV0YWlscyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnROb2RlLCB3b3JkSW5mbykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREZXRhaWxzID0gcGFyZW50Tm9kZS5jaGlsZE5vZGVzWzJdO1xyXG4gICAgICAgIGN1cnJlbnREZXRhaWxzPy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgV29yZERldGFpbHNWaWV3KHBhcmVudE5vZGUsIHdvcmRJbmZvKTtcclxuICAgICAgICB0aGlzLmF1ZGlvID0gdGhpcy52aWV3LmF1ZGlvQnV0dG9uLm5vZGU7XHJcbiAgICAgICAgdGhpcy5hdWRpby5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbGlja0hhbmRsZXIod29yZEluZm8pO1xyXG4gICAgfVxyXG4gICAgY2xpY2tIYW5kbGVyKHdvcmRJbmZvKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy52aWV3LmF1ZGlvQnV0dG9uLm5vZGU7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJ1dHRvbi5jaGlsZHJlblswXTtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhgJHtiYXNlVXJsfS8ke3dvcmRJbmZvLmF1ZGlvfWApO1xyXG4gICAgICAgIGljb24/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHZvaWQgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgIGF1ZGlvLm9uZW5kZWQgPSAoKSA9PiBpY29uPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnLi4vLi4vLi4vYmFzaWMnO1xyXG5pbXBvcnQgeyBDcmVhdG9yIH0gZnJvbSAnLi4vLi4vQ3JlYXRvcic7XHJcbmltcG9ydCAnLi93b3JkRGV0YWlscy5zY3NzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29yZERldGFpbHNWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudE5vZGUsIHdvcmQpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gYDxpbWcgc3JjPVwiJHtiYXNlVXJsfS8ke3dvcmQuaW1hZ2V9XCIgY2xhc3M9XCJ3b3Jkc19faW1hZ2VcIj48L2ltZz5gO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyQ29udGVudCA9IHRoaXMucmVuZGVySGVhZGVyKHdvcmQpO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25Db250ZW50ID0gdGhpcy5yZW5kZXJEZXNjcmlwdGlvbih3b3JkKTtcclxuICAgICAgICB0aGlzLmRldGFpbHMgPSBuZXcgQ3JlYXRvcihwYXJlbnROb2RlLCAnZGl2JywgJ3dvcmRzX19kZXRhaWxzJyk7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzLm5vZGUuaW5uZXJIVE1MID0gdGhpcy5pbWFnZTtcclxuICAgICAgICB0aGlzLmluZm9ybWF0aW9uID0gbmV3IENyZWF0b3IodGhpcy5kZXRhaWxzLm5vZGUsICdkaXYnLCAnd29yZHNfX2luZm9ybWF0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgQ3JlYXRvcih0aGlzLmluZm9ybWF0aW9uLm5vZGUsICdkaXYnLCAnd29yZHNfX2hlYWRlcicsIHRoaXMuaGVhZGVyQ29udGVudCk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBDcmVhdG9yKHRoaXMuaW5mb3JtYXRpb24ubm9kZSwgJ2RpdicsICd3b3Jkc19fZGVzY3JpcHRpb24nLCB0aGlzLmRlc2NyaXB0aW9uQ29udGVudCk7XHJcbiAgICAgICAgdGhpcy5hdWRpb0J1dHRvbiA9IG5ldyBDcmVhdG9yKHRoaXMuaGVhZGVyLm5vZGUsICdidXR0b24nLCAnd29yZHNfX2F1ZGlvJywgdGhpcy5yZW5kZXJBdWRpb0J1dHRvbigpKTtcclxuICAgIH1cclxuICAgIHJlbmRlckhlYWRlcih3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgPGgyIGNsYXNzPVwid29yZHNfX3dvcmRcIj4ke3dvcmQud29yZH08L2gyPlxyXG4gICAgICA8aDMgY2xhc3M9XCJ3b3Jkc19fdHJhbnNsYXRlXCI+JHt3b3JkLndvcmRUcmFuc2xhdGV9PC9oMz5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ3b3Jkc19fdHJhbnNjcmlwdGlvblwiPiR7d29yZC50cmFuc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgIGA7XHJcbiAgICB9XHJcbiAgICByZW5kZXJEZXNjcmlwdGlvbih3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgPGgzIGNsYXNzPVwid29yZHNfX3N1YnRpdGxlXCI+0JfQvdCw0YfQtdC90LjQtTwvaDM+XHJcbiAgICAgIDxwPiR7d29yZC50ZXh0TWVhbmluZ308L3A+XHJcbiAgICAgIDxwPiR7d29yZC50ZXh0TWVhbmluZ1RyYW5zbGF0ZX08L3A+XHJcbiAgICAgIDxoMyBjbGFzcz1cIndvcmRzX19zdWJ0aXRsZVwiPtCf0YDQuNC80LXRgDwvaDM+XHJcbiAgICAgIDxwPiR7d29yZC50ZXh0RXhhbXBsZX08L3A+XHJcbiAgICAgIDxwPiR7d29yZC50ZXh0RXhhbXBsZVRyYW5zbGF0ZX08L3A+XHJcbiAgICBgO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQXVkaW9CdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgIDxzdmcgY2xhc3M9XCJ3b3Jkc19fYXVkaW8taWNvblwiPlxyXG4gICAgICA8dXNlIHhsaW5rOmhyZWY9XCIuLi8uLi8uLi9wdWJsaWMvc3RhdGljL2F1ZGlvLnN2ZyNhdWRpb1wiPjwvdXNlPlxyXG4gICAgPC9zdmc+XHJcbiAgICBgO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vd29yZEdyb3VwQnV0dG9uJztcclxuIiwiaW1wb3J0IHsgYWN0aXZpdHlDbGFzcywgZ3JvdXBzIH0gZnJvbSAnLi4vLi4vLi4vYmFzaWMnO1xyXG5pbXBvcnQgeyBXb3JkR3JvdXAgfSBmcm9tICcuLi9Xb3JkR3JvdXAnO1xyXG5pbXBvcnQgV29yZEdyb3VwQnV0dG9uVmlldyBmcm9tICcuL3dvcmRHcm91cEJ1dHRvbi52aWV3JztcclxuZXhwb3J0IGNsYXNzIFdvcmRHcm91cEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0Ym9vaywgaXRlbSkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0ID0gT2JqZWN0LmtleXMoZ3JvdXBzKTtcclxuICAgICAgICB0aGlzLnRleHRib29rID0gdGV4dGJvb2s7XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gdGV4dGJvb2suZ3JvdXAubm9kZTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgV29yZEdyb3VwQnV0dG9uVmlldyh0aGlzLnBhcmVudE5vZGUsIGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSB0aGlzLnZpZXcuZ3JvdXAubm9kZTtcclxuICAgICAgICB0aGlzLmdyb3VwQ2xhc3NOYW1lID0gdGhpcy5ncm91cC5jbGFzc05hbWU7XHJcbiAgICAgICAgdGhpcy52aWV3Lmdyb3VwLm5vZGUub25jbGljayA9IChldmVudCkgPT4gdGhpcy5jbGlja0hhbmRsZXIodGV4dGJvb2ssIGV2ZW50KTtcclxuICAgICAgICBpZiAodGhpcy5ncm91cC5jbGFzc0xpc3QuY29udGFpbnMoYWN0aXZpdHlDbGFzcykpXHJcbiAgICAgICAgICAgIHRoaXMudGV4dGJvb2suYWN0aXZlR3JvdXAgPSB0aGlzLmdyb3VwO1xyXG4gICAgfVxyXG4gICAgY2xpY2tIYW5kbGVyKHRleHRib29rLCBldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGdyb3VwID0gbmV3IFdvcmRHcm91cCh0ZXh0Ym9vayk7XHJcbiAgICAgICAgY29uc3Qgc3dpdGNoZWRHcm91cEJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KGAuJHt0aGlzLmdyb3VwQ2xhc3NOYW1lfWApO1xyXG4gICAgICAgIGNvbnN0IGxldmVsID0gc3dpdGNoZWRHcm91cEJ1dHRvbj8uZGF0YXNldC5sZXZlbDtcclxuICAgICAgICB0aGlzLnN3aXRjaFN0eWxlcyhzd2l0Y2hlZEdyb3VwQnV0dG9uKTtcclxuICAgICAgICBpZiAobGV2ZWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3R3JvdXBOdW1iZXIgPSB0aGlzLmdyb3VwTGlzdC5pbmRleE9mKGxldmVsKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dyb3VwJywgSlNPTi5zdHJpbmdpZnkobmV3R3JvdXBOdW1iZXIpKTtcclxuICAgICAgICAgICAgZ3JvdXAucmVuZGVyQ2FyZHMobmV3R3JvdXBOdW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN3aXRjaFN0eWxlcyhuZXdHcm91cEJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMudGV4dGJvb2suYWN0aXZlR3JvdXAuY2xhc3NMaXN0LnJlbW92ZShhY3Rpdml0eUNsYXNzKTtcclxuICAgICAgICBpZiAobmV3R3JvdXBCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Ym9vay5hY3RpdmVHcm91cCA9IG5ld0dyb3VwQnV0dG9uO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRib29rLmFjdGl2ZUdyb3VwLmNsYXNzTGlzdC5hZGQoYWN0aXZpdHlDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENyZWF0b3IgfSBmcm9tICcuLi8uLi9DcmVhdG9yJztcclxuaW1wb3J0ICcuL3dvcmRHcm91cEJ1dHRvbi5zY3NzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29yZEdyb3VwQnV0dG9uVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnROb2RlLCBpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IG5ldyBDcmVhdG9yKHBhcmVudE5vZGUsICdidXR0b24nLCAnZ3JvdXBfX2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IG5ldyBDcmVhdG9yKHRoaXMuZ3JvdXAubm9kZSwgJ2RpdicsICdncm91cF9fYnV0dG9uLWxlZnQnLCBpdGVtWzFdKTtcclxuICAgICAgICB0aGlzLmdyb3VwLm5vZGUuZGF0YXNldC5sZXZlbCA9IGl0ZW1bMF07XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IG5ldyBDcmVhdG9yKHRoaXMuZ3JvdXAubm9kZSwgJ2RpdicsICdncm91cF9fYnV0dG9uLXJpZ2h0JywgaXRlbVswXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi93b3JkR3JvdXAnO1xyXG4iLCJpbXBvcnQgeyBhY3Rpdml0eUNsYXNzLCBUZXh0Ym9va1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9iYXNpYyc7XHJcbmltcG9ydCB7IFdvcmRDYXJkIH0gZnJvbSAnLi4vLi4nO1xyXG5pbXBvcnQgV29yZEdyb3VwVmlldyBmcm9tICcuL3dvcmRHcm91cC52aWV3JztcclxuZXhwb3J0IGNsYXNzIFdvcmRHcm91cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0Ym9vaykge1xyXG4gICAgICAgIHRoaXMudGV4dGJvb2sgPSB0ZXh0Ym9vaztcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgV29yZEdyb3VwVmlldyh0ZXh0Ym9vayk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRDYXJkcyhncm91cCwgcGFnZSkge1xyXG4gICAgICAgIGNvbnN0IHdvcmRzID0gYXdhaXQgVGV4dGJvb2tTZXJ2aWNlLmdldFdvcmRzKGdyb3VwLCBwYWdlKTtcclxuICAgICAgICBpZiAod29yZHMpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Ym9vay53b3Jkc0NvbnRhaW5lci5ub2RlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB3b3Jkcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGFjdGl2aXR5Q2xhc3M7XHJcbiAgICAgICAgICAgICAgICBuZXcgV29yZENhcmQodGhpcy52aWV3LCB0aGlzLnRleHRib29rLCBpdGVtLCBjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdvcmRzO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQ2FyZHMoZ3JvdXAsIHBhZ2UpIHtcclxuICAgICAgICBsZXQgc3RvcmFnZWRQYWdlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BhZ2UnKSwgMTApIHx8IDA7XHJcbiAgICAgICAgbGV0IHN0b3JhZ2VkR3JvdXAgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ3JvdXAnKSwgMTApIHx8IDA7XHJcbiAgICAgICAgaWYgKHBhZ2UpXHJcbiAgICAgICAgICAgIHN0b3JhZ2VkUGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgaWYgKGdyb3VwKVxyXG4gICAgICAgICAgICBzdG9yYWdlZEdyb3VwID0gZ3JvdXA7XHJcbiAgICAgICAgdm9pZCB0aGlzLmdldENhcmRzKHN0b3JhZ2VkR3JvdXAudG9TdHJpbmcoKSwgc3RvcmFnZWRQYWdlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmRHcm91cFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IodGV4dGJvb2spIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSB0ZXh0Ym9vay53b3Jkcy5ub2RlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vd29yZFBhZ2luYXRpb24nO1xyXG4iLCJpbXBvcnQgeyBXb3JkR3JvdXAgfSBmcm9tICcuLi8uLic7XHJcbmltcG9ydCB7IFdvcmRQYWdpbmF0aW9uVmlldyB9IGZyb20gJy4vd29yZFBhZ2luYXRpb24udmlldyc7XHJcbmV4cG9ydCBjbGFzcyBXb3JkUGFnaW5hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0Ym9vaykge1xyXG4gICAgICAgIHRoaXMudGV4dGJvb2sgPSB0ZXh0Ym9vaztcclxuICAgICAgICB0aGlzLndvcmRzQ29udGFpbmVyID0gdGV4dGJvb2sud29yZHNDb250YWluZXIubm9kZTtcclxuICAgIH1cclxuICAgIHBhZ2luYXRlKHRvdGFsUGFnZXMsIHBhZ2UpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IHBhZ2UgfHwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFnZScpKSArIDEgfHwgMTtcclxuICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gbmV3IFdvcmRQYWdpbmF0aW9uVmlldyh0aGlzLnRleHRib29rKTtcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1ByZXZpb3VzQnV0dG9uKHBhZ2luYXRpb24sIHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMikge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dGaXJzdEl0ZW0ocGFnaW5hdGlvbiwgdG90YWxQYWdlcywgY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dBY3RpdmVJdGVtKHBhZ2luYXRpb24sIHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKTtcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMYXN0SXRlbShwYWdpbmF0aW9uLCB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TmV4dEJ1dHRvbihwYWdpbmF0aW9uLCB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xpY2tIYW5kbGVyKHBhZ2luYXRpb24sIHRvdGFsUGFnZXMsIHBhZ2UpIHtcclxuICAgICAgICBjb25zdCBzZXJ2ZXJQYWdpbmF0aW9uID0gcGFnZSAtIDE7XHJcbiAgICAgICAgdGhpcy53b3Jkc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwYWdpbmF0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnBhZ2luYXRlKHRvdGFsUGFnZXMsIHBhZ2UpO1xyXG4gICAgICAgIGNvbnN0IHdvcmRHcm91cCA9IG5ldyBXb3JkR3JvdXAodGhpcy50ZXh0Ym9vayk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhZ2UnLCBKU09OLnN0cmluZ2lmeShzZXJ2ZXJQYWdpbmF0aW9uKSk7XHJcbiAgICAgICAgdm9pZCB3b3JkR3JvdXAucmVuZGVyQ2FyZHModW5kZWZpbmVkLCBzZXJ2ZXJQYWdpbmF0aW9uKTtcclxuICAgIH1cclxuICAgIHNob3dGaXJzdEl0ZW0ocGFnaW5hdGlvbiwgdG90YWxQYWdlcywgcGFnZSkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYWdpbmF0aW9uLmNyZWF0ZVBhZ2UoJ2ZpcnN0IG51bWJlcicsIGA8c3Bhbj4xPC9zcGFuPmApO1xyXG4gICAgICAgIGVsZW1lbnQub25jbGljayA9ICgpID0+IHRoaXMuY2xpY2tIYW5kbGVyKHBhZ2luYXRpb24sIHRvdGFsUGFnZXMsIDEpO1xyXG4gICAgICAgIGlmIChwYWdlID4gMykge1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uLmNyZWF0ZVBhZ2UoJ2RvdHMnLCAnPHNwYW4+Li4uPC9zcGFuPicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dQcmV2aW91c0J1dHRvbihwYWdpbmF0aW9uLCB0b3RhbFBhZ2VzLCBwYWdlKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhZ2luYXRpb24uY3JlYXRlUGFnZSgncGFnaW5hdGlvbl9fYnV0dG9uIHByZXYnLCAn0J/RgNC10LQuJyk7XHJcbiAgICAgICAgZWxlbWVudC5vbmNsaWNrID0gKCkgPT4gdGhpcy5jbGlja0hhbmRsZXIocGFnaW5hdGlvbiwgdG90YWxQYWdlcywgcGFnZSAtIDEpO1xyXG4gICAgfVxyXG4gICAgc2hvd05leHRCdXR0b24ocGFnaW5hdGlvbiwgdG90YWxQYWdlcywgcGFnZSkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYWdpbmF0aW9uLmNyZWF0ZVBhZ2UoJ3BhZ2luYXRpb25fX2J1dHRvbiBuZXh0JywgYDxzcGFuPtCh0LvQtdC0Ljwvc3Bhbj5gKTtcclxuICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsaWNrSGFuZGxlcihwYWdpbmF0aW9uLCB0b3RhbFBhZ2VzLCBwYWdlICsgMSk7XHJcbiAgICB9XHJcbiAgICBzaG93QWN0aXZlSXRlbShwYWdpbmF0aW9uLCB0b3RhbFBhZ2VzLCBwYWdlKSB7XHJcbiAgICAgICAgbGV0IGJlZm9yZVBhZ2UgPSBwYWdlIC0gMTtcclxuICAgICAgICBsZXQgYWZ0ZXJQYWdlID0gcGFnZSArIDE7XHJcbiAgICAgICAgbGV0IGFjdGl2ZTtcclxuICAgICAgICBpZiAocGFnZSA9PSB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGJlZm9yZVBhZ2UgPSBiZWZvcmVQYWdlIC0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFnZSA9PSB0b3RhbFBhZ2VzIC0gMSkge1xyXG4gICAgICAgICAgICBiZWZvcmVQYWdlID0gYmVmb3JlUGFnZSAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWdlID09IDEpIHtcclxuICAgICAgICAgICAgYWZ0ZXJQYWdlID0gYWZ0ZXJQYWdlICsgMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFnZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIGFmdGVyUGFnZSA9IGFmdGVyUGFnZSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHBsZW5ndGggPSBiZWZvcmVQYWdlOyBwbGVuZ3RoIDw9IGFmdGVyUGFnZTsgcGxlbmd0aCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwbGVuZ3RoID4gdG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBsZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcGxlbmd0aCA9IHBsZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYWdlID09IHBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZSA9ICdhY3RpdmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhZ2luYXRpb24uY3JlYXRlUGFnZShgbnVtYmVyICR7YWN0aXZlfWAsIGA8c3Bhbj4ke3BsZW5ndGh9PC9zcGFuPmApO1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsaWNrSGFuZGxlcihwYWdpbmF0aW9uLCB0b3RhbFBhZ2VzLCBwbGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93TGFzdEl0ZW0ocGFnaW5hdGlvbiwgdG90YWxQYWdlcywgcGFnZSkge1xyXG4gICAgICAgIGlmIChwYWdlIDwgdG90YWxQYWdlcyAtIDIpIHtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbi5jcmVhdGVQYWdlKCdkb3RzJywgJzxzcGFuPi4uLjwvc3Bhbj4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhZ2luYXRpb24uY3JlYXRlUGFnZSgnbGFzdCBudW1iZXInLCBgPHNwYW4+JHt0b3RhbFBhZ2VzfTwvc3Bhbj5gKTtcclxuICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsaWNrSGFuZGxlcihwYWdpbmF0aW9uLCB0b3RhbFBhZ2VzLCB0b3RhbFBhZ2VzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDcmVhdG9yIH0gZnJvbSAnLi4vLi4vQ3JlYXRvcic7XHJcbmltcG9ydCAnLi93b3JkUGFnaW5hdGlvbi5zY3NzJztcclxuZXhwb3J0IGNsYXNzIFdvcmRQYWdpbmF0aW9uVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0Ym9vaykge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IG5ldyBDcmVhdG9yKHRleHRib29rLnRleHRib29rLm5vZGUsICdkaXYnLCAncGFnaW5hdGlvbicpO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IG5ldyBDcmVhdG9yKHRoaXMucGFnaW5hdGlvbi5ub2RlLCAndWwnKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVBhZ2UoY2xhc3NOYW1lLCBjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IG5ldyBDcmVhdG9yKHRoaXMubGlzdC5ub2RlLCAnbGknLCBjbGFzc05hbWUsIGNvbnRlbnQpO1xyXG4gICAgICAgIHJldHVybiBwYWdlLm5vZGU7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5ub2RlLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vV29yZENhcmQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1dvcmREZXRhaWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9Xb3JkR3JvdXAnO1xyXG5leHBvcnQgKiBmcm9tICcuL1dvcmRHcm91cEJ1dHRvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vV29yZFBhZ2luYXRpb24nO1xyXG4iLCJleHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb290KSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuICAgIH1cclxuICAgIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlO1xyXG4gICAgICAgIGlmICh0aGlzLnJvb3QpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hFbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5yb290KSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhdHRhY2hFbGVtZW50KCkge1xyXG4gICAgICAgIHRoaXMucm9vdD8uYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL1RleHRib29rJztcclxuZXhwb3J0ICogZnJvbSAnLi9DcmVhdG9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9CdXR0b24nO1xyXG5leHBvcnQgKiBmcm9tICcuL0lucHV0JztcclxuZXhwb3J0ICogZnJvbSAnLi9BZHZhbnRhZ2VzJztcclxuZXhwb3J0ICogZnJvbSAnLi9DYXJkT3Bwb3J0dW5pdGllcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ2FyZFRlYW0nO1xyXG5leHBvcnQgKiBmcm9tICcuL0Zvb3Rlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vSGVhZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9NYWluJztcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzJztcclxuZXhwb3J0ICogZnJvbSAnLi9hcHAnO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3RleHRib29rJztcclxuZXhwb3J0ICogZnJvbSAnLi90ZXh0Ym9vay52aWV3JztcclxuIiwiaW1wb3J0IHsgVGV4dGJvb2tWaWV3IH0gZnJvbSAnLi90ZXh0Ym9vay52aWV3JztcclxuaW1wb3J0IHsgV29yZEdyb3VwLCBXb3JkR3JvdXBCdXR0b24sIFdvcmRQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGdyb3VwcywgbWF4V29yZHNQYWdlcyB9IGZyb20gJy4uLy4uL2Jhc2ljJztcclxuZXhwb3J0IGNsYXNzIFRleHRib29rIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudE5vZGUpIHtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHRib29rID0gbmV3IFRleHRib29rVmlldyh0aGlzLnBhcmVudE5vZGUpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyR3JvdXBCdXR0b25zKHRleHRib29rKTtcclxuICAgICAgICB0aGlzLnJlbmRlclBhZ2luYXRpb24odGV4dGJvb2spO1xyXG4gICAgICAgIHRoaXMucmVuZGVyR3JvdXAodGV4dGJvb2spO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyR3JvdXBCdXR0b25zKHRleHRib29rKSB7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZ3JvdXBzKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBXb3JkR3JvdXBCdXR0b24odGV4dGJvb2ssIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyUGFnaW5hdGlvbih0ZXh0Ym9vaykge1xyXG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBuZXcgV29yZFBhZ2luYXRpb24odGV4dGJvb2spO1xyXG4gICAgICAgIHBhZ2luYXRpb24ucGFnaW5hdGUobWF4V29yZHNQYWdlcyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJHcm91cCh0ZXh0Ym9vaykge1xyXG4gICAgICAgIGNvbnN0IHdvcmRHcm91cCA9IG5ldyBXb3JkR3JvdXAodGV4dGJvb2spO1xyXG4gICAgICAgIHZvaWQgd29yZEdyb3VwLnJlbmRlckNhcmRzKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ3JlYXRvciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgJy4vdGV4dGJvb2suc2Nzcyc7XHJcbmV4cG9ydCBjbGFzcyBUZXh0Ym9va1ZpZXcge1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHRoaXMudGV4dGJvb2sgPSBuZXcgQ3JlYXRvcihwYXJlbnROb2RlLCAnZGl2JywgJ3RleHRib29rJyk7XHJcbiAgICAgICAgdGhpcy50ZXh0Ym9va0hlYWRlciA9IG5ldyBDcmVhdG9yKHRoaXMudGV4dGJvb2subm9kZSwgJ2RpdicsICd0ZXh0Ym9va19faGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IG5ldyBDcmVhdG9yKHRoaXMudGV4dGJvb2tIZWFkZXIubm9kZSwgJ2RpdicsICdncm91cCcpO1xyXG4gICAgICAgIHRoaXMud29yZHMgPSBuZXcgQ3JlYXRvcih0aGlzLnRleHRib29rLm5vZGUsICdkaXYnLCAnd29yZHMnKTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gbmV3IENyZWF0b3IodGhpcy53b3Jkcy5ub2RlLCAnaDEnLCAnd29yZHNfX3RpdGxlJywgJ9Ch0LvQvtCy0LAnKTtcclxuICAgICAgICB0aGlzLndvcmRzQ29udGFpbmVyID0gbmV3IENyZWF0b3IodGhpcy53b3Jkcy5ub2RlLCAnZGl2JywgJ3dvcmRzX19jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUdyb3VwID0gdGhpcy50aXRsZS5ub2RlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vVGV4dGJvb2tQYWdlJztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLnN0YXJ0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==