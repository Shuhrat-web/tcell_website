export interface ISortTypeSelectionCardProps{
    data: ISortingCardData
}

export interface ISortingCardData{
    id: number;
    title: string;
    active?: boolean;
    iconSrc?: string
}