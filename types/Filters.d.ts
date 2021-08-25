import {AnimeFormat, AnimeStatus, AnimeSongType, AnimeSeasonPeriod} from './Enums';
export type AnimeFilters = {
    title?: string,
    anilist_id?: number,
    mal_id?: number,
    formats?: AnimeFormat[],
    status?: AnimeStatus[],
    year?: number,
    season?: number,
    genres?: string[]
}
export type EpisodeFilters = {
    anime_id?: number,
    number?: number,
    source?: string,
    locale?: string,
}
export type SongFilters = {
    anime_id?: number,
    title?: string,
    artist?: string,
    year?: number,
    season?: AnimeSeasonPeriod[],
    type?: AnimeSongType[]
}