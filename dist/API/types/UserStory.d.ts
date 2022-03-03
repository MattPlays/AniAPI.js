export declare enum UserStoryStatus {
    'CURRENT' = 0,
    'PLANNING' = 1,
    'COMPLETED' = 2,
    'DROPPED' = 3,
    'PAUSED' = 4,
    'REPEATING' = 5
}
export interface UserStory {
    id: number;
    user_id: number;
    anime_id: number;
    status: UserStoryStatus;
    current_episode: number;
    current_episode_ticks: number;
}
