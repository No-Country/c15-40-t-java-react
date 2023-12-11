import { colegioDetail } from '@/app/comparar-colegios/data';

export function index (colegioId) {
  function filterObjectById (array, id) {
    return array.filter((objeto) => objeto.id === id)[0];
  }

  const colegio = filterObjectById(colegioDetail, colegioId);
  let educationLevelsString = '';
  let talleresString = '';
  let religionesString = '';
  const institutionName = colegio.institutionName;
  const address = colegio.address;
  const city = colegio.city;
  const bilingual = colegio.bilingual ? 'Si' : 'No';
  const comedor = colegio.comedor ? 'Si' : 'No';
  const uniforme = colegio.uniforme ? 'Si' : 'No';
  const calefaccion = colegio.calefaccion ? 'Si' : 'No';

  console.log(colegio);

  colegio.educationLevels.forEach((level, index) => {
    educationLevelsString += (index > 0 ? ' - ' : '') + level.name;
  });

  colegio.talleres.forEach((taller, index) => {
    talleresString += (index > 0 ? ' - ' : '') + taller;
  });

  colegio.religion.forEach((religion, index) => {
    religionesString += (index > 0 ? ' - ' : '') + religion;
  });

  return {
    institutionName,
    address,
    city,
    educationLevelsString,
    talleresString,
    bilingual,
    comedor,
    religionesString,
    uniforme,
    calefaccion
  };
}
