import React from "react";
import Image from "next/image";
import { IAppAddonCardProps } from "./lib/types/IAppAddonCardTypes";

const AppAddonCard = ({ googleLink, appLink, img }: IAppAddonCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <Image className="w-full h-full object-cover" src={img} height={504} width={384} unoptimized alt="app_addon" />
      <div className="flex gap-4 absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <a
          href={googleLink}
          target="_blank"
          className="rounded-lg text-center w-[152px]"
        >
          <Image
            src={`/images/google_store.svg`}
            width={152}
            height={47}
            unoptimized
            alt="Google play"
          />
        </a>
        <a
          href={appLink}
          target="_blank"
          className="rounded-lg text-center w-[152px]"
        >
          <Image
            src="/images/apple_store.svg"
            width={152}
            height={47}
            unoptimized
            alt="App store"
          />
        </a>
      </div>
    </div>
  );
};

export default AppAddonCard;
