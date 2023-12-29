function generateMorningSchedule () {
  const schedules = [];

  for (let hour = 7; hour < 13; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      const schedule = `${formattedHour}:${formattedMinute}`;
      schedules.push(schedule);
    }
  }

  schedules.unshift('No tiene');

  return schedules;
}

export const generatedMorningSchedules = generateMorningSchedule();

function generateAfternoonSchedule () {
  const schedules = [];

  for (let hour = 12; hour < 18; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      const schedule = `${formattedHour}:${formattedMinute}`;
      schedules.push(schedule);
    }
  }

  schedules.unshift('No tiene');

  return schedules;
}

export const generatedAfternoonSchedules = generateAfternoonSchedule();

export const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
export const gestiones = ['Público', 'Privado', 'Mixto'];
export const religions = [{ value: 'CATOLICO', text: 'Católico' }, { value: 'JUDIO', text: 'Judío' }, { value: 'EVANGELISTA', text: 'Evangelista' }, { value: 'LAICO', text: 'Laico' }, { value: 'OTRO', text: 'Otro' }];
export const genders = [{ value: 'FEMENINO', text: 'Femenino' }, { value: 'MASCULINO', text: 'Masculino' }, { value: 'MIXTO', text: 'Mixto' }];
export const educationalApproachTypes = [{ value: 'TRADICIONAL', text: 'Tradicional' }, { value: 'MONTESORI', text: 'Montesori' }, { value: 'ESPECIAL', text: 'Especial' }];
export const orientations = ['Cs Sociales', 'Cs Naturales', 'Economía y Adm', 'Comunicación', 'Arte', 'Educación Física', 'Lenguas extranjeras', 'Informática', 'Técnico', 'Turismo', 'Otra'];
export const workshops = ['Inglés', 'Informática', 'Deportes', 'Arte', 'Fotografía', 'Otros', 'No tenemos'];
export const confirmation = [{ value: true, text: 'Si' }, { value: false, text: 'No' }];

export const dataBackendFormat = (data, imageData) => {
  const allData = {

    institutionName: data.institutionName,
    address: data.address,
    city: data.city,
    phones: [
      data.phone
    ],
    cue: data.cue,
    description: data.description,
    web: data.website,
    administration: data.management,
    educationLevels: levels(data),
    educationalWorkshops: data.workshops,
    bilingual: data.isBilingual === 'Si',
    canteen: data.hasDiningRoom === 'Si',
    religion: data.religion,
    schoolUniform: data.hasUniform === 'Si',
    genere: data.gender,
    educationalApproach: data.educationalApproach,
    images: [imageData],
    logo: '',
    activated: data.activated
  };

  return allData;
};

/* const probandoFuncion = (data) => {
  const inicial =
    {
      level: data.kindergarden && 'INICIAL',
      fee: { min: data.feeGardenFrom, max: data.feeGardenTo },
      inscriptionMonth: data.kinderGardenInscriptionDate,
      shifts: [
        { type: 'MAÑANA', schedule: { min: data.morningScheduleGardenFrom, max: data.morningScheduleGardenTo } },
        { type: 'TARDE', schedule: { min: data.afternoonScheduleGardenFrom, max: data.afternoonScheduleGardenTo } }
      ],
      orientations: []
    };

  const primario =
    {
      level: data.primaryschool && 'PRIMARIO',
      fee: { min: data.feePrimaryFrom, max: data.feePrimaryTo },
      inscriptionMonth: data.primaryInscriptionDate,
      shifts: [
        { type: 'MAÑANA', schedule: { min: data.morningSchedulePrimaryFrom, max: data.morningSchedulePrimaryTo } },
        { type: 'TARDE', schedule: { min: data.afternoonSchedulePrimaryFrom, max: data.afternoonSchedulePrimaryTo } }
      ],
      orientations: []
    };

  const secundario =
    {
      level: data.highschool && 'SECUNDARIO',
      fee: { min: data.feeHighSchoolFrom, max: data.feeHighSchoolTo },
      inscriptionMonth: data.highSchoolInscriptionDate,
      shifts: [
        { type: 'MAÑANA', schedule: { min: data.morningScheduleHighSchoolFrom, max: data.morningScheduleHighSchoolTo } },
        { type: 'TARDE', schedule: { min: data.afternoonScheduleHighSchoolFrom, max: data.afternoonScheduleHighSchoolTo } }
      ],
      orientations: data.highschoolOrientacions
    };

  if (data.kindergarden && data.primaryschool && data.highschool) {
    return [inicial, primario, secundario];
  }
  if (data.kindergarden && data.primaryschool) {
    return [inicial, primario];
  }
  if (data.kindergarden && data.highschool) {
    return [inicial, secundario];
  }
  if (data.primaryschool && data.highschool) {
    return [primario, secundario];
  }
  if (data.kindergarden) {
    return [inicial];
  }
  if (data.primaryschool) {
    return [primario];
  }
  if (data.highschool) {
    return [secundario];
  }
  if (!data.kindergarden && !data.primaryschool && !data.highschool) {
    return null;
  }
}; */

const levels = (data) => {
  const educationLevelsData = (data.kindergarden || data.primaryschool || data.highschool)
    ? [
      ...(data.kindergarden
        ? [{
          level: 'INICIAL',
          fee: { min: data.feeGardenFrom, max: data.feeGardenTo },
          inscriptionMonth: data.kinderGardenInscriptionDate,
          shifts: [
            { type: 'MAÑANA', schedule: { min: data.morningScheduleGardenFrom, max: data.morningScheduleGardenTo } },
            { type: 'TARDE', schedule: { min: data.afternoonScheduleGardenFrom, max: data.afternoonScheduleGardenTo } }
          ],
          orientations: []
        }]
        : []),
      ...(data.primaryschool
        ? [{
          level: 'PRIMARIO',
          fee: { min: data.feePrimaryFrom, max: data.feePrimaryTo },
          inscriptionMonth: data.primaryInscriptionDate,
          shifts: [
            { type: 'MAÑANA', schedule: { min: data.morningSchedulePrimaryFrom, max: data.morningSchedulePrimaryTo } },
            { type: 'TARDE', schedule: { min: data.afternoonSchedulePrimaryFrom, max: data.afternoonSchedulePrimaryTo } }
          ],
          orientations: []
        }]
        : []),
      ...(data.highschool
        ? [{
          level: 'SECUNDARIO',
          fee: { min: data.feeHighSchoolFrom, max: data.feeHighSchoolTo },
          inscriptionMonth: data.highSchoolInscriptionDate,
          shifts: [
            { type: 'MAÑANA', schedule: { min: data.morningScheduleHighSchoolFrom, max: data.morningScheduleHighSchoolTo } },
            { type: 'TARDE', schedule: { min: data.afternoonScheduleHighSchoolFrom, max: data.afternoonScheduleHighSchoolTo } }
          ],
          orientations: data.highschoolOrientacions
        }]
        : [])
    ]
    : null;

  return educationLevelsData;
};
