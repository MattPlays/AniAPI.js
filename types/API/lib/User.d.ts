import { UserRole, UserGender } from "./Enums";
export interface User {
    id: number, 
    username: string, 
    email?: string, 
    email_verified?: boolean, 
    role: UserRole, 
    avatar?: string, 
    gender: UserGender, 
    localization?: string, 
    has_anilist?: boolean, 
    has_mal?: boolean
}