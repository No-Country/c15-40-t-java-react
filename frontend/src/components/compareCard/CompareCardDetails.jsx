import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react';
import { index } from '.';

function CompareCardDetails ({ colegioId, position }) {
  const {
    institutionName,
    address,
    city,
    educationLevelsString,
    talleresString,
    bilingual,
    comedor,
    religionesString,
    uniforme,
    calefaccion
  } = index(colegioId);
  return (
    <div className="flex flex-col gap-5">
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
            <TableCell className="flex justify-center ">
              {institutionName}
            </TableCell>
          </TableRow>
          {/* Address */}
          <TableRow key={`row-${position}-2`}>
            <TableCell className="flex justify-center ">{address}</TableCell>
          </TableRow>
          {/* Ciudad */}
          <TableRow key={`row-${position}-3`}>
            <TableCell className="flex justify-center ">{city}</TableCell>
          </TableRow>
          {/* Education Levels */}
          <TableRow key={`row-${position}-4`}>
            <TableCell className="flex justify-center ">
              {educationLevelsString.length > 0
                ? educationLevelsString
                : 'No hay datos'}
            </TableCell>
          </TableRow>
          {/* Talleres */}
          <TableRow key={`row-${position}-5`}>
            <TableCell className="flex justify-center ">
              {talleresString.length > 0 ? talleresString : 'No tiene talleres'}
            </TableCell>
          </TableRow>
          <TableRow key={`row-${position}-6`}>
            <TableCell className="flex justify-center ">
              <p>{bilingual}</p>
            </TableCell>
          </TableRow>
          <TableRow key={`row-${position}-7`}>
            <TableCell className="flex justify-center ">
              <p>{comedor}</p>
            </TableCell>
          </TableRow>
          <TableRow key={`row-${position}-8`}>
            <TableCell className="flex justify-center flex-col items-center">
              {religionesString.length > 0 ? religionesString : 'Laico'}
            </TableCell>
          </TableRow>
          <TableRow key={`row-${position}-9`}>
            <TableCell className="flex justify-center ">
              <p>{uniforme}</p>
            </TableCell>
          </TableRow>
          <TableRow key={`row-${position}-10`}>
            <TableCell className="flex justify-center ">
              <p>{calefaccion}</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default CompareCardDetails;
