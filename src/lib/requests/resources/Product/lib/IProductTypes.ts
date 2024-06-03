export interface IProduct{
    id: number;
    name: string;
    description: string;
    isOnAndroid: boolean;
    isOnIOS: boolean;
    backgroundColor?:string;
    productIcon?: string;
    textColor?: 'white'|'black';
}