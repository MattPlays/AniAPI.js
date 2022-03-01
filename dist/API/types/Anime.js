"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeSeasonPeriod = exports.AnimeStatus = exports.AnimeFormat = exports.AnimeWeeklyAiringDay = void 0;
var AnimeWeeklyAiringDay;
(function (AnimeWeeklyAiringDay) {
    AnimeWeeklyAiringDay[AnimeWeeklyAiringDay["Sunday"] = 0] = "Sunday";
    AnimeWeeklyAiringDay[AnimeWeeklyAiringDay["Monday"] = 1] = "Monday";
    AnimeWeeklyAiringDay[AnimeWeeklyAiringDay["Tuesday"] = 2] = "Tuesday";
    AnimeWeeklyAiringDay[AnimeWeeklyAiringDay["Wednesday"] = 3] = "Wednesday";
    AnimeWeeklyAiringDay[AnimeWeeklyAiringDay["Thursday"] = 4] = "Thursday";
    AnimeWeeklyAiringDay[AnimeWeeklyAiringDay["Friday"] = 5] = "Friday";
    AnimeWeeklyAiringDay[AnimeWeeklyAiringDay["Saturday"] = 6] = "Saturday";
})(AnimeWeeklyAiringDay = exports.AnimeWeeklyAiringDay || (exports.AnimeWeeklyAiringDay = {}));
var AnimeFormat;
(function (AnimeFormat) {
    AnimeFormat[AnimeFormat["TV"] = 0] = "TV";
    AnimeFormat[AnimeFormat["TV_SHORT"] = 1] = "TV_SHORT";
    AnimeFormat[AnimeFormat["MOVIE"] = 2] = "MOVIE";
    AnimeFormat[AnimeFormat["SPECIAL"] = 3] = "SPECIAL";
    AnimeFormat[AnimeFormat["OVA"] = 4] = "OVA";
    AnimeFormat[AnimeFormat["ONA"] = 5] = "ONA";
    AnimeFormat[AnimeFormat["MUSIC"] = 6] = "MUSIC";
})(AnimeFormat = exports.AnimeFormat || (exports.AnimeFormat = {}));
var AnimeStatus;
(function (AnimeStatus) {
    AnimeStatus[AnimeStatus["FINISHED"] = 0] = "FINISHED";
    AnimeStatus[AnimeStatus["RELEASING"] = 1] = "RELEASING";
    AnimeStatus[AnimeStatus["NOT_YET_RELEASED"] = 2] = "NOT_YET_RELEASED";
    AnimeStatus[AnimeStatus["CANCELLED"] = 3] = "CANCELLED";
})(AnimeStatus = exports.AnimeStatus || (exports.AnimeStatus = {}));
var AnimeSeasonPeriod;
(function (AnimeSeasonPeriod) {
    AnimeSeasonPeriod[AnimeSeasonPeriod["WINTER"] = 0] = "WINTER";
    AnimeSeasonPeriod[AnimeSeasonPeriod["SPRING"] = 1] = "SPRING";
    AnimeSeasonPeriod[AnimeSeasonPeriod["SUMMER"] = 2] = "SUMMER";
    AnimeSeasonPeriod[AnimeSeasonPeriod["FALL"] = 3] = "FALL";
    AnimeSeasonPeriod[AnimeSeasonPeriod["UNKNOWN"] = 4] = "UNKNOWN";
})(AnimeSeasonPeriod = exports.AnimeSeasonPeriod || (exports.AnimeSeasonPeriod = {}));
