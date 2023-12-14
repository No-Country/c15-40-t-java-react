'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Input, Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { sendAllData } from './service';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeSlashIcon } from '@/components/Icons';

const RegistrarColegio = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: ''
    }
  });

  const customInputStyle = {
    label: 'font-semibold',
    base: 'group grid col-span-2 md:col-span-1',
    errorMessage: 'text-red-500'
  };

  const onSubmit = async (data) => {
    const dataBack = {
      institutionName: data.institutionName,
      address: data.address,
      city: data.city,
      phones: [data.phone],
      cue: data.cue,
      email: data.email,
      password: data.password
    };

    const response = await sendAllData(dataBack);

    if (response.status !== 201) {
      console.log('Ups, problemas en el servidor!');
    } else {
      console.log('Registro exitoso!', 'Gracias por elegirnos');

      sendEmail();

      setTimeout(() => {
        router.push('/');
      }, 3000);
    }
  };

  const EmailJSform = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        EmailJSform.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <form
        ref={EmailJSform}
        onSubmit={handleSubmit(onSubmit)}
        className="w-4/5 grid grid-cols-2 gap-x-2 gap-y-4 mb-4 justify-around mx-auto bg-white rounded-3xl p-4 shadow-xl">
        <h1 className="text-start font-bold mb-4 text-2xl col-span-2">
          Pre-Registro de Colegio
        </h1>
        <p className="mb-3 text-orange-500 col-span-2">
          Datos de la Institución
        </p>

        <Input
          isRequired
          label="Nombre Colegio"
          classNames={customInputStyle}
          errorMessage={
            errors.institutionName && errors.institutionName.message
          }
          {...register('institutionName', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 3,
              message: 'Debe tener al menos 3 caracteres'
            }
          })}
        />

        <Input
          isRequired
          label="Dirección"
          classNames={customInputStyle}
          errorMessage={errors.address && errors.address.message}
          {...register('address', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 5,
              message: 'Debe tener al menos 5 caracteres'
            }
          })}
        />

        <Input
          isRequired
          label="Ciudad"
          classNames={customInputStyle}
          errorMessage={errors.city && errors.city.message}
          {...register('city', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 3,
              message: 'Debe tener al menos 3 caracteres'
            }
          })}
        />

        <Input
          isRequired
          label="Teléfono de la institución"
          classNames={customInputStyle}
          errorMessage={errors.phone && errors.phone.message}
          {...register('phone', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 7,
              message: 'Debe tener al menos 7 números'
            },
            pattern: {
              value: /^[0-9\s]+$/i,
              message: 'Escriba solo números'
            }
          })}
        />

        <Input
          isRequired
          label="Email de la institución"
          classNames={customInputStyle}
          errorMessage={errors.email && errors.email.message}
          {...register('email', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 5,
              message: 'Debe tener al menos 5 caracteres'
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/,
              message: 'El formato del correo debe ser Ejemplo@mail.com'
            }
          })}
        />

        <Input
          isRequired
          label="Contraseña"
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
          classNames={customInputStyle}
          errorMessage={errors.password && errors.password.message}
          {...register('password', {
            required: 'Este campo es obligatorio',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message:
                'Minimo 8 caracteres, al menos 1 mayúscula, 1 minúscula y 1 número'
            }
          })}
        />

        <div className=" grid col-span-2  gap-2 mb-4 md:col-span-1">
          <Input
            isRequired
            label="Código único de establecimiento (CUE)"
            classNames={{
              label: 'font-semibold truncate',
              errorMessage: 'text-red-500'
            }}
            errorMessage={errors.cue && errors.cue.message}
            {...register('cue', {
              required: 'Este campo es obligatorio',
              minLength: {
                value: 9,
                message: 'Debe tener mín 9 números'
              },
              maxLength: {
                value: 9,
                message: 'Debe tener máx 9 números'
              },
              pattern: {
                value: /^[0-9]+$/i,
                message: 'Escriba solo números'
              }
            })}
          />
        </div>

        <p className="mb-3 text-orange-500 col-span-2">
          Datos de la Persona que realiza el Registro
        </p>

        <Input
          isRequired
          label="Nombre y Apellido"
          classNames={customInputStyle}
          errorMessage={errors.nameOfUser && errors.nameOfUser.message}
          {...register('nameOfUser', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 5,
              message: 'Debe tener al menos 5 caracteres'
            }
          })}
        />

        <Input
          isRequired
          label="Cargo que ocupa en el colegio"
          classNames={customInputStyle}
          errorMessage={errors.userOccupation && errors.userOccupation.message}
          {...register('userOccupation', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 5,
              message: 'Debe tener al menos 5 caracteres'
            }
          })}
        />

        <Input
          isRequired
          label="Código único de identificación laboral (CUIL)"
          classNames={{
            label: 'font-semibold truncate',
            errorMessage: 'text-red-500',
            base: 'group grid col-span-2 md:col-span-1'
          }}
          errorMessage={errors.cuil && errors.cuil.message}
          {...register('cuil', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 11,
              message: 'Debe tener mín 11 números'
            },
            maxLength: {
              value: 11,
              message: 'Debe tener máx 11 números'
            },
            pattern: {
              value: /^[0-9]+$/i,
              message: 'Escriba solo números sin guiones'
            }
          })}
        />

        <Button
          type="submit"
          className="bg-orange-500 text-white col-span-2 w-1/3 justify-self-center font-semibold mb-2 md:w-1/4"
          radius="md">
          Enviar
        </Button>
      </form>

      <p className="text-center mx-auto w-3/4">
        Si ya te registraste y recibiste un mail confirmando la validación de
        datos, entonces solo debes{' '}
        <Link href="/iniciar-sesion" className="text-violet-500 font-semibold">
          Loguearte aquí
        </Link>{' '}
      </p>
    </>
  );
};
export default RegistrarColegio;
