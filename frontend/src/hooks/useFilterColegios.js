const useFilterColegios = (filtros, data) => {
  const religiones = data?.filter(colegio => {
    const religionFilter = filtros.religion &&
        data?.religion.includes(filtros.religion);

    return religionFilter;
  });

  return { religiones };
};

export default useFilterColegios;
