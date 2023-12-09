import React from 'react';
import { Input } from '@nextui-org/react';
import { SearchIcon } from '@/components/Icons';
import ColegioCard from '@/components/ColegioCard/ColegioCard';
import { colegioDetail } from '../comparar-colegios/data';


function page() {
  
  return (
    <div className="flex">
      <div className="h-screen  bg-white w-[15%]">Navbar</div>
      <div className=" w-full">
        <div className="text-black p-5">
          <Input
            type="email"
            variant={"bordered"}
            label="Buscar"
            startContent={<SearchIcon />}
          />
        </div>
        <div className='flex gap-2'>
          {colegioDetail.map((item) => (
            <ColegioCard key={item.id} colegio={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
