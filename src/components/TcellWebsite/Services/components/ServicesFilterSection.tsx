import React from "react";
import { IServicesFilterSectionProps } from "../lib/types/IServicePageTypes";
import { ISortingCardData } from "@/components/Ui/Cards/Filters/lib/types/IFiltersCardTypes";
import SortTypeSelectionCard from "@/components/Ui/Cards/Filters/SortTypeSelectionCard";

const ServicesFilterSecrion = ({ className }: IServicesFilterSectionProps) => {
  const sortingFiltersData: ISortingCardData[] = [
    {
      id: 1,
      title: "Сервисы Tcell",
      active: true,
      iconSrc: "/images/services/tcell_icon.svg",
    },
    {
      id: 2,
      title: "Видео сервисы",
      active: false,
      iconSrc: "/images/services/video.svg",
    },
    {
      id: 3,
      title: "Музыкальные сервисы",
      active: false,
      iconSrc: "/images/services/music.svg",
    },
    {
      id: 4,
      title: "Для детей",
      active: false,
      iconSrc: "/images/services/star.svg",
    },
    {
      id: 5,
      title: "Игровые сервисы",
      active: false,
      iconSrc: "/images/services/game.svg",
    },
  ];
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[18px]">
        {sortingFiltersData.map((data) => (
          <SortTypeSelectionCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ServicesFilterSecrion;
