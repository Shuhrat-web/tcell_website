'use client'
import { IPurpleDayCardProps } from "@/components/Ui/Cards/PurpleDay/lib/types/IPurpleDayCardTypes";
import PurpleDayCard from "@/components/Ui/Cards/PurpleDay/PurpleDayCard";
import Title from "@/components/Ui/Title/Title";
import { useTranslations } from "next-intl";
import React from "react";

const PurpleDayAdvantageSection = () => {
    const t = useTranslations("Purple")
  const purples: IPurpleDayCardProps[] = [
    {
      id: 1,
      name: t("advantages.costName"),
      description: t("advantages.costDescription"),
      icon: "/purple_cost.svg",
    },
    {
      id: 2,
      name: t("advantages.trafficName"),
      description: t("advantages.trafficDescription"),
      icon: "/purple_traffic.svg",
    },
    {
      id: 3,
      name: t("advantages.actionName"),
      description: t("advantages.actionDescription"),
      icon: "/purple_actions.svg",
    },
    {
      id: 4,
      name: t("advantages.ussdName"),
      description: t("advantages.ussdDescription"),
      icon: "/purple_ussd.svg",
    },
    {
      id: 5,
      name: t("advantages.infinityName"),
      description: t("advantages.infinityDescription"),
      icon: "/purple_infinity.svg",
    },
  ];

  return (
    <div className="mt-16">
      <Title display="h1" size="4xl" extraClass="text-[#141414]">
        {t("advantages.title")}
      </Title>
      <div className="grid grid-cols-12 gap-4 mt-8">
        {purples.map((purple, i) => (
          <div key={purple.id} className={`${i === 0 || i === 1 ? "col-span-12 xl:col-span-6" : "col-span-12 xl:col-span-4"}`}>
            <PurpleDayCard
              name={purple.name}
              description={purple.description}
              icon={purple.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurpleDayAdvantageSection;
