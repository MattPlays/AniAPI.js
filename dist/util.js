"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageMapper = exports.objectToQuery = exports.HTTPRequestValidator = exports.validateToken = exports.request = void 0;
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
async function validateToken(jwt) {
    const res = await request({
        url: `/auth/me`,
        headers: (0, constants_1.DEFAULT_HEADERS)(jwt),
    });
    return res.status === 200;
}
exports.validateToken = validateToken;
function HTTPRequestValidator(jwt) {
    return async (res) => {
        if (!res.ok && res.status === 401) {
            if (!(await validateToken(jwt))) {
                throw new Error('Your JWT is no longer valid');
            }
            throw new Error(`Failed with response code ${res.status}\n Body: ${await res.text()}`);
        }
        return res;
    };
}
exports.HTTPRequestValidator = HTTPRequestValidator;
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
