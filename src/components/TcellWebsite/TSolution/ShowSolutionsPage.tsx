import BreadCrumbs from "@/components/Ui/BreadCrumbs/BreadCrumbs";
import { IBreadCrumb } from "@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes";
import { staticSolutions } from "@/lib/requests/resources/Solutions/lib/data/StaticSolutionsData";
import React from "react";
import SolutionContentBlock from "./components/SolutionContentBlock";

const ShowSolutionsPage = ({ id }: { id: number }) => {
  const solution = staticSolutions.find((el) => el.id === id);
  const breadCrumbs: IBreadCrumb[] = [
    { name: "T–Solution", href: "/t-solution", current: false },
    { name: solution?.name || "", href: "#", current: true },
  ];

  return (
    <div className="t__container">
      <BreadCrumbs links={breadCrumbs} />
      <div>
        {
          solution?.children.map((child) => (
            <SolutionContentBlock key={child.id} title={child.title} content={child.content} id={child.id}/>
          ))
        }
      </div>
    </div>
  );
};

export default ShowSolutionsPage;
