# AniAPI.js
 A Javascript wrapper for [aniapi](https://aniapi.com)

# Installation
```bash
npm i @mattplays/aniapi
```

# Usage

To get your JWT login to ANIAPI [here](https://aniapi.com/login)

```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT"); 
```

For more info on the provided functions: 

1. [Anime](https://aniapi.com/docs/resources/anime)
    1. [GetByID](#getanimebyid)
    2. [Get](#getanimes)
    3. [Random](#randomanime)
2. [Episode](https://aniapi.com/docs/resources/episode)
    1. [GetByID](#getepisodebyid)
    2. [Get](#getepisodes)
3. [Song](https://aniapi.com/docs/resources/song)
    1. [GetByID](#getsongbyid)
    2. [Get](#getsongs)
    3. [Random](#randomsong)
4. [Resource](https://aniapi.com/docs/resources/resource)
    1. [GetLastAvailableResourceVersion](#lastavailable)
    2. [Get](#getresource)
5. [User](https://aniapi.com/docs/resources/user)
    1. [GetByID](#getuserbyid)
    2. [Get](#getusers)
    3. [Update](#updateuser)
    4. [Delete](#deleteuser)
6. [UserStory](https://aniapi.com/docs/resources/user_story)
    1. [GetByID](#getuser_storybyid)
    2. [Get](#getuser_storys)
    3. [Create](#createuser_story)
    4. [Update](#updateuser_story)
    5. [Delete](#deleteuser_story)
7. [Enums](#enums)
    1. [AnimeFormat](#enums-formats)
    2. [AnimeStatus](#enums-status)
    3. [AnimeSeasonPeriod](#enums-season)
    4. [AnimeSongType](#enums-song)
    5. [AnimeResourceType](#enums-resource)
    6. [UserRole](#enums-userrole)
    7. [UserGender](#enums-usergender)
    8. [UserStoryStatus](#enums-userstorystatus)

All Responses from this Wrapper should be in accordance with the [docs](https://aniapi.com/docs/)

⚠ If not, Please Inform ⚠

# Anime.GetByID <a id="getanimebyid">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | `string` | ID of the Anime you want - [more info](https://aniapi.com/docs/resources/anime#retrieve-a-specific-anime)

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.Anime.GetByID(11).then((data) => {
    // Your Code HERE :D
}).catch((err) => {
    // Handle err here D:
});

```

# Anime.Get <a id="getanimes">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| filters | `AnimeFilters` | Filters you want to apply [At least 1] - [more info](https://aniapi.com/docs/resources/anime#parameters-1)
| page | `number` | The page number of the paginated results |
| per_page | `number` | Number of results you want per page |

### Currently the following filters and their types are:
| Filter | Type | Description |
| ----- | ---- | ------------ |
| title | `string` | A case-insensitive pattern filter on the list based on the `titles` field values. |
| anilist_id | `number` | A filter on the list based on the `anilist_id` field value. | 
| mal_id | `number` | A filter on the list based on the `mal_id` field value. | 
| [formats](#enums-formats) | `AnimeFormat[]` | A filter on the list based on the `format` field value. | 
| [status](#enums-status) | `AnimeStatus[]` | A filter on the list based on the `status` field value. | 
| year | `number` | A filter on the list based on the `season_year` field value. |
| season | `number` | A filter on the list based on the `season_period` field value. |
| genres | `string[]` | A case-sensitive pattern filter on the list based on the `genres` field values. |
| nsfw | `boolean` | A filter on the list which excludes Anime **classified as Not Safe For Work**. |

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.Anime.Get({
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

# Anime.Random <a id="randomanime">
## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| count | `number` | N/A |

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.Anime.Random(10).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```

# Episode.GetByID <a id="getepisodebyid">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | `string` | ID of the Episode you want - [more info](https://aniapi.com/docs/resources/episode#retrieve-a-specific-episode)

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.Episode.GetByID(485).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
})
```

# Episode.Get <a id="getepisodes">

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
const API = new ANIAPI.API("DUMMY_JWT");

API.Episode.Get({
    anime_id: 11,
    source: "dreamsub",
    locale: "it",
}, 1, 100).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```

# Song.GetByID <a id="getsongbyid">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | `string` | ID of the Song you want - [more info](https://aniapi.com/docs/resources/song#retrieve-a-specific-song)

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.Song.GetByID(11).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```

# Song.Get <a id="getsongs">

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
const API = new ANIAPI.API("DUMMY_JWT");

API.Song.Get({
    anime_id: 4,
    season: [ANIAPI.ENUMS.AnimeSeasonPeriod.WINTER, ANIAPI.ENUMS.AnimeSeasonPeriod.SPRING], // 0 Is for Winter, 1 is for Spring
    type: [ANIAPI.ENUMS.AnimeSongType.OPENING, ANIAPI.ENUMS.AnimeSongType.ENDING] // 0 is for Opening, 1 is for Ending
}).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
# Song.Random <a id="randomsong">
## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| count | `number` | N/A |

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.Song.Random(10).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```
# Resource.GetLastAvailableResourceVersion <a id="lastavailable">

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.Resource.GetLastAvailableResourceVersion().then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```

# Resource.Get <a id="getresource">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| version | `string` | a `string` which identifies the latest available Resources' version. |
| [type](#enums-resource) | `AnimeResourceType` | N/A |

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.Resource.Get("1.0", ANIAPI.ENUMS.AnimeResourceType.GENRES).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
});
```

# User.GetByID <a id="getuserbyid">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | `string` | ID of the User you want - [more info](https://aniapi.com/docs/resources/user#retrieve-a-specific-user)

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.User.GetByID(134).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
})
```

# User.Get <a id="getusers">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| filters | `UserFilters` | Filters you want to apply [At least 1] - [more info](https://aniapi.com/docs/resources/user#parameters-1)
| page | `number` | The page number of the paginated results |
| per_page | `number` | Number of results you want per page |

### Currently the following filters and their types are:
| Filter | Type | Description |
| ------ | ---- | ----------- |
| username | `number` | A case-insensitive pattern filter on the list based on the `username` field value. |
| email | `string` | A case-sensitive filter on the list based on the `email` field value. |

## Usage 
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.User.Get({
    username: "SomebodyRandom",
    email: "real@email.com"
}, 1, 100).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
})
```

# User.Update <a id="updateuser">
## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | `string` | The User's id to update |
| changes | `UserChanges` | The changes you want to apply. [More Info](https://aniapi.com/docs/resources/user#parameters-2) |

### Currently the following changes and their types are:
| Change | Type | Description |
| ------ | ---- | ----------- |
| password | `string` | The User's new password value. |
| gender | `UserGender` | The User's gender value. |
| localization | `string` | The User's new localization value. |
| anilist_id | `number` | The User's [AniList](https://anilist.co/) account external id.
| anilist_token| `string` | The User's [AniList](https://anilist.co/) account external token. This value becomes `required` when you provide the `anilist_id` field.

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.User.Update(134, {
    gender: aniapi.ENUMS.UserGender.MALE
}).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
})
```

# User.Delete <a id="deleteuser">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | `string` | The User's id to delete |

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.User.Delete(134).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
})
```

# UserStory.GetByID <a id="getuser_storybyid">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | `string` | The User_Story's id to fetch |

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.UserStory.GetByID(1).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
})
```

# UserStory.Get <a id="getuser_storys">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| filters | `UserStoryFilters` | Filters you want to apply [At least 1] - [more info](https://aniapi.com/docs/resources/user_story#parameters-1)
| page | `number` | The page number of the paginated results |
| per_page | `number` | Number of results you want per page |

### Currently the following filters and their types are: 
| Filter | Type | Description |
| ------ | ---- | ----------- |
| anime_id | `number` | A filter on the list based on the `anime_id` field value. |
| user_id | `number` | A filter on the list based on the `user_id` field value. | 
| status | `UserStoryStatus` | A filter on the list based on the `status` field value.
| synced | `boolean` | A filter on the list based on the `synced` field value. `synced` field indicates if an UserStory has been synchronized with User's linked trackers. |

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.UserStory.Get({
    status: aniapi.ENUMS.UserStoryStatus.COMPLETED,
    synced: true
}).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
})
```

# UserStory.Create <a id="createuser_story">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| input | `UserStoryChanges` | The User_Story's object to create |

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.UserStory.Create({
    user_id: 134,
    anime_id: 11,
    status: aniapi.ENUMS.UserStoryStatus.COMPLETED,
    current_episode: 24,
}).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
})
```
# UserStory.Update <a id="updateuser_story">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| changes | `UserStoryChanges` | The User_Story's object to update |

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.UserStory.Update({
    id: 1,
    anime_id: 11,
    status: aniapi.ENUMS.UserStoryStatus.COMPLETED,
    current_episode: 24,
}).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
})
```

# UserStory.Delete <a id="deleteuser_story">

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | `string` | The User_Story's id to delete |

## Usage
```javascript
const ANIAPI = require("@mattplays/aniapi");
const API = new ANIAPI.API("DUMMY_JWT");

API.UserStory.Delete(1).then((data) => {
    // Your Code Here :D
}).catch((err) => {
    // Handle error Here D:
})
```
# Enums <a id="enums">

## AnimeFormat <a id="enums-formats">

Possible enum values
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

Possible enum values
```javascript
"FINISHED": 0,
"RELEASING": 1,
"NOT_YET_RELEASED": 2,
"CANCELLED": 3
```

## AnimeSeasonPeriod <a id="enums-season">

Possible enum values
```javascript
"WINTER": 0,
"SPRING": 1,
"SUMMER": 2,
"FALL": 3,
"UNKNOWN": 4
```

## AnimeSongType <a id="enums-song">

Possible enum values
```javascript
"OPENING": 0,
"ENDING": 1,
"NONE": 2
```

## AnimeResourceType <a id="enums-resource">

Possible enum values
```javascript
"GENRES": 0,
"LOCALIZATIONS": 1
```

## UserRole <a id="enums-userrole">

Possible enum values
```javascript
"BASIC": 0,
"MODERATOR": 1,
"ADMINISTRATOR": 2,
```

## UserGender <a id="enums-usergender">
Possible enum values
```javascript
"UNKNOWN": 0,
"MALE": 1,
"FEMALE": 2,
```

## UserStoryStatus <a id="enums-userstorystatus">
```javascript
"CURRENT": 0,
"PLANNING": 1,
"COMPLETED": 2,
"DROPPED": 3,
"PAUSED": 4,
"REPEATING": 5
```

# License
MIT License - Copyright (c) 2021 MattPlays [License](https://github.com/MattPlays/AniAPI-Wrapper/blob/main/LICENSE)
