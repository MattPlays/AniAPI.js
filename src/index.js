const fetch = require("node-fetch");
const {AnimeResponse, EpisodeResponse, SongResponse, ResourceResponse, ErrorResponse} = require("./Responses");
const {AnimeFilters, EpisodeFilters, SongFilters} = require("./Filters");
const Enums = require("./Enums");
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
     * @param {AnimeFilters} filters - Filters you want to apply [At least 1] (https://aniapi.com/docs/resources/anime#parameters-1) for more info
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
     * @param {EpisodeFilters} filters - Filters you want to apply [At least 1] (https://aniapi.com/docs/resources/episode#parameters-1) for more info  
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
     * @param {!SongFilters} filters - Check https://aniapi.com/docs/resources/song#try-it-1 for help
     * @param {!number} page - Pagination
     * @param {!number} per_page - How many results per page
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
    ENUMS: Enums
}