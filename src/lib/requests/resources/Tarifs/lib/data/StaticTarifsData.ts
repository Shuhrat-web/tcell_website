import { ITarif } from "../types/ITarifTypes";

export const staticTarifs:ITarif[] = [
    {
        id: 1,
        category_id: 1,
        img: '/images/Salom_50.png',
        ussd: '*207*01#',
        title: "Салом+ 50",
        content: `
            <ul style="list-style: none; padding-left: 0px;  line-height: 1.5;">
                <li>-Ночной безлимитный интернет (00:00 по 07:00) – бесплатно</li>
                <li>-Звонки внутри сети – бесплатно</li>
                <li>-Стоимость GPRS за 1 Mb сверх пакета – 0,02 сомони</li>
                <li>-Исходящий SMS по РТ – 0,10 сомони</li>
                <li>-Исходящий международные SMS и MMS – 0,50 сомони</li>
                <li>-Исходящий международные SMS и MMS – 0,50 сомони</li>
                <li>-5 120 Мб на Youtube, соц. сети и мессенджеры</li>
            </ul>
        `,
        price: "50 сомони / мес.",
        options: [
          {
            id: 1,
            name: "5 120 Мб",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "20 мин",
            type: "icon",
            icon: "HiOutlinePhone",
          },
          {
            id: 3,
            name: "20 sms",
            type: "icon",
            icon: "HiMail",
          },
        ],
    },
    {
        id: 2,
        ussd: '*207*02#',
        category_id: 1,
        img: '/images/Salom_70.png',
        title: "Салом+ 70",
        content: `
          <ul style="list-style:none; padding-left: 0px;  line-height: 1.5;">
            <li>-Ночной безлимитный интернет (00:00 по 07:00) – бесплатно</li>
            <li>-Звонки внутри сети - бесплатно</li>
            <li>-Стоимость GPRS за 1 Mb сверх пакета –0,02 сомони</li>
            <li>-Исходящий SMS по РТ – 0,10 сомони</li>
            <li>-Исходящий международные SMS и MMS – 0,50 сомони</li>
            <li>-30 720 Mb на соцсети и мессенджеры</li>
          </ul>
        `,
        price: "70 сомони / мес.",
        options: [
          {
            id: 1,
            name: "6 144 Мб",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "30 мин",
            type: "icon",
            icon: "HiOutlinePhone",
          },
          {
            id: 3,
            name: "30 sms",
            type: "icon",
            icon: "HiMail",
          },
        ],
    },
    {
        id: 3,
        ussd: '*207*03#',
        img: '/images/Salom_90.png',
        category_id: 1,
        title: "Салом+ 90",
        content: `
          <ul style="list-style:none; padding-left: 0px;  line-height: 1.5;">
            <li>-Ночной безлимитный интернет (00:00 по 07:00) – бесплатно</li>
            <li>-Звонки внутри сети – бесплатно</li>
            <li>-Стоимость GPRS за 1 Mb сверх пакета - 0,02 сомони</li>
            <li>-Исходящий SMS по РТ - 0,10 сомони</li>
            <li>-Исходящий международные SMS и MMS - 0,50 сомони</li>
            <li>-20 480 Mb на соцсети и мессенджеры</li>
          </ul>
        `,
        price: "90 сомони / мес.",
        options: [
          {
            id: 1,
            name: "10 240 Мб",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "40 мин",
            type: "icon",
            icon: "HiOutlinePhone",
          },
          {
            id: 3,
            name: "40 sms",
            type: "icon",
            icon: "HiMail",
          },
        ],
    },
    {
        id: 4,
        ussd: '*207*04#',
        img: '/images/Salom_130.png',
        category_id: 1,
        title: "Салом+ 130",
        content: `
            <ul style="list-style:none; padding-left: 0px;  line-height: 1.5;">
                <li>-Ночной безлимитный интернет (00:00 по 07:00) – бесплатно</li>
                <li>-Звонки внутри сети – бесплатно</li>
                <li>-Перевод 30% от трафика соцсетей на основной</li>
                <li>-Стоимость GPRS за 1 Mb сверх пакета - 0,02 сомони</li>
                <li>-Исходящий SMS по РТ - 0,10 сомони </li>
                <li>-Исходящий международные SMS и MMS - 0,50 сомони</li>
                <li>-40 960 Mb на соцсети и мессенджеры</li>
            </ul>
        `,
        price: "130 сомони / мес.",
        options: [
          {
            id: 1,
            name: "15 360 Мб",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "60 мин",
            type: "icon",
            icon: "HiOutlinePhone",
          },
          {
            id: 3,
            name: "60 sms",
            type: "icon",
            icon: "HiMail",
          },
        ],
    },
    {
        id: 5,
        ussd: '*207*05#',
        img: '/images/Salom_180.png',
        category_id: 1,
        title: "Салом+ 180",
        content: `
          <ul style="list-style:none; padding-left: 0px;  line-height: 1.5;">
            <li>-Ночной безлимитный интернет (00:00 по 07:00) – бесплатно</li>
            <li>-Звонки внутри сети – бесплатно</li>
            <li>-Перевод 30% от трафика соцсетей на основной</li>
            <li>-Страховочный пакет – 250 Mb</li>
            <li>-Стоимость GPRS за 1 Mb сверх пакета - 0,02 сомони</li>
            <li>-Исходящий SMS по РТ - 0,10 сомони</li>
            <li>-Исходящий международные SMS и MMS - 0,50 сомони</li>
            <li>-61 440 Mb на соцсети и мессенджеры</li>
          </ul>
        `,
        price: "180 сомони / мес.",
        options: [
          {
            id: 1,
            name: "25 600 Мб",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "100 мин",
            type: "icon",
            icon: "HiOutlinePhone",
          },
          {
            id: 3,
            name: "100 sms",
            type: "icon",
            icon: "HiMail",
          },
        ],
    },
    {
        id: 6,
        ussd: '*207*06#',
        img: '/images/Salom_300.png',
        category_id: 1,
        title: "Салом+ 300",
        content: `
          <ul style="list-style:none; padding-left: 0px;  line-height: 1.5;">
            <li>-Ночной безлимитный интернет (00:00 по 07:00) – бесплатно</li>
            <li>-Звонки внутри сети – бесплатно</li>
            <li>-Перевод 30% от трафика соцсетей на основной</li>
            <li>-Страховочный пакет – 500 Mb</li>
            <li>-Стоимость GPRS за 1 Mb сверх пакета - 0,02 сомони</li>
            <li>-Исходящий SMS по РТ - 0,10 сомони</li>
            <li>-Исходящий международные SMS и MMS - 0,50 сомони</li>
            <li>-102 400 Mb на соцсети и мессенджеры</li>
          </ul>
        `,
        price: "300 сомони / мес.",
        options: [
          {
            id: 1,
            name: "51 200 Мб",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "300 мин",
            type: "icon",
            icon: "HiOutlinePhone",
          },
          {
            id: 3,
            name: "300 sms",
            type: "icon",
            icon: "HiMail",
          },
        ],
    },
    {
        id: 7,
        callCenter: '77 111 2000',
        img: '/images/tarif_img.png',
        category_id: 2,
        title: "Тез 5",
        price: "149 сомони / мес.",
        options: [
          {
            id: 1,
            name: "Неограниченный",
            type: "icon",
            icon: "HiGlobeAlt"
          },
          {
            id: 2,
            name: "5 Мбит / с",
            type: "icon",
            icon: "MdOutlineSpeed"
          },
        ],
    },
    {
        id: 8,
        callCenter: '77 111 2000',
        img: '/images/tarif_img.png',
        category_id: 2,
        title: "Тез 10",
        price: "249 сомони / мес.",
        options: [
          {
            id: 1,
            name: "Неограниченный",
            type: "icon",
            icon: "HiGlobeAlt"
          },
          {
            id: 2,
            name: "10 Мбит / с",
            type: "icon",
            icon: "MdOutlineSpeed"
          },
        ],
    },
    {
        id: 9,
        callCenter: '77 111 2000',
        img: '/images/tarif_img.png',
        category_id: 2,
        title: "Тез 20",
        price: "399 сомони / мес.",
        options: [
          {
            id: 1,
            name: "Неограниченный",
            type: "icon",
            icon: "HiGlobeAlt"
          },
          {
            id: 2,
            name: "20 Мбит / с",
            type: "icon",
            icon: "MdOutlineSpeed"
          },
        ],
    },
    {
        id: 10,
        category_id: 3,
        img: '/images/tarif_img.png',
        callCenter: '8080',
        title: `Хамкор «20»`,
        content: `
          <ul style="list-style:none; padding-left: 0px;  line-height: 1.8;">
              <li>-Исходящие звонки внутри сети, сомони(Бесплатно)</li>
              <li>-Исходящие звонки на другие мобильные операторы РТ, сомони (0,25)</li>
              <li>-Стоимость GRPS за 1Мб (сверх пакета), сомони (0,02)</li>
              <li>-Исходящий SMS по РТ (сверх пакета), сомони (0,01)</li>
              <li>-Исходящий МН, SMS и MMS, сомони (0,50)</li>
              <li>-Услуга CVPN (Бесплатно)</li>
              <li>-Услуга Симфония (мелодия платная, без ежедневной АП) (Бесплатно)</li>
              <li>-Тарификация звонков по РТ (Посекундная)</li>
              <li>-Тарификация GPRS (Округление 10Кб)</li>
              <li>-USSD-для передключения (*989*89#)</li>
              <li>-USSD для проверки остатков (*377#)</li>
          </ul>
        `,
        price: "20 сомони / мес.",
        options: [
          {
            id: 1,
            name: "1000 МБ",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "100 МИН",
            type: "icon",
            icon: "HiOutlinePhone",
          },
          {
            id: 3,
            name: "100 SMS",
            type: "icon",
            icon: "HiMail",
          },
        ],
    },
    {
        id: 11,
        category_id: 3,
        img: '/images/tarif_img.png',
        callCenter: '8080',
        title: `Хамкор «50»`,
        content: `
          <ul style="list-style:none; padding-left: 0px;  line-height: 1.8;">
            <li>-Исходящие звонки внутри сети, сомони(Бесплатно)</li>
            <li>-Исходящие звонки на другие мобильные операторы РТ, сомони (0,25)</li>
            <li>-Стоимость GRPS за 1Мб (сверх пакета), сомони (0,02)</li>
            <li>-Исходящий SMS по РТ (сверх пакета), сомони (0,01)</li>
            <li>-Исходящий МН, SMS и MMS, сомони (0,50)</li>
            <li>-Услуга CVPN (Бесплатно)</li>
            <li>-Услуга Симфония (мелодия платная, без ежедневной АП) (Бесплатно)</li>
            <li>-Тарификация звонков по РТ (Посекундная)</li>
            <li>-Тарификация GPRS (Округление 10Кб)</li>
            <li>-USSD-для передключения (*989*89#)</li>
            <li>-USSD для проверки остатков (*377#)</li>
          </ul>
        `,
        price: "50 сомони / мес.",
        options: [
          {
            id: 1,
            name: "10 000 МБ",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "100 МИН",
            type: "icon",
            icon: "HiOutlinePhone",
          },
          {
            id: 3,
            name: "100 SMS",
            type: "icon",
            icon: "HiMail",
          },
        ],
    },
    {
        id: 12,
        category_id: 3,
        img: '/images/tarif_img.png',
        callCenter: '8080',
        title: `Хамкор «100»`,
        content: `
          <ul style="list-style:none; padding-left: 0px;  line-height: 1.8;">
            <li>-Исходящие звонки внутри сети, сомони(Бесплатно)</li>
            <li>-Исходящие звонки на другие мобильные операторы РТ, сомони (0,25)</li>
            <li>-Стоимость GRPS за 1Мб (сверх пакета), сомони (0,02)</li>
            <li>-Исходящий SMS по РТ (сверх пакета), сомони (0,01)</li>
            <li>-Исходящий МН, SMS и MMS, сомони (0,50)</li>
            <li>-Услуга CVPN (Бесплатно)</li>
            <li>-Услуга Симфония (мелодия платная, без ежедневной АП) (Бесплатно)</li>
            <li>-Тарификация звонков по РТ (Посекундная)</li>
            <li>-Тарификация GPRS (Округление 10Кб)</li>
            <li>-USSD-для передключения (*989*89#)</li>
            <li>-USSD для проверки остатков (*377#)</li>
          </ul>
        `,
        price: "100 сомони / мес.",
        options: [
          {
            id: 1,
            name: "25 000 МБ",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "250 МИН",
            type: "icon",
            icon: "HiOutlinePhone",
          },
          {
            id: 3,
            name: "250 SMS",
            type: "icon",
            icon: "HiMail",
          },
        ],
    },
    {
        id: 13,
        category_id: 3,
        img: '/images/tarif_img.png',
        callCenter: '8080',
        title: `Хамкор «150»`,
        content: `
          <ul style="list-style:none; padding-left: 0px;  line-height: 1.8;">
            <li>-Исходящие звонки внутри сети, сомони(Бесплатно)</li>
            <li>-Исходящие звонки на другие мобильные операторы РТ, сомони (0,25)</li>
            <li>-Стоимость GRPS за 1Мб (сверх пакета), сомони (0,02)</li>
            <li>-Исходящий SMS по РТ (сверх пакета), сомони (0,01)</li>
            <li>-Исходящий МН, SMS и MMS, сомони (0,50)</li>
            <li>-Услуга CVPN (Бесплатно)</li>
            <li>-Услуга Симфония (мелодия платная, без ежедневной АП) (Бесплатно)</li>
            <li>-Тарификация звонков по РТ (Посекундная)</li>
            <li>-Тарификация GPRS (Округление 10Кб)</li>
            <li>-USSD-для передключения (*989*89#)</li>
            <li>-USSD для проверки остатков (*377#)</li>
          </ul>
        `,
        price: "150 сомони / мес.",
        options: [
          {
            id: 1,
            name: "40 000 МБ",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "400 МИН",
            type: "icon",
            icon: "HiOutlinePhone",
          },
          {
            id: 3,
            name: "400 SMS",
            type: "icon",
            icon: "HiMail",
          },
      ],
    },
    {
      id: 14,
      category_id: 3,
      img: '/images/tarif_img.png',
      callCenter: '8080',
      title: `Хамкор «300»`,
      content: `
        <ul style="list-style:none; padding-left: 0px;  line-height: 1.8;">
          <li>-Исходящие звонки внутри сети, сомони(Бесплатно)</li>
          <li>-Исходящие звонки на другие мобильные операторы РТ, сомони (0,25)</li>
          <li>-Стоимость GRPS за 1Мб (сверх пакета), сомони (0,02)</li>
          <li>-Исходящий SMS по РТ (сверх пакета), сомони (0,01)</li>
          <li>-Исходящий МН, SMS и MMS, сомони (0,50)</li>
          <li>-Услуга CVPN (Бесплатно)</li>
          <li>-Услуга Симфония (мелодия платная, без ежедневной АП) (Бесплатно)</li>
          <li>-Тарификация звонков по РТ (Посекундная)</li>
          <li>-Тарификация GPRS (Округление 10Кб)</li>
          <li>-USSD-для передключения (*989*89#)</li>
          <li>-USSD для проверки остатков (*377#)</li>
        </ul>
      `,
      price: "300 сомони / мес.",
      options: [
        {
          id: 1,
          name: "100 000 МБ",
          type: "icon",
          icon: "HiGlobeAlt",
        },
        {
          id: 2,
          name: "1 000 МИН",
          type: "icon",
          icon: "HiOutlinePhone",
        },
        {
          id: 3,
          name: "1 000 SMS",
          type: "icon",
          icon: "HiMail",
        },
      ],
  },
]