import { defaultValuesFunc } from './defaultValues.js';

// const schoolEmail = ''; // debo traerlo de context
// SERVICIO GET
// -----------------------------
// const URLGetData = 'https://educ-ar-lgxy.onrender.com/api/users/institution/castelfrancoOk@pepe.com';

export const getSchoolData = async (URLGetData) => {
  const institutionData = await fetch(URLGetData, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

    .then(response => {
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }

      const resp = {
        status: response.status,
        data: response.json()
      };
      return resp;
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error en la solicitud:', error.message);
    });

  return institutionData;
};

export const getPreviousData = async (URLGetData) => {
  const previousData = await getSchoolData(URLGetData);
  if (previousData.status !== 200) {
    console.log('Ups, problemas en el servidor!');
  } else {
    // console.log('datos previos');
    // console.log(previousData.data);

    return previousData.data;
  }
};

export const formatIn = async (URLGetData) => {
  const prevDataObject = await getPreviousData(URLGetData);
  // console.log('datos listos del get: ', prevDataObject);
  const convertObject = defaultValuesFunc(prevDataObject);
  return convertObject;
};

// SERVICIO POST
// -----------------------------

// const URLPostData = 'https://educ-ar-lgxy.onrender.com/api/institutions/${email}';

export const sendAllData = async (dataB, URLPostData) => {
  const institutionData = await fetch(URLPostData, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataB)
  })

    .then(response => {
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }

      const resp = {
        status: response.status,
        data: response.json()
      };
      return resp;
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error en la solicitud:', error.message);
    });

  return institutionData;
};
