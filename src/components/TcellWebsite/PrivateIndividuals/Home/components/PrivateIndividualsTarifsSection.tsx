'use client'
import clsx from "clsx"
import { IPrivateIndividualsTarifsSectionProps } from "../lib/types/IHomePageTypes"
import SectionTitle from "@/components/Ui/Title/SectionTitle"
import TarifCard from "@/components/Ui/Cards/Tarif/TarifCard"
import { staticTarifs } from "@/lib/requests/resources/Tarifs/lib/data/StaticTarifsData"
import { useLocale } from "next-intl"

const PrivateIndividualsTarifsSection = ({className}:IPrivateIndividualsTarifsSectionProps) => {
  const locale = useLocale()
  return (
    <section className={clsx(className,'')}>
      <SectionTitle 
      titleText='Популярные тарифы'
      routeTitle="Все тарифы" 
      route={`/${locale}/tarifs?category_id=1&module_id=1`}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16'>
        {staticTarifs.filter(tarif => tarif.category_id === 1).slice(0,3).map((tarif) => (
          <TarifCard showImg key={tarif.id} tarif={tarif}/>
        ))}
      </div>
    </section>
  )
}

export default PrivateIndividualsTarifsSection