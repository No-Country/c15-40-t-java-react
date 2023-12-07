"use client";

import React from "react";
import CompareCardDetails from "@/components/compareCard/CompareCardDetails";
import CompareCardImages from "@/components/compareCard/CompareCardImages";
import {
  Autocomplete,
  AutocompleteItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { colegios } from "./data";
import { useState } from "react";

export default function page() {
  const [selectColegio1, setSelectColegio1] = useState("Colegio1");
  const [selectColegio2, setSelectColegio2] = useState("Colegio2");

  const handleSelection1Change = (id) => {
    console.log("cambie", id);
    setSelectColegio1(id);
  };

  const handleSelection2Change = (id) => {
    setSelectColegio2(id);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-xl font-bold">Comparador de colegios</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-5 ">
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
            <TableRow key={"row-L-1"}>
              <TableCell className="flex justify-center ">
                Nombre de Colegio
              </TableCell>
            </TableRow>
            {/* Address */}
            <TableRow key={"row-L-2"}>
              <TableCell className="flex justify-center ">Dirección</TableCell>
            </TableRow>
            {/* Ciudad */}
            <TableRow key={"row-L-3"}>
              <TableCell className="flex justify-center ">Ciudad</TableCell>
            </TableRow>
            {/* Education Levels */}
            <TableRow key={"row-L-4"}>
              <TableCell className="flex justify-center ">
                Niveles educativos
              </TableCell>
            </TableRow>
            {/* Talleres */}
            <TableRow key={"row-L-5"}>
              <TableCell className="flex justify-center">
                Tiene talleres
              </TableCell>
            </TableRow>
            <TableRow key={"row-L-6"}>
              <TableCell className="flex justify-center ">
                Es Bilingue
              </TableCell>
            </TableRow>
            <TableRow key={"row-L-7"}>
              <TableCell className="flex justify-center ">
                Tiene Comedor
              </TableCell>
            </TableRow>
            <TableRow key={"row-L-8"}>
              <TableCell className="flex justify-center flex-col items-center">
                Religión
              </TableCell>
            </TableRow>
            <TableRow key={"row-L-9"}>
              <TableCell className="flex justify-center ">Uniforme</TableCell>
            </TableRow>
            <TableRow key={"row-L-10"}>
              <TableCell className="flex justify-center ">
                Tiene calefacción
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="col-start-2">
          <Autocomplete
            defaultItems={colegios}
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
        <CompareCardDetails colegioId={selectColegio1} position={"left"} />
        <div className="col-start-3 row-start-1">
          <Autocomplete
            defaultItems={colegios}
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
        <CompareCardDetails colegioId={selectColegio2} position={"right"} />
      </div>
    </div>
  );
}
