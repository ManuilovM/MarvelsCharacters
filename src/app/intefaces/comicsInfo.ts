export interface ComicsInfo{
    available:number;
    collectionURI:string;
    items:Array<{name:string, resourceURI:string, type?:string }>;
    returned: number;
}