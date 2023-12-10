'use client';
import React from 'react';
import { Input, RadioGroup, Radio, Divider, Slider, Select, SelectItem} from '@nextui-org/react';
import { SearchIcon } from '@/components/Icons';
import ColegioCard from '@/components/ColegioCard/ColegioCard';
import { colegioDetail,  ciudades} from '../comparar-colegios/data';


function page() {
  
  return (
    <div className="flex">
      <div className="h-screen p-5  w-[15%] flex flex-col gap-1">
        <h2 className='text-xl font-bold'>Filtros</h2>
        <Divider className="my-1" orientation='horizontal' />
        {/* Religión */}
        <RadioGroup
          label="Religión"
          color="warning"
        >
          <Radio value="laico">Laico</Radio>
          <Radio value="catolico">Católico</Radio>
          <Radio value="judio">Judío</Radio>
        
        </RadioGroup>
        <Divider className="my-4" orientation='horizontal' />
        {/* Rango de precio */}
        <Slider 
          label="Rango de precio "
          labelWrapper
          color='warning'
          radius='lg'
          step={1000} 
          minValue={30000} 
          maxValue={300000} 
          defaultValue={[30000, 300000]} 
          formatOptions={{style: "currency", currency: "USD"}}
          className={{
            base: "max-w-md",

          }}
          
        />
        <Divider className="my-4" orientation='horizontal' />
        {/* Ciudad */}
        <Select
          variant="underlined"
          label="Elegir ciudad"
          placeholder=""
          className="max-w-xs"
          items={ciudades}
          color='warning'
        >
          {(cuidad) => <SelectItem key={cuidad.value}>{cuidad.label}</SelectItem>}
        </Select>
        

      </div>
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
