import { AnimeSeasonPeriod, AnimeSongType } from "./Enums";
export interface Song {
    id: number,
    anime_id: number,
    title: string,
    artist: string,
    album: string,
    year: number,
    season: AnimeSeasonPeriod,
    duration: number,
    preview_url: string,
    open_spotify_url: string,
    local_spotify_url: string,
    type: AnimeSongType
}