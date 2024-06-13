import { ReactNode } from "react";

export interface IBenefit{
    id: number;
    icon: ReactNode;
    title: string;
    description: string;
}

export interface ILoyaltyBenefit{
    id: number;
    title: string;
    description: string;
}