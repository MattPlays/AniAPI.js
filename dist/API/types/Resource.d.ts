import { AnimeGenres } from '../handlers/Anime';
/**
 * @see https://aniapi.com/docs/resources/resource
 */
export declare type Localizations = {
    localizations: {
        [key: string]: string;
    };
};
export declare type Resource = Localizations | {
    genres: AnimeGenres;
};
