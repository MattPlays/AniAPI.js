import {AnimeResourceType} from './Enums';
import {AnimeFilters, EpisodeFilters, SongFilters} from './Filters';
import { AnimeResponse, EpisodeResponse, SongResponse, ResourceResponse, ErrorResponse } from './Responses';
export class API {
    constructor();
    GetAnimeByID(id: string | number): Promise<AnimeResponse | ErrorResponse>;
    GetAnimes(filters: AnimeFilters, page: number, per_page: number): Promise<AnimeResponse | ErrorResponse>;
    GetEpisodeByID(id: string | number): Promise<EpisodeResponse | ErrorResponse>;
    GetEpisodes(filters: EpisodeFilters, page: number, per_page: number): Promise<EpisodeResponse | ErrorResponse>
    GetSongByID(id: string | number): Promise<SongResponse | ErrorResponse>;
    GetSongs(filters: SongFilters, page: number, per_page: number): Promise<SongResponse | ErrorResponse>;
    GetLastAvailableResourceVersion(): Promise<ResourceResponse | ErrorResponse>
    GetResource(version: string, type: AnimeResourceType): Promise<ResourceResponse | ErrorResponse>
}