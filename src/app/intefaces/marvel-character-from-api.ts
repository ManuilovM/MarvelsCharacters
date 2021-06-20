import {ComicsInfo} from "./comicsInfo";
import {EventInfo} from "./eventsInfo";
import {SeriesInfo} from "./seriesInfo";
import {StoriesInfo} from "./storiesInfo";

export interface MarvelCharacterFromApi{
    id:number;
    name: string;
    description: string;
    modified:string;
    resourceURI:string;
    urls:Array<{type:string,url:string}>;
    thumbnail: {extension:string, path:string};

    comics: ComicsInfo ;
    series: SeriesInfo;
    stories:StoriesInfo;
    events: EventInfo;
}