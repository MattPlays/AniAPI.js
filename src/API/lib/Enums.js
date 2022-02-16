/**
 * @readonly
 */
 var AnimeFormat = {
    "TV": 0,
    "TV_SHORT": 1,
    "MOVIE": 2,
    "SPECIAL": 3,
    "OVA": 4,
    "ONA": 5,
    "MUSIC": 6
};
/**
 * @readonly
 */
var AnimeWeeklyAiringDay = {
    "Sunday": 0,
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6
}
/**
 * @readonly
 */
var AnimeStatus = {
    "FINISHED": 0,
    "RELEASING": 1,
    "NOT_YET_RELEASED": 2,
    "CANCELLED": 3
};
/**
 * @readonly
 */
var AnimeSeasonPeriod = {
    "WINTER": 0,
    "SPRING": 1,
    "SUMMER": 2,
    "FALL": 3,
    "UNKNOWN": 4
};
/**
 * @readonly
 */
var AnimeSongType = {
    "OPENING": 0,
    "ENDING": 1,
    "NONE": 2
};
/**
 * @readonly
 */
var AnimeResourceType = {
    "GENRES": 0,
    "LOCALIZATIONS": 1,
    "SOURCES": 2
};
/**
 * @readonly
 */
var UserRole = {
    "BASIC": 0,
    "MODERATOR": 1,
    "ADMINISTRATOR": 2,
}
/**
 * @readonly
 */
var UserGender = {
    "UNKNOWN": 0,
    "MALE": 1,
    "FEMALE": 2,
}
/**
 * @readonly
 */
var UserStoryStatus = {
    "CURRENT": 0,
    "PLANNING": 1,
    "COMPLETED": 2,
    "DROPPED": 3,
    "PAUSED": 4,
    "REPEATING": 5
}
module.exports = {
    AnimeFormat: AnimeFormat,
    AnimeStatus: AnimeStatus,
    AnimeSeasonPeriod: AnimeSeasonPeriod,
    AnimeSongType: AnimeSongType,
    AnimeResourceType: AnimeResourceType,
    UserRole: UserRole,
    UserGender: UserGender,
    UserStoryStatus: UserStoryStatus,
    AnimeWeeklyAiringDay: AnimeWeeklyAiringDay
}