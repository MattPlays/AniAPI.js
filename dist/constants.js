"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_HEADERS = exports.API_VERSION = exports.API_URL = void 0;
exports.API_URL = 'https://api.aniapi.com';
exports.API_VERSION = 1;
const DEFAULT_HEADERS = (jwt) => ({
    Authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
});
exports.DEFAULT_HEADERS = DEFAULT_HEADERS;
