import { PageWidget } from "./PageWidget";

export interface Pages{
    id: number,
    name:string,
    widgets:Array<PageWidget>,
}