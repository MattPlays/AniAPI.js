const fetch = require("node-fetch");
/**
 * @readonly
 * @enum {string}
 */
var AnimeFormat = {
    0: "TV",
    1: "TV_SHORT",
    2: "MOVIE",
    3: "SPECIAL",
    4: "OVA",
    5: "ONA",
    6: "MUSIC"
};
/**
 * @readonly
 * @enum {string}
 */
var AnimeStatus = {
    0: "FINISHED",
    1: "RELEASING",
    2: "NOT_YET_RELEASED",
    3: "CANCELLED"
};
/**
 * @readonly
 * @enum {string}
 */
var AnimeSeasonPeriod = {
    0: "WINTER",
    1: "SPRING",
    2: "SUMMER",
    3: "FALL",
    4: "UNKNOWN"
};
/**
 * @readonly
 * @enum {string}
 */
var AnimeSongType = {
    0: "OPENING",
    1: "ENDING",
    2: "NONE"
};
/**
 * @readonly
 * @enum {string}
 */
var AnimeResourceType = {
    0: "GENRES",
    1: "LOCALIZATIONS"
};
class Anime {
    constructor(id, anilist_id, mal_id, format, status, titles, descriptions, start_date, end_date, season_period, season_year, episodes_count, episode_duration, trailer_url, cover_image, cover_color, banner_image, genres, sequel, prequel, score) {
        this.id = id;
        this.anilist_id = anilist_id;
        this.mal_id = mal_id ?? null;
        this.format = AnimeFormat[format];
        this.status = AnimeStatus[status];
        this.titles = titles;
        this.descriptions = descriptions;
        this.start_date = new Date(start_date);
        this.end_date = new Date(end_date);
        this.season_period = AnimeSeasonPeriod[season_period];
        this.season_year = season_year ?? null;
        this.episodes_count = episodes_count;
        this.episode_duration = episode_duration ?? null;
        this.trailer_url = trailer_url;
        this.cover_image = cover_image;
        this.cover_color = cover_color;
        this.banner_image = banner_image;
        this.genres = genres;
        this.sequel = sequel ?? null;
        this.prequel = prequel ?? null;
        this.score = score;
    }
}
class Episode {
    constructor(id, anime_id, number, title, video, locale) {
        this.id = id;
        this.anime_id = anime_id;
        this.number = number;
        this.title = title;
        this.video = video;
        this.locale = locale;
    }
}
class Song {
    constructor(id, anime_id, title, artist, album, year, season, duration, preview_url, open_spotify_url, local_spotify_url, type) {
        this.id = id;
        this.anime_id = anime_id;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.season = AnimeSeasonPeriod[season];
        this.duration = duration;
        this.preview_url = preview_url;
        this.open_spotify_url = open_spotify_url;
        this.local_spotify_url = local_spotify_url;
        this.type = AnimeSongType[type];
    }
}
class Resource {
    constructor(resource) {
        this.resource = resource;
    }
}
class Response {
    constructor(status_code, message, version) {
        this.status_code = status_code;
        this.message = message;
        this.version = version;
    }
}
class ErrorResponse extends Response {
    constructor(response) {
        super(response.status_code, response.message, response.version);
        this.data = response.data;
    }
}
class AnimeResponse extends Response {
    constructor(response) {
        super(response.status_code, response.message, response.version);
        if(response.data.documents) {
            this.data = {
                current_page: response.data.current_page,
                count: response.data.count,
                documents: response.data.documents.map((d) => {return new Anime(d.id, d.anilist_id, d.mal_id, d.format, d.status, d.titles, d.descriptions, d.start_date, d.end_date, d.season_period, d.season_year, d.episodes_count, d.episode_duration, d.trailer_url, d.cover_image, d.cover_color, d.banner_image, d.genres, d.sequel, d.prequel, d.score)}),
                last_page: response.data.last_page,
            };
        } else {
            this.data = new Anime(response.data.id, response.data.anilist_id, response.data.mal_id, response.data.format, response.data.status, response.data.titles, response.data.descriptions, response.data.start_date, response.data.end_date, response.data.season_period, response.data.season_year, response.data.episodes_count, response.data.episode_duration, response.data.trailer_url, response.data.cover_image, response.data.cover_color, response.data.banner_image, response.data.genres, response.data.sequel, response.data.prequel, response.data.score);
        }
    }
}
class EpisodeResponse extends Response {
    constructor(response) {
        super(response.status_code, response.message, response.version);
        if(response.data.documents) {
            this.data = {
                current_page: response.data.current_page,
                count: response.data.count,
                documents: response.data.documents.map((d) => {return new Episode(d.id, d.anime_id, d.number, d.title, d.video, d.locale)}),
                last_page: response.data.last_page
            };
        } else {
            this.data = new Episode(response.data.id, response.data.anime_id, response.data.number, response.data.title, response.data.video, response.data.locale);
        }
    } 
}
class SongResponse extends Response {
    constructor(response) {
        super(response.status_code, response.message, response.version);
        if(response.data.documents) {
            this.data = {
                current_page: response.data.current_page,
                count: response.data.count,
                documents: response.data.documents.map((d) => {return new Song(d.id, d.anime_id, d.title, d.artist, d.album, d.year, d.season, d.duration, d.preview_url, d.open_spotify_url, d.local_spotify_url, d.type)}),
                last_page: response.data.last_page
            };
        } else {
            this.data = new Song(response.data.id, response.data.anime_id, response.data.title, response.data.artist, response.data.album, response.data.year, response.data.season, response.data.duration, response.data.preview_url, response.data.open_spotify_url, response.data.local_spotify_url, response.data.type)
        }

    } 
}
class ResourceResponse extends Response {
    constructor(response) {
        super(response.status_code, response.message, response.version);
        if(typeof response.data === "string") {
            this.data = response.data;
        } else {
            this.data = new Resource(response.data);
        }
    }
}
class API {
    constructor() {
        this.baseURL = "https://api.aniapi.com/v1"
    }
    /**
     * 
     * @param {string | number} id - ID of the Anime you want (https://aniapi.com/docs/resources/anime#retrieve-a-specific-anime) for more info
     * @returns {Promise<AnimeResponse | ErrorResponse>}
     */
    GetAnimeByID(id) {
        const url = `${this.baseURL}/anime/${id}`;
        return fetch(url, {
            "headers": {
                "Accept": "application/json"
            },
            "method": "GET"
        }).then((r) => r.json()).then((res) => {
            if(res.status_code == 200) {
                return new AnimeResponse(res)
            } else {
                return new ErrorResponse(res)
            }
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {object} filters - Filters you want to apply [At least 1] (https://aniapi.com/docs/resources/anime#parameters-1) for more info
     * @param {number} page - The page number of the paginated results 
     * @param {number} per_page - Number of results you want per page  
     * @returns {Promise<AnimeResponse | ErrorResponse>}
     */
    GetAnimes(filters = {}, page = 1, per_page = 100) {
        if(Object.keys(filters).length < 1) throw new Error("At least 1 filter must be provided");
        let url = `${this.baseURL}/anime`;
        if(filters.title && Object.keys(filters).indexOf("title") > 0) {url += `&title=${encodeURI(filters.title)}`} else if(filters.title) {url += `?title=${encodeURI(filters.title)}`};
        if(filters.anilist_id && Object.keys(filters).indexOf("anilist_id") > 0) {url += `&anilist_id=${filters.anilist_id}`} else if(filters.anilist_id) {url += `?anilist_id=${filters.anilist_id}`};
        if(filters.mal_id && Object.keys(filters).indexOf("mal_id") > 0) {url += `&mal_id=${filters.mal_id}`} else if(filters.mal_id) {url += `?mal_id=${filters.mal_id}`};
        if(filters.formats && Object.keys(filters).indexOf("formats") > 0) {url += `&formats=${filters.formats.join()}`} else if(filters.formats) {url += `?formats=${filters.formats.join()}`};
        if(filters.status && Object.keys(filters).indexOf("status") > 0) {url += `&status=${filters.status}`} else if(filters.status) {url += `?status=${filters.status}`};
        if(filters.year && Object.keys(filters).indexOf("year") > 0) {url += `&year=${filters.year}`} else if(filters.year) {url += `?year=${filters.year}`};
        if(filters.season && Object.keys(filters).indexOf("season") > 0) {url += `&season=${filters.season}`} else if(filters.season) {url += `?season=${filters.season}`};
        if(filters.genres && Object.keys(filters).indexOf("genres") > 0) {url += `&genres=${filters.genres.join()}`} else if(filters.genres) {url += `?genres=${filters.genres.join()}`};
        url += `&page=${page}&per_page=${per_page}`;
        return fetch(url, {
            "headers": {
                "Accept": "application/json"
            },
            "method": "GET"
        }).then((r) => r.json()).then((res) => {
            if(res.status_code == 200) {
                return new AnimeResponse(res)
            } else {
                return new ErrorResponse(res)
            }
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string | number} id - ID Of the Episode you want (https://aniapi.com/docs/resources/episode#retrieve-a-specific-episode) for more info 
     * @returns {Promise<EpisodeResponse | ErrorResponse>}
     */
    GetEpisodeByID(id) {
        const url = `${this.baseURL}/episode/${id}`
        return fetch(url, {
            "headers": {
                "Accept": "application/json"
            },
            "method": "GET"
        }).then((r) => r.json()).then((res) => {
            if(res.status_code == 200) {
                return new EpisodeResponse(res)
            } else {
                return new ErrorResponse(res)
            }
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {object} filters - Filters you want to apply [At least 1] (https://aniapi.com/docs/resources/episode#parameters-1) for more info  
     * @param {number} page - The page number of the paginated results 
     * @param {number} per_page - Number of results you want per page 
     * @returns {Promise<EpisodeResponse | ErrorResponse>}
     */
    GetEpisodes(filters = {}, page = 1, per_page = 100) {
        let url = `${this.baseURL}/episode`
        if(filters.anime_id && Object.keys(filters).indexOf("anime_id") > 0) {url += `&anime_id=${filters.anime_id}`} else if(filters.anime_id) {url += `?anime_id=${filters.anime_id}`};
        if(filters.number && Object.keys(filters).indexOf("number") > 0) {url += `&number=${filters.number}`} else if(filters.number) {url += `?number=${filters.number}`};
        if(filters.source && Object.keys(filters).indexOf("source") > 0) {url += `&source=${filters.source}`} else if(filters.source) {url += `?source=${filters.source}`};
        if(filters.locale && Object.keys(filters).indexOf("locale") > 0) {url += `&locale=${filters.locale}`} else if(filters.locale) {url += `?locale=${filters.locale}`};
        url += `&page=${page}&per_page=${per_page}`;
        return fetch(url, {
            "headers": {
                "Accept": "application/json",
            },
            "method": "GET"
        }).then((r) => r.json()).then((res) => {
            if(res.status_code == 200) {
                return new EpisodeResponse(res)
            } else {
                return new ErrorResponse(res)
            }
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} id - ID of the song you want https://aniapi.com/docs/resources/song#retrieve-a-specific-song for more details
     * @returns {Promise<SongResponse | ErrorResponse>}
     */
    GetSongByID(id) {
        const url = `${this.baseURL}/song/${id}`;
        return fetch(url, {
            "headers": {
                "Accept": "application/json"
            },
            "method": "GET"
        }).then((r) => r.json()).then((res) => {
            if(res.status_code == 200) {
                return new SongResponse(res)
            } else {
                return new ErrorResponse(res)
            }
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {object} filters - Check https://aniapi.com/docs/resources/song#try-it-1 for help
     * @param {number} page - Pagination
     * @param {number} per_page - How many results per page
     * @returns {Promise<SongResponse | ErrorResponse>}
     */
    GetSongs(filters = {}, page = 1, per_page = 100) {
        let url = `${this.baseURL}/song`;
        if(filters.anime_id && Object.keys(filters).indexOf("anime_id") > 0) {url += `&anime_id=${filters.anime_id}`} else if(filters.anime_id) {url += `?anime_id=${filters.anime_id}`};
        if(filters.title && Object.keys(filters).indexOf("title") > 0) {url += `&title=${filters.title}`} else if(filters.title) {url += `?title=${filters.title}`};
        if(filters.artist && Object.keys(filters).indexOf("artist") > 0) {url += `&artist=${filters.artist}`} else if(filters.artist) {url += `?artist=${filters.artist}`};
        if(filters.year && Object.keys(filters).indexOf("year") > 0) {url += `&year=${filters.year}`} else if(filters.year) {url += `?year=${filters.year}`};
        if(filters.season && Object.keys(filters).indexOf("season") > 0) {url += `&season=${filters.season}`} else if(filters.season) {url += `?sesaon=${filters.season}`};
        if(filters.type && Object.keys(filters).indexOf("type") > 0) {url += `&type=${filters.type}`} else if(filters.type) {url += `?type=${filters.type}`};
        url += `&page=${page}&per_page=${per_page}`;
        return fetch(url, {
            "headers": {
                "Accept": "application/json"
            },
            "method": "GET"
        }).then((r) => r.json()).then((res) => {
            if(res.status_code == 200) {
                return new SongResponse(res)
            } else {
                return new ErrorResponse(res)
            }
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @returns {Promise<ResourceResponse | ErrorResponse>}
     */
    GetLastAvailableResourceVersion() {
        const url = `${this.baseURL}/resources`
        return fetch(url, {
            "headers": {
                "Accept": "application/json"
            },
            "method": "GET",
        }).then((r) => r.json()).then((res) => {
            if(res.status_code == 200) {
                return new ResourceResponse(res)
            } else {
                return new ErrorResponse(res)
            }
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} version - Use GetLastAvailableResourceVersion for most up to date resource version
     * @param {Enumerator<AnimeResourceType>} type - (https://aniapi.com/docs/resources/song#type)
     * @returns {Promise<ResourceResponse | ErrorResponse>}
     */
    GetResource(version = "1.0", type) {
        const url = `${this.baseURL}/resources/${version}/${type}`
        return fetch(url, {
            "headers": {
                "Accept": "application/json"
            },
            "method": "GET",
        }).then((r) => r.json()).then((res) => {
            if(res.status_code == 200) {
                return new ResourceResponse(res)
            } else {
                return new ErrorResponse(res)
            }
        }).catch((err) => {throw new Error(err)});
    }
}
module.exports = {
    API: API,
}