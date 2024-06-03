import clsx from "clsx"
import { ITarfisSectionProps } from "../lib/types/IHomePageTypes"
import SectionTitle from "@/components/Ui/Title/SectionTitle"
import { ITarif } from "@/lib/requests/resources/Tarifs/lib/types/ITarifTypes"
import TarifCard from "@/components/Ui/Cards/Tarif/TarifCard"

const TarifsSection = ({className}:ITarfisSectionProps) => {
    const tarifs: ITarif[] = [
      {
        id: 1,
        img: '/images/tarif_img.png',
        title: "Салом 20",
        content: `
              <ul class="ml-5 list-disc">
                  <li>Безлимитные звонки внутри сети</li>
                  <li>Дополнительный пакет 4 Гб на видео, соцсети, мессенджеры</li>
              </ul>
          `,
        price: "20 сом / мес",
        options: [
          {
            id: 1,
            name: "4 ГБ",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "20 минут",
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
        img: '/images/tarif_img.png',
        title: "Салом 20",
        content: `
              <ul class="ml-5 list-disc">
                  <li>Безлимитные звонки внутри сети</li>
                  <li>Дополнительный пакет 4 Гб на видео, соцсети, мессенджеры</li>
              </ul>`,
        price: "20 сом / мес",
        options: [
          {
            id: 1,
            name: "4 ГБ",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "20 минут",
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
        id: 3,
        img: '/images/tarif_img.png',
        title: "Салом 20",
        content: `
              <ul class="ml-5 list-disc">
                  <li>Безлимитные звонки внутри сети</li>
                  <li>Дополнительный пакет 4 Гб на видео, соцсети, мессенджеры</li>
              </ul>`,
        price: "20 сом / мес",
        options: [
          {
            id: 1,
            name: "4 ГБ",
            type: "icon",
            icon: "HiGlobeAlt",
          },
          {
            id: 2,
            name: "20 минут",
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
    ]
  return (
    <section className={clsx(className,'')}>
      <SectionTitle 
      titleText='Популярные тарифы'
      routeTitle="Все тарифы" 
      route='/tarifs'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16'>
        {tarifs.map((tarif) => (
        <TarifCard key={tarif.id} tarif={tarif}/>
        ))}
      </div>
    </section>
  )
}

export default TarifsSection