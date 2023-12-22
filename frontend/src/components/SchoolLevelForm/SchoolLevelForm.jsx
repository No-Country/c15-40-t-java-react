import React from 'react';
import { Input, Select, SelectItem, Checkbox, CheckboxGroup } from '@nextui-org/react';
import { Controller } from 'react-hook-form';
import { months, generatedAfternoonSchedules, generatedMorningSchedules, orientations } from '@/app/panel-colegio/utils';

const SchoolLevelForm = (props) => {
  const {
    isSelected,
    setIsSelected,
    levelName,
    checkLevelText,
    register,
    errors,
    control,
    feeInputFrom,
    feeInputTo,
    defaultFeeFrom,
    defaultFeeTo,
    morningScheduleFrom,
    morningScheduleTo,
    afternoonScheduleFrom,
    afternoonScheduleTo,
    classInput,
    classSelect,
    classCheckBox,
    inscriptionDate,
    inscriptionDateDefault,
    defaultMorningScheduleFrom, // desde aca
    defaultMorningScheduleTo,
    defaultAfternoonScheduleFrom,
    defaultAfternoonScheduleTo,
    defaultOrientations
    // defaultLevelState

  } = props;

  return (

    <section className='border-2 border-slate-200 rounded-lg p-2 grid col-span-2 md:col-span-1'>
      <Controller
        name={levelName}
        control={control}
        render={({ field }) =>
          <Checkbox
            isSelected={isSelected}
            onValueChange={setIsSelected}
            className='mb-2'
            classNames={classCheckBox}
            orientation="horizontal"
            color="secondary"
            {...field}
          > {checkLevelText}</Checkbox>
        }
      />
      <div>
        <p className='mb-1'>Precio cuota</p>

        <div className='grid grid-cols-2 gap-4 mb-4 '>

          <Input
            isRequired={isSelected}
            label="Desde"
            defaultValue={defaultFeeFrom} // ver
            classNames={classInput}
            errorMessage={isSelected && errors.feeInputTo?.message

            }
            {...register(feeInputFrom, {

              require: !!isSelected,
              pattern: {
                value: /^[0-9\s]+$/i,
                message: 'Escriba solo números'
              }

            })}
          />
          <Input
            isRequired={isSelected}
            label="Hasta"
            defaultValue={defaultFeeTo} // debe ser dinamico
            classNames={classInput}
            errorMessage={
              isSelected && errors.feeInputTo?.message
            }
            {...register(feeInputTo, {
              require: !!isSelected,
              pattern: {
                value: /^[0-9\s]+$/i,
                message: 'Escriba solo números'
              }
            })}
          />
        </div>
      </div>

      <Controller
        name={inscriptionDate}
        control={control}
        rules={{
          ...(isSelected && { required: 'Este campo es obligatorio' })
        }}
        render={({ field }) =>
          <Select
            isRequired={isSelected}
            classNames={classSelect}
            className='mb-4'
            label="Fecha de inscripción"
            defaultSelectedKeys= {[inscriptionDateDefault]} // dinamico
            placeholder="Selecciona una opción"
            value={field.value ?? false}
            onBlur={field.onBlur}
            // className="max-w-xs"
            errorMessage={errors.inscriptionDate && isSelected && errors.inscriptionDate.message}
            {...field}
          >
            {months.map((month) => (
              <SelectItem key={month} value={month}>
                {month}
              </SelectItem>
            ))}
          </Select>
        }
      />

      <div>
        <p className='mb-1'>Turno mañana</p>

        <div className='grid grid-cols-2 gap-4 mb-4 '>

          <Controller
            name={morningScheduleFrom}
            control={control}
            rules={{
              ...(isSelected && { required: 'Este campo es obligatorio' })
            }}
            render={({ field }) =>
              <Select
                isRequired={isSelected}
                classNames={classSelect}
                defaultSelectedKeys={[defaultMorningScheduleFrom]} // dinamico
                label="Desde"
                placeholder="Selecciona una opción"
                value={field.value ?? false}
                onBlur={field.onBlur}
                // className="max-w-xs"
                errorMessage={errors.morningScheduleFrom && isSelected && errors.morningScheduleFrom.message}
                {...field}
              >
                {generatedMorningSchedules.map((schedule) => (
                  <SelectItem key={schedule} value={schedule}>
                    {schedule}
                  </SelectItem>
                ))}
              </Select>
            }
          />
          <Controller
            name={morningScheduleTo}
            control={control}
            rules={{
              ...(isSelected && { required: 'Este campo es obligatorio' })
            }}
            render={({ field }) =>
              <Select
                isRequired={isSelected}
                classNames={classSelect}
                label="Hasta"
                placeholder="Selecciona una opción"
                defaultSelectedKeys={[defaultMorningScheduleTo]} // dinamico
                value={field.value ?? false}
                onBlur={field.onBlur}
                // className="max-w-xs"
                errorMessage={errors.morningScheduleTo && isSelected && errors.morningScheduleTo.message}
                {...field}
              >
                {generatedMorningSchedules.map((schedule) => (
                  <SelectItem key={schedule} value={schedule}>
                    {schedule}
                  </SelectItem>
                ))}
              </Select>
            }
          />
        </div>
      </div>

      <div>
        <p className='mb-1'>Turno tarde</p>

        <div className='grid grid-cols-2 gap-4 mb-4 '>

          <Controller
            name={afternoonScheduleFrom}
            control={control}
            rules={{
              ...(isSelected && { required: 'Este campo es obligatorio' })
            }}
            render={({ field }) =>
              <Select
                isRequired={isSelected}
                classNames={classSelect}
                label="Desde"
                placeholder="Selecciona una opción"
                defaultSelectedKeys={[defaultAfternoonScheduleFrom]} // dinamico
                value={field.value ?? false}
                onBlur={field.onBlur}
                // className="max-w-xs"
                errorMessage={errors.afternoonScheduleFrom && isSelected && errors.afternoonScheduleFrom.message}
                {...field}
              >
                {generatedAfternoonSchedules.map((schedule) => (
                  <SelectItem key={schedule} value={schedule}>
                    {schedule}
                  </SelectItem>
                ))}
              </Select>
            }
          />
          <Controller
            name={afternoonScheduleTo}
            control={control}
            rules={{
              ...(isSelected && { required: 'Este campo es obligatorio' })
            }}
            render={({ field }) =>
              <Select
                isRequired={isSelected}
                classNames={classSelect}
                label="Hasta"
                placeholder="Selecciona una opción"
                defaultSelectedKeys={[defaultAfternoonScheduleTo]} // dinamico
                value={field.value ?? false}
                onBlur={field.onBlur}
                // className="max-w-xs"
                errorMessage={errors.afternoonScheduleTo && isSelected && errors.afternoonScheduleTo.message}
                {...field}
              >
                {generatedAfternoonSchedules.map((schedule) => (
                  <SelectItem key={schedule} value={schedule}>
                    {schedule}
                  </SelectItem>
                ))}
              </Select>
            }
          />
        </div>
      </div>

      {levelName === 'highschool' &&
          <Controller
            name="highschoolOrientacions"
            control={control}
            defaultValue={defaultOrientations}
            rules={{
              ...(isSelected ? { required: 'Este campo es obligatorio' } : {})
            }}
            render={({ field }) =>
              <CheckboxGroup
                /* className=' col-span-2 md: col-span-1' */
                classNames={{
                  label: 'font-semibold mb-2',
                  errorMessage: 'text-red-500'
                }}
                isRequired={isSelected}
                value={field.value}
                onChange={field.onChange}
                label="Selecciona las orientaciones del secundario"
                orientation="horizontal"
                color="secondary"
                errorMessage={errors.highschoolOrientacions && errors.highschoolOrientacions.message}
                {...field}
              >
                {orientations.map((orientation) =>
                  <Checkbox key={ orientation} value={orientation}>{orientation}</Checkbox>
                )}
              </CheckboxGroup>
            }
          />}

    </section>
  );
};

export default SchoolLevelForm;
