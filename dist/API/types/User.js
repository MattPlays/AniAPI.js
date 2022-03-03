"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGender = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["BASIC"] = 0] = "BASIC";
    UserRole[UserRole["MODERATOR"] = 1] = "MODERATOR";
    UserRole[UserRole["ADMINISTRATOR"] = 2] = "ADMINISTRATOR";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var UserGender;
(function (UserGender) {
    UserGender[UserGender["UNKNOWN"] = 0] = "UNKNOWN";
    UserGender[UserGender["MALE"] = 1] = "MALE";
    UserGender[UserGender["FEMALE"] = 2] = "FEMALE";
})(UserGender = exports.UserGender || (exports.UserGender = {}));
