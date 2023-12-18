'use client';

import React, { useEffect, useState } from 'react';
import { Input, RadioGroup, Radio, Divider, Slider, Select, SelectItem } from '@nextui-org/react';
import { SearchIcon } from '@/components/Icons';
import ColegioCard from '@/components/ColegioCard/ColegioCard';
import { ciudades } from '@/app/comparar-colegios/data';
import useFetchData from '@/hooks/useFetchData';

function page () {
  const [url, setUrl] = useState('https://educ-ar-lgxy.onrender.com/api/institutions');
  const { data, isLoading } = useFetchData(url);
  const [search, setSearch] = useState('');

  const handleSearchChange = (ev) => {
    setSearch(ev.target.value);
  };

  // Efecto que me actualiza la url del fetch según el input del search
  useEffect(() => {
    if (search.length > 0) { // chequea si existe un string en search, sino vuelve a pedir el link de todos los colegios
      setUrl(`https://educ-ar-lgxy.onrender.com/api/institutions${'/' + search}`);
    } else {
      setUrl('https://educ-ar-lgxy.onrender.com/api/institutions');
    }
  }, [search]);

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
          formatOptions={{ style: 'currency', currency: 'USD' }}
          className={{
            base: 'max-w-md'

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
            type="text"
            variant={'bordered'}
            label="Buscar"
            startContent={<SearchIcon />}
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className='flex gap-3 flex-wrap'>

          { !isLoading
            ? data?.map((colegio) => (
              <ColegioCard key={colegio.id} colegio={colegio}/>))
            : 'Cargando...'
          }

        </div>
      </div>

    </div>
  );
}

export default page;
