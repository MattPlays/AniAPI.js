# AniAPI.js
 A Javascript wrapper for [aniapi](https://aniapi.com)

# Installation
```bash
npm i @mattplays/aniapi
```

# Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API();
```

For more info on the provided functions with the exception of [User](https://aniapi.com/docs/resources/user) and [UserStory](https://aniapi.com/docs/resources/user_story): 

1. [Anime](https://aniapi.com/docs/resources/anime)
    1. [GetAnimeByID](#getanimebyid)
    2. [GetAnimes](#getanimes)
2. [Episode](https://aniapi.com/docs/resources/episode)
    1. [GetEpisodeByID](#getepisodebyid)
    2. [GetEpisodes](#getepisodes)
3. [Song](https://aniapi.com/docs/resources/song)
    1. [GetSongByID](#getsongbyid)
    2. [GetSongs](#getsongs)
4. [Resource](https://aniapi.com/docs/resources/resource)
    1. [GetLastAvailableResourceVersion](#lastavailable)
    2. [GetResource](#getresource)
5. [Enums](#enums)
    1. [AnimeFormat](#enums-formats)
    2. [AnimeStatus](#enums-status)
    3. [AnimeSeasonPeriod](#enums-season)
    4. [AnimeSongType](#enums-song)
    5. [AnimeResourceType](#enums-resource)

All Responses from this Wrapper should be in accordance with the [docs](https://aniapi.com/docs/)

⚠ If not, Please Inform ⚠

# GetAnimeByID <a id="getanimebyid">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | `string` | ID of the Anime you want - [more info](https://aniapi.com/docs/resources/anime#retrieve-a-specific-anime)

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API();

API.GetAnimeByID(11).then((data) => {
    // Your Code HERE :D
}).catch((err) => {
    // Handle err here D:
});

```

# GetAnimes <a id="getanimes">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| filters | `AnimeFilters` | Filters you want to apply [At least 1] - [more info](https://aniapi.com/docs/resources/anime#parameters-1)
| page | `number` | The page number of the paginated results |
| per_page | `number` | Number of results you want per page |

### Currently the following filters and their types are:
| Filter | Type | Description |
| ----- | ---- | ------------ |
| title | `string` | A case-insensitive pattern filter on the list based on the `titles` field values.
| anilist_id | `number` | A filter on the list based on the `anilist_id` field value.
| mal_id | `number` | A filter on the list based on the `mal_id` field value.
| [formats](#enums-formats) | `AnimeFormat[]` | A filter on the list based on the `format` field value.
| [status](#enums-status) | `AnimeStatus[]` | A filter on the list based on the `status` field value.
| year | `number` | A filter on the list based on the `season_year` field value.
| season | `number` | A filter on the list based on the `season_period` field value.
| genres | `string[]` | A case-sensitive pattern filter on the list based on the `genres` field values.

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API();

API.GetAnimes({
    genres: [
      "Action",
      "Adventure",
      "Comedy"
    ],
    formats: [ANIAPI.ENUMS.AnimeFormat.TV, ANIAPI.ENUMS.AnimeFormat.MOVIE], // 0 is for TV, 2 is for Movie,
    status: [ANIAPI.ENUMS.AnimeStatus.FINISHED, ANIAPI.ENUMS.AnimeStatus.RELEASING] // 0 is for Finished, 1 is for Releasing
}, 1, 100).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```

# GetEpisodeByID <a id="getepisodebyid">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | `string` | ID of the Episode you want - [more info](https://aniapi.com/docs/resources/episode#retrieve-a-specific-episode)

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API();

API.GetEpisodeByID(485).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
})
```

# GetEpisodes <a id="getepisodes">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| filters | `EpisodeFilters` | Filters you want to apply [At least 1] - [more info](https://aniapi.com/docs/resources/episode#parameters-1)
| page | `number` | The page number of the paginated results |
| per_page | `number` | Number of results you want per page |

### Currently the following filters and their types are:
| Filter | Type | Description |
| ----- | ---- | --------- |
| anime_id | `number` | A filter on the list based on the `anime_id` field value.
| number | `number` | a filter on the list based on the episode number
| source | `string` | a filter on the list based on the publisher of the anime episode
| locale | `string` | a filter on the list based on the language of the episode

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API();

API.GetEpisodes({
    anime_id: 11,
    source: "dreamsub",
    locale: "it",
}, 1, 100).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```

# GetSongByID <a id="getsongbyid">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | `string` | ID of the Song you want - [more info](https://aniapi.com/docs/resources/song#retrieve-a-specific-song)

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API();

API.GetSongByID(11).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```

# GetSongs <a id="getsongs">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| filters | `SongFilters` | Filters you want to apply [At least 1] - [more info](https://aniapi.com/docs/resources/song#parameters-1)
| page | `number` | The page number of the paginated results |
| per_page | `number` | Number of results you want per page |

### Currently the following filters and their types are:
| Filter | Type | Description |
| ------ | ---- | ----------- |
| anime_id | `number` | A filter on the list based on the `anime_id` field value. |
| title | `string` | A case-insensitive pattern filter on the list based on the `title` field value. |
| artist | `string` | A case-insensitive pattern filter on the list based on the `artist` field value. |
| year | `number` | A filter on the list based on the `year` field value. |
| [season](#enums-season) | `AnimeSeasonPeriod[]` |  A filter on the list based on the `season` field value. |
| [type](#enums-song) | `AnimeSongType[]` | A filter on the list based on the `type` field value.

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API();

API.GetSongs({
    anime_id: 4,
    season: [ANIAPI.ENUMS.AnimeSeasonPeriod.WINTER, ANIAPI.ENUMS.AnimeSeasonPeriod.SPRING], // 0 Is for Winter, 1 is for Spring
    type: [ANIAPI.ENUMS.AnimeSongType.OPENING, ANIAPI.ENUMS.AnimeSongType.ENDING] // 0 is for Opening, 1 is for Ending
}).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```

# GetLastAvailableResourceVersion <a id="lastavailable">

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API();

API.GetLastAvailableResourceVersion().then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```

# GetResource <a id="getresource">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| version | `string` | a `string` which identifies the latest available Resources' version. |
| [type](#enums-resource) | `AnimeResourceType` | N/A |

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API();

API.GetResource("1.0", ANIAPI.ENUMS.AnimeResourceType.GENRES).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```

# Enums <a id="enums">

## AnimeFormat <a id="enums-formats">

Possible format enum values
```javascript
"TV": 0,
"TV_SHORT": 1,
"MOVIE": 2,
"SPECIAL": 3,
"OVA": 4,
"ONA": 5,
"MUSIC": 6
```

## AnimeStatus <a id="enums-status">

Possible status enum values
```javascript
"FINISHED": 0,
"RELEASING": 1,
"NOT_YET_RELEASED": 2,
"CANCELLED": 3
```

## AnimeSeasonPeriod <a id="enums-season">

Possible season enum values
```javascript
"WINTER": 0,
"SPRING": 1,
"SUMMER": 2,
"FALL": 3,
"UNKNOWN": 4
```

## AnimeSongType <a id="enums-song">

Possible type enum values
```javascript
"OPENING": 0,
"ENDING": 1,
"NONE": 2
```

## AnimeResourceType <a id="enums-resource">

Possible type enum values
```javascript
"GENRES": 0,
"LOCALIZATIONS": 1
```

# License
MIT License - Copyright (c) 2021 MattPlays [License](https://github.com/MattPlays/AniAPI-Wrapper/blob/main/LICENSE)
