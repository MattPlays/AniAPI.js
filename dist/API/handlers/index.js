"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const Episode_1 = require("./Episode");
const Anime_1 = require("./Anime");
const util_1 = require("../../util");
class API {
    constructor(jwt) {
        this.jwt = jwt;
        this.Anime = {
            GetByID: (id) => {
                return (0, util_1.request)({ url: `/anime/${id}`, headers: { Authorization: this.jwt } })
                    .then(res => res.json())
                    .then(res => (Object.assign(Object.assign({}, res), { data: new Anime_1.Anime(res.data) })));
            },
            Get: (filters, page = 1, per_page = 100) => {
                return (0, util_1.request)({
                    url: `/anime`,
                    query: Object.assign(Object.assign({}, filters), { page, per_page }),
                    headers: { Authorization: this.jwt },
                })
                    .then(res => res.json())
                    .then((res) => __awaiter(this, void 0, void 0, function* () {
                    if (Array.isArray(res.data)) {
                        return Object.assign(Object.assign({}, res), { data: res.data.map(anime => new Anime_1.Anime(anime)) });
                    }
                    else {
                        return Object.assign(Object.assign({}, res), { data: Object.assign(Object.assign({}, res.data), { documents: res.data.documents.map(anime => new Anime_1.Anime(anime)) }) });
                    }
                }));
            },
            Random: (count = 1, nsfw = false) => {
                return (0, util_1.request)({
                    url: `/random/${count}/${nsfw}`,
                    headers: { Authorization: this.jwt },
                })
                    .then(res => res.json())
                    .then(res => (Object.assign(Object.assign({}, res), { data: res.data.map(anime => new Anime_1.Anime(anime)) })));
            },
        };
        this.Episode = {
            GetByID: (id) => {
                return (0, util_1.request)({
                    url: `/episode/${id}`,
                    headers: { Authorization: this.jwt },
                })
                    .then(res => res.json())
                    .then(res => (Object.assign(Object.assign({}, res), { data: new Episode_1.Episode(res.data) })));
            },
            Get: (filters, page = 1, per_page = 100) => {
                return (0, util_1.request)({
                    url: `/anime`,
                    query: Object.assign(Object.assign({}, filters), { page, per_page }),
                    headers: { Authorization: this.jwt },
                })
                    .then(res => res.json())
                    .then((res) => __awaiter(this, void 0, void 0, function* () {
                    if (Array.isArray(res.data)) {
                        return Object.assign(Object.assign({}, res), { data: res.data.map(anime => new Episode_1.Episode(anime)) });
                    }
                    else {
                        return Object.assign(Object.assign({}, res), { data: Object.assign(Object.assign({}, res.data), { documents: res.data.documents.map(anime => new Episode_1.Episode(anime)) }) });
                    }
                }));
            },
        };
    }
}
exports.API = API;
