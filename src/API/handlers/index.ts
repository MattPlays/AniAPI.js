import { Episode } from './Episode';
import { Anime } from './Anime';

import { AnimeFilters, EpisodeFilters } from './Filters';
import { APIResponse, Documentify as Page } from '../types';

import { request } from '../../util';

export class API {
    constructor(private jwt: string) {}

    Anime = {
        GetByID: (id: string | number): Promise<APIResponse<Anime>> => {
            return request({ url: `/anime/${id}`, headers: { Authorization: this.jwt } })
                .then(res => res.json() as Promise<APIResponse<Anime>>)
                .then(res => ({
                    ...res,
                    data: new Anime(res.data),
                }));
        },
        Get: (
            filters: AnimeFilters,
            page = 1,
            per_page = 100
        ): Promise<APIResponse<Page<Anime>>> => {
            return request({
                url: `/anime`,
                query: { ...filters, page, per_page },
                headers: { Authorization: this.jwt },
            })
                .then(res => res.json() as Promise<APIResponse<Page<Anime>>>)
                .then(async res => {
                    if (Array.isArray(res.data)) {
                        return {
                            ...res,
                            data: res.data.map(anime => new Anime(anime)),
                        };
                    } else {
                        return {
                            ...res,
                            data: {
                                ...res.data,
                                documents: res.data.documents.map(
                                    anime => new Anime(anime)
                                ),
                            },
                        };
                    }
                });
        },
        Random: (count = 1, nsfw = false): Promise<APIResponse<Anime[]>> => {
            return request({
                url: `/random/${count}/${nsfw}`,
                headers: { Authorization: this.jwt },
            })
                .then(res => res.json() as Promise<APIResponse<Anime[]>>)
                .then(res => ({ ...res, data: res.data.map(anime => new Anime(anime)) }));
        },
    };
    Episode = {
        GetByID: (id: string | number): Promise<APIResponse<Episode>> => {
            return request({
                url: `/episode/${id}`,
                headers: { Authorization: this.jwt },
            })
                .then(res => res.json() as Promise<APIResponse<Episode>>)
                .then(res => ({
                    ...res,
                    data: new Episode(res.data),
                }));
        },
        Get: (
            filters: EpisodeFilters,
            page = 1,
            per_page = 100
        ): Promise<APIResponse<Page<Episode>>> => {
            return request({
                url: `/anime`,
                query: { ...filters, page, per_page },
                headers: { Authorization: this.jwt },
            })
                .then(res => res.json() as Promise<APIResponse<Page<Episode>>>)
                .then(async res => {
                    if (Array.isArray(res.data)) {
                        return {
                            ...res,
                            data: res.data.map(anime => new Episode(anime)),
                        };
                    } else {
                        return {
                            ...res,
                            data: {
                                ...res.data,
                                documents: res.data.documents.map(
                                    anime => new Episode(anime)
                                ),
                            },
                        };
                    }
                });
        },
    };
}
