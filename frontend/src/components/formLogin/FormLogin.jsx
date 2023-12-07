import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import Link from 'next/link';
import { useFormLogin } from '.';
import { EyeIcon, EyeSlashIcon } from '../Icons';

const FormLogin = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    handleFormSubmit,
    user,
    handleUserChange,
    password,
    handlePasswordChange,
    onBlurInputPassword,
    onBlurInputEmail,
    errorMessageEmail,
    errorMessagePassword
  } = useFormLogin();

  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-md mx-auto my-20 border bg-white rounded-3xl p-4 shadow-xl">
      <div className="mb-6 p-2">
        <Input
          key="email"
          type="email"
          label="Email"
          name="email"
          labelPlacement="inside"
          placeholder="Email"
          value={user}
          onBlur={onBlurInputEmail}
          onChange={handleUserChange}
          classNames={{
            label: 'font-semibold'
          }}
          errorMessage={errorMessageEmail}
        />
      </div>
      <div className="mb-6 p-2">
        <Input
          key="Contraseña"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}>
              {isVisible
                ? (
                  <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none" />
                )
                : (
                  <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
          label="Contraseña"
          name="password"
          labelPlacement="inside"
          placeholder="Ingrese Contraseña"
          value={password}
          onBlur={onBlurInputPassword}
          onChange={handlePasswordChange}
          classNames={{
            label: 'font-semibold'
          }}
          errorMessage={errorMessagePassword}
        />
      </div>
      <div className="m-auto flex justify-center">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-auto rounded-md hover:-bg-blue-600 focus:outline-none focus:bg-blue-600">
          Ingresar
        </button>
      </div>
      <div className="text-center mt-4 p-2">
        <Link
          href={'/registrar-colegio'}
          className="text-blue-500 hover:underline">
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
