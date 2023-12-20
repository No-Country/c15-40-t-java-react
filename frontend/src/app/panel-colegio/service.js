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
