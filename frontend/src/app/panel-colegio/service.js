import { defaultValuesFunc } from './defaultValues.js';
// SERVICIO GET
// -----------------------------
const URLGetData = 'https://educ-ar-lgxy.onrender.com/api/users/institution/test_form2.2@gmail.com';

export const getSchoolData = async () => {
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

const getPreviousData = async () => {
  const previousData = await getSchoolData();
  if (previousData.status !== 200) {
    console.log('Ups, problemas en el servidor!');
  } else {
    console.log('datos previos');
    console.log(previousData.data);

    return previousData.data;
  }
};

export const formatIn = async () => {
  const prevDataObject = await getPreviousData();
  console.log('datos listos del get: ', prevDataObject);
  const convertObject = defaultValuesFunc(prevDataObject);
  return convertObject;
};

// SERVICIO POST
// -----------------------------

const URLPostData = 'https://educ-ar-lgxy.onrender.com/api/institutions';

export const sendAllData = async (dataB) => {
  const institutionData = await fetch(URLPostData, {
    method: 'POST',
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
