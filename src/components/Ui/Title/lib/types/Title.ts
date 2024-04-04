import { ISizes, IUiTypes, TUiSize, TUiVariant } from "@/lib/shared/types/IGlobalTypes"


export type textDisplay = 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'link'| 'none'

export interface ITitleProps {
    children: any,
    size?: TUiSize,
    font?: TUiSize,
    display?: textDisplay,
    extraClass?: string,
    color?: TUiVariant,
    centered?: boolean,
    url?: string
}


export interface ITitleSetting {
    sizes: ISizes,
    font: ISizes,
    color: IUiTypes
}

export interface ISectionTitleProps{
    titleText: string;
    display?: textDisplay,
    route?: string;
    routeTitle?: string;
}