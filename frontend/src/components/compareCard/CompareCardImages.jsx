'use client';
import React from 'react';
import { Image } from '@nextui-org/react';
import { index } from '.';

function CompareCardImages ({ colegioId }) {
  const dummyImage = 'https://dummyimage.com/vga';
  const { colegio } = index(colegioId);
  console.log(colegio);
  return (
    <div className="flex flex-col gap-5 items-center p-5">
      <h1 className="text-lg font-semibold">{colegio?.institutionName}</h1>
      <Image
        width={400}
        alt="NextUI hero Image"
        src={colegio?.images === null || colegio?.images.length === 0 ? dummyImage : colegio?.images[0]}
      />
    </div>
  );
}

export default CompareCardImages;
