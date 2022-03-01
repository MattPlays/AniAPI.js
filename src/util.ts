import { fetch, Response } from 'undici';
import { API_URL, API_VERSION } from './constants';

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
