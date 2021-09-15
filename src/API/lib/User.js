const {UserRole, UserGender} = require("./Enums");
class User {
    /**
     * 
     * @param {number} id - Unique identifier for an User.
     * @param {string} username - The User's username.
     * @param {?string} email - The User's email.
     * @param {?boolean} email_verified - Indicates if the User has already confirmed his email.
     * @param {UserRole} role - The User's role inside AniAPI.
     * @param {?string} avatar - The User's avatar. This value is imported from external User's trackers.
     * @param {UserGender} gender - The User's gender.
     * @param {?string} localization - The User's preferred locale reference.
     * @param {?boolean} has_anilist Indicates if the User has linked his [AniList](https://anilist.co/) account with AniAPI.
     * @param {?boolean} has_mal - Indicates if the User has linked his [MyAnimeList](https://myanimelist.net/) account with AniAPI.
     * @see https://aniapi.com/docs/resources/user
     */
    constructor(id, username, email, email_verified, role, avatar, gender, localization, has_anilist, has_mal) {
        this.id = id;
        this.username = username;
        this.email = email ?? null;
        this.email_verified = email_verified ?? null;
        this.role = Object.keys(UserRole)[Object.values(UserRole).indexOf(role)];
        this.avatar = avatar ?? null;
        this.gender = Object.keys(UserGender)[Object.values(UserGender).indexOf(gender)];
        this.localization = localization ?? null;
        this.has_anilist = has_anilist ?? null;
        this.has_mal = has_mal ?? null;
    }
}
module.exports = User;