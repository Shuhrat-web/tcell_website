import { staticServices } from "@/lib/requests/resources/Service/lib/data/StaticServiceData";
import { IServiceSectionList } from "../types/IServicePageTypes";

export const serviceSectionsData:IServiceSectionList[] = [
    {
      title: "«Яндекс плюс»",
      description: "Это универсальная подписка, которая объединяетвсе преимущества и сервисы Яндекса в одном пакете.",
      services: staticServices,
      options: [
        {
          id: 1,
          title: '10 с. / месяц',
          description: 'Способ подключения'
        },
        {
          id: 2,
          title: 'MyTcell',
          description: 'Способ подключения'
        },
        {
          id: 3,
          title: 'MyTcell',
          description: 'Способ подключения'
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
    }
  ]
