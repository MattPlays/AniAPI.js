const {AnimeSeasonPeriod, AnimeSongType} = require("./Enums");
class Song {
    /**
     * 
     * @param {number} id - Unique identifier for a Song.
     * @param {number} anime_id [Anime](https://aniapi.com/docs/resources/anime) external unique identifier.
     * @param {string} title - The song's original title.
     * @param {string} artist - The song's artist name.
     * @param {string} album - The song's album name.
     * @param {number} year - The song's release year.
     * @param {Enumerator<AnimeSeasonPeriod>} season - The song's release season.
     * @param {number} duration - The song's duration in milliseconds.
     * @param {string} preview_url - The song's Spotify preview url, which provides ~`30` seconds of the song.
     * @param {string} open_spotify_url - The song's [Spotify Web Player](https://open.spotify.com/) url to listen to it.
     * @param {string} local_spotify_url - The song's [Spotify App](https://www.spotify.com/it/download/) url to listen to it. This url will open your local Spotify application automatically.
     * @param {Enumerator<AnimeSongType>} type - The song's type.        
     */
    constructor(id, anime_id, title, artist, album, year, season, duration, preview_url, open_spotify_url, local_spotify_url, type) {
        this.id = id;
        this.anime_id = anime_id;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.season = Object.keys(AnimeSeasonPeriod)[Object.values(AnimeSeasonPeriod).indexOf(season)];
        this.duration = duration;
        this.preview_url = preview_url;
        this.open_spotify_url = open_spotify_url;
        this.local_spotify_url = local_spotify_url;
        this.type = Object.keys(AnimeSongType)[Object.values(AnimeSongType).indexOf(type)];
    }
}
module.exports = Song;