[@mattplays/aniapi](README.md) / Exports

# @mattplays/aniapi

## Table of contents

### Enumerations

- [AnimeFormat](enums/AnimeFormat.md)
- [AnimeSeasonPeriod](enums/AnimeSeasonPeriod.md)
- [AnimeSongType](enums/AnimeSongType.md)
- [AnimeStatus](enums/AnimeStatus.md)
- [AnimeWeeklyAiringDay](enums/AnimeWeeklyAiringDay.md)
- [UserGender](enums/UserGender.md)
- [UserRole](enums/UserRole.md)
- [UserStoryStatus](enums/UserStoryStatus.md)

### Classes

- [API](classes/API.md)

### Interfaces

- [APIResponse](interfaces/APIResponse.md)
- [Anime](interfaces/Anime.md)
- [Episode](interfaces/Episode.md)
- [Song](interfaces/Song.md)
- [User](interfaces/User.md)
- [UserStory](interfaces/UserStory.md)

### Type aliases

- [APIResponseTypes](modules.md#apiresponsetypes)
- [Page](modules.md#page)
- [Saga](modules.md#saga)

## Type aliases

### APIResponseTypes

Ƭ **APIResponseTypes**: [`Anime`](interfaces/Anime.md) \| [`Anime`](interfaces/Anime.md)[] \| [`Page`](modules.md#page)<[`Anime`](interfaces/Anime.md)\> \| [`Episode`](interfaces/Episode.md) \| [`Episode`](interfaces/Episode.md)[] \| [`Page`](modules.md#page)<[`Episode`](interfaces/Episode.md)\> \| [`Song`](interfaces/Song.md) \| [`Song`](interfaces/Song.md)[] \| [`Page`](modules.md#page)<[`Song`](interfaces/Song.md)\> \| [`User`](interfaces/User.md) \| [`User`](interfaces/User.md)[] \| [`Page`](modules.md#page)<[`User`](interfaces/User.md)\> \| [`UserStory`](interfaces/UserStory.md) \| [`UserStory`](interfaces/UserStory.md)[] \| `Resource` \| ``null`` \| ``""``

#### Defined in

[API/types/index.ts:13](https://github.com/MattPlays/AniAPI.js/blob/e795ab7/src/API/types/index.ts#L13)

___

### Page

Ƭ **Page**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `current_page` | `number` |
| `documents` | `T`[] |
| `last_page?` | `number` |

#### Defined in

[API/types/index.ts:38](https://github.com/MattPlays/AniAPI.js/blob/e795ab7/src/API/types/index.ts#L38)

___

### Saga

Ƭ **Saga**: `Pick`<[`Anime`](interfaces/Anime.md), ``"episode_from"`` \| ``"episode_to"`` \| ``"episodes_count"`` \| ``"titles"`` \| ``"descriptions"``\>

#### Defined in

[API/types/Anime.ts:32](https://github.com/MattPlays/AniAPI.js/blob/e795ab7/src/API/types/Anime.ts#L32)
