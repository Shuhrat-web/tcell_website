import React from 'react'
import { IForBussinessAdventagesSection } from '../lib/types/IForBussinessHomePageTypes'
import clsx from 'clsx'
import { IAdvantage } from '@/lib/requests/resources/Advantage/lib/types/IAdvantageTypes';
import SectionTitle from '@/components/Ui/Title/SectionTitle';
import AdvantageCard from '@/components/Ui/Cards/Advantage/AdvantageCard';
import AppAddonCard from '@/components/Ui/Cards/AppAddon/AppAddonCard';

const ForBussinessAdventagesSection = ({className}:IForBussinessAdventagesSection) => {
  const advantages: IAdvantage[] = [
    {
      id: 1,
      title: "Колл-центр",
      description: "Соберите тариф под свои предпочтения",
    },
    {
      id: 2,
      title: " Торговый представитель",
      description: "Соберите тариф под свои предпочтения",
    },
    {
      id: 3,
      title: "Короткий номер",
      description: "Соберите тариф под свои предпочтения",
    },
    {
      id: 4,
      title: "Интернет для офиса",
      description: "С нами можно получать кэшбеки мегабайтами и не только",
    },
  ];
  return (
    <section className={clsx(className,'')}>
      <SectionTitle titleText="Преимущества" />
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="flex gap-6 xl:gap-2 justify-between flex-col">
          {advantages.slice(0, 2).map((advantage) => (
            <AdvantageCard key={advantage.id} advantage={advantage} />
          ))}
        </div>
        <AppAddonCard googleLink="https://play.google.com/store/apps/details?id=tj.tcell.odp" appLink="https://apps.apple.com/tj/app/my-tcell/id966493756" img="/images/app_addon.png" />
        <div className="flex  gap-6 xl:gap-2 justify-between flex-col">
          {advantages.slice(2, 4).map((advantage) => (
            <AdvantageCard key={advantage.id} advantage={advantage} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForBussinessAdventagesSection