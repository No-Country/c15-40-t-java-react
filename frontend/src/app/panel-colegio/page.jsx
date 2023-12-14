'use client';

import React from 'react';
import { Input, Button, Textarea, Select, SelectItem, Checkbox, CheckboxGroup } from '@nextui-org/react';
import { useForm, Controller } from 'react-hook-form';
import SchoolLevelForm from '@/components/SchoolLevelForm/SchoolLevelForm';
import { confirmation, educationalApproachTypes, genders, gestiones, religions, workshops, dataBackendFormat } from './utils';
import { sendAllData } from './service';
import { useRouter } from 'next/navigation';

const SchoolPanel = () => {
  const [isSelectedKinder, setIsSelectedKinder] = React.useState(false);
  const [isSelectedPrimary, setIsSelectedPrimary] = React.useState(false);
  const [isSelectedHighSchool, setIsSelectedHighSchool] = React.useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log('datos cargados', data);
    const cloudUrl = localStorage.getItem('cloudinaryUrl');
    const backendData = dataBackendFormat(data, cloudUrl);
    console.log(backendData);

    const response = await sendAllData(backendData);

    if (response.status !== 201) {
      console.log('Ups, problemas en el servidor!');
    } else {
      console.log('Datos de colegio cargados!');

      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
  };

  const submitImagesCloudinary = async (sendFile) => {
    const formData = new FormData();
    formData.append('file', sendFile);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData

    });
    const dataApi = await response.json();
    console.log(dataApi.message);
    localStorage.setItem('cloudinaryUrl', dataApi.url);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    mode: 'onBlur'
  });

  const customInputStyle = {
    label: 'font-semibold',
    base: 'group grid col-span-2 md:col-span-1',
    errorMessage: 'text-red-500'
  };

  return (

    <section className='max-w-7xl mx-auto'>
      <h1 className=" my-12 text-start font-bold text-3xl text-purple-500 col-span-2 ">
          Panel del Colegio
      </h1>

      <p className='mb-5'><strong>Importante:</strong> Aquí podrá cargar y editar todos los datos de la institución en un lapso máximo de 2 hs, pasado este tiempo, se cerrará la sesión y los datos no serán guardados, debiendo comenzar la carga desde el inicio</p>

      <form
        onSubmit={handleSubmit(onSubmit)}

        className=" grid grid-cols-2 gap-x-2 gap-y-4 mb-4 justify-around mx-auto bg-white rounded-3xl p-4 shadow-xl">

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

        <div className=" grid col-span-2  gap-2 md:col-span-1">
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

        <Controller
          name="management"
          control={control}
          rules={{
            required: 'Este campo es obligatorio'
          }}
          render={({ field }) =>
            <Select
              isRequired
              classNames={customInputStyle}
              label="Tipo de gestión"
              placeholder="Selecciona una opción"
              value={field.value ?? false}
              onChange={field.onChange}
              // className="max-w-xs"
              errorMessage={errors.management && errors.management.message}
              {...field}
            >
              {gestiones.map((gestion) => (
                <SelectItem key={gestion} value={gestion}>
                  {gestion}
                </SelectItem>
              ))}
            </Select>
          }
        />

        <Input
          isRequired
          label="Sitio web"
          classNames={customInputStyle}
          errorMessage={errors.website && errors.website.message}
          {...register('website', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 5,
              message: 'Debe tener al menos 5 caracteres'
            }
          })}
        />

        <Controller
          name="religion"
          control={control}
          rules={{
            required: 'Este campo es obligatorio'
          }}
          render={({ field }) =>
            <Select
              isRequired
              classNames={customInputStyle}
              label="Religión"
              placeholder="Selecciona una opción"
              value={field.value ?? false}
              onChange={field.onChange}
              // className="max-w-xs"
              errorMessage={errors.religion && errors.religion.message}
              {...field}
            >
              {religions.map((religion) => (
                <SelectItem key={religion.value} value={religion.value}>
                  {religion.text}
                </SelectItem>
              ))}
            </Select>
          }
        />

        <Controller
          name="gender"
          control={control}
          rules={{
            required: 'Este campo es obligatorio'
          }}
          render={({ field }) =>
            <Select
              isRequired
              classNames={customInputStyle}
              label="Género"
              placeholder="Selecciona una opción"
              value={field.value ?? false}
              onChange={field.onChange}
              // className="max-w-xs"
              errorMessage={errors.gender && errors.gender.message}
              {...field}
            >
              {genders.map((gender) => (
                <SelectItem key={gender.value} value={gender.value}>
                  {gender.text}
                </SelectItem>
              ))}
            </Select>
          }
        />

        <Controller
          name="educationalApproach"
          control={control}
          rules={{
            required: 'Este campo es obligatorio'
          }}
          render={({ field }) =>
            <Select
              isRequired
              classNames={customInputStyle}
              label="Enfoque educativo"
              placeholder="Selecciona una opción"
              value={field.value ?? false}
              onChange={field.onChange}
              // className="max-w-xs"
              errorMessage={errors.educationalApproach && errors.educationalApproach.message}
              {...field}
            >
              {educationalApproachTypes.map((education) => (
                <SelectItem key={education.value} value={education.value}>
                  {education.text}
                </SelectItem>
              ))}
            </Select>
          }
        />

        <Controller
          name="isBilingual"
          control={control}
          rules={{
            required: 'Este campo es obligatorio'
          }}
          render={({ field }) =>
            <Select
              isRequired
              classNames={customInputStyle}
              label="Es Bilingüe"
              placeholder="Selecciona una opción"
              value={field.value ?? false}
              onChange={field.onChange}
              // className="max-w-xs"
              errorMessage={errors.isBilingual && errors.isBilingual.message}
              {...field}
            >
              {confirmation.map((conf) => (
                <SelectItem key={conf.text} value={conf.value}>
                  {conf.text}
                </SelectItem>
              ))}
            </Select>
          }
        />

        <Controller
          name="hasUniform"
          control={control}
          rules={{
            required: 'Este campo es obligatorio'
          }}
          render={({ field }) =>
            <Select
              isRequired
              classNames={customInputStyle}
              label="Tiene uniforme"
              placeholder="Selecciona una opción"
              value={field.value ?? false}
              onChange={field.onChange}
              // className="max-w-xs"
              errorMessage={errors.hasUniform && errors.hasUniform.message}
              {...field}
            >
              {confirmation.map((conf) => (
                <SelectItem key={conf.text} value={conf.value}>
                  {conf.text}
                </SelectItem>
              ))}
            </Select>
          }
        />
        <Controller
          name="hasDiningRoom"
          control={control}
          rules={{
            required: 'Este campo es obligatorio'
          }}
          render={({ field }) =>
            <Select
              isRequired
              classNames={customInputStyle}
              label="Tiene comedor"
              placeholder="Selecciona una opción"
              value={field.value ?? false}
              onChange={field.onChange}
              // className="max-w-xs"
              errorMessage={errors.hasDiningRoom && errors.hasDiningRoom.message}
              {...field}
            >
              {confirmation.map((conf) => (
                <SelectItem key={conf.text} value={conf.value}>
                  {conf.text}
                </SelectItem>
              ))}
            </Select>
          }
        />

        <Textarea
          isRequired
          classNames={{
            label: 'font-semibold text-lg opacity-80',
            base: 'group grid col-span-2 md:col-span-1',
            errorMessage: 'text-red-500'
          }}
          label="Descripción"
          variant="bordered"
          placeholder="Escribe la descripción del colegio aquí"
          description="Ejemplo: Desde 1988, nuestra escuela crece con un misión concreta: lograr una formación integral en cada niño..."
          errorMessage={errors.description && errors.description.message}
          {...register('description', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 20,
              message: 'Debe tener al menos 20 caracteres'
            }
          })}

        />

        <Controller
          name="workshops"
          control={control}
          defaultValue={[]}
          rules={{
            required: 'Este campo es obligatorio'
          }}
          render={({ field }) =>
            <CheckboxGroup
              className=' col-span-2 md:col-span-1'
              classNames={{
                label: 'font-semibold mb-2',
                errorMessage: 'text-red-500'
              }}
              isRequired
              value={field.value}
              onChange={field.onChange}
              label="Selecciona los talleres extracurriculares"
              orientation="horizontal"
              color="secondary"
              errorMessage={errors.workshops && errors.workshops.message}
              {...field}
            >
              {workshops.map((workshop) =>
                <Checkbox key={ workshop} value={workshop}>{workshop}</Checkbox>
              )}
            </CheckboxGroup>
          }
        />

        <div className='w-full border-2 border-slate-200 rounded-lg p-2 col-span-2'>

          <input
            type="file"
            multiple
            {...register('images', {
              required: 'Este campo es obligatorio',
              onChange: (e) => submitImagesCloudinary(e.target.files[0])
            })}

          />
        </div>

        <SchoolLevelForm
          isSelected={isSelectedKinder}
          setIsSelected={setIsSelectedKinder}
          levelName='kindergarden'
          checkLevelText='Pre-escolar'
          register= {register}
          errors= {errors}
          control={control}
          feeInputFrom='feeGardenFrom'
          feeInputTo='feeGardenTo'
          morningScheduleFrom='morningScheduleGardenFrom'
          morningScheduleTo='morningScheduleGardenTo'
          afternoonScheduleFrom='afternoonScheduleGardenFrom'
          afternoonScheduleTo= 'afternoonScheduleGardenTo'
          classInput={{
            label: 'font-semibold',
            errorMessage: 'text-red-500'
          }}
          classSelect={{
            label: 'font-semibold',
            errorMessage: 'text-red-500'
          }}
          classCheckBox={{
            label: 'font-semibold',
            errorMessage: 'text-red-500'
          }}
        />
        <SchoolLevelForm
          isSelected={isSelectedPrimary}
          setIsSelected={setIsSelectedPrimary}
          levelName='primaryschool'
          checkLevelText='Primario'
          register= {register}
          errors= {errors}
          control={control}
          feeInputFrom='feePrimaryFrom'
          feeInputTo='feePrimaryTo'
          morningScheduleFrom='morningSchedulePrimaryFrom'
          morningScheduleTo='morningSchedulePrimaryTo'
          afternoonScheduleFrom='afternoonSchedulePrimaryFrom'
          afternoonScheduleTo= 'afternoonSchedulePrimaryTo'
          classInput={{
            label: 'font-semibold',
            errorMessage: 'text-red-500'
          }}
          classSelect={{
            label: 'font-semibold',
            errorMessage: 'text-red-500'
          }}
          classCheckBox={{
            label: 'font-semibold',
            errorMessage: 'text-red-500'
          }}
        />

        <SchoolLevelForm
          isSelected={isSelectedHighSchool}
          setIsSelected={setIsSelectedHighSchool}
          levelName='highschool'
          checkLevelText='Secundario'
          register= {register}
          errors= {errors}
          control={control}
          feeInputFrom='feeHighSchoolFrom'
          feeInputTo='feeHighSchoolTo'
          morningScheduleFrom='morningScheduleHighSchoolFrom'
          morningScheduleTo='morningScheduleHighSchoolTo'
          afternoonScheduleFrom='afternoonScheduleHighSchoolFrom'
          afternoonScheduleTo= 'afternoonScheduleHighSchoolTo'
          classInput={{
            label: 'font-semibold',
            errorMessage: 'text-red-500'
          }}
          classSelect={{
            label: 'font-semibold',
            errorMessage: 'text-red-500'
          }}
          classCheckBox={{
            label: 'font-semibold',
            errorMessage: 'text-red-500'
          }}
        />

        <Button
          type="submit"
          className="bg-orange-500 text-white col-span-2 w-1/3 justify-self-center font-semibold mb-2 md:w-1/4"
          radius="md">
          Cargar Datos
        </Button>

      </form>
    </section>
  );
};

export default SchoolPanel;
