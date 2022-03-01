"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToQuery = exports.request = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const constants_1 = require("./constants");
function request(data) {
    let queryString = '';
    if (data.query) {
        queryString = '?' + objectToQuery(data.query);
    }
    const { url } = data, req = __rest(data, ["url"]);
    return (0, node_fetch_1.default)(`${constants_1.API_URL}/${constants_1.API_VERSION}${url}${queryString}`, req);
}
exports.request = request;
function objectToQuery(object) {
    return Object.keys(object)
        .map(key => key + '=' + object[key])
        .join('&');
}
exports.objectToQuery = objectToQuery;
