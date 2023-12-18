'use client';

import React, { useState } from 'react';
import CompareCardDetails from '@/components/compareCard/CompareCardDetails';
import CompareCardImages from '@/components/compareCard/CompareCardImages';
import {
  Autocomplete,
  AutocompleteItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react';

import useFetchData from '@/hooks/useFetchData';
export default function page () {
  const [selectColegio1, setSelectColegio1] = useState('6578cd35190c987e9ced6849');
  const [selectColegio2, setSelectColegio2] = useState('6578cd8a190c987e9ced684f');
  const { institutionNames } = useFetchData('https://educ-ar-lgxy.onrender.com/api/institutions');

  console.log(institutionNames);

  const handleSelection1Change = (id) => {
    id === null ? setSelectColegio1('6578cd35190c987e9ced6849') : setSelectColegio1(id);
  };

  const handleSelection2Change = (id) => {
    id === null ? setSelectColegio2('6578cd8a190c987e9ced684f') : setSelectColegio2(id);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-xl font-bold">Comparador de colegios</h1>
      <div className="grid grid-cols-3 grid-rows-3 ">
        <Table
          hideHeader
          removeWrapper
          isStriped
          aria-label="Example static collection table"
          className=" row-start-2 col-start-1"
        >
          <TableHeader>
            <TableColumn>Tipo de dato</TableColumn>
          </TableHeader>
          <TableBody>
            {/* Nombre */}
            <TableRow key={'row-Head-1'}>
              <TableCell className="flex justify-center">
                Nombre de Colegio
              </TableCell>
            </TableRow>
            {/* Address */}
            <TableRow key={'row-Head-2'}>
              <TableCell className="flex justify-center">Dirección</TableCell>
            </TableRow>
            {/* Ciudad */}
            <TableRow key={'row-Head-3'}>
              <TableCell className="flex justify-center ">Ciudad</TableCell>
            </TableRow>
            {/* Education Levels */}
            <TableRow key={'row-Head-4'}>
              <TableCell className="flex justify-center ">
                Niveles educativos
              </TableCell>
            </TableRow>
            {/* Talleres */}
            <TableRow key={'row-Head-5'}>
              <TableCell className="flex justify-center">
                Tiene talleres
              </TableCell>
            </TableRow>
            <TableRow key={'row-Head-6'}>
              <TableCell className="flex justify-center ">
                Es Bilingue
              </TableCell>
            </TableRow>
            <TableRow key={'row-Head-7'}>
              <TableCell className="flex justify-center ">
                Tiene Comedor
              </TableCell>
            </TableRow>
            <TableRow key={'row-Head-8'}>
              <TableCell className="flex justify-center flex-col items-center">
                Religión
              </TableCell>
            </TableRow>
            <TableRow key={'row-Head-9'}>
              <TableCell className="flex justify-center ">Uniforme</TableCell>
            </TableRow>
            <TableRow key={'row-Head-10'}>
              <TableCell className="flex justify-center ">
                Tiene calefacción
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="col-start-2">
          <Autocomplete
            defaultItems={institutionNames}
            label=""
            placeholder="Elegí un colegio"
            className="w-full col-start-2"
            size="lg"
            onSelectionChange={handleSelection1Change}
          >
            {(colegio) => (
              <AutocompleteItem key={colegio.value}>
                {colegio.label}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <CompareCardImages colegioId={selectColegio1} />
        </div>
        <CompareCardDetails colegioId={selectColegio1} position={'left'} />
        <div className="col-start-3 row-start-1">
          <Autocomplete
            defaultItems={institutionNames}
            label=""
            placeholder="Elegí un colegio"
            className="w-full col-start-3 row-start-1"
            size="lg"
            onSelectionChange={handleSelection2Change}
          >
            {(colegio) => (
              <AutocompleteItem key={colegio.value}>
                {colegio.label}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <CompareCardImages colegioId={selectColegio2} />
        </div>
        <CompareCardDetails colegioId={selectColegio2} position={'right'} />
      </div>
    </div>
  );
}
