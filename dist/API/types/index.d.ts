export * from './Anime';
export * from './Episode';
export * from './Song';
import { Song } from './Song';
import { Anime } from './Anime';
import { Episode } from './Episode';
export declare type APIResponseTypes = Anime | Page<Anime> | Episode | Page<Episode> | Song | Page<Song>;
export declare type Page<T> = T[] | {
    last_page?: number;
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
