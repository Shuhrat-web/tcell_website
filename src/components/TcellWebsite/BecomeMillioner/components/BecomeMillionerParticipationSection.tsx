'use client'
import Title from "@/components/Ui/Title/Title";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContainButton from "@/components/Ui/Buttons/ContainButton";

const BecomeMillionerParticipation = () => {
  const t = useTranslations("Millionaire")
  return (
    <section className="mt-16">
      <Title size="2xl" display="h4">
        {t("participation.title")}
      </Title>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 mt-5">
        <div className="bg-[#F0F0F0] rounded-[20px] p-5">
          <p className="text-[#262626] font-semibold text-[18px] leading-[22px]">
            {t("participation.byNumber")}
          </p>
          <p className="text-base font-normal leading-5 text-[#262626] mt-3">
            {t("participation.description")}
          </p>
          <ContainButton
            url="tel:707"
            extraClass="mt-4 w-full"
            size="xl"
            round="xl"
          >
            {t("participation.call")}
          </ContainButton>
        </div>
        <div className="bg-[#F0F0F0] rounded-[20px] h-full pt-[10px]">
          <Image
            src={t("participation.srcImg")}
            width={704}
            height={400}
            alt=""
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default BecomeMillionerParticipation;
