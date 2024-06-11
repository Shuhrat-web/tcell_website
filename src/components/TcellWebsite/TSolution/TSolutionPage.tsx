import React from "react";
import TSolutionBanner from "./components/Banner/TSolutionBanner";
import AdvantageSection from "./components/AdvantageSection";
import Decision from "./components/DecisionSection";
import FadeOutProvider from "@/components/Ui/AnimationProviders/FadeOutProvider";

const TSolution = () => {
  return (
    <FadeOutProvider>
      <div className="t__container">
        <TSolutionBanner
          title="HR Решения для современных компаний"
          description="Современные технологические решения — действенная помощь HR-службе. Мы фокусируемся на знаниях и поведении, необходимых для создания добавленной ценности и оказания влияния на бизнес-результаты. Ключевые тенденции HR-технологий, которые принесут ощутимую пользу Вашей компании уже сегодня."
          url="/"
          img="/images/t_solution.svg"
        />
        <AdvantageSection className="mt-8"/>
        <Decision className="my-32"/>
      </div>
    </FadeOutProvider>
  );
};

export default TSolution;
