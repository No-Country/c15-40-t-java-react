'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { LocationIcon, SchoolIcon } from '../Icons';

function ColegioCard ({ colegio }) {
  const dummyImage = 'https://dummyimage.com/vga';
  const dummyLogo = 'https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png';
  const router = useRouter();
  const hanldePress = (e) => {
    router.push(`/escuelas/${colegio.id}`);
  };

  return (
    <Card className="w-[500px]" isPressable onPress={hanldePress}
    >
      <CardHeader className='flex gap-3'>
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={colegio.logo === null || colegio.logo.length === 0 ? dummyLogo : colegio.logo}
          width={40}
        />
        <p className=' font-bold text-xl '>{colegio.institutionName}</p>
      </CardHeader>
      <CardBody >
        <div className='w-full h-[200px] overflow-hidden'>
          <Image
            alt="Card background"
            className="object-cover"
            src={colegio.images === null || colegio.images.length === 0 ? dummyImage : colegio.images[0]}
          />
        </div>
      </CardBody>
      <CardFooter className='flex gap-3 flex-col w-full items-start'>
        <div className='flex gap-3'>
          <LocationIcon className="w-6 fill-warning" />
          <p>{colegio.city}</p>
        </div>
        <div className='flex gap-3'>
          <h3 className='text-md font-bold'>Religión:</h3>
          <p>{colegio.religion ? colegio.religion : 'Sin datos'}</p>
        </div>
        <div className='flex gap-3'>
          <SchoolIcon className="h-6 block"/>
          <p>{'hola'}</p>
        </div>
      </CardFooter>
    </Card>);
}

export default ColegioCard;
