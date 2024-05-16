import BreadCrumbs from "@/components/Ui/BreadCrumbs/BreadCrumbs";
import { IBreadCrumb } from "@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes";
import Title from "@/components/Ui/Title/Title";
import React from "react";

const ShowPostsPage = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    { name: "Тарифы", href: "", current: false },
    { name: "Название тарифа", href: "/news", current: true },
  ];
  const texts = [
    {
      id: 1,
      conText:
        "Благодаря использованию передовой технологии GPON, с гарантированным высоким качеством, жители города Турсунзаде смогут в режиме онлайн смотреть фильмы в HD-качестве, проходить курсы и играть в игры: интернета хватит на всех.",
    },
    {
      id: 2,
      conText:
        "Уже сегодня сеть высокоскоростного домашнего интернета TezNet доступна жителям более 4000 квартир домов в 1-ом и 2-ом микрорайонах города Турсунзаде. В ближайшие дни компания планирует расширение сети TezNet в остальных микрорайонах города.",
    },
    {
      id: 3,
      conText:
        `Заявки на подключение вы можете оставить по ссылке teznet.tj/zona-pokrytiya-teznet/ или по номеру: 2000 (для абонентов Tcell) и 771112000 (для абонентов других операторов).`,
    },
  ];
  return (
    <div className="t__container">
      <BreadCrumbs links={breadcrumbPages} />
      <Title extraClass="mt-11 mb-8" size="2xl" display="h3">
        Встречайте! Высокоскоростной домашний интернет TezNet от Tcell теперь в
        Турсунзаде!
      </Title>
      {texts.map((text) => (
        <p key={text.id} className="text-[#9CA3AF] text-xl font-normal leading-6 mt-6">{text.conText}</p>
      ))}
    </div>
  );
};

export default ShowPostsPage;
