export interface IDefaultSectionProps{
    className?: string
}

export interface INewsSectionProps extends IDefaultSectionProps{
    
}


export interface IProductsSectionProps extends IDefaultSectionProps{
    
}


export interface IColoredBannerSectionProps extends IDefaultSectionProps{
    bgColor?: string;
    textColor?: 'black' | 'white';
    title: string;
    description: string;
    url: string;
    img?: string;
}
