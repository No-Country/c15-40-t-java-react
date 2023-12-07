import { useState } from 'react';

export const useFormLogin = async () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessageEmail, setErrorMessageEmail] = useState('')
    const [errorMessagePassword, setErrorMessagePassword] = useState('')

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const userData = {
            email: formData.post('email'),
            password: formData.post('password')
        }

        try {
            const response = await fetch('https://educ-ar-lgxy.onrender.com/auth/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
    
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Error en la solicitud al backend');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }


        console.log(userData)
        e.target.reset();
    }

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }; 

    const onBlurInputEmail = (e) => {

        if( user === '' ){
            setErrorMessageEmail('Ingrese email')
            return;
        } else{
            setErrorMessageEmail('')

        }
    }


    const onBlurInputPassword = (e) => {
        const password = e.target.value

        if( password === '' ){
            setErrorMessagePassword('Ingrese contraseña')
        } else {
            setErrorMessagePassword('')
        }
    }


    
    return {handleFormSubmit, user, handleUserChange, password, handlePasswordChange, onBlurInputPassword, onBlurInputEmail, errorMessageEmail, errorMessagePassword}
}


