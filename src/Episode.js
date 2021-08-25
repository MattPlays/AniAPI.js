class Episode {
    /**
     * 
     * @param {number} id - Unique identifier for an Episode.
     * @param {number} anime_id - [Anime](https://aniapi.com/docs/resources/anime) external unique identifier.
     * @param {number} number - The episode's progressive number referring to the entire show.
     * @param {string} title - The episode's localized title.
     * @param {string} video - The episode's streaming url.
     * @param {string} locale - The episode's website related locale.
     */
    constructor(id, anime_id, number, title, video, locale) {
        this.id = id;
        this.anime_id = anime_id;
        this.number = number;
        this.title = title;
        this.video = video;
        this.locale = locale;
    }
}
module.exports = Episode;