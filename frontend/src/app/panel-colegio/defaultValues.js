/* import { getSchoolData } from './service';

const getPreviousData = async () => {
  const previousData = await getSchoolData();
  if (previousData.status !== 200) {
    console.log('Ups, problemas en el servidor!');
  } else {
    console.log('datos previos');

    return previousData.data;
  }
};

const prevData = await getPreviousData();

console.log('vengo del GET: ', prevData); */

// FUNCION QUE RECORRA LOS LEVELS QUE TRAE EL GET, Y VER SI COINCIDE CON EL NIVEL BUSCADO
// debo escribir el parametro en mayuscula
/* const schoolLevel = (wantedLevel) => {
  const levelsArray = prevData?.educationLevels || [];
  let presentLevel = false;

  levelsArray.forEach((obj) => {
    if (obj.level === wantedLevel) {
      presentLevel = true;
    }
  });

  return presentLevel;
};
 */
// falta el email
// falta description??
// imagenes cargadas previamente
// GET DEL COLEGIO
// ------------------------
/* const kinderGardenObject = prevData?.educationLevels.find(item => item.level === 'INICIAL');
const primaryObject = prevData?.educationLevels.find(item => item.level === 'PRIMARIO');
const highSchoolObject = prevData?.educationLevels.find(item => item.level === 'SECUNDARIO'); */

/* console.log('kinderobject: ', kinderGardenObject); */

export const defaultValuesFunc = (prevData) => {
  const kinderGardenObject = prevData?.educationLevels.find(item => item.level === 'INICIAL');
  const primaryObject = prevData?.educationLevels.find(item => item.level === 'PRIMARIO');
  const highSchoolObject = prevData?.educationLevels.find(item => item.level === 'SECUNDARIO');

  const schoolLevel = (wantedLevel) => {
    const levelsArray = prevData?.educationLevels || [];
    let presentLevel = false;

    levelsArray.forEach((obj) => {
      if (obj.level === wantedLevel) {
        presentLevel = true;
      }
    });

    return presentLevel;
  };

  const defaultObject = {
    institutionName: prevData?.institutionName || '',
    address: prevData?.address || '',
    city: prevData?.city ?? '',
    phone: prevData?.phones[0] ?? '',
    cue: prevData?.cue ?? '',
    website: prevData?.web ?? '',
    images: prevData?.images,
    management: prevData?.administration,
    religion: prevData?.religion,
    gender: prevData?.genere,
    educationalApproach: prevData?.educationalApproach,
    isBilingual: prevData?.bilingual,
    hasUniform: prevData?.schoolUniform,
    hasDiningRoom: prevData?.canteen,
    workshops: prevData?.educationalWorkshops,

    feeGardenFrom: kinderGardenObject?.fee.min ?? undefined, // ACAAA
    feeGardenTo: kinderGardenObject?.fee.max ?? undefined,
    kindergarden: !!schoolLevel('INICIAL'),
    kinderGardenInscriptionDate: kinderGardenObject?.inscriptionMonth,
    morningScheduleGardenFrom: kinderGardenObject?.shifts[0].schedule.min,
    morningScheduleGardenTo: kinderGardenObject?.shifts[0].schedule.max,
    afternoonScheduleGardenFrom: kinderGardenObject?.shifts[1].schedule.min,
    afternoonScheduleGardenTo: kinderGardenObject?.shifts[1].schedule.max,

    feePrimaryFrom: primaryObject?.fee.min ?? undefined,
    feePrimaryTo: primaryObject?.fee.max ?? undefined,
    primaryschool: !!schoolLevel('PRIMARIO'),
    primaryInscriptionDate: primaryObject?.inscriptionMonth,
    morningSchedulePrimaryFrom: primaryObject?.shifts[0].schedule.min,
    morningSchedulePrimaryTo: primaryObject?.shifts[0].schedule.max,
    afternoonSchedulePrimaryFrom: primaryObject?.shifts[1].schedule.min,
    afternoonSchedulePrimaryTo: primaryObject?.shifts[1].schedule.max,

    feeHighSchoolFrom: highSchoolObject?.fee.min ?? undefined,
    feeHighSchoolTo: highSchoolObject?.fee.max ?? undefined,
    highschool: !!schoolLevel('SECUNDARIO'),
    highSchoolInscriptionDate: highSchoolObject?.inscriptionMonth,
    morningScheduleHighSchoolFrom: highSchoolObject?.shifts[0].schedule.min,
    morningScheduleHighSchoolTo: highSchoolObject?.shifts[0].schedule.max,
    afternoonScheduleHighSchoolFrom: highSchoolObject?.shifts[1].schedule.min,
    afternoonScheduleHighSchoolTo: highSchoolObject?.shifts[1].schedule.max,
    highschoolOrientacions: highSchoolObject?.orientations

  };

  console.log('objeto default: ', defaultObject);

  return defaultObject;
};

/* export const defaultValues2 = {
  institutionName: 'Santo Tomas',
  address: 'direccion',
  city: 'ciudad',
  phone: '3516662227',
  email: 'san@gmail.com',
  cue: '876999001',
  website: 'www.hola.com',
  description: 'colegio para que asistan los niños',
  images: ['https://res.cloudinary.com/dtlp963jy/image/upload/v1702582813/d9uyafwyoo6hey2tufjl.jpg'], //
  management: 'Público',
  religion: 'LAICO',
  gender: 'FEMENINO',
  educationalApproach: 'TRADICIONAL',
  isBilingual: true,
  hasUniform: true,
  hasDiningRoom: true,
  workshops: [
    'Informática',
    'Arte'
  ],

  feeGardenFrom: '10',
  feeGardenTo: '20',
  kindergarden: true,
  kinderGardenInscriptionDate: 'Julio',
  primaryInscriptionDate: 'Agosto',
  highSchoolInscriptionDate: 'Septiembre',
  morningScheduleGardenFrom: '07:00',
  morningScheduleGardenTo: '07:15',
  afternoonScheduleGardenFrom: '13:00',
  afternoonScheduleGardenTo: '17:00',

  feePrimaryFrom: '30',
  feePrimaryTo: '40',
  primaryschool: true,
  morningSchedulePrimaryFrom: 'No tiene',
  morningSchedulePrimaryTo: 'No tiene',
  afternoonSchedulePrimaryFrom: '12:00',
  afternoonSchedulePrimaryTo: '16:00',

  feeHighSchoolFrom: '50',
  feeHighSchoolTo: '60',
  highschool: true,
  morningScheduleHighSchoolFrom: '08:00',
  morningScheduleHighSchoolTo: '11:45',
  afternoonScheduleHighSchoolFrom: 'No tiene',
  afternoonScheduleHighSchoolTo: 'No tiene',
  highschoolOrientacions: [
    'Cs Naturales',
    'Educación Física',
    'Otra'
  ]
};
 */
