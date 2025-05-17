export interface FooterItems{
    name:string,
    group:Array<{
        name:string,
        address:string,
        phone: string,
        whatsapp:string,
        email:string,
        url: string,
        icon?:string,
    }>
}