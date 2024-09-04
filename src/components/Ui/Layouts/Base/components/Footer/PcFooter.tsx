"use client";
import React, { useEffect, useState } from "react";
import { IFooterRow } from "../../lib/types/IBaseLayoutTypes";
import FooterRow from "./FooterRow";
import LogoWithText from "@/components/Ui/LogoWithText";
import Title from "@/components/Ui/Title/Title";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

const PcFooter = () => {
  const [showFooter, setShowFooter] = useState(true)
  const locale = useLocale();
  const query = useSearchParams()

  useEffect(() => {
    const showFooterParam = query.get("show_navigation")
    if(showFooterParam === "false") {
      setShowFooter(false)
    }
  }, [])

  const footerRows: IFooterRow[] = [
    {
      title: "Частным лицам",
      children: [
        {
          url: `/${locale}/`,
          name: "Главная",
        },
        {
          url: `/${locale}/posts`,
          name: "Новости",
        },
        {
          url: `/${locale}/private-individuals/ussd-commands?module_id=1`,
          name: "USSD–КОМАНДЫ",
        },
        {
          url: `/${locale}/tarifs?category_id=1&module_id=1`,
          name: "Тарифы",
        },
        {
          url: `/${locale}/help/faq?module_id=1`,
          name: "Помощь",
        },
        {
          url: `/${locale}/help/service-points?module_id=1`,
          name: "Точки обслуживания",
        },
      ],
    },
    {
      title: "Бизнесу",
      children: [
        {
          url: `/${locale}/`,
          name: "Главная",
        },
        {
          url: `/${locale}/posts`,
          name: "Новости",
        },
        {
          url: `/${locale}/tarifs?category_id=1&module_id=1`,
          name: "Тарифы",
        },
      ],
    },
    {
      title: "Для дома",
      children: [
        {
          url: `/${locale}/`,
          name: "Главная",
        },
        {
          url: `/${locale}/posts`,
          name: "Новости",
        },
        {
          url: `/${locale}/tarifs?category_id=1&module_id=1`,
          name: "Тарифы",
        },
      ],
    },
    {
      title: "T–Solution",
      children: [
        {
          url: `/${locale}/`,
          name: "Главная",
        },
        {
          url: `/${locale}/t-solution/chat-bot?module_id=4`,
          name: "Чат-бот",
        },
      ],
    },
  ];

  const lcLinks: string[] = [
    "(с) 2024 ЗАО «Индиго Таджикистан»",
    "Условия оказания услуг",
    "Публичная оферта",
    "Политика конфеденциальности",
    "Лицензии",
  ]; 
  return (
    <footer className={clsx("bg-[#F2F3F7] pb-16 pt-8 mt-10", {'hidden': !showFooter})}>
      <div className="t__container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {footerRows.map((row, i) => (
            <FooterRow key={i} footerRow={row} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2 xl:flex justify-between">
          <div>
            <Title>Контакты</Title>
            <ul className="flex items-baseline gap-3 mt-4">
              <li>
                <Image
                src={"/phone_footer.svg"}
                width={17}
                height={17}
                unoptimized
                alt="Phone_footer"
                />
              </li>
              <li>7070 <br /> <span className="text-[#9CA3AF]">для абонетов Tcell</span></li>
            </ul>
            <ul className="flex items-baseline gap-3 mt-4">
              <li>
                <Image
                src={"/phone_footer.svg"}
                width={17}
                height={17}
                unoptimized
                alt="Phone_footer"
                />
              </li>
              <li>+992 93 505 0000 <br /> <span className="text-[#9CA3AF]">для всех абонетов</span></li>
            </ul>
          </div>

          <div>
            <Title>Адрес</Title>
            <ul className="mt-4">
              <li className="flex gap-3">
                <Image
                src={"/address_footer.svg"}
                width={20}
                height={20}
                unoptimized
                alt="Address-footer" 
                /> г. Душанбе, пр. Рудаки 34
              </li>
              <li className="flex gap-3 mt-3">
                <Image
                src={"/envelope-open.svg"}
                width={20}
                height={20}
                unoptimized
                alt="Address-footer" 
                /> hr-info@tcell.tj
              </li>
            </ul>
          </div>

          <div>
            <Title>Приложения</Title>
            <ul className="flex gap-6 mt-4">
              <li className="flex gap-3">
                <Image
                src={"/images/myTcell.svg"}
                width={25}
                height={25}
                alt="MyTcell"
                /> Мой Tcell
              </li>
              <li className="flex gap-3">
                <Image 
                src={"/images/chiGap.svg"}
                width={25}
                height={25}
                alt="ChiGap"
                /> Чигап
              </li>
            </ul>
          </div>

          <div>
            <Title>Соцсети</Title>
            <ul className="mt-4 flex gap-3 text-xl">
              <li>
                <a target="_blank" href="https://www.instagram.com/tcell.tj" className="text-[#9CA3AF]">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/tcellpublic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF]"
                >
                  <FaTelegramPlane />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center py-4 text-sm text-secondary my-12 border-y border-secondary">
          <p>
            Используя наш сайт, вы даете согласие на обработку файлов Cookies и
            других пользовательских данных, в соответствии с 
            <span className="text-primary">Политикой конфиденциальности</span>
          </p>
        </div>
        <ul className="flex flex-wrap gap-4 text-secondary justify-between text-sm">
          <li>
            <LogoWithText fill="#374151" width={72} height={24} />
          </li>
          {lcLinks.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default PcFooter;
