import { IFaq } from "@/lib/requests/resources/Faq/lib/types/IFaqTypes";

export interface IFaqCardProps{
    faq: IFaq;
    activeFaqId?: number;
    onToggleFaq: (val:number) => void
}