import { Button, Image } from '@nextui-org/react';

import { Londrina_Solid } from 'next/font/google';

const Londrina_SolidFontBlack = Londrina_Solid({
  subsets: ['latin'],
  display: 'swap',
  weight: '900'
});

export default function Home () {
  return (
    <section className='grid place-items-center mx-auto min-h-[calc(100dvh_-_128px)] max-w-8xl'>
      <div className='flex justify-center items-center gap-20 flex-wrap'>
        <header>
          <h1 className={`${Londrina_SolidFontBlack.className} text-3xl md:text-4xl lg:text-7xl font-black text-purple-500`}>Eligiendo colegio??...</h1>
          <h2 className={`${Londrina_SolidFontBlack.className} text-3xl md:text-4xl lg:text-7xl font-black text-orange-500`}>Nosotros te ayudamos!</h2>
          <p className='mt-4 text-balance'>Busca el colegio que mejor se <strong className='text-purple-500'>adapte</strong> a tus necesidades.</p>
          <p className='text-balance'>Aquí encontrarás toda la información que necesitas para <span className='font-bold text-orange-500'>tomar tu decisión.!</span></p>
          <Button className='mt-4 text-white' color='warning' variant='shadow'>
            Inicia tu búsqueda
          </Button>
        </header>
        <div
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 15% 100%, 0 100%)' }}
          className='rounded-3xl w-3/4 max-w-md overflow-hidden rotate-[13deg] lg:w-1/2 aspect-square'>
          <Image radius='none'
            classNames={{ wrapper: '-rotate-[13deg] overflow-visible scale-125', img: 'scale-125 top-5' }} src="/children.webp" />
        </div>
      </div>
    </section>
  );
}
