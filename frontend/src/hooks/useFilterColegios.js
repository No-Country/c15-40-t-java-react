const useFilterColegios = (filtros, data) => {
  console.log(filtros, data);
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

    return religionFilter && cityFilter;
  });

  return { filtrados };
};

export default useFilterColegios;
