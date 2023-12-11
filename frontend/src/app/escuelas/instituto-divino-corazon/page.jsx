'use client';

import {
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  WebIcon
} from '@/components/Icons';

import { Avatar, Image, Link as LinkUI, Tab, Tabs } from '@nextui-org/react';

import { Londrina_Solid } from 'next/font/google';

const Londrina_Solid_Font_Black = Londrina_Solid({
  subsets: ['latin'],
  display: 'swap',
  weight: '900'
});

export default function Page () {
  return (
    <section className="max-w-7xl mx-auto">
      <header>
        <h1
          className={`${Londrina_Solid_Font_Black.className} text-4xl uppercase tracking-wider`}>
          instituto divino corazon
        </h1>
      </header>
      <div className="w-full flex items-center gap-10 flex-wrap my-6">
        <div className="flex items-center gap-4">
          <LocationIcon className="w-6 fill-warning" />
          <p className="uppercase">republica dominicana 3586</p>
        </div>
        <div className="flex items-center gap-4">
          <EmailIcon className="w-6 fill-warning" />
          <LinkUI
            color="foreground"
            underline="always"
            href="mailto:divinocorazoninfo@divinocorazon.edu.ar"
            target="_blank"
            rel="noopener noreferrer">
            divinocorazoninfo@divinocorazon.edu.ar
          </LinkUI>
        </div>
        <div className="flex items-center gap-4">
          <PhoneIcon className="w-6 fill-warning" />
          <p>4823-8452</p>
        </div>
        <div className="flex items-center gap-4">
          <WebIcon className="w-6 fill-warning" />
          <LinkUI
            color="foreground"
            underline="always"
            href="https://www.divinocorazon.edu.ar"
            target="_blank"
            rel="noopener noreferrer">
            www.divinocorazon.edu.ar
          </LinkUI>
        </div>
      </div>
      <Image radius="none" src="/school-banner.png" />
      <Avatar
        size="lg"
        radius="sm"
        classNames={{ base: 'relative -top-7 left-4 z-10' }}
        src="/school-profile.png"
      />
      <h2
        className={`${Londrina_Solid_Font_Black.className} text-2xl text-primary uppercase tracking-wider`}>
        Descripción del colegio
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dolores
        voluptatem, eveniet ad consectetur asperiores minima a earum quod eaque
        beatae eum architecto pariatur porro aut! Excepturi dolor vero quis?
      </p>
      <Tabs size='lg' color='warning' radius='none' classNames={{ base: 'justify-center w-full', tabList: 'w-full', tabContent: 'text-warning font-bold' }}>
        <Tab title="Nivel Inicial">
          <h3>Datos principales</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          labore sequi dignissimos quas, suscipit voluptas nemo dolore accusamus
          porro consequatur itaque eaque, libero nulla voluptatibus sit ab,
          recusandae ipsa fugiat.
        </Tab>
        <Tab title="Nivel Primario">
          <h3>Datos principales</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          quam. Quibusdam vero, quas libero, quod magni facere sapiente eaque
          nesciunt possimus minus laboriosam. Sapiente commodi culpa harum
          ducimus. Quia, tempore!
        </Tab>
        <Tab title="Nivel Secundario">
          <h3>Datos principales</h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          ut nobis itaque minima? Quaerat porro iusto excepturi ipsam qui
          quibusdam, ducimus impedit officia. Laudantium sint dolorem quod
          deserunt quidem doloribus.
        </Tab>
      </Tabs>
    </section>
  );
}
