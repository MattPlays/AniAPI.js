import { AnimeGenres } from '../handlers/Anime';

export interface Anime {
    id: number;
    anilist_id: number;
    mal_id: number | null;
    format: AnimeFormat;
    status: AnimeStatus;
    titles: { [key: string]: string };
    descriptions: { [key: string]: string };
    start_date: string | null;
    end_date: string | null;
    season_period: AnimeSeasonPeriod;
    season_year: number | null;
    episodes_count: number;
    episode_duration: number | null;
    episode_from: number;
    episode_to: number;
    trailer_url: string | null;
    cover_image: string;
    cover_color: string;
    banner_image: string;
    genres: AnimeGenres[];
    sequel: number | null;
    prequel: number | null;
    score: number;
    sagas?: Saga[];
    has_cover_image: boolean;
    recommendations: number[];
}

export type Saga = Pick<
    Anime,
    'episode_from' | 'episode_to' | 'episodes_count' | 'titles' | 'descriptions'
>;

export enum AnimeWeeklyAiringDay {
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
}

export enum AnimeFormat {
    'TV' = 0,
    'TV_SHORT' = 1,
    'MOVIE' = 2,
    'SPECIAL' = 3,
    'OVA' = 4,
    'ONA' = 5,
    'MUSIC' = 6,
}
export enum AnimeStatus {
    'FINISHED' = 0,
    'RELEASING' = 1,
    'NOT_YET_RELEASED' = 2,
    'CANCELLED' = 3,
}
export enum AnimeSeasonPeriod {
    'WINTER' = 0,
    'SPRING' = 1,
    'SUMMER' = 2,
    'FALL' = 3,
    'UNKNOWN' = 4,
}
