'use client';

import ContainButton from "@/components/Ui/Buttons/ContainButton";
import Title from "@/components/Ui/Title/Title";

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className='dfo__container py-44'>
            <div className='flex flex-col justify-center items-center'>
            <Title size='3xl' color='primary'>
                404 
            </Title>
            <p className='text-secondary mb-5'>Страница не найдена</p>
            <ContainButton size='lg' animate>
                Назад на главную
            </ContainButton>
            </div>
        </div>
      </body>
    </html>
  );
}