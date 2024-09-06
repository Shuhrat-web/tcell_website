import BreadCrumbs from "@/components/Ui/BreadCrumbs/BreadCrumbs";
import { IBreadCrumb } from "@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes";
import Title from "@/components/Ui/Title/Title";
import React from "react";
import BusinessCardsSection from "./components/BusinessCardsSection";
import FadeOutProvider from "@/components/Ui/AnimationProviders/FadeOutProvider";

const ChatBotPage = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    { name: "t-solution", href: "/ru/t-solution", current: false },
    { name: "Чат бот", href: "", current: true },
  ];

  const texts = [
    {
      id: 1,
      conText:
        "Основное преимущество применения чат-бота в работе HR — это автоматизация рутинных операций и сбор сведений в единую систему.",
    },
    {
      id: 2,
      conText:
        "Чат-боты собирают и систематизируют информацию о сотрудниках и организации. Они умеют вводить и извлекать сведения из файлов, обрабатывать их и трансформировать в полезную информацию. При входе в промо зоне, мы расположили планшет с нашим HR ботом, вы сможете посмотреть на деле, как это работает. Мы являемся сертифицированными представителями по разработке chatbot- ов и голосовых роботов.",
    },
  ];
  return (
    <FadeOutProvider>
      <div className="t__container">
        <BreadCrumbs links={breadcrumbPages} />
        <Title extraClass="mt-11 mb-8" size="3xl" display="h2">
          CHATBOT/Голосовой робот
        </Title>
        <div className="font-normal">
          {texts.map((text) => (
            <p
              className="font-normal text-[16px] text-secondary-50 mt-5 leading-8"
              key={text.id}
            >
              {text.conText}
            </p>
          ))}
        </div>
          <BusinessCardsSection className="mt-16"/>
      </div>
    </FadeOutProvider>
  );
};

export default ChatBotPage;
