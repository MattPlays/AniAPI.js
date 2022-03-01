"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToQuery = exports.request = void 0;
const undici_1 = require("undici");
const constants_1 = require("./constants");
function request(data) {
    let queryString = '';
    if (data.query) {
        queryString = '?' + objectToQuery(data.query);
    }
    const { url, ...req } = data;
    return (0, undici_1.fetch)(`${constants_1.API_URL}/v${constants_1.API_VERSION}${url}${queryString}`, req);
}
exports.request = request;
function objectToQuery(object) {
    return Object.keys(object)
        .map(key => key + '=' + object[key])
        .join('&');
}
exports.objectToQuery = objectToQuery;
