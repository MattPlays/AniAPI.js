import { UserStoryStatus, UserStory as UserStoryType } from '../types';

/**
 * @see https://aniapi.com/docs/resources/user_story
 */
export class UserStory implements UserStoryType {
    /**
     * Unique identifier for an UserStory.
     */
    id: number;
    /**
     * [User](https://aniapi.com/docs/resources/user) external unique identifier.
     */
    user_id: number;
    /**
     * [Anime](https://aniapi.com/docs/resources/anime) external unique identifier.
     */
    anime_id: number;
    /**
     * The UserStory's watching status.
     */
    status: UserStoryStatus;
    /**
     * The UserStory's watching progress.
     */
    current_episode: number;
    /**
     * The UserStory's `current_episode` watching time in milliseconds.
     */
    current_episode_ticks: number;
    constructor(data: UserStoryType) {
        Object.assign(this, data);
    }
}
