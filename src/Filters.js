const {AnimeFormat, AnimeStatus, AnimeSeasonPeriod, AnimeSongType} = require("./Enums");
/**
 * @typedef AnimeFilters
 * @type {object}
 * @property {?string} title
 * @property {?number} anilist_id
 * @property {?number} mal_id
 * @property {?AnimeFormat[]} formats
 * @property {?AnimeStatus[]} status
 * @property {?number} year
 * @property {?number} season
 * @property {?string[]} genres
 */
var AnimeFilters = {
    title: null,
    anilist_id: null,
    mal_id: null,
    formats: null,
    status: null,
    year: null,
    season: null,
    genres: null
}
/**
 * @typedef EpisodeFilters
 * @type {object}
 * @property {?number} anime_id
 * @property {?number} number
 * @property {?string} source
 * @property {?string} locale
 */
var EpisodeFilters = {
    anime_id: null,
    number: null,
    source: null, 
    locale: null
}
/**
 * @typedef SongFilters
 * @type {object}
 * @property {?number} anime_id
 * @property {?string} title
 * @property {?string} artist
 * @property {?number} year
 * @property {?AnimeSeasonPeriod[]} season
 * @property {?AnimeSongType[]} type
 */
var SongFilters = {
    anime_id: null,
    title: null,
    artist: null,
    year: null,
    season: null,
    type: null
}
/**
 * @typedef UserFilters
 * @type {object}
 * @property {?string} username
 * @property {?string} email
 */
var UserFilters = {
    username: null,
    email: null,
}
module.exports = {
    AnimeFilters: AnimeFilters,
    EpisodeFilters: EpisodeFilters,
    SongFilters: SongFilters,
    UserFilters: UserFilters
}