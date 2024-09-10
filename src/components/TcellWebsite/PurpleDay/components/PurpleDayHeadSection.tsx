'use client'
import Title from "@/components/Ui/Title/Title";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PurpleDayHeadSection = () => {
  const t = useTranslations("Purple")
  return (
    <section>
      <div className="text-center rounded-3xl py-8">
        <Title display="h1" size="4xl" extraClass="text-[#141414]">
            {t("head.title")}
        </Title>
        <p className="font-medium text-[18px] text-[#595959] mt-6">{t("head.description")}</p>
      </div>
      <div className="flex justify-center">
        <Image src={"/images/purple-banner.webp"} width={792} height={320} alt="Millionare" unoptimized/>
      </div> 
    </section>
  );
};

export default PurpleDayHeadSection;
