import Title from "@/components/Ui/Title/Title";
import Image from "next/image";
import React from "react";

const BecomeMillionerPrizeSection = () => {
  return (
    <div className="mt-16">
      <Title size="2xl" display="h4">
        Даты проведения розыгрышей
      </Title>
      <div className="overflow-x-auto bg-[#F0F0F0] rounded-xl mt-8">
        <table className="mt-8 w-full">
          <thead>
            <tr>
              <th className="text-[14px] text-[#262626] leading-4 p-5"></th>
              <th className="text-[14px] text-[#262626] leading-4 p-5">
                Октябрь (05.10.2024)
              </th>
              <th className="text-[14px] text-[#262626] leading-4 p-5">
                Ноябрь (07.11.2024)
              </th>
              <th className="text-[14px] text-[#262626] leading-4 p-5">
                Декабрь (04.12.2024)
              </th>
              <th className="text-[14px] text-[#262626] leading-4 p-5">
                Январь (04.01.2025)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                1 приз
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                10 000 сомони
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                10 000 сомони
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                10 000 сомони
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                10 000 сомони
              </td>
            </tr>
            <tr>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                2 приз
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                15 000 сомони
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                15 000 сомони
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                15 000 сомони
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                15 000 сомони
              </td>
            </tr>
            <tr>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                3 приз
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                25 000 сомони
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                25 000 сомони
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                25 000 сомони
              </td>
              <td className="text-[14px] text-[#262626] leading-4 p-5 text-center">
                25 000 сомони
              </td>
            </tr>
          </tbody>
        </table>
        <div className="p-5">
          <p className="text-base text-[#262626] leading-5">
            Вы можете посмотреть трансляцию в прямом эфире на TV Varzish и на наших страницах в Instagram, Facebook,
            YouTube.
          </p>
          <p className="text-base text-[#262626] leading-5 mt-4">Финальный розыгрыш состоится 4 января 2025 года.</p>
        </div>
      </div>

      <div className="bg-[#F0F0F0] rounded-xl p-5 mt-6">
        <p className="text-[14px] text-black leading-[18px] font-normal">Лицензия Министерства финансов Республики Таджикистан №043/24 от 02.09.24</p>
      </div>
    </div>
  );
};

export default BecomeMillionerPrizeSection;
