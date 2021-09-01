const fetch = require("node-fetch");
const {AnimeResponse, EpisodeResponse, UserResponse, SongResponse, ResourceResponse, ErrorResponse, UserChangedResponse, UserStoryResponse} = require("./Responses");
const {AnimeFilters, EpisodeFilters, SongFilters, UserFilters, UserChanges, UserStoryFilters, UserStoryChanges} = require("./Filters");
const Enums = require("./Enums");
class API {
    /**
     * 
     * @param {string=} jwt 
     */
    constructor(jwt) {
        this.baseURL = "https://api.aniapi.com/v1",
        this.jwt = jwt;
    }
    Anime = {
        /**
         * 
         * @param {string | number} id - ID of the Anime you want (https://aniapi.com/docs/resources/anime#retrieve-a-specific-anime) for more info
         * @returns {Promise<AnimeResponse | ErrorResponse>}
         */
        GetByID: (id) => {
            const url = `${this.baseURL}/anime/${id}`;
            let options = {

                "headers": {
                    "Accept": "application/json"
                },
                "method": "GET"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((r) => r.json()).then((res) => {
                return (res.status_code == 200) ? new AnimeResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        },
        /**
         * 
         * @param {AnimeFilters} filters - Filters you want to apply [At least 1] (https://aniapi.com/docs/resources/anime#parameters-1) for more info
         * @param {number} page - The page number of the paginated results 
         * @param {number} per_page - Number of results you want per page  
         * @returns {Promise<AnimeResponse | ErrorResponse>}
         */
        Get: (filters = {}, page = 1, per_page = 100) => {
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
            let options = {
                "headers": {
                    "Accept": "application/json"
                },
                "method": "GET"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((r) => r.json()).then((res) => {
                return (res.status_code == 200) ? new AnimeResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        }
    }
    Episode = {
        /**
         * 
         * @param {string | number} id - ID Of the Episode you want (https://aniapi.com/docs/resources/episode#retrieve-a-specific-episode) for more info 
         * @returns {Promise<EpisodeResponse | ErrorResponse>}
         */
        GetByID: (id) => {
            const url = `${this.baseURL}/episode/${id}`
            let options = {
                "headers": {
                    "Accept": "application/json"
                },
                "method": "GET"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((r) => r.json()).then((res) => {
                return (res.status_code == 200) ? new EpisodeResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        },
        /**
         * 
         * @param {EpisodeFilters} filters - Filters you want to apply [At least 1] (https://aniapi.com/docs/resources/episode#parameters-1) for more info  
         * @param {number} page - The page number of the paginated results 
         * @param {number} per_page - Number of results you want per page 
         * @returns {Promise<EpisodeResponse | ErrorResponse>}
         */
        Get: (filters = {}, page = 1, per_page = 100) => {
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
                return (res.status_code == 200) ? new EpisodeResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        }
    }
    Song = {
        /**
         * 
         * @param {string} id - ID of the song you want https://aniapi.com/docs/resources/song#retrieve-a-specific-song for more details
         * @returns {Promise<SongResponse | ErrorResponse>}
         */
        GetByID: (id) => {
            const url = `${this.baseURL}/song/${id}`;
            let options = {
                "headers": {
                    "Accept": "application/json"
                },
                "method": "GET"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((r) => r.json()).then((res) => {
                return (res.status_code == 200) ? new SongResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        },
        /**
         * 
         * @param {!SongFilters} filters - Check https://aniapi.com/docs/resources/song#try-it-1 for help
         * @param {!number} page - Pagination
         * @param {!number} per_page - How many results per page
         * @returns {Promise<SongResponse | ErrorResponse>}
         */
        Get: (filters = {}, page = 1, per_page = 100) => {
            let url = `${this.baseURL}/song`;
            if(filters.anime_id && Object.keys(filters).indexOf("anime_id") > 0) {url += `&anime_id=${filters.anime_id}`} else if(filters.anime_id) {url += `?anime_id=${filters.anime_id}`};
            if(filters.title && Object.keys(filters).indexOf("title") > 0) {url += `&title=${filters.title}`} else if(filters.title) {url += `?title=${filters.title}`};
            if(filters.artist && Object.keys(filters).indexOf("artist") > 0) {url += `&artist=${filters.artist}`} else if(filters.artist) {url += `?artist=${filters.artist}`};
            if(filters.year && Object.keys(filters).indexOf("year") > 0) {url += `&year=${filters.year}`} else if(filters.year) {url += `?year=${filters.year}`};
            if(filters.season && Object.keys(filters).indexOf("season") > 0) {url += `&season=${filters.season}`} else if(filters.season) {url += `?sesaon=${filters.season}`};
            if(filters.type && Object.keys(filters).indexOf("type") > 0) {url += `&type=${filters.type}`} else if(filters.type) {url += `?type=${filters.type}`};
            url += `&page=${page}&per_page=${per_page}`;
            let options = {
                "headers": {
                    "Accept": "application/json"
                },
                "method": "GET"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((r) => r.json()).then((res) => {
                return (res.status_code == 200) ? new SongResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        }
    }
    Resource = {
        /**
         * 
         * @returns {Promise<ResourceResponse | ErrorResponse>}
         */
        GetLastAvailableResourceVersion: () => {
            const url = `${this.baseURL}/resources`
            let options = {
                "headers": {
                    "Accept": "application/json"
                },
                "method": "GET"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((r) => r.json()).then((res) => {
                return (res.status_code == 200) ? new ResourceResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        },
        /**
         * 
         * @param {string} version - Use GetLastAvailableResourceVersion for most up to date resource version
         * @param {Enumerator<AnimeResourceType>} type - (https://aniapi.com/docs/resources/song#type)
         * @returns {Promise<ResourceResponse | ErrorResponse>}
         */
        Get: (version = "1.0", type) => {
            const url = `${this.baseURL}/resources/${version}/${type}`
            let options = {
                "headers": {
                    "Accept": "application/json"
                },
                "method": "GET"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((r) => r.json()).then((res) => {
                return (res.status_code == 200) ? new ResourceResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        }
    }
    User = {
        /**
         * 
         * @param {string | number} id - Unique identifier for an User.
         * @returns {Promise<UserResponse | ErrorResponse>}
         */
        GetByID: (id) => {
            const url = `${this.baseURL}/user/${id}`
            let options = {
                "headers": {
                    "Accept": "application/json"
                },
                "method": "GET"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((r) => r.json()).then((res) => {
                return (res.status_code == 200) ? new UserResponse(res) : new ErrorResponse(res);
            }).catch((err) => {throw new Error(err)});
        },
        /**
         * 
         * @param {UserFilters} filters - Filters you want to apply [At least 1](https://aniapi.com/docs/resources/user#parameters-1) for more info  
         * @param {!number} page - Pagination
         * @param {!number} per_page - How many results per page
         * @returns {Promise<UserResponse | ErrorResponse>}
         */
        Get: (filters = {}, page = 1, per_page = 100) => {
            let url = `${this.baseURL}/user`
            if(filters.username && Object.keys(filters).indexOf("username") > 0) {url += `&username=${filters.username}`} else if(filters.username) {url += `?username=${filters.username}`};
            if(filters.email && Object.keys(filters).indexOf("email") > 0) {url += `&email=${filters.email}`} else if(filters.email) {url += `?email=${filters.email}`};
            url += `&page=${page}&per_page=${per_page}`;
            let options = {
                "headers": {
                    "Accept": "application/json"
                },
                "method": "GET"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((r) => r.json()).then((res) => {
                return (res.status_code == 200) ? new UserResponse(res) : new ErrorResponse(res);
            }).catch((err) => {throw new Error(err)});
        },
        /**
         * 
         * @param {string | number} id - The User's id to update
         * @param {UserChanges} changes - The changes you want to apply. [More Info](https://aniapi.com/docs/resources/user#parameters-2)
         * @returns {Promise<UserChangedResponse | ErrorResponse>}
         */
        Update: (id, changes = {}) => {
            if(!id) throw new Error("You must provide a UserID");
            if(Object.keys(changes) < 1) throw new Error("You must change at least 1 field");
            if(changes.anilist_id && !changes.anilist_token) throw new Error("The anilist_token value becomes required when you provide the anilist_id field.");
            const url = `${this.baseURL}/user`;
            let options = {
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "body": JSON.stringify({
                    id: id,
                    ...changes
                })
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((r) => r.json()).then((res) => {
                return (res.status_code == 200) ? new UserChangedResponse(res) : new ErrorResponse(res);
            }).catch((err) => {throw new Error(err)});
        },
        /**
         * 
         * @param {string} id -The User's id to delete
         * @returns {Promise<{"status_code": number, "message": string, "data": string, "version": string}>}
         */
        Delete: (id) => {
            if(!id) throw new Error("You must provide a UserID");
            const url = `${this.baseURL}/user/${id}`;
            let options = {
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                "method": "DELETE",
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`;
            return fetch(url, options).then((r) => r.json()).then((res) => {
                return (res.status_code == 200) ? res : new ErrorResponse(res);
            })
        }
    }
    UserStory = {
        /**
         * 
         * @param {string | number} id - Unique identifier for an UserStory.
         * @returns {Promise<UserStoryResponse | ErrorResponse>} 
         */
        GetByID: (id) => {
            const url = `${this.baseURL}/user_story/${id}`
            let options = {
                "headers": {
                    "Accept": "application/json"
                },
                "method": "GET"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((res) => res.json()).then((res) => {
                return (res.status_code == 200) ? new UserStoryResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        },
        /**
         * 
         * @param {UserStoryFilters} filters - Filters you want to apply [At least 1](https://aniapi.com/docs/resources/user_story#parameters-1) for more info  
         * @param {!number} page - Pagination
         * @param {!number} per_page - How many results per page
         * @returns {Promise<UserStoryResponse | ErrorResponse>}
         */
        Get: (filters = {}, page = 1, per_page = 100) => {
            let url = `${this.baseURL}`
            if(Object.keys(filters).length < 1) throw new Error("At least 1 filter must be applied");
            if(filters.anime_id && Object.keys(filters).indexOf("anime_id") > 0) {url += `&anime_id=${filters.anime_id}`} else if(filters.anime_id) {url += `?anime_id=${filters.anime_id}`};
            if(filters.status && Object.keys(filters).indexOf("status") > 0) {url += `&status=${filters.status}`} else if(filters.status) {url += `?status=${filters.status}`};
            if(filters.synced && Object.keys(filters).indexOf("synced") > 0) {url += `&synced=${filters.synced}`} else if(filters.synced) {url += `?synced=${filters.synced}`};
            if(filters.user_id && Object.keys(filters).indexOf("user_id") > 0) {url += `&user_id=${filters.user_id}`} else if(filters.user_id) {url += `?user_id=${filters.user_id}`};
            url += `&page=${page}&per_page=${per_page}`;
            let options = {
                "headers": {
                    "Accept": "application/json"
                },
                "method": "GET"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((res) => res.json()).then((res) => {
                return (res.status_code == 200) ? new UserStoryResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        },
        /**
        * 
        * @param {UserStoryChanges} input 
        * @returns {Promise<UserStoryResponse | ErrorResponse>}
        */
        Create: (input = {}) => {
            const url = `${this.baseURL}/user_story`;
            if(Object.keys(input).length < 1) throw new Error("Provide all fields please.");
            let options = {
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                "method": "PUT",
                "body": JSON.stringify({
                    ...input
                })
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((res) => res.json()).then((res) => {
                return (res.status_code == 200) ? new UserStoryResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        },
        /**
         * @param {string | number} id
         * @param {UserStoryChanges} changes 
         * @returns {Promise<UserStoryResponse | ErrorResponse>}
         */
        Update: (id, changes = {}) => {
            const url = `${this.baseURL}/user_story`;
            if(Object.keys(changes).length < 1) throw new Error("At least 1 change must be provided");
            let options = {
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                "method": "POST",
                "body": JSON.stringify({
                    id,
                    ...changes
                })
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((res) => res.json()).then((res) => {
                return (res.status_code == 200) ? new UserStoryResponse(res) : new ErrorResponse(res)
            }).catch((err) => {throw new Error(err)});
        },
        /**
         * 
         * @param {string} id -The User_Story's id to delete
         * @returns {Promise<{"status_code": number, "message": string, "data": string, "version": string}>}
         */
        Delete: (id) => {
            const url = `${this.baseURL}/user_story/${id}`
            let options = {
                "headers": {
                    "Accept": "application/json"
                },
                "method": "DELETE"
            }
            if(this.jwt) options.headers["Authorization"] = `Bearer ${this.jwt}`
            return fetch(url, options).then((res) => res.json()).then((res) => {
                return (res.status_code == 200) ? res : new ErrorResponse(res);
            }).catch((err) => {throw new Error(err)});
        }
    }
}
module.exports = {
    API: API,
    ENUMS: Enums
}