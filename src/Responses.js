const Anime = require("./Anime");
const Episode = require("./Episode");
const Resource = require("./Resource");
const Song = require("./Song");
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
module.exports = {
    ErrorResponse: ErrorResponse,
    AnimeResponse: AnimeResponse,
    EpisodeResponse: EpisodeResponse,
    SongResponse: SongResponse,
    ResourceResponse: ResourceResponse,
}