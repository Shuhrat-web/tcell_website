import React from "react";
import Title from "../../Title/Title";
import ContainButton from "../../Buttons/ContainButton";
import Image from "next/image";
import { IMaintenanceCardProps } from "./lib/types/IMaintenanceCardTypes";

const MaintenanceCard = ({ maintenance }: IMaintenanceCardProps) => {
  return (
    <div className="w-full border rounded-3xl border-[#EDEDED]">
      <Image
        height={128}
        width={3884}
        unoptimized
        alt="photo"
        src={maintenance.img}
      />
      <div className="px-8 pb-6">
        <Title extraClass="mt-12" size="xl" display="h4">
          {maintenance.name}
        </Title>
        <p className="text-[#374151] text-[18px] font-normal mt-4">
          {maintenance.desctiption}
        </p>
        <ContainButton extraClass="w-full mt-12" type="secondary">
          Подробнее
        </ContainButton>
      </div>
    </div>
  );
};

export default MaintenanceCard;
