[@mattplays/aniapi](../README.md) / [Exports](../modules.md) / API

# Class: API

## Table of contents

### Constructors

- [constructor](API.md#constructor)

### Properties

- [Anime](API.md#anime)
- [Episode](API.md#episode)
- [Resource](API.md#resource)
- [Song](API.md#song)
- [User](API.md#user)
- [UserStory](API.md#userstory)
- [validateToken](API.md#validatetoken)

## Constructors

### constructor

• **new API**(`jwt`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwt` | `string` |

#### Defined in

[API/handlers/index.ts:23](https://github.com/MattPlays/AniAPI.js/blob/e795ab7/src/API/handlers/index.ts#L23)

## Properties

### Anime

• **Anime**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Get` | (`filters`: `AnimeFilters`, `page`: `number`, `per_page`: `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<[`Page`](../modules.md#page)<`Anime`\>\>\> |
| `GetByID` | (`id`: `string` \| `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`Anime`\>\> |
| `Random` | (`count`: `number`, `nsfw`: `boolean`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`Anime`[]\>\> |

#### Defined in

[API/handlers/index.ts:26](https://github.com/MattPlays/AniAPI.js/blob/e795ab7/src/API/handlers/index.ts#L26)

___

### Episode

• **Episode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Get` | (`filters`: `EpisodeFilters`, `page`: `number`, `per_page`: `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<[`Page`](../modules.md#page)<`Episode`\>\>\> |
| `GetByID` | (`id`: `string` \| `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`Episode`\>\> |

#### Defined in

[API/handlers/index.ts:63](https://github.com/MattPlays/AniAPI.js/blob/e795ab7/src/API/handlers/index.ts#L63)

___

### Resource

• **Resource**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `GetGenres` | (`version`: `string`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`Resource`\>\> |
| `GetLocalizations` | (`version`: `string`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`Resource`\>\> |

#### Defined in

[API/handlers/index.ts:236](https://github.com/MattPlays/AniAPI.js/blob/e795ab7/src/API/handlers/index.ts#L236)

___

### Song

• **Song**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Get` | (`filters`: `SongFilters`, `page`: `number`, `per_page`: `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<[`Page`](../modules.md#page)<`Song`\>\>\> |
| `GetByID` | (`id`: `string` \| `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`Song`\>\> |
| `Random` | (`count`: `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`Song`[]\>\> |

#### Defined in

[API/handlers/index.ts:91](https://github.com/MattPlays/AniAPI.js/blob/e795ab7/src/API/handlers/index.ts#L91)

___

### User

• **User**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Delete` | (`id`: `string` \| `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<``""``\>\> |
| `Get` | (`filters`: `UserFilters`, `page`: `number`, `per_page`: `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<[`Page`](../modules.md#page)<`User`\>\>\> |
| `GetByID` | (`id`: `string` \| `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`User`\>\> |
| `Update` | (`changes`: { `id`: `string` \| `number`  } & `UserChanges`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`User`\>\> |

#### Defined in

[API/handlers/index.ts:128](https://github.com/MattPlays/AniAPI.js/blob/e795ab7/src/API/handlers/index.ts#L128)

___

### UserStory

• **UserStory**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Create` | (`changes`: `UserStoryChanges`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`UserStory`\>\> |
| `Delete` | (`id`: `string` \| `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<``""``\>\> |
| `Get` | (`filters`: `UserStoryFilters`, `page`: `number`, `per_page`: `number`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`UserStory`[]\>\> |
| `Update` | (`changes`: { `id`: `string` \| `number`  } & `UserChanges`) => `Promise`<[`APIResponse`](../interfaces/APIResponse.md)<`UserStory`\>\> |

#### Defined in

[API/handlers/index.ts:181](https://github.com/MattPlays/AniAPI.js/blob/e795ab7/src/API/handlers/index.ts#L181)

___

### validateToken

• **validateToken**: (`jwt`: `string`) => `Promise`<`boolean`\> = `validateToken`

#### Type declaration

▸ (`jwt`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `jwt` | `string` |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[API/handlers/index.ts:25](https://github.com/MattPlays/AniAPI.js/blob/e795ab7/src/API/handlers/index.ts#L25)
