import { AnimeFormat, AnimeStatus, AnimeSeasonPeriod } from "./Enums";
export interface Anime {
    id: number, 
    anilist_id: number, 
    mal_id: number | null, 
    format: AnimeFormat, 
    status: AnimeStatus, 
    titles: Map<string, string>, 
    descriptions: Map<string, string>, 
    start_date: Date | null, 
    end_date: Date | null, 
    season_period: AnimeSeasonPeriod, 
    season_year: number | null, 
    episodes_count: number, 
    episode_duration: number | null, 
    trailer_url: string | null, 
    cover_image: string, 
    cover_color: string, 
    banner_image: string, 
    genres: string[], 
    sequel: number | null, 
    prequel: number | null, 
    score: number
}