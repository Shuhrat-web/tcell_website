import React from "react";
import TSolutionBanner from "./components/Banner/TSolutionBanner";
import AdvantageSection from "./components/AdvantageSection";
import Decision from "./components/DecisionSection";

const TSolution = () => {
  return (
    <div className="t__container">
      <TSolutionBanner
        title="HR Решения для современных компаний"
        description="Современные технологические решения — действенная помощь HR-службе. Мы фокусируемся на знаниях и поведении, необходимых для создания добавленной ценности и оказания влияния на бизнес-результаты. Ключевые тенденции HR-технологий, которые принесут ощутимую пользу Вашей компании уже сегодня."
        url="/"
        img="/images/t_solution.svg"
      />
      <AdvantageSection/>
      <Decision className="my-32"/>
    </div>
  );
};

export default TSolution;
