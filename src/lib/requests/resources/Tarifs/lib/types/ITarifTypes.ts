import { ReactNode } from "react";

export interface ITarif{
    id: number;
    title: string;
    price: string;
    content: string;
    options: ITarifOptions[]
}

export interface ITarifOptions {
    id: number
    name: string,
    type: string,
    icon : ReactNode
}

