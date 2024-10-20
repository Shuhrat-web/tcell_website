'use client'
import React from "react";
import SectionTitle from "@/components/Ui/Title/SectionTitle";
import TarifCard from "@/components/Ui/Cards/Tarif/TarifCard";
import { IForHomeTarifsSectionProps } from "../lib/types/IHomeBusinessTypes";
import { staticTarifs } from "@/lib/requests/resources/Tarifs/lib/data/StaticTarifsData";
import { useLocale } from "next-intl";

const ForHomeTarifsSection = ({ className }: IForHomeTarifsSectionProps) => {
  const locale = useLocale()

  return (
    <div className={className}>
      <SectionTitle
        titleText="Тарифы"
        routeTitle="Тарифы"
        route={`/${locale}/tarifs?category_id=2&module_id=3`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-11">
        {staticTarifs.filter(tarif => tarif.category_id === 2).slice(0,3).map((tarif) => (
          <TarifCard tarif={tarif} key={tarif.id} />
        ))}
        <div className='cf-integrated-support-4' />
      </div>
    </div>
  );
};

export default ForHomeTarifsSection;
