export * from './Anime';
export * from './Episode';
export * from './Song';
import { Song } from './Song';
import { Anime } from './Anime';
import { Episode } from './Episode';
export declare type APIResponseTypes = Anime[] | Documentify<Anime> | Anime | Episode | Documentify<Episode> | Episode[] | Song | Documentify<Anime> | Song[];
export declare type Documentify<T> = T[] | {
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
