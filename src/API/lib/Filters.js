const {AnimeFormat, AnimeStatus, AnimeSeasonPeriod, AnimeSongType, UserStoryStatus, UserGender} = require("./Enums");
/**
 * @typedef AnimeFilters
 * @type {object}
 * @property {string} [title]
 * @property {number} [anilist_id]
 * @property {number} [mal_id]
 * @property {AnimeFormat[]} [formats]
 * @property {AnimeStatus[]} [status]
 * @property {number} [year]
 * @property {number} [season]
 * @property {string[]} [genres]
 * @property {boolean} [nsfw]
 * @property {boolean} [with_episodes]
 */
var AnimeFilters = {
    title: null,
    anilist_id: null,
    mal_id: null,
    formats: null,
    status: null,
    year: null,
    season: null,
    genres: null,
    nsfw: null,
    with_episodes: null
}
/**
 * @typedef EpisodeFilters
 * @type {object}
 * @property {number} [anime_id]
 * @property {number} [number]
 * @property {boolean} [isDub]
 * @property {string} [locale]
 */
var EpisodeFilters = {
    anime_id: null,
    number: null,
    isDub: null, 
    locale: null
}
/**
 * @typedef SongFilters
 * @type {object}
 * @property {number} [anime_id]
 * @property {string} [title]
 * @property {string} [artist]
 * @property {number} [year]
 * @property {AnimeSeasonPeriod[]} [season]
 * @property {AnimeSongType[]} [type]
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
 * @property {string} [username]
 * @property {string} [email]
 */
var UserFilters = {
    username: null,
    email: null,
}
/**
 * @typedef UserChanges
 * @type {object}
 * @property {number} id - The User's id to update
 * @property {string} password - The User's new password value.
 * @property {UserGender} gender - The User's gender value.
 * @property {string} localization - The User's new localization value.
 * @property {number} anilist_id - The User's [AniList](https://anilist.co/) account external id.
 * @property {string} anilist_token - The User's [AniList](https://anilist.co/) account external token. This value becomes `required` when you provide the `anilist_id` field.
 */
var UserChanges = {
    id: null,
    password: null,
    gender: null,
    localization: null,
    anilist_id: null,
    anilist_token: null 
}
/**
 * @typedef UserStoryFilters
 * @type {object}
 * @property {number} anime_id - A filter on the list based on the `anime_id` field value
 * @property {number} user_id - A filter on the list based on the `user_id` field value.
 * @property {UserStoryStatus} status - A filter on the list based on the `status` field value.
 * @property {boolean} synced - A filter on the list based on the `synced` field value. `synced` field indicates if an UserStory has been synchronized with User's linked trackers.
 */
var UserStoryFilters = {
    anime_id: null,
    user_id: null,
    status: null,
    synced: null
}
/**
 * @typedef UserStoryChanges
 * @type {object}
 * @property {number} user_id - The [User](https://aniapi.com/docs/resources/user)'s id that own the UserStory.
 * @property {number} anime_id - The UserStory's [Anime](https://aniapi.com/docs/resources/anime).
 * @property {UserStoryStatus} status - The UserStory's watching status.
 * @property {number} current_episode - The UserStory's watching progress. Must be equal or less than the [Anime](https://aniapi.com/docs/resources/anime)'s `episodes_count` value. When you provide a `status` equal to `1` or `2` this field is auto-calculated.
 * @property {number} current_episode_ticks - The UserStory's `current_episode` watching time in milliseconds.
 */
var UserStoryChanges = {
    user_id: null,
    anime_id: null,
    status: null,
    current_episode: null,
    current_episode_ticks: null
}
module.exports = {
    AnimeFilters: AnimeFilters,
    EpisodeFilters: EpisodeFilters,
    SongFilters: SongFilters,
    UserFilters: UserFilters,
    UserChanges: UserChanges,
    UserStoryFilters: UserStoryFilters,
    UserStoryChanges: UserStoryChanges
}