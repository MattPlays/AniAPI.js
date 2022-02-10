class Episode {
    /**
     * 
     * @param {number} id - Unique identifier for an Episode.
     * @param {number} anime_id - [Anime](https://aniapi.com/docs/resources/anime) external unique identifier.
     * @param {number} number - The episode's progressive number referring to the entire show.
     * @param {string} title - The episode's localized title.
     * @param {string} video - The episode's streaming url.
     * @param {string} locale - The episode's website related locale.
     * @param {number} [quality] - The episode's streaming quality.
     * @param {string} format - The episode's streaming codec format.
     * @param {boolean} is_dub - Indicates if the episode is dubbed or subbed.
     */
    constructor(id, anime_id, number, title, video, locale, quality, format, is_dub) {
        this.id = id;
        this.anime_id = anime_id;
        this.number = number;
        this.title = title;
        this.video = video;
        this.locale = locale;
        this.quality = quality;
        this.format = format;
        this.is_dub = is_dub;
    }
}
module.exports = Episode;