import { request } from '../../util';
import { Anime, APIResponse, Documentify as Page } from '../types';
import { AnimeFilters } from './Filters';

export class API {
    constructor(private jwt: string) {}

    Anime = {
        GetByID: (id: string | number): Promise<APIResponse<Anime>> => {
            return request({ url: `/anime/${id}`, headers: { Authorization: this.jwt } }).then(
                res => res.json() as any
            );
        },
        Get: (filters: AnimeFilters, page = 1, per_page = 100): Promise<APIResponse<Page<Anime>>> => {
            return request({
                url: `/anime`,
                query: { ...filters, page, per_page },
                headers: { Authorization: this.jwt },
            }).then(res => res.json() as any);
        },
        Random: (count = 1, nsfw = false): Promise<APIResponse<Anime[]>> => {
            return request({ url: `/random/${count}/${nsfw}`, headers: { Authorization: this.jwt } }).then(
                res => res.json() as any
            );
        },
    };
}
