import {ComicsInfo} from "./comicsInfo";
import {EventInfo} from "./eventsInfo";
import {SeriesInfo} from "./seriesInfo";
import {StoriesInfo} from "./storiesInfo";

export interface MarvelCharacter {
    id:number;
    name: string;
    description: string;
    avatarSrc: string;
    imgSrc?: string;

    comics?: ComicsInfo ;
    series?: SeriesInfo;
    stories?:StoriesInfo;
    events?: EventInfo;
}
