import { AnimeGenres } from '../handlers/Anime';

/**
 * @see https://aniapi.com/docs/resources/resource
 */
export type Localizations = { localizations: { [key: string]: string } };
export type Resource = Localizations | { genres: AnimeGenres };
