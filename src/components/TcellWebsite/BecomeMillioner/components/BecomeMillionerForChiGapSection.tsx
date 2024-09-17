'use client'
import ContainButton from '@/components/Ui/Buttons/ContainButton';
import Title from '@/components/Ui/Title/Title';
import { useTranslations } from 'next-intl';
import React from 'react'

const BecomeMillionerForChiGapSection = () => {
    const t = useTranslations("Millionaire")

  return (
    <section className="bg-[#F0F0F0] rounded-[20px] p-5 mt-6">
      <p className="text-[#262626] text-lg font-semibold">
        {t("chigap.title")}
      </p>
      <p className="text-[#262626] text-base font-normal mt-3">
        {t("chigap.description")}
      </p>
      <p className="text-[#262626] text-base font-normal">
        {t("chigap.forThis")}
      </p>
      <p className="text-[#262626] text-base font-normal">
        {t("chigap.first")}
      </p>
      <p className="text-[#262626] text-base font-normal">
        {t("chigap.second")}
      </p>
      <p className="text-[#262626] text-base font-normal">
        {t("chigap.third")}
        <span>
          <a
            href="https://wa.me/992927777777"
            className="text-primary underline decoration-1"
          >
            {t("chigap.whatsApp")}
          </a>
          {t("chigap.check")}
        </span>
      </p>
      <ContainButton
        url="tel: ++992707707707"
        extraClass="mt-4 w-full xl:w-[384px]"
        size="xl"
        round="xl"
      >
        {t("chigap.call")}
      </ContainButton>
    </section>
  );
}

export default BecomeMillionerForChiGapSection