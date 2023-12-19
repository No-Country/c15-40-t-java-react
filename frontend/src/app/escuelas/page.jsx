'use client';

import React, { useEffect, useState } from 'react';
import { Input, RadioGroup, Radio, Divider, Slider, Select, SelectItem } from '@nextui-org/react';
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
  const [selectedFilters, setSelectedFilters] = useState({ religion: '', range: [5000, 500000], city: '' });
  const [selectedRange, setSelectedRange] = useState([5000, 500000]);
  const [filteredItems, setFilteredItems] = useState(data);

  const handleSearchChange = (ev) => {
    setSearch(ev.target.value);
  };

  const handleFilterChange = event => {
    const { name, value } = event.target;
    setSelectedFilters({
      ...selectedFilters,
      [name]: value,
      range: selectedRange
    });
  };

  useEffect(() => {
    setFilteredItems(data);
  }, [data]);

  useEffect(() => {
    const { religiones } = useFilterColegios(selectedFilters, data);
    setFilteredItems(religiones);
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
      <div className="h-screen p-5  w-[15%] flex flex-col gap-1">
        <h2 className='text-xl font-bold'>Filtros</h2>
        <Divider className="my-1" orientation='horizontal' />
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
        <Slider
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
        <Divider className="my-4" orientation='horizontal' />
        {/* Ciudad */}
        <Select
          variant="underlined"
          label="Elegir ciudad"
          placeholder=""
          className="max-w-xs"
          items={cityNames}
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
            ? filteredItems?.map((colegio) => (
              <ColegioCard key={colegio.id} colegio={colegio}/>))
            : 'Cargando...'
          }

        </div>
      </div>

    </div>
  );
}

export default page;
