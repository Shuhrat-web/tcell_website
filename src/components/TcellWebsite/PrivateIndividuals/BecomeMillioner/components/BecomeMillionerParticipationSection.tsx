import Title from "@/components/Ui/Title/Title";
import React from "react";
import { IParticipate } from "../lib/types/IBecomeMillionerTypes";
import Image from "next/image";

const BecomeMillionerParticipation = () => {
  const participates: IParticipate[] = [
    {
      id: 1,
      title: "По номеру",
      description: "Наберите 707 для покупки ID-номера. Звонок бесплатный!",
    },
    {
      id: 2,
      title: "По USSD–команде",
      description: "Наберите *707# для покупки ID-номера. Просто и удобно!",
    },
  ];
  return (
    <section className="mt-16">
      <Title size="2xl" display="h4">
        Как принять участие?
      </Title>
      <div className="grid items-end grid-cols-1 gap-6 xl:grid-cols-2 mt-5">
        <div className=" space-y-5">
          {participates.map((participates) => (
            <div
              key={participates.id}
              className="bg-[#F0F0F0] rounded-[20px] p-5"
            >
              <p className="text-[#262626] font-semibold text-[18px] leading-[22px]">
                {participates.title}
              </p>
              <p className="text-[#262626] font-normal text-base leading-5 mt-3">
                {participates.description}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-[#F0F0F0] rounded-[20px] h-full">
          <Image
            src={"/images/millionare_addon.webp"}
            width={704}
            height={244}
            alt=""
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default BecomeMillionerParticipation;
