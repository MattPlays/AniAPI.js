import {AnimeResourceType} from './Enums';
import {AnimeFilters, EpisodeFilters, UserFilters, SongFilters} from './Filters';
import { AnimeResponse, EpisodeResponse, UserResponse, SongResponse, ResourceResponse, ErrorResponse } from './Responses';
import ENUMS from "./Enums";
export class API {
    constructor();
    GetAnimeByID(id: string | number): Promise<AnimeResponse | ErrorResponse>;
    GetAnimes(filters: AnimeFilters, page: number, per_page: number): Promise<AnimeResponse | ErrorResponse>;
    GetEpisodeByID(id: string | number): Promise<EpisodeResponse | ErrorResponse>;
    GetEpisodes(filters: EpisodeFilters, page: number, per_page: number): Promise<EpisodeResponse | ErrorResponse>
    GetSongByID(id: string | number): Promise<SongResponse | ErrorResponse>;
    GetSongs(filters: SongFilters, page: number, per_page: number): Promise<SongResponse | ErrorResponse>;
    GetLastAvailableResourceVersion(): Promise<ResourceResponse | ErrorResponse>;
    GetResource(version: string, type: AnimeResourceType): Promise<ResourceResponse | ErrorResponse>;
    GetUserByID(id: string | null): Promise<UserResponse, ErrorResponse>;
    GetUsers(filters: UserFilters, page: number, per_page: number): Promise<UserResponse, ErrorResponse>;
}
export {ENUMS};