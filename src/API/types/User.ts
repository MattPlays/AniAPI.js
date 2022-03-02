export interface User {
    id: number;
    username: string;
    email?: string;
    email_verified?: boolean;
    role: UserRole;
    avatar?: string;
    gender: UserGender;
    localization?: string;
    has_anilist?: boolean;
    has_mal?: boolean;
}

export enum UserRole {
    'BASIC' = 0,
    'MODERATOR' = 1,
    'ADMINISTRATOR' = 2,
}
export enum UserGender {
    'UNKNOWN' = 0,
    'MALE' = 1,
    'FEMALE' = 2,
}
