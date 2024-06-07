import { IUiTypes, TUiVariant } from "@/lib/shared/types/IGlobalTypes";

export interface ITextWithImageBannerProps{
    title: string;
    description?: string;
    url?:string;
    bgImage?: string;
    bannerIcon?: string;
    bgColor?: string;
    titleColor?: TUiVariant;
    descriptionColor?: TUiVariant;
}

export interface ITextWIthImageBannerSettings{
    textColor: IUiTypes
}