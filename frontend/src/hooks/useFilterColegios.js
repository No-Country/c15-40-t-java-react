const useFilterColegios = (filtros, data) => {
  const filtrados = data?.filter(colegio => {
    const religionFilter =
      filtros.religion.length > 0 &&
      colegio.religion
        ? colegio?.religion.includes(filtros.religion)
        : true;

    const cityFilter =
      filtros.city.length > 0 &&
      colegio.city
        ? colegio?.city.includes(filtros.city)
        : true;

    const genereFilter =
        filtros.genere.length > 0 &&
        colegio.genere
          ? colegio?.genere.includes(filtros.genere)
          : true;

    const educationalApproachFilter =
          filtros.educationalApproach.length > 0 &&
          colegio.educationalApproach
            ? colegio?.educationalApproach.includes(filtros.educationalApproach)
            : true;

    return religionFilter && cityFilter && genereFilter && educationalApproachFilter;
  });

  return { filtrados };
};

export default useFilterColegios;
