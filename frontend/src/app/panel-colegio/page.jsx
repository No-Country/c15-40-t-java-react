'use client';

import React, { useEffect, useContext } from 'react';
import { Input, Button, Textarea, Select, SelectItem, Checkbox, CheckboxGroup, Image } from '@nextui-org/react';
import { useForm, Controller } from 'react-hook-form';
import SchoolLevelForm from '@/components/SchoolLevelForm/SchoolLevelForm';
import { confirmation, educationalApproachTypes, genders, gestiones, religions, workshops, dataBackendFormat } from './utils';
import { sendAllData, formatIn } from './service';
import { useRouter } from 'next/navigation';
import { Context } from '@/app/ContextProvider';

const SchoolPanel = () => {
  const [defaultValues2, setDefaultValues2] = React.useState(null);
  const [isSelectedKinder, setIsSelectedKinder] = React.useState(defaultValues2?.kindergarden);
  const [isSelectedPrimary, setIsSelectedPrimary] = React.useState(defaultValues2?.primaryschool);
  const [isSelectedHighSchool, setIsSelectedHighSchool] = React.useState(defaultValues2?.highschool);

  const imagesArray = defaultValues2?.images;

  const router = useRouter();

  const { jwt, emailLogin } = useContext(Context);
  const URLGetData = `https://educ-ar-lgxy.onrender.com/api/users/institution/${emailLogin}`;
  const URLPutData = `https://educ-ar-lgxy.onrender.com/api/institutions/${emailLogin}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await formatIn(URLGetData);
        setDefaultValues2(data);
        setIsSelectedKinder(data?.kindergarden);
        setIsSelectedPrimary(data?.primaryschool);
        setIsSelectedHighSchool(data?.highschool);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!jwt) {
      router.push('/');
    }
  }, [jwt, router]);

  console.log('default2: ', defaultValues2);

  useEffect(() => {
    reset({

      feeHighSchoolFrom: defaultValues2?.feeHighSchoolFrom,
      feeHighSchoolTo: defaultValues2?.feeHighSchoolTo,
      highSchoolInscriptionDate: defaultValues2?.highSchoolInscriptionDate,
      highschool: defaultValues2?.highschool,
      morningScheduleHighSchoolFrom: defaultValues2?.morningScheduleHighSchoolFrom,
      morningScheduleHighSchoolTo: defaultValues2?.morningScheduleHighSchoolTo,
      afternoonScheduleHighSchoolFrom: defaultValues2?.afternoonScheduleHighSchoolFrom,
      afternoonScheduleHighSchoolTo: defaultValues2?.afternoonScheduleHighSchoolTo,

      feeGardenFrom: defaultValues2?.feeGardenFrom,
      feeGardenTo: defaultValues2?.feeGardenTo,
      gardenInscriptionDate: defaultValues2?.kinderGardenInscriptionDate,
      kindergarden: defaultValues2?.kindergarden,
      morningScheduleGardenFrom: defaultValues2?.morningScheduleGardenFrom,
      morningScheduleGardenTo: defaultValues2?.morningScheduleGardenTo,
      afternoonScheduleGardenFrom: defaultValues2?.afternoonScheduleGardenFrom,
      afternoonScheduleGardenTo: defaultValues2?.afternoonScheduleGardenTo,

      feePrimaryFrom: defaultValues2?.feePrimaryFrom,
      feePrimaryTo: defaultValues2?.feePrimaryTo,
      primaryInscriptionDate: defaultValues2?.primaryInscriptionDate,
      primaryschool: defaultValues2?.primaryschool,
      morningSchedulePrimaryFrom: defaultValues2?.morningSchedulePrimaryFrom,
      morningSchedulePrimaryTo: defaultValues2?.morningSchedulePrimaryTo,
      afternoonSchedulePrimaryFrom: defaultValues2?.afternoonSchedulePrimaryFrom,
      afternoonSchedulePrimaryTo: defaultValues2?.afternoonSchedulePrimaryTo,

      management: defaultValues2?.management,
      religion: defaultValues2?.religion,
      gender: defaultValues2?.gender,
      educationalApproach: defaultValues2?.educationalApproach,
      hasDiningRoom: defaultValues2?.hasDiningRoom,
      hasUniform: defaultValues2?.hasUniform,
      isBilingual: defaultValues2?.isBilingual

    });
  }, [defaultValues2]);

  const onSubmit = async (data) => {
    console.log('datos cargados', data);
    console.log(JSON.stringify(data));
    const cloudUrl = localStorage.getItem('cloudinaryUrl');
    const backendData = dataBackendFormat(data, cloudUrl);
    console.log('backendData', JSON.stringify(backendData));

    const response = await sendAllData(backendData, URLPutData);

    if (response.status !== 200) {
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
    reset,
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

    (defaultValues2 && jwt)
      ? (

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
              defaultValue= {defaultValues2.institutionName}
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
              defaultValue={defaultValues2.address}
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
              defaultValue={defaultValues2.city}
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
              defaultValue={defaultValues2.phone}
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
              isReadOnly
              label="Email de la institución"
              defaultValue={defaultValues2.email} // ver si lo tomo de aca o de context
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
                defaultValue={defaultValues2.cue}
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
                  defaultSelectedKeys={[defaultValues2.management]} // dinamico
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
              defaultValue={defaultValues2.website}
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
                  defaultSelectedKeys={defaultValues2.religion} // dinamico
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
                  defaultSelectedKeys={[defaultValues2.gender]}
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
                  defaultSelectedKeys={[defaultValues2.educationalApproach]}
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
                  defaultSelectedKeys={[defaultValues2.isBilingual ? 'Si' : 'No']}
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
                  defaultSelectedKeys={[defaultValues2.hasUniform ? 'Si' : 'No']}
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
                  defaultSelectedKeys={[defaultValues2.hasDiningRoom ? 'Si' : 'No']}
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
              defaultValue={defaultValues2.description}
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
              defaultValue={defaultValues2.workshops}
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
                  required: (imagesArray?.length === 0),
                  onChange: (e) => submitImagesCloudinary(e.target.files[0])
                })}

              />
            </div>
            <div className='w-full border-2 border-slate-200 rounded-lg p-2 col-span-2'>
              <h4 className='mb-4'>Imágenes cargadas previamente</h4>

              {imagesArray?.length > 0
                ? <div className='flex flex-wrap gap-4 justify-center mb-4'>
                  {imagesArray.map((image, index) => {
                    return <Image
                      key={index}
                      width={300}
                      alt="NextUI hero Image"
                      src={image}
                    />;
                  })}

                </div>
                : <p className='text-center mb-4'>Aún no se han cargado imágenes</p>
              }

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
              defaultFeeFrom={defaultValues2.feeGardenFrom}
              defaultFeeTo={defaultValues2.feeGardenTo}
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
              inscriptionDate={'gardenInscriptionDate'}
              inscriptionDateDefault={defaultValues2.kinderGardenInscriptionDate}
              defaultMorningScheduleFrom={defaultValues2.morningScheduleGardenFrom}
              defaultMorningScheduleTo={defaultValues2.morningScheduleGardenTo}
              defaultAfternoonScheduleFrom={defaultValues2.afternoonScheduleGardenFrom}
              defaultAfternoonScheduleTo={defaultValues2.afternoonScheduleGardenTo}
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
              defaultFeeFrom={defaultValues2.feePrimaryFrom}
              defaultFeeTo={defaultValues2.feePrimaryTo}
              morningScheduleFrom='morningSchedulePrimaryFrom'
              morningScheduleTo='morningSchedulePrimaryTo'
              afternoonScheduleFrom='afternoonSchedulePrimaryFrom'
              afternoonScheduleTo= 'afternoonSchedulePrimaryTo'
              classInput={{
                label: 'font-semibold',
                errorMessage: 'text-red-500'
              }}s
              classSelect={{
                label: 'font-semibold',
                errorMessage: 'text-red-500'
              }}
              classCheckBox={{
                label: 'font-semibold',
                errorMessage: 'text-red-500'
              }}
              inscriptionDate={'primaryInscriptionDate'}
              inscriptionDateDefault={defaultValues2.primaryInscriptionDate}
              defaultMorningScheduleFrom={defaultValues2.morningSchedulePrimaryFrom}
              defaultMorningScheduleTo={defaultValues2.morningSchedulePrimaryTo}
              defaultAfternoonScheduleFrom={defaultValues2.afternoonSchedulePrimaryFrom}
              defaultAfternoonScheduleTo={defaultValues2.afternoonSchedulePrimaryTo}
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
              defaultFeeFrom={defaultValues2.feeHighSchoolFrom}
              defaultFeeTo={defaultValues2.feeHighSchoolTo}
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
              inscriptionDate={'highSchoolInscriptionDate'}
              inscriptionDateDefault={defaultValues2.highSchoolInscriptionDate} // dinamico
              defaultMorningScheduleFrom = {defaultValues2.morningScheduleHighSchoolFrom}
              defaultMorningScheduleTo = {defaultValues2.morningScheduleHighSchoolTo}
              defaultAfternoonScheduleFrom= {defaultValues2.afternoonScheduleHighSchoolFrom}
              defaultAfternoonScheduleTo={defaultValues2.afternoonScheduleHighSchoolTo}
              defaultOrientations={defaultValues2.highschoolOrientacions}
            />

            <Button
              type="submit"
              className="bg-orange-500 text-white col-span-2 w-1/3 justify-self-center font-semibold mb-2 md:w-1/4"
              radius="md">
          Cargar Datos
            </Button>

          </form>
        </section>

      )
      : (
        <p className='text-center font-bold'>Cargando Panel...</p>
        // router.push('/')
      )

  );
};

export default SchoolPanel;
