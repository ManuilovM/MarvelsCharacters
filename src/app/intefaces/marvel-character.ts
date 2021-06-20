export interface MarvelCharacter {
    id:number;
    name: string;
    description: string;
    avatarSrc: string;
    imgSrc?: string;
    comics?: object;
    series?: object;
    stories?:object;
    events?:object;
}
