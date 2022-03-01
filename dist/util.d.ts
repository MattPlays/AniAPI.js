import { Response } from 'node-fetch';
export declare function request(data: {
    method?: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE';
    url: string;
    body?: any;
    headers?: any;
    query?: any;
}): Promise<Response>;
export declare function objectToQuery(object: any): string;
