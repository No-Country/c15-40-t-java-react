'use client';
import { useState, useEffect } from 'react';

const useCityNames = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cityNames, setCityNames] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://educ-ar-lgxy.onrender.com/api/institutions/citiesNames', { signal: controller.signal });
        if (!response.ok) {
          if (response.status === 404) {
            setError('No se encontraron datos');
          } else {
            throw new Error('Error en conexión al servidor');
          }
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    return () => { controller.abort(); };
  }, []);

  useEffect(() => {
    if (data) {
      // Procesamiento de los datos y actualización del estado
      setCityNames((prevData) => {
        // Concatenar los nuevos datos al estado existente
        const cities = Object.keys(data).map((key) => ({
          label: data[key],
          value: data[key],
          description: data[key]
        }));
        return [...prevData, ...cities];
      });
    }
    setIsLoading(false);
  }, [data]);

  return { error, isLoading, cityNames };
};

export default useCityNames;
