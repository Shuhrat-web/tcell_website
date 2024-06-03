import { ISolution } from "@/lib/requests/resources/Solutions/lib/types/ISolutionsRequestTypes";

export interface ISolutionCardProps{
    solution: ISolution;
    iconHeight?: number;
    iconWidth?: number;
}