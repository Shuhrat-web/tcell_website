import { IService, IServiceOptionData } from "@/lib/requests/resources/Service/lib/types/IServicesTypes";
import { IDefaultSectionProps } from "@/lib/shared/types/IGlobalTypes";

export interface IMaintenanceSectionProps extends IDefaultSectionProps{}

export interface IServiceInfoSectionProps extends IDefaultSectionProps{
    title: string;
    description: string;
    options: IServiceOptionData[];
    content?: string;
    services: IService[];
}


export interface IServiceSectionList{
    title: string;
    description: string;
    options: IServiceOptionData[];
    services: IService[];
    content?: string;
}