import { Episode } from './Episode';
import { Anime } from './Anime';
import { Song } from './Song';
import { User } from './User';
import { AnimeFilters, EpisodeFilters, SongFilters, UserChanges, UserFilters } from './Filters';
import { APIResponse, Page } from '../types';
export declare class API {
    private jwt;
    constructor(jwt: string);
    Anime: {
        GetByID: (id: string | number) => Promise<APIResponse<Anime>>;
        Get: (filters: AnimeFilters, page?: number, per_page?: number) => Promise<APIResponse<Page<Anime>>>;
        Random: (count?: number, nsfw?: boolean) => Promise<APIResponse<Anime[]>>;
    };
    Episode: {
        GetByID: (id: string | number) => Promise<APIResponse<Episode>>;
        Get: (filters: EpisodeFilters, page?: number, per_page?: number) => Promise<APIResponse<Page<Episode>>>;
    };
    Song: {
        GetByID: (id: string | number) => Promise<APIResponse<Song>>;
        Get: (filters: SongFilters, page?: number, per_page?: number) => Promise<APIResponse<Page<Song>>>;
        Random: (count?: number) => Promise<APIResponse<Song[]>>;
    };
    User: {
        GetByID: (id: string | number) => Promise<APIResponse<User>>;
        Get: (filters: UserFilters, page?: number, per_page?: number) => Promise<APIResponse<Page<User>>>;
        Delete: (id: string | number) => Promise<APIResponse<''>>;
        Update: (changes: {
            id: string | number;
        } & UserChanges) => Promise<APIResponse<User>>;
    };
}
