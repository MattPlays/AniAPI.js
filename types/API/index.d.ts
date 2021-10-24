import {AnimeFilters, EpisodeFilters, UserFilters, SongFilters, UserChanges, UserStoryChanges, UserStoryFilters} from './lib/Filters';
import { AnimeResponse, EpisodeResponse, UserChangedResponse, UserResponse, SongResponse, ResourceResponse, ErrorResponse, UserStoryResponse } from './Responses/index';
import ENUMS from "./lib/Enums";
export declare class API {
    constructor(jwt: string);
    declare Anime: {
        GetByID(_id: string | number): Promise<AnimeResponse | ErrorResponse>,
        Get(_filters: AnimeFilters, _page: number, _per_page: number): Promise<AnimeResponse | ErrorResponse>,
        Random(_count: number): Promise<AnimeResponse | ErrorResponse>
    };
    declare Episode: {
        GetByID(_id: string | number): Promise<EpisodeResponse | ErrorResponse>,
        Get(_filters: EpisodeFilters, _page: number, _per_page: number): Promise<EpisodeResponse | ErrorResponse>,
    };
    declare Song: {
        GetByID(_id: string | number): Promise<SongResponse | ErrorResponse>,
        Get(_filters: SongFilters, _page: number, _per_page:number): Promise<SongResponse | ErrorResponse>,
        Random(_count: number): Promise<SongResponse | ErrorResponse>
    };
    declare Resource: {
        GetLastAvailableResourceVersion(): Promise<ResourceResponse | ErrorResponse>,
        Get(_version: string, _type: ENUMS.AnimeResourceType): Promise<ResourceResponse | ErrorResponse>,
    };
    declare User: {
        GetByID(_id: string | number): Promise<UserResponse | ErrorResponse>,
        Get(_filters: UserFilters, _page: number, _per_page: number): Promise<UserChangedResponse | ErrorResponse>,
        Update(_id: string | number, _changes: UserChanges): Promise<UserChangedResponse | ErrorResponse>,
        Delete(_id: string): Promise<{"statuscode": number, "message": string, "data": string, "version": string}>,
    };
    declare UserStory: {
        GetByID(_id: string | number): Promise<UserStoryResponse | ErrorResponse>,
        Get(_filters: UserStoryFilters, _page: number, _per_page: number): Promise<UserStoryResponse | ErrorResponse>,
        Create(_changes: UserStoryChanges): Promise<UserStoryResponse | ErrorResponse>,
        Update(_id: string | number, _changes: UserStoryChanges): Promise<UserStoryResponse | ErrorResponse>,
        Delete(_id: string): Promise<{"statuscode": number, "message": string, "data": string, "version": string}>,
    };
}
export {ENUMS};