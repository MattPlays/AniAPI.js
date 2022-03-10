import { Episode as EpisodeType } from '../types';
export class Episode implements EpisodeType {
    /**
     * Unique identifier for an Episode.
     */
    id: number;
    /**
     * [Anime](https://aniapi.com/docs/resources/anime) external unique identifier.
     */
    anime_id: number;
    /**
     * The episode's progressive number referring to the entire show.
     */
    number: number;
    /**
     * The episode's localized title.
     */
    title: string;
    /**
     * The episode's streaming url.
     */
    video: string;
    /**
     * The headers required to retrieve the video
     */
    video_headers: { [key: string]: string };
    /**
     * The episode's website related locale.
     */
    locale: string;
    /**
     * The episode's streaming quality.
     */
    quality: number;
    /**
     * The episode's streaming codec format.
     */
    format: string;
    /**
     * Indicates if the episode is dubbed or subbed.
     */
    is_dub: boolean;
    source: string;
    constructor(data: EpisodeType) {
        Object.assign(this, data);
    }
    

}
