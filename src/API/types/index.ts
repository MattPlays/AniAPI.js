export * from './Anime';
export * from './Episode';
export * from './Song';
import { Song } from './Song';
import { Anime } from './Anime';
import { Episode } from './Episode';

export type APIResponseTypes =
    // Anime
    | Anime[]
    | Page<Anime>
    | Anime
    // Episode
    | Episode
    | Page<Episode>
    | Episode[]
    // Song
    | Song
    | Page<Anime>
    | Song[];

export type Page<T> = T[] | { current_page: number; count: number; documents: T[] };

export interface APIResponse<T extends APIResponseTypes> {
    status_code: number;
    message: string;
    data: T;
    version: '1';
}
