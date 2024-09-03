'use client'
import Title from "@/components/Ui/Title/Title";
import { useTranslations } from "next-intl";
import React from "react";

const BecomeMillionerPrizeSection = () => {
  const t = useTranslations("Millionaire")
  return (
    <div className="mt-16">
      <Title size="2xl" display="h4">
        {t("prize.title")}
      </Title>
      <div className="overflow-x-auto bg-[#F0F0F0] rounded-xl mt-8">
        <table className="mt-8 w-full">
          <thead>
            <tr>
              <th className="text-[14px] text-[#262626] leading-4 p-5"></th>
              <th className="text-[14px] text-[#262626] leading-4 p-5">
              {t("prize.october")}
              </th>
              <th className="text-[14px] text-[#262626] leading-4 p-5">
              {t("prize.november")}
              </th>
              <th className="text-[14px] text-[#262626] leading-4 p-5">
              {t("prize.december")}
              </th>
              <th className="text-[14px] text-[#262626] leading-4 p-5">
              {t("prize.january")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.firstPrize")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.firstPrizeSomoni")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.firstPrizeSomoni")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.firstPrizeSomoni")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.firstPrizeSomoni")}
              </td>
            </tr>
            <tr>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.secondPrize")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.secondPrizeSomoni")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.secondPrizeSomoni")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.secondPrizeSomoni")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.secondPrizeSomoni")}
              </td>
            </tr>
            <tr>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.thirdPrize")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.thirdPrizeSomoni")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.thirdPrizeSomoni")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.thirdPrizeSomoni")}
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
              {t("prize.thirdPrizeSomoni")}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="p-5">
          <p className="text-base text-[#262626] leading-[20px]">
          {t("prize.watchOnline")}
          </p>
          <p className="text-base text-[#262626] leading-[20px] mt-4">{t("prize.dateFinalePrize")}</p>
        </div>
      </div>

      <div className="bg-[#F0F0F0] rounded-xl p-5 mt-6">
        <p className="text-[14px] text-black leading-[18px] font-normal">{t("prize.licenses")}</p>
      </div>
    </div>
  );
};

export default BecomeMillionerPrizeSection;
