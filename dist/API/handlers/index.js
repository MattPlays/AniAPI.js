"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const Episode_1 = require("./Episode");
const Anime_1 = require("./Anime");
const Song_1 = require("./Song");
const util_1 = require("../../util");
class API {
    constructor(jwt) {
        this.jwt = jwt;
        this.Anime = {
            GetByID: (id) => {
                return (0, util_1.request)({
                    url: `/anime/${id}`,
                    headers: { Authorization: `Bearer ${this.jwt}` },
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
                    headers: { Authorization: `Bearer ${this.jwt}` },
                })
                    .then(res => res.json())
                    .then(res => {
                    if (Array.isArray(res.data)) {
                        return {
                            ...res,
                            data: res.data.map(anime => new Anime_1.Anime(anime)),
                        };
                    }
                    else {
                        return {
                            ...res,
                            data: {
                                ...res.data,
                                documents: res.data.documents.map(anime => new Anime_1.Anime(anime)),
                            },
                        };
                    }
                });
            },
            Random: (count = 1, nsfw = false) => {
                return (0, util_1.request)({
                    url: `/random/anime/${count}/${nsfw || ''}`,
                    headers: { Authorization: `Bearer ${this.jwt}` },
                })
                    .then(res => res.json())
                    .then(res => ({ ...res, data: res.data.map(anime => new Anime_1.Anime(anime)) }));
            },
        };
        this.Episode = {
            GetByID: (id) => {
                return (0, util_1.request)({
                    url: `/episode/${id}`,
                    headers: { Authorization: `Bearer ${this.jwt}` },
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
                    headers: { Authorization: `Bearer ${this.jwt}` },
                })
                    .then(res => res.json())
                    .then(res => {
                    if (Array.isArray(res.data)) {
                        return {
                            ...res,
                            data: res.data.map(episode => new Episode_1.Episode(episode)),
                        };
                    }
                    else {
                        return {
                            ...res,
                            data: {
                                ...res.data,
                                documents: res.data.documents.map(episode => new Episode_1.Episode(episode)),
                            },
                        };
                    }
                });
            },
        };
        this.Song = {
            GetByID: (id) => {
                return (0, util_1.request)({
                    url: `/song/${id}`,
                    headers: { Authorization: `Bearer ${this.jwt}` },
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
                    headers: { Authorization: `Bearer ${this.jwt}` },
                })
                    .then(res => res.json())
                    .then(res => {
                    if (Array.isArray(res.data)) {
                        return {
                            ...res,
                            data: res.data.map(song => new Song_1.Song(song)),
                        };
                    }
                    else {
                        return {
                            ...res,
                            data: {
                                ...res.data,
                                documents: res.data.documents.map(song => new Song_1.Song(song)),
                            },
                        };
                    }
                });
            },
            Random: (count = 1) => {
                return (0, util_1.request)({
                    url: `/random/song/${count}`,
                    headers: { Authorization: `Bearer ${this.jwt}` },
                })
                    .then(res => res.json())
                    .then(res => ({ ...res, data: res.data.map(song => new Song_1.Song(song)) }));
            },
        };
    }
}
exports.API = API;
