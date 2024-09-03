import Title from "@/components/Ui/Title/Title";
import React from "react";
import Image from "next/image";

const BecomeMillionerParticipation = () => {
  return (
    <section className="mt-16">
      <Title size="2xl" display="h4">
        Как принять участие?
      </Title>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 mt-5">
        <div className="bg-[#F0F0F0] rounded-[20px] p-5">
          <p className="text-[#262626] font-semibold text-[18px] leading-[22px]">
            По номеру и USSD-команде
          </p>
          <p className="text-base font-normal leading-5 text-[#262626] mt-3">
            Чтобы принять участие, достаточно позвонить на короткий номер 707 или приобрести ID-номера, набрав команду *707#. Один ID стоит всего 3 сомони, и чем больше ID-номеров вы приобретаете, тем больше шансов на победу.
          </p>
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
