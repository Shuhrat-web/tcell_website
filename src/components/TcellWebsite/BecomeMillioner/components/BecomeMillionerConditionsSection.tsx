'use client'
import Title from "@/components/Ui/Title/Title";
import { useTranslations } from "next-intl";
import React from "react";

const BecomeMillionerConditionsSection = () => {
  const t = useTranslations("Millionaire")
  return (
    <div className="mt-16">
      <Title size="2xl" display="h4">
        {t("condition.title")}
      </Title>

      <div className="bg-[#F0F0F0] p-4 rounded-[20px] mt-8">
        <p className="text-base font-normal leading-5 text-[#262626]">
          {t("condition.description")}
        </p>
        <p className="text-base leading-5 text-[#262626] font-semibold mt-3">
          {t("condition.twentyId")}
        </p>
        <p className="text-base leading-5 text-[#262626] font-semibold mt-3">
          {t("condition.fiftyId")}
        </p>
        <p className="text-base leading-5 text-[#262626] font-semibold mt-3">
          {t("condition.oneHundredId")}
        </p>
      </div>
    </div>
  );
};

export default BecomeMillionerConditionsSection;
