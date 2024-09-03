import ContainButton from "@/components/Ui/Buttons/ContainButton";
import Title from "@/components/Ui/Title/Title";
import React from "react";

const BecomeMillionerToSeeSection = () => {
  return (
    <div className="mt-16">
      <Title size="2xl" display="h4">
        Где посмотреть?
      </Title>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F0F0F0] p-6 rounded-3xl">
            <p className="text-[18px] leading-[22px] text-[#262626] font-semibold">По ссылке</p>
            <p className="text-base leading-5 text-[#262626] font-normal mt-3">Вы можете посмотреть трансляцию в прямом эфире</p>
            <ContainButton type="white" extraClass="mt-6" disabled={true}>Скоро</ContainButton>
        </div>
        <div className="bg-[#F0F0F0] p-6 rounded-3xl">
            <p className="text-[18px] leading-[22px] text-[#262626] font-semibold">В приложение MyTcell</p>
            <p className="text-base leading-5 text-[#262626] font-normal mt-3">Скачивайте «MyTcell» и смотрите трансляцию прямо там!</p>
            <ContainButton type="primary" extraClass="mt-6" disabled={true}>Скоро</ContainButton>
        </div>
      </div>
    </div>
  );
};

export default BecomeMillionerToSeeSection;
