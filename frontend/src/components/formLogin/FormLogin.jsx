import React from 'react'
import {Input} from "@nextui-org/react";
import { Index } from '.';


const FormLogin = () => {
  const {handleFormSubmit, user, password, setPassword, setUser} = Index()

  return (
        <form onSubmit={handleFormSubmit} className='max-w-md mx-auto my-20 border rounded-md p-2'>
        <div className='mb-6 p-2'>
            <Input
            key='usuario'
            type="text"
            label="Usuario"
            labelPlacement='Usuario'
            placeholder="Nombre de Usuario"
            onchange={(e) => setUser(e.target.value)}
            />
        </div>
        <div className='mb-6 p-2'>
            <Input
            key='contraseña'
            type="password"
            label="Contraseña"
            labelPlacement='Contraseña'
            placeholder="Ingrese Contraseña"
            onchange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className='m-auto flex justify-center'>
            <button type='submit' className='w-20 bg-blue-500 text-white font-semibold py-2 px-auto rounded-md hover:-bg-blue-600 focus:outline-none focus:bg-blue-600'>Ingresar</button>
        </div>
        <div className="mb-6 p-2 text-center">
            <a href="#" className="text-blue-500 hover:underline">
            ¿Olvidaste tu contraseña?
            </a>
        </div>
    </form>
  )
}

export default FormLogin
