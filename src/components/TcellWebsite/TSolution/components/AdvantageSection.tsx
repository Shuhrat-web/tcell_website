import SectionTitle from '@/components/Ui/Title/SectionTitle'
import React from 'react'
import BenefitCard from '@/components/Ui/Cards/Benefit/BenefitCard'
import { IBenefit } from '@/lib/requests/resources/Benefits/lib/types/IBenefitTypes'
import { IAdvantageSectionProps } from '../lib/types/ITSolutionPageTypes'

const AdvantageSection = ({className}: IAdvantageSectionProps) => {
    const advantages: IBenefit[] = [
        {
            id: 1,
            icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 43.0566C34.5228 43.0566 43.0527 34.5267 43.0527 24.0039C43.0527 13.4811 34.5228 4.95117 24 4.95117C13.4772 4.95117 4.94727 13.4811 4.94727 24.0039C4.94727 34.5267 13.4772 43.0566 24 43.0566ZM32.0155 20.5878L23.4418 29.1615C23.0845 29.5187 22.5999 29.7193 22.0947 29.7193C21.5895 29.7193 21.105 29.5187 20.7477 29.1615L16.9372 25.3509C16.7552 25.1752 16.61 24.9649 16.5102 24.7325C16.4103 24.5 16.3578 24.25 16.3556 23.997C16.3534 23.7441 16.4016 23.4932 16.4974 23.259C16.5932 23.0249 16.7346 22.8122 16.9135 22.6333C17.0924 22.4544 17.3052 22.3129 17.5393 22.2171C17.7735 22.1213 18.0243 22.0731 18.2773 22.0753C18.5303 22.0775 18.7803 22.13 19.0128 22.2299C19.2452 22.3298 19.4555 22.4749 19.6312 22.6569L22.0947 25.1204L29.3214 17.8937C29.4972 17.7117 29.7074 17.5666 29.9399 17.4667C30.1723 17.3669 30.4223 17.3143 30.6753 17.3121C30.9283 17.3099 31.1792 17.3581 31.4133 17.4539C31.6475 17.5497 31.8602 17.6912 32.0391 17.8701C32.218 18.049 32.3595 18.2617 32.4553 18.4958C32.5511 18.73 32.5993 18.9809 32.5971 19.2339C32.5949 19.4868 32.5423 19.7369 32.4425 19.9693C32.3426 20.2018 32.1975 20.412 32.0155 20.5878Z" fill="#A78BFA"/>
            </svg>
            ,
            title: "Доступно",
            description: "Ценность, которую Вы получите, превышает стоимость услуг."
        },
        {
            id: 2,
            icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33 11C34.0609 11 35.0783 10.5786 35.8284 9.82843C36.5786 9.07828 37 8.06087 37 7C37 5.93913 36.5786 4.92172 35.8284 4.17157C35.0783 3.42143 34.0609 3 33 3C31.9391 3 30.9217 3.42143 30.1716 4.17157C29.4214 4.92172 29 5.93913 29 7C29 8.06087 29.4214 9.07828 30.1716 9.82843C30.9217 10.5786 31.9391 11 33 11ZM22.934 38.2268C24.5288 38.5458 26.0873 37.5359 26.4477 35.9499L27.8 30L32 34V44C32 45.1046 32.8954 46 34 46C35.1046 46 36 45.1046 36 44V32.2857C36 31.4647 35.6635 30.6795 35.069 30.1133L31.8 27L33 21C34.3704 22.5703 36.0611 23.8289 37.9585 24.6914C39.2524 25.2795 40.6219 25.674 42.0231 25.8655C43.1082 26.0138 44 25.1122 44 24.017C44 22.9087 43.0824 22.0355 41.9938 21.8269C39.2668 21.3043 36.8519 19.636 35.4 17.2L33.4 14C32.68 12.8 31.4 12 30 12C29.4 12 29 12.2 28.4 12.2L19.8311 15.8253C18.7212 16.2949 18 17.3831 18 18.5882V24C18 25.1046 18.8954 26 20 26C21.1046 26 22 25.1046 22 24V19.2L25.6 17.8L22.4 34L14.6023 32.4086C13.4977 32.1832 12.4203 32.8985 12.1992 34.0039C11.9787 35.1063 12.6937 36.1787 13.7961 36.3992L22.934 38.2268ZM8 18C7.46957 18 6.96086 17.7893 6.58579 17.4142C6.21071 17.0391 6 16.5304 6 16C6 15.4696 6.21071 14.9609 6.58579 14.5858C6.96086 14.2107 7.46957 14 8 14H12C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18H8ZM10 10C9.46957 10 8.96086 9.78929 8.58579 9.41421C8.21071 9.03914 8 8.53043 8 8C8 7.46957 8.21071 6.96086 8.58579 6.58579C8.96086 6.21071 9.46957 6 10 6H18C19.1046 6 20 6.89543 20 8C20 9.10457 19.1046 10 18 10H10ZM6 26C5.46957 26 4.96086 25.7893 4.58579 25.4142C4.21071 25.0391 4 24.5304 4 24C4 23.4696 4.21071 22.9609 4.58579 22.5858C4.96086 22.2107 5.46957 22 6 22H12C13.1046 22 14 22.8954 14 24C14 25.1046 13.1046 26 12 26H6Z" fill="#A78BFA"/>
            </svg>
            ,
            title: "Оперативно",
            description: "Быстро внедрим решения, акцентируя на результаты."
        },
        {
            id: 3,
            icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.6976 8.439C26.3296 5.187 21.6696 5.187 20.3016 8.439L16.7936 16.773L7.68956 17.495C4.13956 17.775 2.69956 22.157 5.40556 24.449L12.3416 30.323L10.2216 39.107C9.39556 42.533 13.1656 45.241 16.2056 43.405L23.9996 38.699L31.7936 43.407C34.8336 45.243 38.6036 42.535 37.7776 39.107L35.6576 30.327L42.5936 24.451C45.2996 22.159 43.8596 17.779 40.3096 17.497L31.2056 16.777L27.6976 8.439Z" fill="#A78BFA"/>
            </svg>,
            title: "Эффективно",
            description: "Преобразуйте идеи в действия, проверенной эффективностью."
        }
    ]
  return (
    <div className={className}>
        <SectionTitle titleText='Преимущества'/>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16'>
            {advantages.map(benefit => (
                <BenefitCard key={benefit.id} benefit={benefit} />
            ))}
        </div>
    </div>
  )
}

export default AdvantageSection