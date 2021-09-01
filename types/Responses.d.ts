import { Anime } from "./Anime";
import { Episode } from "./Episode";
import { Song } from "./Song";
import { Resource } from "./Resource";
import { User } from "./User";
import { UserStory } from "./UserStory";
import { UserRole, UserGender } from "./Enums";
export type AnimeResponse = {
    status_code: number,
    message: string,
    version: string 
    data: Anime | {
        current_page: number,
        count: number,
        documents: Anime[],
        last_page: number
    },
}

export type EpisodeResponse = {
    status_code: number,
    message: string,
    version: string,
    data: Episode | {
        current_page: number,
        count: number,
        documents: Episode[],
        last_page: number
    },
}

export type SongResponse = {
    status_code: number,
    message: string,
    version: string,
    data: Song | {
        current_page: number,
        count: number,
        documents: Song[],
        last_page: number
    },
}
export type UserResponse = {
    status_code: number,
    message: string,
    version: string,
    data: User | {
        current_page: number,
        count: number,
        documents: User[],
        last_page: number
    }
}
export type UserChangedResponse = {
    status_code: number,
    message: string,
    version: string,
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
export type UserStoryResponse = {
    status_code: number,
    message: string,
    version: string,
    data: UserStory | {
        current_page: number,
        count: number,
        documents: UserStory[],
        last_page: number
    }
}
export type ResourceResponse = {
    status_code: number,
    message: string,
    version: string,
    data: Resource,
}
export type ErrorResponse = {
    status_code: number,
    message: string,
    version: string,
    data: string,
}
