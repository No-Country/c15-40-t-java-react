'use client';
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react';
// import { index } from '.';
import useColegioInfo from '@/hooks/useColegioInfo';
// import useFetchData from '@/hooks/useFetchData';

function CompareCardDetails ({ colegioId, position }) {
  const bool = false;

  const [colegio, setColegio] = useState(null);

  const [colegioInfo, setColegioInfo] = useState(null);

  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://educ-ar-lgxy.onrender.com/api/institutions/${colegioId}`);
        if (!response.ok) {
          throw new Error('Error en conexion al servidor');
        }
        const result = await response.json();
        setColegio(result);
        setColegioInfo(useColegioInfo(result));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [colegioId]);

  return (
    bool
      ? <div>cargando...</div>
      : <div className="flex flex-col gap-5">
        <Table
          hideHeader
          removeWrapper
          isStriped
          aria-label="Example static collection table"
          className=""
        >
          <TableHeader>
            <TableColumn>Tipo de dato</TableColumn>
          </TableHeader>
          <TableBody>
            {/* Nombre */}
            <TableRow key={`row-${position}-1`}>
              <TableCell className="flex justify-center min-h-[50px] items-center ">
                {colegioInfo?.institutionName}
              </TableCell>
            </TableRow>
            {/* Address */}
            <TableRow key={`row-${position}-2`}>
              <TableCell className="flex justify-center  min-h-[50px] items-center">{colegioInfo?.address}</TableCell>
            </TableRow>
            {/* Ciudad */}
            <TableRow key={`row-${position}-3`}>
              <TableCell className="flex justify-center  min-h-[50px] items-center">{colegioInfo?.city}</TableCell>
            </TableRow>
            {/* Education Levels */}
            <TableRow key={`row-${position}-4`}>
              <TableCell className="flex justify-center min-h-[50px] items-center">
                {colegioInfo?.educationLevelsString.length > 0
                  ? colegioInfo?.educationLevelsString
                  : 'No hay datos'}
              </TableCell>
            </TableRow>
            {/* Talleres */}
            <TableRow key={`row-${position}-5`}>
              <TableCell className="flex justify-center min-h-[50px] items-center">
                {colegioInfo?.talleresString.length > 0 ? colegioInfo?.talleresString : 'No tiene talleres'}
              </TableCell>
            </TableRow>
            <TableRow key={`row-${position}-6`}>
              <TableCell className="flex justify-center min-h-[50px] items-center ">
                <p>{colegioInfo?.bilingual}</p>
              </TableCell>
            </TableRow>
            <TableRow key={`row-${position}-7`}>
              <TableCell className="flex justify-center min-h-[50px] items-center">
                <p>{colegioInfo?.canteen}</p>
              </TableCell>
            </TableRow>
            <TableRow key={`row-${position}-8`}>
              <TableCell className="flex justify-center flex-col items-center min-h-[50px] ">
                {colegioInfo?.religionesString.length > 0 ? colegioInfo?.religionesString : 'Laico'}
              </TableCell>
            </TableRow>
            <TableRow key={`row-${position}-9`}>
              <TableCell className="flex justify-center min-h-[50px] items-center ">
                <p>{colegioInfo?.schoolUniform}</p>
              </TableCell>
            </TableRow>
            <TableRow key={`row-${position}-10`}>
              <TableCell className="flex justify-center min-h-[50px] items-center">
                <p>{colegioInfo?.administration}</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
  );
}

export default CompareCardDetails;
