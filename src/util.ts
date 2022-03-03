import { fetch, Response } from 'undici';
import { API_URL, API_VERSION, DEFAULT_HEADERS } from './constants';
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

export async function validateToken(jwt: string): Promise<boolean> {
    const res = await request({
        url: `/auth/me`,
        headers: DEFAULT_HEADERS(jwt),
    });
    return res.status === 200;
}

export function HTTPRequestValidator(jwt: string) {
    return async (res: Response) => {
        if (!res.ok && res.status === 401) {
            if (!(await validateToken(jwt))) {
                throw new Error('Your JWT is no longer valid');
            }
            throw new Error(
                `Failed with response code ${res.status}\n Body: ${await res.text()}`
            );
        }
        return res;
    };
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
