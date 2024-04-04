import React from 'react'
import SectionTitle from '@/components/Ui/Title/SectionTitle'
import { ITarif } from '@/lib/requests/resources/Tarifs/lib/types/ITarifTypes'
import TarifCard from '@/components/Ui/Cards/Tarif/TarifCard'
import { ITarifSectionProps } from '../lib/types/IHomeBusinessTypes'

const TarifsSection = ({className}:ITarifSectionProps) => {
    const tarifs:ITarif[] = [
        {
            id: 1,
            title: 'Солона 200',
            content: `
                <ul class="ml-5 list-disc">
                    <li>Подарочный интернет пакет на телефон 20 000 мб/мес.</li>
                    <li>Неограниченный трафик</li>
                    <li>Интернет до 5 Мбит/с</li>
                </ul>
            `,
            price: '190 с. / мес.'
        },
        {
            id: 2,
            title: 'Тезнет 200',
            content: `
            <ul class="ml-5 list-disc">
                <li>Подарочный интернет пакет на телефон 20 000 мб/мес.</li>
                <li>Неограниченный трафик</li>
                <li>Интернет до 5 Мбит/с</li>
            </ul>`,
            price: '190 с. / мес.'
        },
        {
            id: 3,
            title: 'Тезнет 200',
            content: `
            <ul class="ml-5 list-disc">
                <li>Подарочный интернет пакет на телефон 20 000 мб/мес.</li>
                <li>Неограниченный трафик</li>
                <li>Интернет до 5 Мбит/с</li>
            </ul>`,
            price: '190 с. / мес.'
        }
    ]
  return (
    <div className={className}>
        <SectionTitle 
        titleText='Тарифы'
        routeTitle="Все тарифы" 
        route='/tarifs'
        />
        <div className='grid grid-cols-3 gap-6 mt-16'>
            {
                tarifs.map(tarif => (
                    <TarifCard 
                    tarif={tarif} 
                    key={tarif.id} />
                ))
            }
        </div>
    </div>
  )
}

export default TarifsSection