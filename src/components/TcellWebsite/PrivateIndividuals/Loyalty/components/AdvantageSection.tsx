import AdvantageCard from "@/components/Ui/Cards/Advantage/AdvantageCard";
import React from "react";
import { IPrivateIndividualsAdvantageSectionProps } from "../lib/types/ILoyalityPageTypes";
import SectionTitle from "@/components/Ui/Title/SectionTitle";
import { IAdvantage } from "@/lib/requests/resources/Advantage/lib/types/IAdvantageTypes";
import AppAddonCard from "@/components/Ui/Cards/AppAddon/AppAddonCard";

const AdvantageSection = ({ className }: IPrivateIndividualsAdvantageSectionProps) => {
  const advantages: IAdvantage[] = [
    {
      id: 1,
      title: "Пополняйте баланс",
      description: "Соберите тариф под свои предпочтения",
    },
    {
      id: 2,
      title: "Получайте бонусы",
      description: "Соберите тариф под свои предпочтения",
    },
    {
      id: 3,
      title: "Меняйте тарифы",
      description: "Соберите тариф под свои предпочтения",
    },
    {
      id: 4,
      title: "Узнавайте о расходах",
      description: "С нами можно получать кэшбеки мегабайтами и не только",
    },
  ];
  return (
    <div className={className}>
      <SectionTitle titleText="Преимущества" />
      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="flex justify-between flex-col">
          {advantages.slice(0, 2).map((advantage) => (
            <AdvantageCard key={advantage.id} advantage={advantage} />
          ))}
        </div>
        <AppAddonCard googleLink="" appLink="" img="/images/app_addon.png" />
        <div className="flex justify-between flex-col">
          {advantages.slice(2, 4).map((advantage) => (
            <AdvantageCard key={advantage.id} advantage={advantage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;
