import internal from "stream";

export interface INavigationLinkTab{
    id: number;
    name: string;
    children: INavigationLink[];
}

export interface INavigationLink{
    route?: string;
    name: string;
    children?: INavigationLink[]
}


export interface IPcNavigationProprs{
    links: INavigationLinkTab[]
}

export interface IFooterRow{
    title: string;
    children: IFooterRowChild[]
}

export interface IFooterRowChild{
    title: string;
    children: IFooterRowLink[];
}

export interface IFooterRowLink{
    url: string;
    name: string;
}

export interface IFooterRowProps{
    footerRow: IFooterRow
}