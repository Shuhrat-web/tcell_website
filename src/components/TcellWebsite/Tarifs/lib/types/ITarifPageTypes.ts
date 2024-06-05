import { ITarif } from "@/lib/requests/resources/Tarifs/lib/types/ITarifTypes";
import { IDefaultSectionProps } from "@/lib/shared/types/IGlobalTypes";

export interface ITarifSectionProps extends IDefaultSectionProps{
    tarifs: ITarif[]
}
export interface ITarifsPageSectionProps extends IDefaultSectionProps{}
export interface ITarifsFilterSectionProps extends IDefaultSectionProps{}


export interface ITarifsPageProps{
    category_id: number;
}