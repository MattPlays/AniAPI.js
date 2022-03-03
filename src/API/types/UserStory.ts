export enum UserStoryStatus {
    'CURRENT',
    'PLANNING',
    'COMPLETED',
    'DROPPED',
    'PAUSED',
    'REPEATING',
}

export interface UserStory {
    id: number;
    user_id: number;
    anime_id: number;
    status: UserStoryStatus;
    current_episode: number;
    current_episode_ticks: number;
}
