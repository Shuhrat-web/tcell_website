import { IContact } from "../types/IContactsRequestsTypes";

export const staticContacts:IContact[] = [
    {
        id: 1,
        img: '/images/icons/geo_icon.svg',
        name: 'Адрес',
        value: 'г. Душанбе, ул. Рудаки 26',
        type: 'adress'
    },
    {
        id: 2,
        img: '/images/icons/icon_@.svg',
        name: 'Электронная почта',
        value: 'tcell@gmail.com',
        type: 'mail'
    },
    {
        id: 3,
        img: '/images/icons/big_phone.svg',
        name: 'Для абонентов Tcell',
        value: '7070',
        type: 'phone'
    },
    {
        id: 4,
        img: '/images/icons/incoming_phone.svg',
        name: 'Для других операторов',
        value: ' +992 93 505 0000',
        type: 'phone'
    },
]