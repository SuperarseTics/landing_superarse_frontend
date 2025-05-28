import { ContactMenu } from "./ContactMenu";
import { FooterItems } from "./FooterItems";
import { MainMenu } from "./MainMenu";
import { SeoSettings } from "./SeoSettings";

export interface GlobalSettings{
    seoConfig:SeoSettings,
    mainMenuLogo:string,
    footerLogo:string,
    contactMenuItems:Array<ContactMenu>,
    footerItems:Array<FooterItems>,
    mainMenuItems:Array<MainMenu>,
    
}