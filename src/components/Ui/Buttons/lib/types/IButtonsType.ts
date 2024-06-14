import { ISizes, IUiTypes, TUiSize, TUiVariant } from "@/lib/shared/types/IGlobalTypes";

export interface IButton {
    size?: TUiSize;
    type?: TUiVariant;
    children: React.ReactNode;
    onClick?: () => void;
    isBtn?: boolean;
    loading?: boolean;
    disabled?: boolean;
    round?: TUiSize;
    extraClass?: string;
    animate?: boolean;
    url?:string;
}

export interface IButtonSettings{
    size: ISizes;
    type: IUiTypes;
    round: ISizes;
    animate: string;
}


export interface IContainButtonProps extends IButton{}
export interface IContainButtonSettings extends IButtonSettings{}

export interface IOutlinedButtonProps extends IButton{}
export interface IOutlinedButtonSettings extends IButtonSettings{}

export interface ITextButtonProps extends IButton{
    hideHover?: boolean;
}
export interface ITextButtonSettings extends IButtonSettings{
    noHoverType:IUiTypes
}