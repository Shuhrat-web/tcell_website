import { ITarifCategory } from "@/lib/requests/resources/Tarifs/lib/types/ITarifTypes";

export interface ISortTypeSelectionCardProps{
    data: ISortingCardData
}

export interface ISortingCardData extends ITarifCategory{
    active?: boolean;
    iconSrc?: string
}