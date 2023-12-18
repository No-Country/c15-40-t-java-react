'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

function ColegioCard ({ colegio }) {
  const dummyImage = 'https://dummyimage.com/vga';
  const dummyLogo = 'https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png';
  const router = useRouter();
  const hanldePress = (e) => {
    router.push(`/escuelas/${colegio.id}`);
  };

  // console.log(colegio);
  return (
    <Card className="w-[300px]" isPressable onPress={hanldePress}
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
            src={colegio.images === null ? dummyImage : colegio.images[0]}
          />
        </div>
      </CardBody>
      <CardFooter>
        {colegio.city}
      </CardFooter>
    </Card>);
}

export default ColegioCard;
