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
  const [selectColegio1, setSelectColegio1] = useState('657b5c17a3896c532e843b9d');
  const [selectColegio2, setSelectColegio2] = useState('657b5a5fa3896c532e843b9c');
  const { institutionNames } = useFetchData('https://educ-ar-lgxy.onrender.com/api/institutions');

  const handleSelection1Change = (id) => {
    id === null ? setSelectColegio1('657b5c17a3896c532e843b9d') : setSelectColegio1((prev) => id);
  };

  const handleSelection2Change = (id) => {
    id === null ? setSelectColegio2('657b5a5fa3896c532e843b9c') : setSelectColegio2((prev) => id);
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
              <TableCell className="flex justify-center min-h-[50px] items-center">
                Nombre de Colegio
              </TableCell>
            </TableRow>
            {/* Address */}
            <TableRow key={'row-Head-2'}>
              <TableCell className="flex justify-center min-h-[50px] items-center">Dirección</TableCell>
            </TableRow>
            {/* Ciudad */}
            <TableRow key={'row-Head-3'}>
              <TableCell className="flex justify-center  min-h-[50px] items-center">Ciudad</TableCell>
            </TableRow>
            {/* Education Levels */}
            <TableRow key={'row-Head-4'}>
              <TableCell className="flex justify-center min-h-[50px] items-center ">
                Niveles educativos
              </TableCell>
            </TableRow>
            {/* Talleres */}
            <TableRow key={'row-Head-5'}>
              <TableCell className="flex justify-center min-h-[50px] items-center">
                Tiene talleres
              </TableCell>
            </TableRow>
            <TableRow key={'row-Head-6'}>
              <TableCell className="flex justify-center min-h-[50px] items-center ">
                Es Bilingue
              </TableCell>
            </TableRow>
            <TableRow key={'row-Head-7'}>
              <TableCell className="flex justify-center  min-h-[50px] items-center">
                Tiene Comedor
              </TableCell>
            </TableRow>
            <TableRow key={'row-Head-8'}>
              <TableCell className="flex justify-center flex-col items-center min-h-[50px]">
                Religión
              </TableCell>
            </TableRow>
            <TableRow key={'row-Head-9'}>
              <TableCell className="flex justify-center min-h-[50px] items-center ">Uniforme</TableCell>
            </TableRow>
            <TableRow key={'row-Head-10'}>
              <TableCell className="flex justify-center  min-h-[50px] items-center">
                Administración
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="col-start-2">
          <Autocomplete
            aria-label='Autocomplete'
            defaultItems={institutionNames}
            label=""
            placeholder="Elegí un colegio"
            className="w-full col-start-2"
            size="lg"
            onSelectionChange={handleSelection1Change}
          >
            {(colegio) => {
              return (
                <AutocompleteItem key={colegio.value}>
                  {colegio.label}
                </AutocompleteItem>

              );
            }}
          </Autocomplete>
          <CompareCardImages colegioId={selectColegio1} />
        </div>
        <CompareCardDetails colegioId={selectColegio1} position={'left'} />
        <div className="col-start-3 row-start-1">
          <Autocomplete
            aria-label='Autocomplete'
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
