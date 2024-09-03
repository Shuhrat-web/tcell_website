import Title from "@/components/Ui/Title/Title";
import React from "react";

const BecomeMillionerConditionsSection = () => {
  return (
    <div className="mt-16">
      <Title size="2xl" display="h4">
        Скидки
      </Title>

      <div className="bg-[#F0F0F0] p-4 rounded-[20px] mt-8">
        <p className="text-base font-normal leading-5 text-[#262626]">
          Также предусмотрены скидки при покупке большого количества ID:
        </p>
        <p className="text-base leading-5 text-[#262626] font-semibold mt-3">
          20 ID — 54 сомони (10% скидка)
        </p>
        <p className="text-base leading-5 text-[#262626] font-semibold mt-3">
          50 ID — 128 сомони (15% скидка)
        </p>
        <p className="text-base leading-5 text-[#262626] font-semibold mt-3">
          100 ID — 240 сомони (20% скидка)
        </p>
      </div>
    </div>
  );
};

export default BecomeMillionerConditionsSection;
