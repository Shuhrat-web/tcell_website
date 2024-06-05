import { ReactNode } from "react";

export interface ITarif{
    id: number;
    title: string;
    img?: string; 
    price: string;
    category_id: number;
    content?: string;
    ussd?: string;
    callCenter?: string;
    options: ITarifOptions[]
}

export interface ITarifOptions {
    id: number
    name: string,
    type: string,
    icon : string
}

export interface ITarifCategory{
    id: number;
    title: string;
}