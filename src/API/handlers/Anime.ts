import {
    Anime as AnimeType,
    AnimeFormat,
    AnimeStatus,
    AnimeSeasonPeriod,
    AnimeWeeklyAiringDay,
} from '../types';

export type AnimeGenres =
    | 'Action'
    | 'Adventure'
    | 'Comedy'
    | 'Drama'
    | 'Ecchi'
    | 'Fantasy'
    | 'Horror'
    | 'Mahou Shoujo'
    | 'Mecha'
    | 'Music'
    | 'Mystery'
    | 'Psychological'
    | 'Romance'
    | 'Sci-Fi'
    | 'Slice Of Life'
    | 'Sports'
    | 'Supernatural'
    | 'Thriller'
    | 'Anti-Hero'
    | 'Ensemble Cast'
    | 'Female Protagonist'
    | 'Male Protagonist'
    | 'Office Lady'
    | 'Primarily Adult Cast'
    | 'Primarily Child Cast'
    | 'Primarily Female Cast'
    | 'Primarily Male Cast'
    | 'Villainess'
    | 'Age Regression'
    | 'Agender'
    | 'Aliens'
    | 'Amnesia'
    | 'Artificial Intelligence'
    | 'Asexual'
    | 'Butler'
    | 'Centaur'
    | 'Chimera'
    | 'Chuunibyou'
    | 'Cosplay'
    | 'Crossdressing'
    | 'Delinquents'
    | 'Demons'
    | 'Detective'
    | 'Dinosaurs'
    | 'Dissociative Identities'
    | 'Dragons'
    | 'Dullahan'
    | 'Elf'
    | 'Ghost'
    | 'Goblin'
    | 'Gods'
    | 'Gyaru'
    | 'Hikikomori'
    | 'Idol'
    | 'Kemonomimi'
    | 'Kuudere'
    | 'Maids'
    | 'Mermaid'
    | 'Monster Girl'
    | 'Nekomimi'
    | 'Ninja'
    | 'Nudity'
    | 'Nun'
    | 'Oiran'
    | 'Ojou-Sama'
    | 'Pirates'
    | 'Robots'
    | 'Samurai'
    | 'Shrine Maiden'
    | 'Skeleton'
    | 'Succubus'
    | 'Tanned Skin'
    | 'Teacher'
    | 'Tsundere'
    | 'Twins'
    | 'Vampire'
    | 'Vikings'
    | 'Werewolf'
    | 'Witch'
    | 'Yandere'
    | 'Zombie'
    | 'Josei'
    | 'Kids'
    | 'Seinen'
    | 'Shoujo'
    | 'Shounen'
    | 'Bar'
    | 'Circus'
    | 'College'
    | 'Dungeon'
    | 'Foreign'
    | 'Language Barrier'
    | 'Outdoor'
    | 'Rural'
    | 'School'
    | 'School Club'
    | 'Urban'
    | 'Work'
    | 'Achronological Order'
    | 'Anachronism'
    | 'Dystopian'
    | 'Historical'
    | 'Time Skip'
    | 'Afterlife'
    | 'Alternate Universe'
    | 'Augmented Reality'
    | 'Post-Apocalyptic'
    | 'Space'
    | 'Urban Fantasy'
    | 'Virtual World'
    | '4-Koma'
    | 'Achromatic'
    | 'Advertisement'
    | 'Anthology'
    | 'CGI'
    | 'Episodic'
    | 'Flash'
    | 'Full CGI'
    | 'Full Color'
    | 'No Dialogue'
    | 'POV'
    | 'Puppetry'
    | 'Rotoscoping'
    | 'Stop Motion'
    | 'Archery'
    | 'Battle Royale'
    | 'Espionage'
    | 'Fugitive'
    | 'Guns'
    | 'Martial Arts'
    | 'Swordplay'
    | 'Acting'
    | 'Calligraphy'
    | 'Classic Literature'
    | 'Drawing'
    | 'Fashion'
    | 'Food'
    | 'Photography'
    | 'Rakugo'
    | 'Writing'
    | 'Band'
    | 'Dancing'
    | 'Musical'
    | 'Parody'
    | 'Satire'
    | 'Slapstick'
    | 'Surreal Comedy'
    | 'Bullying'
    | 'Coming Of Age'
    | 'Conspiracy'
    | 'Rehabilitation'
    | 'Revenge'
    | 'Tragedy'
    | 'Body Swapping'
    | 'Cultivation'
    | 'Fairy Tale'
    | 'Henshin'
    | 'Isekai'
    | 'Kaiju'
    | 'Magic'
    | 'Mythology'
    | 'Shapeshifting'
    | 'Steampunk'
    | 'Super Power'
    | 'Superhero'
    | 'Wuxia'
    | 'Youkai'
    | 'Video Games'
    | 'Card Battle'
    | 'Go'
    | 'Karuta'
    | 'Mahjong'
    | 'Poker'
    | 'Shogi'
    | 'Airsoft'
    | 'American Football'
    | 'Athletics'
    | 'Badminton'
    | 'Baseball'
    | 'Basketball'
    | 'Boxing'
    | 'Cheerleading'
    | 'Cycling'
    | 'Fishing'
    | 'Fitness'
    | 'Football'
    | 'Golf'
    | 'Ice Skating'
    | 'Lacrosse'
    | 'Rugby'
    | 'Scuba Diving'
    | 'Skateboarding'
    | 'Surfing'
    | 'Swimming'
    | 'Table Tennis'
    | 'Tennis'
    | 'Volleyball'
    | 'Wrestling'
    | 'Animals'
    | 'Astronomy'
    | 'Autobiographical'
    | 'Biographical'
    | 'Body Horror'
    | 'Cannibalism'
    | 'Chibi'
    | 'Cosmic Horror'
    | 'Crime'
    | 'Crossover'
    | 'Death Game'
    | 'Denpa'
    | 'Drugs'
    | 'Economics'
    | 'Educational'
    | 'Environmental'
    | 'Ero Guro'
    | 'Gambling'
    | 'Gender Bending'
    | 'Gore'
    | 'LGBTQ+ Themes'
    | 'Lost Civilization'
    | 'Medicine'
    | 'Memory Manipulation'
    | 'Meta'
    | 'Noir'
    | 'Otaku Culture'
    | 'Pandemic'
    | 'Philosophy'
    | 'Politics'
    | 'Reincarnation'
    | 'Slavery'
    | 'Software Development'
    | 'Survival'
    | 'Terrorism'
    | 'War'
    | 'Assassins'
    | 'Cult'
    | 'Firefighters'
    | 'Gangs'
    | 'Mafia'
    | 'Military'
    | 'Police'
    | 'Triads'
    | 'Yakuza'
    | 'Aviation'
    | 'Cars'
    | 'Mopeds'
    | 'Motorcycles'
    | 'Ships'
    | 'Tanks'
    | 'Trains'
    | 'Age Gap'
    | 'Bisexual'
    | "Boys' Love"
    | 'Harem'
    | 'Love Triangle'
    | 'Reverse Harem'
    | "Teens' Love"
    | 'Yuri'
    | 'Cyberpunk'
    | 'Space Opera'
    | 'Time Manipulation'
    | 'Tokusatsu'
    | 'Real Robot'
    | 'Super Robot'
    | 'Cute Girls Doing Cute Things'
    | 'Family Life'
    | 'Iyashikei';

