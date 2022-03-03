import { Response } from 'undici';
import { APIResponse, APIResponseTypes } from './API';
export declare function request(data: {
    method?: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE';
    url: string;
    body?: any;
    headers?: any;
    query?: any;
}): Promise<Response>;
export declare function objectToQuery(object: any): string;
export declare function pageMapper<T extends new (data: any) => any, K extends APIResponseTypes>(_class: T, page: APIResponse<K>): APIResponse<K>;
