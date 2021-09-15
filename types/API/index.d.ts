import {AnimeFilters, EpisodeFilters, UserFilters, SongFilters, UserChanges, UserStoryChanges, UserStoryFilters} from './lib/Filters';
import { AnimeResponse, EpisodeResponse, UserChangedResponse, UserResponse, SongResponse, ResourceResponse, ErrorResponse, UserStoryResponse } from './Responses/index';
import ENUMS from "./lib/Enums";
declare class API {
    constructor(jwt: string);
    declare Anime = {
        GetByID: async(_id: string | number): Promise<AnimeResponse | ErrorResponse> => {},
        Get: async(_filters: AnimeFilters, _page: number, _per_page: number): Promise<AnimeResponse | ErrorResponse> => {},
    };
    declare Episode = {
        GetByID: async(_id: string | number): Promise<EpisodeResponse | ErrorResponse> => {},
        Get: async(_filters: EpisodeFilters, _page: number, _per_page: number): Promise<EpisodeResponse | ErrorResponse> => {},
    };
    declare Song = {
        GetByID: async(_id: string | number): Promise<SongResponse | ErrorResponse> => {},
        Get: async(_filters: SongFilters, _page: number, _per_page:number): Promise<SongResponse | ErrorResponse> => {},
    };
    declare Resource = {
        GetLastAvailableResourceVersion: async(): Promise<ResourceResponse | ErrorResponse> => {},
        Get: async(_version: string, _type: ENUMS.AnimeResourceType): Promise<ResourceResponse | ErrorResponse> => {},
    };
    declare User = {
        GetByID: async(_id: string | number): Promise<UserResponse | ErrorResponse> => {},
        Get: async(_filters: UserFilters, _page: number, _per_page: number): Promise<UserChangedResponse | ErrorResponse> => {},
        Update: async(_id: string | number, _changes: UserChanges): Promise<UserChangedResponse | ErrorResponse> => {},
        Delete: (_id: string): Promise<{"statuscode": number, "message": string, "data": string, "version": string}> => {},
    };
    declare UserStory = {
        GetByID: async(_id: string | number): Promise<UserStoryResponse | ErrorResponse> => {},
        Get: async(_filters: UserStoryFilters, _page: number, _per_page: number): Promise<UserStoryResponse | ErrorResponse> => {},
        Create: async(_changes: UserStoryChanges): Promise<UserStoryResponse | ErrorResponse> => {},
        Update: async(_id: string | number, _changes: UserStoryChanges): Promise<UserStoryResponse | ErrorResponse> => {},
        Delete: async(_id: string): Promise<{"statuscode": number, "message": string, "data": string, "version": string}> => {},
    }
}
export {API, ENUMS};