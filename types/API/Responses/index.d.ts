import { Anime } from "../lib/Anime";
import { Episode } from "../lib/Episode";
import { Song } from "../lib/Song";
import { Resource } from "../lib/Resource";
import { User } from "../lib/User";
import { UserStory } from "../lib/UserStory";
import { UserRole, UserGender } from "../lib/Enums";
interface Response {
    status_code: number,
    message: string,
    version: string
}
export interface AnimeResponse extends Response {
    data: Anime | {
        current_page: number,
        count: number,
        documents: Anime[],
        last_page: number
    },
}

export interface EpisodeResponse extends Response {
    data: Episode | {
        current_page: number,
        count: number,
        documents: Episode[],
        last_page: number
    },
}

export interface SongResponse extends Response {
    data: Song | {
        current_page: number,
        count: number,
        documents: Song[],
        last_page: number
    },
}
export interface UserResponse extends Response {
    data: User | {
        current_page: number,
        count: number,
        documents: User[],
        last_page: number
    }
}
export interface UserChangedResponse extends Response {
    data: {
        username: string,
        role: UserRole,
        gender: UserGender,
        localization: string,
        has_anilist: boolean,
        has_mal: boolean,
        id: number
    },
}
export interface UserStoryResponse extends Response {
    data: UserStory | {
        current_page: number,
        count: number,
        documents: UserStory[],
        last_page: number
    }
}
export interface ResourceResponse extends Response {
    data: Resource,
}
export interface ErrorResponse extends Response {
    data: string,
}
