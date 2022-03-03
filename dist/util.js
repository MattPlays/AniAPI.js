"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageMapper = exports.objectToQuery = exports.request = void 0;
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
function pageMapper(_class, page) {
    if (Array.isArray(page.data)) {
        return {
            ...page,
            data: page.data.map(data => new _class(data)),
        };
    }
    else {
        return {
            ...page,
            data: {
                ...page.data,
                documents: page.data.documents.map((data) => new _class(data)),
            },
        };
    }
}
exports.pageMapper = pageMapper;
