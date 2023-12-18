'use client';
import { useState, useEffect } from 'react';
import useColegioInfo from './useColegioInfo';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [colegioInfo, setColegioInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [institutionNames, setInstitutionNames] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error('Error en conexion al servidor');
        }
        const result = await response.json();
        setData(result);
        setColegioInfo(useColegioInfo(result));
      } catch (error) {
        setError(error);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchData();
    return () => { controller.abort(); };
  }, [url]);

  useEffect(() => {
    if (data) {
      // Procesamiento de los datos y actualización del estado
      setInstitutionNames((prevData) => {
        // Concatenar los nuevos datos al estado existente
        const name = data.map((item) => {
          // Ejemplo de procesamiento, puedes ajustarlo según tus necesidades
          return { label: item.institutionName, value: item.id, description: 'descripcion si la hay' };
        });
        return [...prevData, ...name];
      });
    }
    setIsLoading(false);
  }, [data]);

  return { data, error, isLoading, institutionNames, colegioInfo };
};

export default useFetchData;
