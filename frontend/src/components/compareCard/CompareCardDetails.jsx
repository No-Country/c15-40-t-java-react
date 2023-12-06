import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

function CompareCardDetails({ colegio }) {
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
          <TableRow key={"row-L-1"}>
            <TableCell className="flex justify-center ">
              {colegio.institutionName}
            </TableCell>
          </TableRow>
          {/* Address */}
          <TableRow key={"row-L-2"}>
            <TableCell className="flex justify-center ">
              {colegio.address}
            </TableCell>
          </TableRow>
          {/* Ciudad */}
          <TableRow key={"row-L-3"}>
            <TableCell className="flex justify-center ">
              {colegio.city}
            </TableCell>
          </TableRow>
          {/* Education Levels */}
          <TableRow key={"row-L-4"}>
            <TableCell className="flex justify-center ">
              {colegio.educationLevels.map((level) => (
                {level.name}
              ))}
            </TableCell>
          </TableRow>
          {/* Talleres */}
          <TableRow key={"row-L-5"}>
            <TableCell className="flex justify-center ">
              {colegio.talleres.map((level, index) => {
                let todos = "";
                todos += (index > 0 ? " - " : "") + level;
                return todos;
              })}
            </TableCell>
          </TableRow>
          <TableRow key={"row-L-6"}>
            <TableCell className="flex justify-center ">
              <p>{colegio.bilingual ? "Si" : "No"}</p>
            </TableCell>
          </TableRow>
          <TableRow key={"row-L-7"}>
            <TableCell className="flex justify-center ">
              <p>{colegio.comedor ? "Si" : "No"}</p>
            </TableCell>
          </TableRow>
          <TableRow key={"row-L-8"}>
            <TableCell className="flex justify-center flex-col items-center">
              {colegio.religion.map((level, index) => {
                let todos = "";
                todos += (index > 0 ? " - " : "") + level;
                return todos;
              })}
            </TableCell>
          </TableRow>
          <TableRow key={"row-L-9"}>
            <TableCell className="flex justify-center ">
              <p>{colegio.uniforme ? "Si" : "No"}</p>
            </TableCell>
          </TableRow>
          <TableRow key={"row-L-9"}>
            <TableCell className="flex justify-center ">
              <p>{colegio.calefaccion ? "Si" : "No"}</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default CompareCardDetails;
