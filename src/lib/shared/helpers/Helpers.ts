import { baseObject } from "../types/IGlobalTypes";


export const createArray = (val:number):Array<number> => [...Array(val)]


export const  createMarkup = (data:string) => {
  return {__html: data};
}

export function filterNullAndEmptyValues(obj: baseObject): baseObject {
  const filteredEntries = Object.entries(obj).filter(
    ([, value]) => value !== null && value !== ""
  );
  return Object.fromEntries(filteredEntries);
}


export const trimValues = (obj: baseObject): baseObject =>{
  const filteredEntries = Object.entries(obj).map(
    ([key, value]) => {
      if(typeof value === 'string') return  [key,value.trim()]
      else return [key, value]
    }
  );
  return Object.fromEntries(filteredEntries);
}