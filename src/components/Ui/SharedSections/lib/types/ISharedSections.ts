import { IContact } from "@/lib/requests/resources/Contacts/lib/types/IContactsRequestsTypes";
import { IDefaultSectionProps } from "@/lib/shared/types/IGlobalTypes";

export interface IContactsSectionProps extends IDefaultSectionProps{
    items: IContact[]
}