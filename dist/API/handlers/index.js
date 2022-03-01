"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const util_1 = require("../../util");
class API {
    constructor(jwt) {
        this.jwt = jwt;
        this.Anime = {
            GetByID: (id) => {
                return (0, util_1.request)({ url: `/anime/${id}`, headers: { Authorization: this.jwt } }).then(res => res.json());
            },
            Get: (filters, page = 1, per_page = 100) => {
                return (0, util_1.request)({
                    url: `/anime`,
                    query: Object.assign(Object.assign({}, filters), { page, per_page }),
                    headers: { Authorization: this.jwt },
                }).then(res => res.json());
            },
            Random: (count = 1, nsfw = false) => {
                return (0, util_1.request)({ url: `/random/${count}/${nsfw}`, headers: { Authorization: this.jwt } }).then(res => res.json());
            },
        };
    }
}
exports.API = API;
