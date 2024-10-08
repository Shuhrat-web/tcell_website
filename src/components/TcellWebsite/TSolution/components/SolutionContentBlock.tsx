'use client'
import Title from "@/components/Ui/Title/Title";
import { ISolution, ISolutionChildren, ISolutionPost } from "@/lib/requests/resources/Solutions/lib/types/ISolutionsRequestTypes";
import React from "react";

const SolutionContentBlock = ({title, content}: ISolutionChildren ) => {
  return (
    <div className="md:px-32">
      <Title size="2xl" display="h2" extraClass="mt-12">
        {title}
      </Title>
      <div
        dangerouslySetInnerHTML={{ __html: content}}
        className="text-secondary-50"
      ></div>
    </div>
  );
};

export default SolutionContentBlock;
