'use client';

import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Image} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

function ColegioCard({colegio}) {

  const router = useRouter();
  const hanldePress = (e) => {
    console.log(e.target.key);
    router.push(`/buscador/${colegio.id}`);
  };
  return (
    <Card className="w-[300px]" isPressable onPress={hanldePress} 
    >
      <CardHeader>
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={colegio.logo}
          width={40}
        />
        {colegio.institutionName}
      </CardHeader>
      <CardBody >
        <div className='w-full h-[200px] overflow-hidden'>
          <Image
            alt="Card background"
            className="object-cover"
            src={colegio.thumbnail} 
            
          />
        </div>
      </CardBody>
      <CardFooter>
        {colegio.city}
      </CardFooter>
    </Card>);
}

export default ColegioCard;