export class Anime implements AnimeType {
    /**
     * Unique identifier for an Anime.
     */
    id: number;
    /**
     * [AniList](https://anilist.co/) external unique identifier.
     */
    anilist_id: number;
    /**
     * [MyAnimeList](https://myanimelist.net/) external unique identifier.
     */
    mal_id: number;
    /**
     * The show's format destination.
     */
    format: AnimeFormat;
    /**
     * The show's global release status.
     */
    status: AnimeStatus;
    /**
     * A dictionary of the show's titles organized by localization.
     */
    titles: { [key: string]: string };
    /**
     * A dictionary of the show's descriptions organized by localization.
     */
    descriptions: { [key: string]: string };
    /**
     * A ISO timestamp string from the shows release date.
     */
    start_date: string;
    /**
     * A ISO timestamp string from the show's ending.
     */
    end_date: string;
    /**
     * The season on which the show has been released.
     */
    season_period: AnimeSeasonPeriod;
    /**
     * The year on which the show has been released.
     */
    season_year: number;
    /**
     * Number of episodes released for the show.
     */
    episodes_count: number;
    /**
     * The show's episode average duration in minutes.
     */
    episode_duration: number;
    /**
     * External link to the show's trailer video. Possible services: Youtube, Dailymotion
     */
    trailer_url: string;
    /**
     * The show's cover image.
     */
    cover_image: string;
    /**
     * The show's cover main color, in `HEX` format.
     */
    cover_color: string;
    /**
     * The show's banner image.
     */
    banner_image: string;
    /**
     * A collection of the show's associated genres. You can find all possible values [here](https://api.aniapi.com/v1/resources/1.0/0).
     */
    genres: AnimeGenres[];
    /**
     * The show's precedent Anime's unique identifier in story-line.
     */
    sequel: number;
    /**
     * The show's successive Anime's unique identifier in story-line.
     */
    prequel: number;
    /**
     * The show's global appreciation indicator. Minimum value is `0` and maximum is `100`.
     */
    score: number;
    constructor(data: AnimeType) {
        Object.assign(this, {
            ...data,
        });
    }
}
