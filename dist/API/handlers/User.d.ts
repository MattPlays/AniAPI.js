import { UserRole, UserGender, User as UserType } from '../types';
/**
 * @see https://aniapi.com/docs/resources/user
 */
export declare class User implements UserType {
    /**
     * Unique identifier for an User.
     */
    id: number;
    /**
     * The User's username.
     */
    username: string;
    /**
     * The User's email.
     */
    email?: string;
    /**
     * Indicates if the User has already confirmed his email.
     */
    email_verified?: boolean;
    /**
     * The User's role inside AniAPI.
     */
    role: UserRole;
    /**
     * The User's avatar. This value is imported from external User's trackers.
     */
    avatar?: string;
    /**
     * The User's gender.
     */
    gender: UserGender;
    /**
     * The User's preferred locale reference.
     */
    localization?: string;
    /**
     * Indicates if the User has linked his [AniList](https://anilist.co/) account with AniAPI.
     */
    has_anilist?: boolean;
    /**
     * Indicates if the User has linked his [MyAnimeList](https://myanimelist.net/) account with AniAPI.
     */
    has_mal?: boolean;
    constructor(data: UserType);
}
