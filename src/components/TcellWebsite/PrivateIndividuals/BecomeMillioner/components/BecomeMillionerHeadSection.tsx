import Title from "@/components/Ui/Title/Title";
import Image from "next/image";
import React from "react";

const BecomeMillionerHeadSection = () => {
  return (
    <section>
      <div className="text-center rounded-3xl py-8">
        <Title display="h1" size="4xl" extraClass="text-[#141414]">
          Стань миллионером!
        </Title>
        <p className="font-medium text-[18px] text-[#595959] mt-6">Покупайте ID-номера всего за 3 сомони и выиграйте миллион! Чем больше номеров, тем больше шансов!</p>
      </div>
      <div className="flex justify-center">
        <Image src={"/images/millionare.png"} width={792} height={320} alt="Millionare" unoptimized/>
      </div> 
    </section>
  );
};

export default BecomeMillionerHeadSection;
