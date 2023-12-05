import React from "react";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { Index } from ".";

const FormLogin = () => {
  const {
    handleFormSubmit,
    user,
    setUser,
    password,
    setPassword
  } = Index();

  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-md mx-auto my-20 border bg-white rounded-3xl p-4 shadow-xl"
    >
      <div className="mb-6 p-2">
        <Input
          key="Usuario"
          type="text"
          label="Usuario"
          name="user"
          labelPlacement="inside"
          placeholder="Nombre de Usuario"
          onChange={(e) => {
            setUser(e.target.value)
          }}
          classNames={{
            label: "font-semibold",
          }}
          errorMessage={"ingrese usuario"}
        />
      </div>
      <div className="mb-6 p-2">
        <Input
          key="Contraseña"
          type="password"
          label="Contraseña"
          name="password"
          labelPlacement="inside"
          placeholder="Ingrese Contraseña"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          classNames={{
            label: "font-semibold",
          }}
          errorMessage={"ingrese contraseña"}
        />
      </div>
      <div className="m-auto flex justify-center">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-auto rounded-md hover:-bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Ingresar
        </button>
      </div>
      <div className="text-center mt-4 p-2">
        <Link
          href={"/registrar-colegio"}
          className="text-blue-500 hover:underline"
        >
          ¿Todavía no estas registrado? Crea tu cuenta aqui
        </Link>
      </div>
      <div className="mb-6 text-center">
        <Link href="#" className="text-blue-500 hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </form>
  );
};

export default FormLogin;
