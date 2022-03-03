"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const Episode_1 = require("./Episode");
const Anime_1 = require("./Anime");
const Song_1 = require("./Song");
const User_1 = require("./User");
const util_1 = require("../../util");
const constants_1 = require("../../constants");
const UserStory_1 = require("./UserStory");
class API {
    constructor(jwt) {
        this.jwt = jwt;
        this.Anime = {
            GetByID: (id) => {
                return (0, util_1.request)({
                    url: `/anime/${id}`,
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => ({
                    ...res,
                    data: new Anime_1.Anime(res.data),
                }));
            },
            Get: (filters, page = 1, per_page = 100) => {
                return (0, util_1.request)({
                    url: `/anime`,
                    query: { ...filters, page, per_page },
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => (0, util_1.pageMapper)(Anime_1.Anime, res));
            },
            Random: (count = 1, nsfw = false) => {
                return (0, util_1.request)({
                    url: `/random/anime/${count}/${nsfw || ''}`,
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => ({ ...res, data: res.data.map(anime => new Anime_1.Anime(anime)) }));
            },
        };
        this.Episode = {
            GetByID: (id) => {
                return (0, util_1.request)({
                    url: `/episode/${id}`,
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => ({
                    ...res,
                    data: new Episode_1.Episode(res.data),
                }));
            },
            Get: (filters, page = 1, per_page = 100) => {
                return (0, util_1.request)({
                    url: `/episode`,
                    query: { ...filters, page, per_page },
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => (0, util_1.pageMapper)(Episode_1.Episode, res));
            },
        };
        this.Song = {
            GetByID: (id) => {
                return (0, util_1.request)({
                    url: `/song/${id}`,
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => ({
                    ...res,
                    data: new Song_1.Song(res.data),
                }));
            },
            Get: (filters, page = 1, per_page = 100) => {
                return (0, util_1.request)({
                    url: `/song`,
                    query: { ...filters, page, per_page },
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => (0, util_1.pageMapper)(Song_1.Song, res));
            },
            Random: (count = 1) => {
                return (0, util_1.request)({
                    url: `/random/song/${count}`,
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => ({ ...res, data: res.data.map(song => new Song_1.Song(song)) }));
            },
        };
        this.User = {
            GetByID: (id) => {
                return (0, util_1.request)({
                    url: `/user/${id}`,
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => ({
                    ...res,
                    data: new User_1.User(res.data),
                }));
            },
            Get: (filters, page = 1, per_page = 100) => {
                return (0, util_1.request)({
                    url: `/user`,
                    query: { ...filters, page, per_page },
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => (0, util_1.pageMapper)(User_1.User, res));
            },
            Delete: (id) => {
                return (0, util_1.request)({
                    method: 'DELETE',
                    url: `/user/${id}`,
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                }).then(res => res.json());
            },
            Update: (changes) => {
                return (0, util_1.request)({
                    method: 'POST',
                    url: '/user',
                    body: JSON.stringify({ ...changes, id: parseInt(changes.id.toString()) }),
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => ({
                    ...res,
                    data: new User_1.User(res.data),
                }));
            },
        };
        this.UserStory = {
            Get: (filters, page = 1, per_page = 100) => {
                return (0, util_1.request)({
                    url: `/user_story`,
                    query: { ...filters, page, per_page },
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => (0, util_1.pageMapper)(UserStory_1.UserStory, res));
            },
            Create: (changes) => {
                return (0, util_1.request)({
                    method: 'PUT',
                    url: '/user_story',
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                    body: JSON.stringify(changes),
                })
                    .then(res => res.json())
                    .then(res => ({
                    ...res,
                    data: new UserStory_1.UserStory(res.data),
                }));
            },
            Update: (changes) => {
                return (0, util_1.request)({
                    method: 'POST',
                    url: '/user_story',
                    body: JSON.stringify({ ...changes, id: parseInt(changes.id.toString()) }),
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                })
                    .then(res => res.json())
                    .then(res => ({
                    ...res,
                    data: new UserStory_1.UserStory(res.data),
                }));
            },
            Delete: (id) => {
                return (0, util_1.request)({
                    method: 'DELETE',
                    url: `/user_story/${id}`,
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                }).then(res => res.json());
            },
        };
        this.Resource = {
            GetGenres: (version = '1.0') => {
                return (0, util_1.request)({
                    url: `/resources/${version}/0`,
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                }).then(res => res.json());
            },
            GetLocalizations: (version = '1.0') => {
                return (0, util_1.request)({
                    url: `/resources/${version}/1`,
                    headers: (0, constants_1.DEFAULT_HEADERS)(this.jwt),
                }).then(res => res.json());
            },
            /**
             * @see https://aniapi.com/docs/oauth/implicit_grant
             * @see https://aniapi.com/docs/oauth/authorization_code_grant
             */
        };
    }
}
exports.API = API;
