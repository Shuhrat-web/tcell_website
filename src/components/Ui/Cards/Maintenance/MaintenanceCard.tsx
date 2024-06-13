import React from "react";
import { IMaintenanceCardProps } from "./lib/types/IMaintenanceCardTypes";
import Image from "next/image";

const MaintenanceCard = ({ service }: IMaintenanceCardProps) => {
  return (
      <div className="t__card__secondary">
        <Image
          src={service.img}
          width={48}
          height={48}
          unoptimized
          alt={service.name}
        />
        <div className="text-lg lg:text-[22px] font-medium leading-[26px] text-[#374151] mt-8">
          {service.name}
        </div>
        <div className="text-[16px] text-[#9CA3AF] mt-4">
          {service.desctiption}
        </div>
      </div>
  );
};

export default MaintenanceCard;
