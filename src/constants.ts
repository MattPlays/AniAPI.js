export const API_URL = 'https://api.aniapi.com';

export const API_VERSION = 1;

export const DEFAULT_HEADERS = (jwt: string) => ({
    Authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
});
