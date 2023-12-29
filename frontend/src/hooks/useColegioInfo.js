const useColegioInfo = (colegio) => {
  let educationLevelsString = '';
  let talleresString = '';

  const institutionName = colegio.institutionName;
  const address = colegio.address.length > 0 ? colegio.address : 'Sin información';
  const city = colegio.city;
  const bilingual = colegio.bilingual ? 'Si' : 'No';
  const canteen = colegio.canteen ? 'Si' : 'No';
  const schoolUniform = colegio.schoolUniform ? 'Si' : 'No';
  const administration = colegio.administration.length > 0 ? colegio.administration : 'Sin información';
  const religion = colegio.religion ? colegio.religion : 'No hay datos';

  colegio.educationLevels?.forEach((level, index) => {
    educationLevelsString += (index > 0 ? ' - ' : '') + level.level;
  });

  colegio.educationalWorkshops?.forEach((taller, index) => {
    talleresString += (index > 0 ? ' - ' : '') + taller;
  });

  /*   colegio.religion?.forEach((religion, index) => {
    religionesString += (index > 0 ? ' - ' : '') + religion;
  }); */

  return {
    institutionName,
    address,
    city,
    educationLevelsString,
    talleresString,
    bilingual,
    canteen,
    religion,
    schoolUniform,
    administration
  };
};

export default useColegioInfo;
