'use client';

import React, { useEffect, useState } from 'react';
import { Input, RadioGroup, Radio, Divider, /* Slider */ Select, SelectItem } from '@nextui-org/react';
import { SearchIcon } from '@/components/Icons';
import ColegioCard from '@/components/ColegioCard/ColegioCard';
import useFetchData from '@/hooks/useFetchData';
import useCityNames from '@/hooks/useCityNames';
import useFilterColegios from '@/hooks/useFilterColegios';

function page () {
  const [url, setUrl] = useState('https://educ-ar-lgxy.onrender.com/api/institutions');
  const { data, isLoading } = useFetchData(url);
  const [search, setSearch] = useState('');
  const { cityNames } = useCityNames();

  const [selectedFilters, setSelectedFilters] = useState({ religion: '', city: '', genere: '', educationalApproach: '' });
  // const [selectedRange, setSelectedRange] = useState([5000, 500000]);
  const [filteredItems, setFilteredItems] = useState(data);

  const handleSearchChange = (ev) => {
    setSearch(ev.target.value);
  };

  const handleFilterChange = event => {
    const { name, value } = event.target;
    setSelectedFilters({
      ...selectedFilters,
      [name]: value
      // range: selectedRange
    });
  };

  useEffect(() => {
    setFilteredItems(data);
  }, [data]);

  useEffect(() => {
    console.log(selectedFilters);
    const { filtrados } = useFilterColegios(selectedFilters, data);
    setFilteredItems(filtrados);
  }, [selectedFilters]);

  // Efecto que me actualiza la url del fetch según el input del search
  useEffect(() => {
    if (search.length > 0) { // chequea si existe un string en search, sino vuelve a pedir el link de todos los colegios
      setUrl(`https://educ-ar-lgxy.onrender.com/api/institutions/searchName/${search}`);
    } else {
      setUrl('https://educ-ar-lgxy.onrender.com/api/institutions');
    }
  }, [search]);

  return (
    <div className="flex">
      {/* Filtros */}
      <div className="h-screen p-5  w-[15%] flex flex-col gap-1 ">
        <h2 className='text-xl font-bold'>Filtros</h2>
        <Divider className="my-1" orientation='horizontal' />

        {/* Género */}
        <RadioGroup
          label="Género"
          color="warning"
          onChange={handleFilterChange}
          name='genere'
        >
          <Radio value="FEMENINO" name='genere'>Femenino</Radio>
          <Radio value="MASCULINO" name='genere'>Masculino</Radio>
          <Radio value="MIXTO" name='genere'>Mixto</Radio>
        </RadioGroup>
        <Divider className="my-4" orientation='horizontal' />

        {/* Religión */}
        <RadioGroup
          label="Religión"
          color="warning"
          onChange={handleFilterChange}
          name='religion'
        >
          <Radio value="LAICO" name='religion'>Laico</Radio>
          <Radio value="CATOLICO" name='religion'>Católico</Radio>
          <Radio value="JUDIO" name='religion'>Judío</Radio>
          <Radio value="EVANGELISTA" name='religion'>Evangelista</Radio>
          <Radio value="OTRO" name='religion'>Otro</Radio>

        </RadioGroup>
        <Divider className="my-4" orientation='horizontal' />

        {/* Rango de precio */}
        {/* <Slider
          label="Rango de precio "
          labelWrapper
          name='range'
          color='warning'
          radius='lg'
          step={5000}
          minValue={5000}
          maxValue={500000}
          defaultValue={[5000, 500000]}
          value={selectedRange}
          onChange={setSelectedRange}
          formatOptions={{ style: 'currency', currency: 'USD' }}
          className={{
            base: 'max-w-md'

          }}

        />
        <Divider className="my-4" orientation='horizontal' /> */}

        {/* Ciudad */}
        <Select
          variant="underlined"
          label="Elegir ciudad"
          placeholder=""
          className="max-w-xs"
          items={cityNames}
          color='warning'
          name='city'
          onChange={handleFilterChange}
        >
          {(cuidad) => <SelectItem key={cuidad.value}>{cuidad.label}</SelectItem>}
        </Select>
        <Divider className="my-4" orientation='horizontal' />
        {/* Tipo de educación */}
        <RadioGroup
          label="Tipo de Educación"
          color="warning"
          onChange={handleFilterChange}
          name='educationalApproach'
        >
          <Radio value="TRADICIONAL" name='educationalApproach'>Tradicional</Radio>
          <Radio value="MONTESORI" name='educationalApproach'>Montesori</Radio>
          <Radio value="ESPECIAL" name='educationalApproach'>Especial</Radio>
        </RadioGroup>
        <Divider className="my-4" orientation='horizontal' />
      </div>

      <div className=" w-full max-h-screen overflow-scroll">
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
        <div className='flex gap-5 flex-wrap'>

          { !isLoading
            ? filteredItems?.map((colegio) => (<ColegioCard key={colegio.id} colegio={colegio}/>)/* {
              const { activated } = colegio;
              return (activated && <ColegioCard key={colegio.id} colegio={colegio}/>);
            } */

            )
            : 'Cargando...'
          }

        </div>
      </div>

    </div>
  );
}

export default page;
