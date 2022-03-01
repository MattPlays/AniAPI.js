export * from './Anime';
export * from './Episode';
export * from './Song';
import { Song } from './Song';
import { Anime } from './Anime';
import { Episode } from './Episode';
export declare type APIResponseTypes = Anime[] | Page<Anime> | Anime | Episode | Page<Episode> | Episode[] | Song | Page<Anime> | Song[];
export declare type Page<T> = T[] | {
    current_page: number;
    count: number;
    documents: T[];
};
export interface APIResponse<T extends APIResponseTypes> {
    status_code: number;
    message: string;
    data: T;
    version: '1';
}
