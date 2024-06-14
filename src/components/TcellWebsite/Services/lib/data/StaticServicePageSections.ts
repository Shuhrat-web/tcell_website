import { staticServices } from "@/lib/requests/resources/Service/lib/data/StaticServiceData";
import { IServiceSectionList } from "../types/IServicePageTypes";

export const serviceSectionsData:IServiceSectionList[] = [
    {
      title: "«Яндекс плюс»",
      description: "Это универсальная подписка, которая объединяетвсе преимущества и сервисы Яндекса в одном пакете.",
      services: staticServices.slice(0, 4),
      options: [
        {
          id: 1,
          title: '10 с. / месяц',
          description: 'Стоимость'
        },
        {
          id: 2,
          title: 'MyTcell',
          description: 'Способ подключения'
        },
        {
          id: 3,
          title: 'MyTcell',
          description: 'Способ отлючения'
        }
      ],
    },
    {
      title: "«Детский портал»",
      description: "Смотрите фильмы для детей, мультфильмы, сказки, книги и игры в Full HD и без рекламы на портале kids.tcell.tj!",
      services: staticServices.slice(4, 8),
      options: [
        {
          id: 1,
          title: '1,2 с. / сутки',
          description: 'Стоимость'
        },
        {
          id: 2,
          title: '*4006#',
          description: 'Способ подключения'
        },
        {
          id: 3,
          title: '*4006*0#',
          description: 'Способ отлючения'
        }
      ],
      content: `
        <div class="text-secondary-50">
            <h5 class="text-lg">* Сервис не доступен для абонентов с тарифами Безлимитный 4G и Интернет 4G, а также:</h5>
            <ul class="leading-8 mt-4 list-disc ml-4">
                <li>
                    Безлимитный смартфон
                </li>
                <li>
                    Безлимитный смартфон лайт
                </li>
                <li>
                    Ночной безлимит
                </li>
                <li>
                    Безлимитный интернет для Даркор 128 кб/с
                </li>
                <li>
                    Безлимитный интернет для Даркор 256 кб/с
                </li>
                <li>
                    Безлимитный интернет Даркор 384 кб/с
                </li>
                <li>
                    Безлимитный интернет Даркор 512 кб/с
                </li>
            </ul>
        </div>
      `
    },
    {
      title: "«Садо»",
      description: "Приложение «Садо» предлагает радиостанции, аудиокниги, подкасты и музыку. Всё это — в одном месте.",
      services: staticServices.slice(8, 12),
      options: [
        {
          id: 1,
          title: '1,1 с. / сутки',
          description: 'Стоимость'
        },
        {
          id: 2,
          title: '*6116#',
          description: 'Способ подключения'
        },
        {
          id: 3,
          title: '*6116*0#',
          description: 'Способ отлючения'
        }
      ],
      content: `
        <div class="text-secondary-50">
            <h5 class="text-lg">Услуга «Приложение Садо» не доступна для следующих тарифных планов и опций:</h5>
            <ul class="leading-8 mt-4 list-disc ml-4">
                <li>
                    Безлимитный интернет для Даркор 256 кб/c
                </li>
                <li>
                    ТП Безлимитный 4G
                </li>
                <li>
                    Интернет
                </li>
                <li>
                    Чигап 30
                </li>
                <li>
                    Реальный ip
                </li>
            </ul>
        </div>
      `
    },
    {
      title: "«Оила ТВ»",
      description: '"Оила ТВ" предлагает удобный доступ к широкому выбору телевизионных каналов и контента:',
      services: staticServices.slice(12, 16),
      options: [
        {
          id: 1,
          title: '1,8 с. / сутки',
          description: 'Стоимость'
        },
        {
          id: 2,
          title: '*7117#',
          description: 'Способ подключения'
        },
        {
          id: 3,
          title: '*7117*0#',
          description: 'Способ отлючения'
        }
      ],
    },
    {
      title: "«Пресса»",
      description: 'Сервис "Пресса" представляет собой удобный инструмент для чтения новостей и статей.',
      services: staticServices.slice(16, 20),
      options: [
        {
          id: 1,
          title: '0,7 с. / сутки',
          description: 'Стоимость'
        },
        {
          id: 2,
          title: '*4021#',
          description: 'Способ подключения'
        },
        {
          id: 3,
          title: '*4021*0#',
          description: 'Способ отлючения'
        }
      ],
    },
  ]
