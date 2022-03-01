import { Anime, APIResponse, Documentify as Page } from '../types';
import { AnimeFilters } from './Filters';
export declare class API {
    private jwt;
    constructor(jwt: string);
    Anime: {
        GetByID: (id: string | number) => Promise<APIResponse<Anime>>;
        Get: (filters: AnimeFilters, page?: number, per_page?: number) => Promise<APIResponse<Page<Anime>>>;
        Random: (count?: number, nsfw?: boolean) => Promise<APIResponse<Anime[]>>;
    };
}
