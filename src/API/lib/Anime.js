const {AnimeFormat, AnimeStatus, AnimeSeasonPeriod, AnimeWeeklyAiringDay} = require("./Enums");
class Anime {
    /**
     * 
     * @param {number} id - Unique identifier for an Anime.
     * @param {number} anilist_id - [AniList](https://anilist.co/) external unique identifier.
     * @param {number | null} mal_id - [MyAnimeList](https://myanimelist.net/) external unique identifier.
     * @param {Enumerator<AnimeFormat>} format - The show's format destination.
     * @param {Enumerator<AnimeStatus>} status - The show's global release status.
     * @param {Map<string, string>} titles - A dictionary of the show's titles organized by localization.
     * @param {Map<string, string>} descriptions - A dictionary of the show's descriptions organized by localization.
     * @param {Date} start_date - The show's global release date.
     * @param {Date} end_date - The known show's global end date.
     * @param {Enumerator<AnimeWeeklyAiringDay>} weekly_airing_day - The known show's episode release day.
     * @param {Enumerator<AnimeSeasonPeriod>} season_period - The season on which the show has been released.
     * @param {number | null} season_year - The year on which the show has been released.
     * @param {number} episodes_count - Number of episodes released for the show.
     * @param {number | null} episode_duration - The show's episode average duration in minutes.
     * @param {string} trailer_url - External link to the show's trailer video. Possible services: Youtube, Dailymotion
     * @param {string} cover_image - The show's cover image.
     * @param {string} cover_color - The show's cover main color, in `HEX` format.
     * @param {string} banner_image - The show's banner image.
     * @param {string[]} genres - A collection of the show's associated genres. You can find all possible values [here](https://api.aniapi.com/v1/resources/1.0/0).
     * @param {number | null} sequel - The show's precedent Anime's unique identifier in story-line.
     * @param {number | null} prequel - The show's successive Anime's unique identifier in story-line.
     * @param {number} score The show's global appreciation indicator. Minimum value is `0` and maximum is `100`.
     */
    constructor(id, anilist_id, mal_id, format, status, titles, descriptions, start_date, end_date, weekly_airing_day, season_period, season_year, episodes_count, episode_duration, trailer_url, cover_image, cover_color, banner_image, genres, sequel, prequel, score) {
        this.id = id;
        this.anilist_id = anilist_id;
        this.mal_id = mal_id ?? null;
        this.format = Object.keys(AnimeFormat)[Object.values(AnimeFormat).indexOf(format)];
        this.status = Object.keys(AnimeStatus)[Object.values(AnimeStatus).indexOf(status)];
        this.titles = titles;
        this.descriptions = descriptions;
        this.start_date = new Date(start_date);
        this.end_date = new Date(end_date);
        this.weekly_airing_day = Object.keys(AnimeWeeklyAiringDay)[Object.values(AnimeWeeklyAiringDay).indexOf(weekly_airing_day)]
        this.season_period = Object.keys(AnimeSeasonPeriod)[Object.values(AnimeSeasonPeriod).indexOf(season_period)];
        this.season_year = season_year ?? null;
        this.episodes_count = episodes_count;
        this.episode_duration = episode_duration ?? null;
        this.trailer_url = trailer_url;
        this.cover_image = cover_image;
        this.cover_color = cover_color;
        this.banner_image = banner_image;
        this.genres = genres;
        this.sequel = sequel ?? null;
        this.prequel = prequel ?? null;
        this.score = score;
    }
}
module.exports = Anime;