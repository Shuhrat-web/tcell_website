import { IServicePoint } from "@/lib/requests/resources/ServicePoints/lib/types/IServicesPointsRequestsTypes";
import { IDefaultSectionProps } from "@/lib/shared/types/IGlobalTypes";

export interface IServicesPointsTableListProps extends IDefaultSectionProps{
    servicePoints: IServicePoint[]
}
export interface IServicePointsMapSection extends IDefaultSectionProps{
    servicePoints: IServicePoint[]
}