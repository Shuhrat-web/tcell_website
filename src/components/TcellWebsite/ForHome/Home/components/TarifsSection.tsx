import React from "react";
import SectionTitle from "@/components/Ui/Title/SectionTitle";
import { ITarif } from "@/lib/requests/resources/Tarifs/lib/types/ITarifTypes";
import TarifCard from "@/components/Ui/Cards/Tarif/TarifCard";
import { ITarifSectionProps } from "../lib/types/IHomeBusinessTypes";
import { HiGlobeAlt, HiOutlinePhone, HiMail } from "react-icons/hi";

const TarifsSection = ({ className }: ITarifSectionProps) => {
  const tarifs: ITarif[] = [
    {
      id: 1,
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
  ];
  return (
    <div className={className}>
      <SectionTitle
        titleText="Тарифы"
        routeTitle="Все тарифы"
        route="/tarifs"
      />
      <div className="grid grid-cols-3 gap-6 mt-16">
        {tarifs.map((tarif) => (
          <TarifCard tarif={tarif} key={tarif.id} />
        ))}
      </div>
    </div>
  );
};

export default TarifsSection;
