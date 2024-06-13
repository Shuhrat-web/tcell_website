import { ILoyaltyBenefit } from "@/lib/requests/resources/Benefits/lib/types/IBenefitTypes";
import { IDefaultSectionProps } from "@/lib/shared/types/IGlobalTypes";

export interface IPrivateIndividualsAdvantageSectionProps extends IDefaultSectionProps{}

export interface IBannerSectionProps extends IDefaultSectionProps{}

export interface ILoyaltyBenefitsProps extends IDefaultSectionProps{
    benefits: ILoyaltyBenefit[]
}