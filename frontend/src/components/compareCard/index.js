'use client';

import { useEffect, useState } from 'react';
import useColegioInfo from '@/hooks/useColegioInfo';

export function index (colegioId) {
  const [colegio, setColegio] = useState(null);
  const [colegioInfo, setColegioInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://educ-ar-lgxy.onrender.com/api/institutions/${colegioId}`);
        if (!response.ok) {
          throw new Error('Error en conexion al servidor');
        }
        const result = await response.json();
        setColegio(result);
        setColegioInfo(useColegioInfo(result));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [colegioId]);

  return {
    colegio, error, isLoading, colegioInfo
  };
}
