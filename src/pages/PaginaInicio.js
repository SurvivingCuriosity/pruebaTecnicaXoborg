import React from "react";
import { FormBusqueda } from "../components/FormBusqueda";
import { ListaResultados } from "../components/ListaResultados";
import { Navbar } from "../components/Navbar";
export const PaginaInicio = () => {
  return (
    <>
      <Navbar />
      <div className="h-full py-7 px-2 flex flex-col justify-center xl:w-1/2 md:m-auto">
        <FormBusqueda />
        <ListaResultados />
      </div>
    </>
  );
};
