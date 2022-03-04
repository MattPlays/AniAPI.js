export interface Episode {
    id: number;
    anime_id: number;
    number: number;
    title: string;
    video: string;
    video_headers: { [key: string]: string };
    source: string;
    locale: string;
    quality: number;
    format: string;
    is_dub: boolean;
}
