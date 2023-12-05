"use client";

import React from "react";
import CompareCard from "@/components/compareCard/CompareCard";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { colegios } from "./data";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-xl font-bold">Comparador de colegios</h1>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Autocomplete
            defaultItems={colegios}
            label=""
            placeholder="Elegí un colegio"
            className="w-full"
            size="lg"
          >
            {(colegio) => (
              <AutocompleteItem key={colegio.value}>
                {colegio.label}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <CompareCard colegio={"mari"} />
        </div>
        <div>
          <Autocomplete
            defaultItems={colegios}
            label=""
            placeholder="Elegí un colegio"
            className="w-full"
            size="lg"
          >
            {(colegio) => (
              <AutocompleteItem key={colegio.value}>
                {colegio.label}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <CompareCard colegio={"sube"} />
        </div>
      </div>
    </div>
  );
}
