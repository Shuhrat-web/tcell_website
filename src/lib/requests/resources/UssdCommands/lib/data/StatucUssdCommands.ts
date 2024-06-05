import { IUssdCommand } from "../types/IUssdCommandsTypes";

export const staticUssdCommands:IUssdCommand[] = [
    {
        id: 1,
        command: '*871*1#',
        description: 'Активация 4G'
    },
    {
        id: 2,
        command: '*1191*99#',
        description: 'Блокировка вспылвающих SMS-уведомлений'
    },
    {
        id: 3,
        command: '*377#',
        description: 'Проверка остатков по пакетам '
    },
    {
        id: 4,
        command: '*105*1#',
        description: 'Проверка расходов за текущий месяц'
    },
    {
        id: 5,
        command: '*105*2#',
        description: 'Проверка расходов за текущий день'
    },
    {
        id: 6,
        command: '*21*595#',
        description: 'Переадресация звонков'
    },
    {
        id: 7,
        command: '##002#',
        description: 'Отключение переадресации звонков'
    },
    {
        id: 8,
        command: '*43#',
        description: 'Ожидание вызова (вторая линия)'
    },
    {
        id: 9,
        command: '#31#',
        description: 'Скрытие номера'
    },
    {
        id: 10,
        command: '*31#',
        description: 'Отображение номера'
    },
    {
        id: 11,
        command: '*0510#',
        description: 'Запрос интернет-настроек'
    },
    {
        id: 12,
        command: '*257*1#',
        description: 'Выбор таджикского языка уведомлений'
    },
    {
        id: 13,
        command: '*257*2#',
        description: 'Выбор русского языка уведомлений'
    },
    {
        id: 14,
        command: '*257*2#',
        description: 'Выбор английского языка уведомлений'
    },
    {
        id: 15,
        command: '*505*номер абонента#',
        description: 'Отправка «Позвони мне»'
    },
    {
        id: 16,
        command: '*595#',
        description: 'Всегда на связи (активация)'
    },
    {
        id: 17,
        command: '*115*21* номер # (0,224 сомони/день)',
        description: 'Черный список'
    },
    {
        id: 18,
        command: '*115*0#',
        description: 'Отключение черного списка'
    },
    {
        id: 19,
        command: '*188*номер* сумма от 1 до 10 сомони# (0,20 сомони)',
        description: 'Мобильный перевод'
    },
    {
        id: 20,
        command: '*172*1* номер * Трафик (>500мб)',
        description: 'Передача трафика'
    },
    {
        id: 21,
        command: '*120# (10 сомони)',
        description: 'Временный платеж'
    },
] 