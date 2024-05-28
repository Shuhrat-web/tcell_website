import React from "react";
import { IMaintenanceSectionProps } from "../lib/types/IServicePageTypes";
import MaintenanceCard from "@/components/Ui/Cards/Maintenance/MaintenanceCard";
import { IService } from "@/lib/requests/resources/Service/lib/IServicesTypes";

const MaintenanceSection = ({ className }: IMaintenanceSectionProps) => {
  const lists: IService[] = [
    {
      id: 1,
      name: "Услуга «Тренер»",
      desctiption: "Lorem ipsum",
      img: "/images/services/service_img.png",
    },
    {
      id: 2,
      name: "Пакет интернет +",
      desctiption: "Lorem ipsum",
      img: "/images/services/service_img.png",
    },
    {
      id: 3,
      name: "Пакет SMS экстра",
      desctiption: "Lorem ipsum",
      img: "/images/services/service_img.png",
    },
    {
      id: 4,
      name: "Услуга «Тренер»",
      desctiption: "Lorem ipsum",
      img: "/images/services/service_img.png",
    },
    {
      id: 5,
      name: "Услуга «Тренер»",
      desctiption: "Lorem ipsum",
      img: "/images/services/service_img.png",
    },
    {
      id: 6,
      name: "Услуга «Тренер»",
      desctiption: "Lorem ipsum",
      img: "/images/services/service_img.png",
    },
    {
      id: 7,
      name: "Услуга «Тренер»",
      desctiption: "Lorem ipsum",
      img: "/images/services/service_img.png",
    },
    {
      id: 8,
      name: "Услуга «Тренер»",
      desctiption: "Lorem ipsum",
      img: "/images/services/service_img.png",
    },
    {
      id: 9,
      name: "Услуга «Тренер»",
      desctiption: "Lorem ipsum",
      img: "/images/services/service_img.png",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {lists.map((maintanence) => (
          <MaintenanceCard maintenance={maintanence} />
        ))}
      </div>
    </div>
  );
};

export default MaintenanceSection;
