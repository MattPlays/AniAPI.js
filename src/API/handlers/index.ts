import { Episode } from './Episode';
import { Anime } from './Anime';
import { Song } from './Song';
import { User } from './User';

import {
    AnimeFilters,
    EpisodeFilters,
    SongFilters,
    UserChanges,
    UserFilters,
    UserStoryChanges,
    UserStoryFilters,
} from './Filters';
import { APIResponse, Page } from '../types';

import { pageMapper, request } from '../../util';
import { DEFAULT_HEADERS } from '../../constants';
import { UserStory } from './UserStory';

export class API {
    constructor(private jwt: string) {}

    Anime = {
        GetByID: (id: string | number): Promise<APIResponse<Anime>> => {
            return request({
                url: `/anime/${id}`,
                headers: DEFAULT_HEADERS(this.jwt),
            })
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
                headers: DEFAULT_HEADERS(this.jwt),
            })
                .then(res => res.json() as Promise<APIResponse<Page<Anime>>>)
                .then(res => pageMapper(Anime, res));
        },
        Random: (count = 1, nsfw = false): Promise<APIResponse<Anime[]>> => {
            return request({
                url: `/random/anime/${count}/${nsfw || ''}`,
                headers: DEFAULT_HEADERS(this.jwt),
            })
                .then(res => res.json() as Promise<APIResponse<Anime[]>>)
                .then(res => ({ ...res, data: res.data.map(anime => new Anime(anime)) }));
        },
    };
    Episode = {
        GetByID: (id: string | number): Promise<APIResponse<Episode>> => {
            return request({
                url: `/episode/${id}`,
                headers: DEFAULT_HEADERS(this.jwt),
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
                url: `/episode`,
                query: { ...filters, page, per_page },
                headers: DEFAULT_HEADERS(this.jwt),
            })
                .then(res => res.json() as Promise<APIResponse<Page<Episode>>>)
                .then(res => pageMapper(Episode, res));
        },
    };
    Song = {
        GetByID: (id: string | number): Promise<APIResponse<Song>> => {
            return request({
                url: `/song/${id}`,
                headers: DEFAULT_HEADERS(this.jwt),
            })
                .then(res => res.json() as Promise<APIResponse<Song>>)
                .then(res => ({
                    ...res,
                    data: new Song(res.data),
                }));
        },
        Get: (
            filters: SongFilters,
            page = 1,
            per_page = 100
        ): Promise<APIResponse<Page<Song>>> => {
            return request({
                url: `/song`,
                query: { ...filters, page, per_page },
                headers: DEFAULT_HEADERS(this.jwt),
            })
                .then(res => res.json() as Promise<APIResponse<Page<Song>>>)
                .then(res => pageMapper(Song, res));
        },
        Random: (count = 1): Promise<APIResponse<Song[]>> => {
            return request({
                url: `/random/song/${count}`,
                headers: DEFAULT_HEADERS(this.jwt),
            })
                .then(res => res.json() as Promise<APIResponse<Song[]>>)
                .then(res => ({ ...res, data: res.data.map(song => new Song(song)) }));
        },
    };
    User = {
        GetByID: (id: string | number): Promise<APIResponse<User>> => {
            return request({
                url: `/user/${id}`,
                headers: DEFAULT_HEADERS(this.jwt),
            })
                .then(res => res.json() as Promise<APIResponse<User>>)
                .then(res => ({
                    ...res,
                    data: new User(res.data),
                }));
        },
        Get: (
            filters: UserFilters,
            page = 1,
            per_page = 100
        ): Promise<APIResponse<Page<User>>> => {
            return request({
                url: `/user`,
                query: { ...filters, page, per_page },
                headers: DEFAULT_HEADERS(this.jwt),
            })
                .then(res => res.json() as Promise<APIResponse<Page<User>>>)
                .then(res => pageMapper(User, res));
        },
        Delete: (id: string | number): Promise<APIResponse<''>> => {
            return request({
                method: 'DELETE',
                url: `/user/${id}`,
                headers: DEFAULT_HEADERS(this.jwt),
            }).then(res => res.json() as any as APIResponse<''>);
        },
        Update: (
            changes: { id: string | number } & UserChanges
        ): Promise<APIResponse<User>> => {
            return request({
                method: 'POST',
                url: '/user',
                body: JSON.stringify({ ...changes, id: parseInt(changes.id.toString()) }),
                headers: DEFAULT_HEADERS(this.jwt),
            })
                .then(res => res.json() as Promise<APIResponse<User>>)
                .then(res => ({
                    ...res,
                    data: new User(res.data),
                }));
        },
    };
    UserStory = {
        Get: (
            filters: UserStoryFilters,
            page = 1,
            per_page = 100
        ): Promise<APIResponse<UserStory[]>> => {
            return request({
                url: `/user_story`,
                query: { ...filters, page, per_page },
                headers: DEFAULT_HEADERS(this.jwt),
            })
                .then(res => res.json() as Promise<APIResponse<UserStory[]>>)
                .then(res => pageMapper(UserStory, res));
        },
        Create: (changes: UserStoryChanges): Promise<APIResponse<UserStory>> => {
            return request({
                method: 'PUT',
                url: '/user_story',
                headers: DEFAULT_HEADERS(this.jwt),
                body: JSON.stringify(changes),
            })
                .then(res => res.json() as Promise<APIResponse<UserStory>>)
                .then(res => ({
                    ...res,
                    data: new UserStory(res.data),
                }));
        },
        Update: (
            changes: { id: string | number } & UserChanges
        ): Promise<APIResponse<UserStory>> => {
            return request({
                method: 'POST',
                url: '/user_story',
                body: JSON.stringify({ ...changes, id: parseInt(changes.id.toString()) }),
                headers: DEFAULT_HEADERS(this.jwt),
            })
                .then(res => res.json() as Promise<APIResponse<UserStory>>)
                .then(res => ({
                    ...res,
                    data: new UserStory(res.data),
                }));
        },
        Delete: (id: string | number): Promise<APIResponse<''>> => {
            return request({
                method: 'DELETE',
                url: `/user_story/${id}`,
                headers: DEFAULT_HEADERS(this.jwt),
            }).then(res => res.json() as any as APIResponse<''>);
        },
    };
}
