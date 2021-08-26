const {UserStoryStatus} = require("./Enums");
class UserStory {
    /**
     * 
     * @param {number} id - Unique identifier for an UserStory.
     * @param {number} user_id - [User](https://aniapi.com/docs/resources/user) external unique identifier.
     * @param {number} anime_id - [Anime](https://aniapi.com/docs/resources/anime) external unique identifier.
     * @param {UserStoryStatus} status - The UserStory's watching status.
     * @param {number} current_episode - The UserStory's watching progress.
     * @param {number} current_episode_ticks - The UserStory's `current_episode` watching time in milliseconds.
     * @see https://aniapi.com/docs/resources/user_story
     */
    constructor(id, user_id, anime_id, status, current_episode, current_episode_ticks) {
        this.id = id;
        this.user_id = user_id;
        this.anime_id = anime_id;
        this.status = Object.keys(UserStoryStatus)[Object.values(UserStoryStatus).indexOf(status)];
        this.current_episode = current_episode;
        this.current_episode_ticks = current_episode_ticks;
    }
}
module.exports = UserStory;