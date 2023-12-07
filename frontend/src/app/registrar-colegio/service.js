const URLback = 'https://educ-ar-lgxy.onrender.com/api/forms'


export const sendAllData = async (dataB) => {

    const institutionData = await fetch(URLback, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataB),
        })

        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status}`);
            }

            const resp = {
                status: response.status,
                data: response.json()
            }
            return resp;
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error en la solicitud:', error.message);
        });

    return institutionData;

}