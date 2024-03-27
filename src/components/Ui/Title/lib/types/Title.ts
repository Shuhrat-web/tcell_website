import { ISizes, IUiTypes, TUiSize, TUiVariant } from "@/lib/shared/types/IGlobalTypes"

export interface ITitleProps {
    children: any,
    size?: TUiSize,
    font?: TUiSize,
    display?: string,
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