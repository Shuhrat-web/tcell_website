import React from "react";
import BecomeMillionerHeadSection from "./components/BecomeMillionerHeadSection";
import BecomeMillionerParticipationSection from "./components/BecomeMillionerParticipationSection";
import BecomeMillionerConditionsSection from "./components/BecomeMillionerConditionsSection";
import BecomeMillionerToSeeSection from "./components/BecomeMillionerToSeeSection";
import BecomeMillionerPrizeSection from "./components/BecomeMillionerPrizeSection";
import BecomeMillionerForChiGapSection from "./components/BecomeMillionerForChiGapSection";

const BecomeMillionerPage = () => {
  return (
    <div className="t__container md:px-40 lg:px-56">
      <BecomeMillionerHeadSection />
      <BecomeMillionerParticipationSection />
      <BecomeMillionerForChiGapSection/>
      <BecomeMillionerConditionsSection />
      {/* <BecomeMillionerToSeeSection /> */}
      <BecomeMillionerPrizeSection />
    </div>
  );
};

export default BecomeMillionerPage;
