import internal from "stream";

export interface INavigationLinkTab{
    id: number;
    name: string;
    route?: string;
    children: INavigationLink[];
}

export interface INavigationLink{
    tabId?: number;
    route?: string;
    name: string;
    children?: INavigationLink[]
}


export interface IPcNavigationProprs{
    links: INavigationLinkTab[];
    // absoluteNav: boolean;
}

export interface IMobileNavigationProps extends IPcNavigationProprs{

}

export interface IFooterRow{
    title: string;
    children?: IFooterRowChild[]
}

export interface IFooterRowChild{
    title: string;
    children?: IFooterRowLink[];
}

export interface IFooterRowLink{
    url: string;
    name: string;
}

export interface IFooterRowProps{
    footerRow: IFooterRow
}

export interface IPcNavigationProps{
    links: INavigationLinkTab[];
}

export interface INavigationDialogprops{
    children: React.ReactNode;
    show: boolean;
    toggleShow: () => void
}