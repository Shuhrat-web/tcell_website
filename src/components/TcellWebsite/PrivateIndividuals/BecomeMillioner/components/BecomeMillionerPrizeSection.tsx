import Title from "@/components/Ui/Title/Title";
import Image from "next/image";
import React from "react";

const BecomeMillionerPrizeSection = () => {
  return (
    <div className="mt-16">
      <Title size="2xl" display="h4">
        Призы
      </Title>
      <div className="overflow-x-auto">
      <table className="mt-8 w-full bg-[#F0F0F0] rounded-xl">
        <thead>
            <tr>
                <th className="text-[14px] text-[#141414] leading-4 p-5">Приз</th>
                <th className="text-[14px] text-[#141414] leading-4 p-5">Октябрь</th>
                <th className="text-[14px] text-[#141414] leading-4 p-5">Ноябрь</th>
                <th className="text-[14px] text-[#141414] leading-4 p-5">Декабрь</th>
                <th className="text-[14px] text-[#141414] leading-4 p-5">Январь</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">1 приз</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">10 000 сомони</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">10 000 сомони</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">10 000 сомони</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">10 000 сомони</td>
            </tr>
            <tr>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">2 приз</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">15 000 сомони</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">15 000 сомони</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">15 000 сомони</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">15 000 сомони</td>
            </tr>
            <tr>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">3 приз</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">25 000 сомони</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">25 000 сомони</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">25 000 сомони</td>
                <td className="text-[14px] text-[#141414] leading-4 p-5 text-center">25 000 сомони</td>
            </tr>
        </tbody>
      </table>

      </div>

      <Title size="2xl" display="h4" extraClass="mt-16">
        Финальный призовой фонд
      </Title>
      <div className="mt-8">
        <Image src={"/images/millionare_finale_prize.png"} width={1200} height={320} alt="Prize" unoptimized />
      </div>
    </div>
  );
};

export default BecomeMillionerPrizeSection;
