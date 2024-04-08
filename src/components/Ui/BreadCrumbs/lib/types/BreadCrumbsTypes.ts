export interface IBreadCrumbsProps{
    links: IBreadCrumb[];
}

export interface IBreadCrumb{
    name: string;
    href: string;
    current: boolean;
}