import { AnimeSeasonPeriod, AnimeSongType, Song as SongType } from '../types';
export declare class Song implements SongType {
    id: number;
    /**
     * [Anime](https://aniapi.com/docs/resources/anime) external unique identifier.
     */
    anime_id: number;
    /**
     * The song's original title.
     */
    title: string;
    /**
     * The song's artist name.
     */
    artist: string;
    /**
     * The song's album name.
     */
    album: string;
    /**
     * The song's release year.
     */
    year: number;
    /**
     * The song's release season.
     */
    season: AnimeSeasonPeriod;
    /**
     * The song's duration in milliseconds.
     */
    duration: number;
    /**
     * The song's Spotify preview url, which provides ~`30` seconds of the song.
     */
    preview_url: string;
    /**
     * The song's [Spotify Web Player](https://open.spotify.com/) url to listen to it.
     */
    open_spotify_url: string;
    /**
     * [Spotify App](https://www.spotify.com/it/download/) url to listen to it. This url will open your local Spotify application automatically.
     */
    local_spotify_url: string;
    /**
     * The song's type.
     */
    type: AnimeSongType;
    constructor(data: SongType);
}
