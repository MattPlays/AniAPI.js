import {AnimeResourceType} from './Enums';
import {AnimeFilters, EpisodeFilters, UserFilters, SongFilters, UserChanges, UserStoryChanges, UserStoryFilters} from './Filters';
import { AnimeResponse, EpisodeResponse, UserChangedResponse, UserResponse, SongResponse, ResourceResponse, ErrorResponse, UserStoryResponse } from './Responses';
import ENUMS from "./Enums";
export class API {
    constructor(_jwt?: string);
    Anime = {
        GetByID: (_id: string | number): Promise<AnimeResponse | ErrorResponse> => {},
        Get: (_filters: AnimeFilters, _page: number, _per_page: number): Promise<AnimeResponse | ErrorResponse> => {}
    };
    Episode = {
        GetByID: (_id: string | number): Promise<EpisodeResponse | ErrorResponse> => {},
        Get: (_filters: EpisodeFilters, _page: number, _per_page: number): Promise<EpisodeResponse | ErrorResponse> => {}
    };
    Song = {
        GetByID: (_id: string | number): Promise<SongResponse | ErrorResponse> => {},
        Get: (_filters: SongFilters, _page: number, _per_page:number): Promise<SongResponse | ErrorResponse> => {}
    };
    Resource = {
        GetLastAvailableResourceVersion: (): Promise<ResourceResponse | ErrorResponse> => {},
        Get: (_version: string, _type: AnimeResourceType): Promise<ResourceResponse | ErrorResponse> => {}
    };
    User = {
        GetByID: (_id: string | number): Promise<UserResponse | ErrorResponse> => {},
        Get: (_filters: UserFilters, _page: number, _per_page: number): Promise<UserChangedResponse | ErrorResponse> => {},
        Update: (_id: string | number, _changes: UserChanges): Promise<UserChangedResponse | ErrorResponse> => {},
        Delete: (_id: string): Promise<{"status_code": number, "message": string, "data": string, "version": string}> => {}
    };
    UserStory = {
        GetByID: (_id: string | number): Promise<UserStoryResponse | ErrorResponse> => {},
        Get: (_filters: UserStoryFilters, _page: number, _per_page: number): Promise<UserStoryResponse | ErrorResponse> => {},
        Create: (_changes: UserStoryChanges): Promise<UserStoryResponse | ErrorResponse> => {},
        Update: (_id: string | number, _changes: UserStoryChanges): Promise<UserStoryResponse | ErrorResponse> => {},
        Delete: (_id: string): Promise<{"status_code": number, "message": string, "data": string, "version": string}> => {}
    }
}
export {ENUMS};