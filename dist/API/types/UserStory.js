"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStoryStatus = void 0;
var UserStoryStatus;
(function (UserStoryStatus) {
    UserStoryStatus[UserStoryStatus["CURRENT"] = 0] = "CURRENT";
    UserStoryStatus[UserStoryStatus["PLANNING"] = 1] = "PLANNING";
    UserStoryStatus[UserStoryStatus["COMPLETED"] = 2] = "COMPLETED";
    UserStoryStatus[UserStoryStatus["DROPPED"] = 3] = "DROPPED";
    UserStoryStatus[UserStoryStatus["PAUSED"] = 4] = "PAUSED";
    UserStoryStatus[UserStoryStatus["REPEATING"] = 5] = "REPEATING";
})(UserStoryStatus = exports.UserStoryStatus || (exports.UserStoryStatus = {}));
