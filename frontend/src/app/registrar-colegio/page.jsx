'use client';
import React from 'react';
import { Input } from '@nextui-org/react';

const RegistrarColegio = () => {
  const [schoolName, setSchoolName] = React.useState('');
  const [address, setAddress] = React.useState('');

  return (
    <>
      <form className="w-4/5 flex flex-col justify-around mx-auto bg-white rounded-3xl p-4 shadow-xl">
        <h1 className="text-start font-bold mb-4 text-2xl">
          Pre-Registro de Colegio
        </h1>
        <p className="mb-3 text-orange-500">Datos Institución</p>

        <div className="w-full flex gap-2 mb-4">
          <Input
            label="Nombre Colegio"
            placeholder="Colegio Santo Tomás"
            value={schoolName}
            onValueChange={setSchoolName}
            classNames={{
              label: 'font-semibold'
            }}
          />
          <Input
            label="Dirección"
            placeholder="San Martin 556"
            value={address}
            onValueChange={setAddress}
            classNames={{
              label: 'font-semibold'
            }}
          />
        </div>
        <div className="w-full flex gap-2 mb-4">
          <Input
            label="Ciudad"
            placeholder="Córdoba"
            /* value={}
        onValueChange={} */
            classNames={{
              label: 'font-semibold'
            }}
          />
          <Input
            label="Teléfono de la institución"
            placeholder="0351 48121400"
            /* value={}
        onValueChange={} */
            classNames={{
              label: 'font-semibold'
            }}
          />
        </div>
        <div className="w-full flex gap-2 mb-4">
          <Input
            label="Email de la institución"
            placeholder="santotomas@edu.ar"
            /* value={}
        onValueChange={} */
            classNames={{
              label: 'font-semibold'
            }}
          />
          <Input
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type="password"
            classNames={{
              label: 'font-semibold'
            }}
          />
        </div>
        <div className="w-[calc(50%-0.25rem)] flex gap-2 mb-5">
          <Input
            label="Código único de establecimiento (CUE)"
            placeholder="140522200"
            /* value={}
        onValueChange={} */
            classNames={{
              label: 'font-semibold'
            }}
          />
        </div>

        <p className="mb-3 text-orange-500">
          Datos Persona que realiza Registro
        </p>

        <div className="w-full flex gap-2 mb-4">
          <Input
            label="Nombre y Apellido"
            placeholder="Sofía González"
            /*  value={}
        onValueChange={} */
            classNames={{
              label: 'font-semibold'
            }}
          />
          <Input
            label="Cargo que ocupa en el colegio"
            placeholder="Directora nivel secundario"
            /* value={}
        onValueChange={} */
            classNames={{
              label: 'font-semibold'
            }}
          />
        </div>

        <label className="mb-2" htmlFor="file">
          Foto DNI
        </label>

        <div className="w-[calc(50%-0.25rem)] flex gap-2 mb-4">
          <input
            type="file"
            id="file"
            name="file"
            className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
          />
        </div>
      </form>
    </>
  );
};

export default RegistrarColegio;
