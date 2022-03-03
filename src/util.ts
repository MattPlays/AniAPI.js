import { fetch, Response } from 'undici';
import { API_URL, API_VERSION } from './constants';
import { APIResponse, APIResponseTypes } from './API';

export function request(data: {
    method?: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE';
    url: string;
    body?: any;
    headers?: any;
    query?: any;
}): Promise<Response> {
    let queryString = '';
    if (data.query) {
        queryString = '?' + objectToQuery(data.query);
    }
    const { url, ...req } = data;
    return fetch(`${API_URL}/v${API_VERSION}${url}${queryString}`, req);
}

export function objectToQuery(object: any): string {
    return Object.keys(object)
        .map(key => key + '=' + object[key])
        .join('&');
}
export function pageMapper<T extends new (data: any) => any, K extends APIResponseTypes>(
    _class: T,
    page: APIResponse<K>
): APIResponse<K> {
    if (Array.isArray(page.data)) {
        return {
            ...page,
            data: page.data.map(data => new _class(data)) as any,
        };
    } else {
        return {
            ...page,
            data: {
                ...page.data,
                documents: (page.data as any).documents.map(
                    (data: any) => new _class(data)
                ) as any,
            },
        };
    }
}
