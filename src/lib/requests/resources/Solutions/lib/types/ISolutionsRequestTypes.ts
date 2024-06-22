export interface ISolution{
    id: number;
    title: string;
    description: string;
    icon?: string
}

export interface ISolutionPost{
    id: number
    name: string
    children: ISolutionChildren[]
}

export interface ISolutionChildren {
    id: number,
    title: string
    content: string
    excerpt?: string
}
