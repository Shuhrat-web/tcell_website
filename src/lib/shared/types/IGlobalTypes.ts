export type TUiSize = 'xl' | '2xl' |'3xl' | 'lg' | 'sm'| 'xs' | 'none' | 'full' | 'md'
export type TUiVariant = 'primary' | 'warning' | 'danger' | 'white' | 'none' | 'black' | 'secondary' | 'text'

export interface IChild {
    children: any;
}

export interface IDefaultProps {
    className?: string;
    onClick?: (prop: any) => void;
    onChange?: Function | any;
    onInput?: Function | any;
}

export interface IUseInput {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onResetSearch?: () => void;
}


export interface IBaseUiProps {
    size?: string;
    type?: string;
    rounded?: string;
}

export interface ISizes {
    xl?: string;
    '2xl'?: string;
    '3xl'?: string;
    lg: string;
    md: string;
    sm: string;
    xs?: string;
    none?: string;
    full?: string;
}

export interface IUiTypes {
    primary: string;
    warning: string;
    danger: string;
    secondary?: string;
    white?: string;
    none?: string;
    black?: string;
    text?: string
}

export interface IScreenSizes {
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
}


export interface ISvg extends IDefaultProps {
    height?: number;
    width?: number;
    fill?: string;
    stroke?: string;
}

export interface IPositions {
    top: string;
    bottom: string;
    left: string;
    right: string;
    center: string;
}

export interface IBaseComponentStatus {
    loading?: boolean;
    error?: any;
}


export interface IActionType {
    create: string;
    delete: string;
    edit: string;
}

export interface ILanguage{
    language: string;
}
export interface IButtonSetting {
    hide: boolean
    readOnly: boolean
}

export type baseObject = { [key: string]: any };

export interface IDefaultSectionProps{
    className?: string
}

export interface IColoredBanner extends IDefaultSectionProps{
    bgColor?: string;
    textColor?: 'black' | 'white';
    title: string;
    description: string;
    url: string;
    img?: string;
}