export interface MainMenu{
    name:string,
    value: string,
    subItems: Array<{
        name: string,
        group:Array<{
            name:string,
            value:string,
        }>
    }>
}