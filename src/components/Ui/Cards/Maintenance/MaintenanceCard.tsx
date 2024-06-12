import React from "react";
import { IMaintenanceCardProps } from "./lib/types/IMaintenanceCardTypes";
import Image from "next/image";
import Title from "../../Title/Title";

const MaintenanceCard = ({ maintenance, option, card }: IMaintenanceCardProps) => {
  return (
    <div>
      <Title size="2xl" display="h3" extraClass="mb-4">
        {maintenance.title}
      </Title>

      <div className="grid grid-cols-2 gap-16">
        <p className="text-[#9CA3AF] text-xl">
          {maintenance.description}
        </p>
        <div className="flex gap-8">
            <span>
              <p className="text-[22px] font-medium text-[#374151]">
                {option.optionTitle}
              </p>
              <p className="text-base text-[#9CA3AF] font-normal">
                {option.optionDescription}
              </p>
            </span>

        </div>
      </div>
      
      <div className="t__card__secondary">
        <Image
          src={card.src}
          width={48}
          height={48}
          unoptimized
          alt={card.cardTitle}
        />
        <div className="text-[22px] font-medium leading-[26px] text-[#374151] mt-8">
          {card.cardTitle}
        </div>
        <div className="text-[18px] text-[#9CA3AF] mt-4">
          {card.cardDescription}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;
