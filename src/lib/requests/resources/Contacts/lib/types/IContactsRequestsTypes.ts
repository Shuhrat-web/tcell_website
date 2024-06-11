export interface IContact{
    id: number;
    img?: string;
    name: string;
    value: string;
    type: 'phone'|'adress'|'mail'
}