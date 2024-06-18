'use client'
import React, { useState } from 'react'
import { IFaqQuestionarySectionProps } from '../lib/IFaqPageTypes'
import clsx from 'clsx'
import Title from '@/components/Ui/Title/Title'
import { IFaq } from '@/lib/requests/resources/Faq/lib/types/IFaqTypes'
import FaqCard from '@/components/Ui/Cards/Faq/FaqCard'

const FaqQuestionarySection = ({className}:IFaqQuestionarySectionProps) => {
    const [activeFaqId,setActiveFacId] = useState(0)
    const faqList:IFaq[] = [
        {
            id: 1,
            question: 'Как проверить свои расходы?',
            answer: `"Можете использовать несколько методов:
            1. Наберите *105# на вашем телефоне и следуйте инструкциям на экране для получения информации о расходах.
            2. Загрузите и установите приложение ""Мой Tcell"" из App Store или Google Play. В приложении вы сможете просматривать подробную информацию о своих расходах в реальном времени."`
        },
        {
            id: 2,
            question: 'Как узнать свой тарифный план?',
            answer: `Чтобы узнать тариф наберите *105*3# на вашем телефоне, и вы получите информацию о текущем тарифном плане.`
        },
        {
            id: 3,
            question: 'Какие услуги активны на моем номере?',
            answer: `"Частично можно проверить активные услуги через:
            1. В приложении ""Мой Tcell"" вы сможете увидеть список активных услуг на вашем номере. Это позволит вам управлять услугами и отключать ненужные.
            2. Наберите *105# и выберите соответствующий пункт меню для проверки активных услуг."`
        },
        {
            id: 4,
            question: 'Как проверить остаток на тарифе?',
            answer: `Чтобы проверить остаток на тарифе, наберите *377# на вашем телефоне и вы получите информацию о текущем остатке по вашему тарифу.`
        },
        {
            id: 5,
            question: 'Как отключить рекламные сообщения?',
            answer: `" Для отключения рекламных сообщений выполните следующую команду:
            Наберите *1191*99# на вашем телефоне и вы отключите получение рекламных сообщений."`
        },
        {
            id: 6,
            question: 'Как включить LTE (4G)?',
            answer: `Активировать LTE (4G) на своем устройстве можно набрав команду *871*1#`
        },
        {
            id: 7,
            question: 'Что делать, если интернет работает медленно?',
            answer: `В зависимости от ситуации. В первую очередь необходимо проверить режим сети.`
        },
        {
            id: 8,
            question: 'Как переподключить мой тарифный план?',
            answer: `Для переподключения тарифного плана можете воспользоваться приложением "My Tcell" или обратитесь в наш интеллектуальный чат-бот для получения дополнительной информации t.me/Tcellservicebot `
        },
        // {
        //     id: 9,
        //     question: 'Как зарегистрироваться в приложении "Чигап"?',
        //     answer: `Прикрепить ссылку на видео об регистрации ЧиГап`
        // },
        {
            id: 10,
            question: 'Почему нет звука при звонке?',
            answer: `Проверить есть ли разрешение в телефоне на микрофон`
        },
        {
            id: 11,
            question: 'Как настроить уведомления о входящих звонках?',
            answer: `Проверить есть ли разрешение в телефоне в приложении ЧиГап`
        },
        {
            id: 12,
            question: 'Как восстановить SIM-карту?',
            answer: `Восстановление SIM-карты происходит только при личном посещении центра обслуживания с паспортом `
        },
        {
            id: 13,
            question: 'Как получить или заменить eSIM?',
            answer: `Восстановление SIM-карты происходит только при личном посещении центра обслуживания с паспортом `
        },
        {
            id: 14,
            question: 'Как проверить IMEI телефона?',
            answer: `Чтобы узнать IMEI телефона наберите команду *#06#`
        },
        // {
        //     id: 15,
        //     question: 'Куда обратиться, если IMEI заблокирован?',
        //     answer: `Позвонить по номеру 3366 или же зайти на официальный сайт IMEI.TJ (ссылку вставить активную)`
        // },
        // {
        //     id: 16,
        //     question: 'Что делать, если нет сети или антенны?',
        //     answer: `"Можете попробовать провести следующие действия:
        //     1.Перезагрузите телефон: Выключите и снова включите устройство.
        //     2. Проверьте режим полета: Убедитесь, что режим полета отключен.
        //     3. Проверьте настройки сети:Откройте настройки сети и выберите автоматический выбор сети.
        //     4. Убедитесь, что ваш телефон не настроен на использование сети другого оператора.
        //     5. Обновите программное обеспечение: Убедитесь, что на вашем телефоне установлены последние обновления системы.
        //     6. Свяжитесь с поддержкой Tcell: Если проблема не решена, свяжитесь с нашей службой поддержки по телефону или через интеллектуального чат-бота.....(ссылка на воцап) для дальнейшей помощи."`
        // },
        {
            id: 17,
            question: 'Как узнать свой собственный номер телефона?',
            answer: `Для этого наберите на своем устройсвте команду *99#`
        },
        // {
        //     id: 18,
        //     question: 'Как проверить использование данных?',
        //     answer: `Прекрепить ссылку на видео об проверке использовании данных`
        // },
        {
            id: 19,
            question: 'Как узнать срок действия тарифа?',
            answer: `"Через приложение My Tcell:
            Откройте приложение ""My Tcell"". Войдите в свой аккаунт.
            Перейдите в раздел ""Тарифы"" или ""Мой тариф"".
            Найдите информацию о сроке действия вашего текущего тарифа.
            Или можете воспользоваться USSD-командой: Наберите *105*3# и нажмите вызов.
            Следуйте инструкциям на экране для получения информации о сроке действия тарифа."`
        },
        {
            id: 20,
            question: 'Как включить переадресацию на "Чигап"?',
            answer: `"Откройте приложение ""Чи Гап"":
            Убедитесь, что приложение установлено на вашем телефоне.
            Запустите приложение ""Чи Гап"".
            Перейдите в настройки:
            Найдите и откройте раздел ""Настройки"" в приложении.
            Включите переадресацию:
            В разделе ""Настройки"" найдите опцию “Переадресация с GSM”.
            Включите эту опцию, следуя инструкциям на экране."`
        },
        {
            id: 21,
            question: 'Лимиты "ТезСум"?',
            answer: `Если Вы прошли идентификацию, то лимит составит 13 600 сомони, без идентифицикации 3 400 сомони.`
        },
        // {
        //     id: 22,
        //     question: 'Как пройти идентификацию в "ТезСум"?',
        //     answer: `Прикрепить видео ролик по регистрацию ТезСум`
        // },
        {
            id: 23,
            question: 'Как получить детализацию счета?',
            answer: `Посредством приложения My Tcell`
        },
        {
            id: 24,
            question: 'Что такое "Колесо подарков"?',
            answer: `"«Колесо подарков» – это программа, созданная для поощрения абонентов за использование услуг компании. За каждый потраченный 1 сомони Вы получаете 1 балл. Накопленные баллы можно обменивать на подарки: минуты, SMS, МБ, скидки и т.д. 
            Для прокрутки колеса необходимо 50 баллов т.е. одна прокрутка равна - 50 баллам. 
            Подарки выпадают случайный образом и в зависимости от вашего уровня. 
            "`
        },
        {
            id: 25,
            question: 'Как включить и использовать роуминг?',
            answer: `"Наберите на вашем телефоне команду: *601*1#
            Нажмите кнопку вызова.
            Дождитесь подтверждения активации роуминга от оператора.
            После активации вы сможете использовать мобильную связь и интернет за границей.
            Убедитесь, что ваш телефон подключен к одной из доступных сетей в стране пребывания.
            Рекомендуется использовать приложение ""My Tcell"" для мониторинга расходов и услуг в роуминге."
            `
        },
        {
            id: 26,
            question: 'Как узнать баланс на счете?',
            answer: `"1. Наберите на вашем телефоне команду *100# и кнопку вызова.
            Ваш баланс отобразится на экране.
            2. Позвонив на короткий номер 100. Следуйте голосовым инструкциям, чтобы узнать баланс
            3. Скачайте приложние ""My Tcell"" для мониторинга баланса, расходов и услуг"
            `
        },
    ]
  return (
    <section className={clsx(className,'t__card__secondary')}>
        <Title centered size='xl'>Часто задаваемые вопросы</Title>
        <ul className='mt-8 lg:px-32'>
            {
                faqList.map(faq => <li key={faq.id}>
                    <FaqCard onToggleFaq={(id) => {
                        setActiveFacId(id === activeFaqId ? 0 : id)
                    }} 
                    faq={faq}
                    activeFaqId={activeFaqId} />
                </li>)
            }
        </ul>
    </section>
  )
}

export default FaqQuestionarySection