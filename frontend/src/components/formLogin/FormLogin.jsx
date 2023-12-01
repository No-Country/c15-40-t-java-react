import React from 'react'
import {Input} from "@nextui-org/react";
import { Index } from '.';
import Link from 'next/link';




const FormLogin = () => {
  const {handleFormSubmit, user, password, setPassword, setUser} = Index()


  return (
        <form onSubmit={handleFormSubmit} className='max-w-md mx-auto my-20 border bg-white rounded-3xl p-4 shadow-xl'>
        <div className='mb-6 p-2'>
            <Input
            key='usuario'
            type="text"
            label="Usuario"
            labelPlacement="inside"
            placeholder="Nombre de Usuario"
            onchange={(e) => setUser(e.target.value)}
            classNames={{
                label: "font-semibold",
            }}
            />
        </div>
        <div className='mb-6 p-2'>
            <Input
            key='contraseña'
            type="password"
            label="Contraseña"
            labelPlacement="inside"
            placeholder="Ingrese Contraseña"
            onchange={(e) => setPassword(e.target.value)}
            classNames={{
                label: "font-semibold",
            }}
            />
        </div>
        <div className='m-auto flex justify-center'>
            <button type='submit' className='w-full bg-blue-500 text-white font-semibold py-2 px-auto rounded-md hover:-bg-blue-600 focus:outline-none focus:bg-blue-600'>Ingresar</button>
        </div>
        <div className='text-center mt-4 p-2'>
            <Link href={'/registrar-colegio'} className="text-blue-500 hover:underline">
            ¿Todavía no estas registrado? Crea tu cuenta aqui
            </Link>    
        </div>
        <div className="mb-6 text-center">
            <Link href="#" className="text-blue-500 hover:underline">
            ¿Olvidaste tu contraseña?
            </Link>
        </div>
    </form>
  )
}

export default FormLogin
