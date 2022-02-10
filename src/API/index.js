const {create} = require('axios').default;
const pe = require("../../config");
const {AnimeResponse, EpisodeResponse, UserResponse, SongResponse, ResourceResponse, ErrorResponse, UserChangedResponse, UserStoryResponse} = require("./Responses/index");
const {AnimeFilters, EpisodeFilters, SongFilters, UserFilters, UserChanges, UserStoryFilters, UserStoryChanges} = require("./lib/Filters");
const Enums = require("./lib/Enums");
class API {
    /**
     * @param {string} jwt - To get your JWT login to ANIAPI [here](https://aniapi.com/login)
     */
    constructor(jwt) {
        this.api = create({
            baseURL: "https://api.aniapi.com/v1",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${jwt}`
            }
        })
    }
    Anime = {
        /**
         * 
         * @param {string | number} id - ID of the Anime you want (https://aniapi.com/docs/resources/anime#retrieve-a-specific-anime) for more info
         * @returns {Promise<AnimeResponse | ErrorResponse>}
         */
        GetByID: async(id) => {
            return this.api({
                method: "GET",
                url: `/anime/${id}`
            }).then(({data}) => {
                return (data.status_code == 200) ? new AnimeResponse(data) : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        },
        /**
         * 
         * @param {AnimeFilters} filters - Filters you want to apply [At least 1] (https://aniapi.com/docs/resources/anime#parameters-1) for more info
         * @param {number} [page] - The page number of the paginated results 
         * @param {number} [per_page]- Number of results you want per page  
         * @returns {Promise<AnimeResponse | ErrorResponse>}
         */
        Get: async(filters = {}, page = 1, per_page = 100) => {
            if(Object.keys(filters).length < 1) return pe.render(new Error("At least 1 filter must be provided"));
            return this.api({
               method: "GET",
               url: `/anime${Object.keys(filters).map((d) => {
                if(Object.keys(filters).indexOf(d) == 0) return `?${d}=${filters[d]}`
                return `&${d}=${filters[d]}`
            }).join()}&page=${page}&per_page=${per_page}`
           }).then(({data}) => {
               return (data.status_code == 200) ? new AnimeResponse(data) : new ErrorResponse(data);
           }).catch((err) => {throw pe.render(err)});
        },
        /**
         * Retrieves a random Anime show list.
         * @param {number} [count]
         * @param {boolean} [nsfw]
         * @returns {Promise<{status_code: number, message: string, data: Anime[], version: string} | ErrorResponse>}
         */
        Random: async(count, nsfw) => {
            if(!count) count = 1;
            return this.api({
                method: "GET",
                url: `/random/anime/${count}/${nsfw}`
            }).then(({data}) => {
                return (data.status_code == 200) ? data : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        }
    }
    Episode = {
        /**
         * 
         * @param {string | number} id - ID Of the Episode you want (https://aniapi.com/docs/resources/episode#retrieve-a-specific-episode) for more info 
         * @returns {Promise<EpisodeResponse | ErrorResponse>}
         */
        GetByID: async(id) => {
            return this.api({
                method: "GET",
                url: `/episode/${id}`
            }).then(({data}) => {
                return (data.status_code == 200) ? new EpisodeResponse(data) : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        },
        /**
         * 
         * @param {EpisodeFilters} filters - Filters you want to apply [At least 1] (https://aniapi.com/docs/resources/episode#parameters-1) for more info  
         * @param {number} [page] - The page number of the paginated results 
         * @param {number} [per_page] - Number of results you want per page 
         * @returns {Promise<EpisodeResponse | ErrorResponse>}
         */
        Get: async(filters = {}, page = 1, per_page = 100) => {
            return this.api({
                method: "GET",
                url: `/episode${Object.keys(filters).map((d) => {
                    if(Object.keys(filters).indexOf(d) == 0) return `?${d}=${filters[d]}`
                    return `&${d}=${filters[d]}`
                }).join()}&page=${page}&per_page=${per_page}`
            }).then(({data}) => {
                return (data.status_code == 200) ? new EpisodeResponse(data) : new ErrorResponse(data); 
            }).catch((err) => {throw pe.render(err)});
        }
    }
    Song = {
        /**
         * 
         * @param {string} id - ID of the song you want https://aniapi.com/docs/resources/song#retrieve-a-specific-song for more details
         * @returns {Promise<SongResponse | ErrorResponse>}
         */
        GetByID: async(id) => {
            return this.api({
                method: "GET",
                url: `/song/${id}`
            }).then(({data}) => {
                return (data.status_code == 200) ? new SongResponse(data) : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        },
        /**
         * 
         * @param {!SongFilters} filters - Check https://aniapi.com/docs/resources/song#try-it-1 for help
         * @param {number} [page] - Pagination
         * @param {number} [per_page] - How many results per page
         * @returns {Promise<SongResponse | ErrorResponse>}
         */
        Get: async(filters = {}, page = 1, per_page = 100) => {
            return this.api({
                method: "GET",
                url: `/song${Object.keys(filters).map((d) => {
                    if(Object.keys(filters).indexOf(d) == 0) return `?${d}=${filters[d]}`
                    return `&${d}=${filters[d]}`
                }).join()}&page=${page}&per_page=${per_page}`
            }).then(({data}) => {
                return (data.status_code == 200) ? new SongResponse(data) : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        },
        /**
         * Returns a random Song list.
         * @param {number} [count] 
         * @returns {Promise<{status_code: number, message: string, data: Anime[], version: string} | ErrorResponse>}
         */
        Random: async(count) => {
            if(!count) count = 1;
            return this.api({
                method: "GET",
                url: `/random/song/${count}`
            }).then(({data}) => {
                return (data.status_code == 200) ? data : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)})
        }
    }
    Resource = {
        /**
         * 
         * @returns {Promise<ResourceResponse | ErrorResponse>}
         */
        GetLastAvailableResourceVersion: async() => {
            return this.api({
                method: "GET",
                url: "/resources"
            }).then(({data}) => {
                return (data.status_code == 200) ? new ResourceResponse(data) : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        },
        /**
         * 
         * @param {string} version - Use GetLastAvailableResourceVersion for most up to date resource version
         * @param {Enumerator<AnimeResourceType>} type - (https://aniapi.com/docs/resources/song#type)
         * @returns {Promise<ResourceResponse | ErrorResponse>}
         */
        Get: async(version = "1.0", type) => {
            if(!Objects.values(Enums.AnimeResourceType).includes(type)) return pe.render(new Error("You must provide a valid type"));
            return this.api({
                method: "GET",
                url: `/resources/${version}/${type}`
            }).then(({data}) => {
                return (data.status_code == 200) ? new ResourceResponse(data) : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        }
    }
    User = {
        /**
         * 
         * @param {string | number} id - Unique identifier for an User.
         * @returns {Promise<UserResponse | ErrorResponse>}
         */
        GetByID: async(id) => {
            return this.api({
                method: "GET",
                url: `/user/${id}`
            }).then(({data}) => {
                return (data.status_code == 200) ? new UserResponse(data) : ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        },
        /**
         * 
         * @param {UserFilters} filters - Filters you want to apply [At least 1](https://aniapi.com/docs/resources/user#parameters-1) for more info  
         * @param {!number} [page] - Pagination
         * @param {!number} [per_page ]- How many results per page
         * @returns {Promise<UserResponse | ErrorResponse>}
         */
        Get: async(filters = {}, page = 1, per_page = 100) => {
            return this.api({
                method: "GET",
                url: `/user${Object.keys(filters).map((d) => {
                    if(Object.keys(filters).indexOf(d) == 0) return `?${d}=${filters[d]}`
                    return `&${d}=${filters[d]}`
                }).join()}&page=${page}&per_page=${per_page}`
            }).then(({data}) => {
                return (data.status_code == 200) ? new UserResponse(data) : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        },
        /**
         * 
         * @param {string | number} id - The User's id to update
         * @param {UserChanges} changes - The changes you want to apply. [More Info](https://aniapi.com/docs/resources/user#parameters-2)
         * @returns {Promise<UserChangedResponse | ErrorResponse>}
         */
        Update: async(id, changes = {}) => {
            if(!id) return pe.render(new Error("You must provide a UserID"));
            if(Object.keys(changes) < 1) return pe.render(new Error("You must change at least 1 field"));
            if(changes.anilist_id && !changes.anilist_token) return pe.render(new Error("The anilist_token value becomes required when you provide the anilist_id field."));
            return this.api({
                method: "POST",
                url: "/user",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    id,
                    ...changes
                })
            }).then(({data}) => {
                return (data.status_code == 200) ? new UserChangedResponse(data) : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        },
        /**
         * 
         * @param {string} id -The User's id to delete
         * @returns {Promise<{"status_code": number, "message": string, "data": string, "version": string}>}
         */
        Delete: async(id) => {
            if(!id) return pe.render(new Error("You must provide a UserID"));
            return this.api({
                method: "DELETE",
                url: `/user/${id}`
            }).then(({data}) => {
                return (data.status_code == 200) ? data: new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        }
    }
    UserStory = {
        /**
         * 
         * @param {string | number} id - Unique identifier for an UserStory.
         * @returns {Promise<UserStoryResponse | ErrorResponse>} 
         */
        GetByID: async(id) => {
            return this.api({
                method: "GET",
                url: `/user_story/${id}`
            }).then(({data}) => {
                return (data.status_code == 200) ? new UserStoryResponse(data) : new ErrorResponse(data); 
            }).catch((err) => {throw pe.render(err)});
        },
        /**
         * 
         * @param {UserStoryFilters} filters - Filters you want to apply [At least 1](https://aniapi.com/docs/resources/user_story#parameters-1) for more info  
         * @param {!number} [page] - Pagination
         * @param {!number} [per_page] - How many results per page
         * @returns {Promise<UserStoryResponse | ErrorResponse>}
         */
        Get: async(filters = {}, page = 1, per_page = 100) => {
            return this.api({
                method: "GET",
                url: `/user_story${Object.keys(filters).map((d) => {
                    if(Object.keys(filters).indexOf(d) == 0) return `?${d}=${filters[d]}`
                    return `&${d}=${filters[d]}`
                }).join()}&page=${page}&per_page=${per_page}`
            }).then(({data}) => {
                return (data.status_code == 200) ? new UserStoryResponse(data) : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        },
        /**
        * 
        * @param {UserStoryChanges} input 
        * @returns {Promise<UserStoryResponse | ErrorResponse>}
        */
        Create: async(input = {}) => {
            return this.api({
                method: "PUT",
                url: "/user_story",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    ...input
                })
            }).then(({data}) => {
                return (data.status_code == 200) ? new UserStoryResponse(data) : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        },
        /**
         * @param {string | number} id
         * @param {UserStoryChanges} changes 
         * @returns {Promise<UserStoryResponse | ErrorResponse>}
         */
        Update: async(id, changes = {}) => {
            return this.api({
                method: "POST",
                url: "/user_story",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    id,
                    ...changes
                })
            }).then(({data}) => {
                return (data.status_code == 200) ? new UserStoryResponse(data) : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        },
        /**
         * 
         * @param {string} id -The User_Story's id to delete
         * @returns {Promise<{"status_code": number, "message": string, "data": string, "version": string}>}
         */
        Delete: async(id) => {
            return this.api({
                method: "DELETE",
                url: `/user_story/${id}`
            }).then(({data}) => {
                return (data.status_code == 200) ? data : new ErrorResponse(data);
            }).catch((err) => {throw pe.render(err)});
        }
    }
}
module.exports = {
    API,
    ENUMS: Enums
}