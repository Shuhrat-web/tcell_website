import React from "react";
import PrivateIndividualsNewsSection from "./components/PrivateIndividualsNewsSection";
import PrivateIndividualsProductsSection from "./components/PrivateIndividualsProductsSectionProps";
import PrivateIndividualsFaqSection from "./components/PrivateIndividualsFaqSection";
import PrivateIndividualsAppsSection from "./components/PrivateIndividualsAppsSection";
import PrivateIndividualsTarifsSection from "./components/PrivateIndividualsTarifsSection";
import FromLeftAnimationProvider from "@/components/Ui/AnimationProviders/FromLeftAnimationProvider";
import ImageBanner from "@/components/Ui/Banners/ImageBanner";
import Link from "next/link";

const HomePage = () => {
  return (
    <FromLeftAnimationProvider>
      <div>
        <Link href="/ru/millionaire">
          <ImageBanner
            img="/images/millionaire_banner.webp"
            alt="privateIndividualsBanner"
          />
        </Link>
        <div className="t__container mt-24">
          <PrivateIndividualsNewsSection />
          <PrivateIndividualsTarifsSection className="my-24" />
          <PrivateIndividualsProductsSection className="mb-24" />
          <PrivateIndividualsAppsSection className="mb-24" />
          <PrivateIndividualsFaqSection />
        </div>
      </div>
    </FromLeftAnimationProvider>
  );
};

export default HomePage;
