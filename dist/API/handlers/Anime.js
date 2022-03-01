"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anime = void 0;
class Anime {
    constructor(data) {
        Object.assign(this, {
            ...data,
            end_date: new Date(data.end_date),
            start_date: new Date(data.start_date),
            titles: new Map(Object.entries(data.titles)),
            descriptions: new Map(Object.entries(data.descriptions)),
        });
    }
}
exports.Anime = Anime;
