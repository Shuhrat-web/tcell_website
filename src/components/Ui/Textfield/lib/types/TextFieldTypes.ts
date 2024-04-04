import { ISizes, IUiTypes, TUiSize, TUiVariant } from "@/lib/shared/types/IGlobalTypes";

export interface ITextFieldProps{
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    name?: string;
    textfieldType?: string;
    required?: boolean;
    type?: TUiVariant; 
    round?: TUiSize;
    size?: TUiSize;
    textSize?: TUiSize;
    prevIcon?: any;
    nextIcon?: any;
    extraClass?: string;
}

export interface ITextFieldSettings {
    type: IUiTypes;
    round: ISizes;
    textSize: ISizes;
    size: ISizes;
    withIconSize:{
        prevIcon: ISizes;
        nextIcon: ISizes; 
    }; 
}