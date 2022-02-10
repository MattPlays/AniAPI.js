import {AnimeFormat, AnimeStatus, AnimeSongType, AnimeSeasonPeriod, UserGender, UserStoryStatus} from './Enums';
export type AnimeFilters = {
    title?: string,
    anilist_id?: number,
    mal_id?: number,
    formats?: AnimeFormat[],
    status?: AnimeStatus[],
    year?: number,
    season?: number,
    genres?: string[],
    nsfw?: boolean
}
export type EpisodeFilters = {
    anime_id?: number,
    number?: number,
    source?: string,
    locale?: string,
    is_dub?: boolean,
}
export type SongFilters = {
    anime_id?: number,
    title?: string,
    artist?: string,
    year?: number,
    season?: AnimeSeasonPeriod[],
    type?: AnimeSongType[]
}
export type UserFilters = {
    username?: string,
    email?: string
}
export type UserChanges = {
    id: number,
    password: string,
    gender: UserGender,
    localization: string,
    anilist_id: number,
    anilist_token: string
}
export type UserStoryFilters = {
    anime_id: number,
    user_id: number,
    status: UserStoryStatus,
    synced: boolean
}
export type UserStoryChanges = {
    user_id: number,
    anime_id: number,
    status: UserStoryStatus,
    current_episode: number,
    current_episode_ticks: number
}