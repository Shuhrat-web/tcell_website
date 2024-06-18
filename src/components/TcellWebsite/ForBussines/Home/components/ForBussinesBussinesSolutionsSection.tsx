import clsx from "clsx"
import { IForBussinesSolutionsSectionProps } from "../lib/types/IForBussinessHomePageTypes"
import Title from "@/components/Ui/Title/Title"
import SolutionCard from "@/components/Ui/Cards/Solution/Solution"
import { staticBussinesSolutions } from "@/lib/requests/resources/BussinesSolutions/lib/data/StaticBussinesSolutionData"

const ForBussinesBussinesSolutionsSection = ({className}:IForBussinesSolutionsSectionProps) => {
  return (
    <section className={clsx(className,'')}>
      <Title size='3xl' display='h3'>
        Бизнес решения
      </Title>
      <div className="grid grid-cols-12 gap-6 mt-8">
        {staticBussinesSolutions.map((bussinesSolution, i) => (
          <div className={`${i === 0 || i === 1 ? 'col-span-12 md:col-span-6':'col-span-12 md:col-span-6 xl:col-span-4' }`} key={bussinesSolution.id}>
            <SolutionCard solution={bussinesSolution}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ForBussinesBussinesSolutionsSection