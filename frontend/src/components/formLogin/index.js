import { useState } from 'react';

export const useFormLogin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (user !== '' && password !== '') {
      const formData = new FormData(e.target);
      const userData = {
        email: formData.get('email'),
        password: formData.get('password')
      };

      try {
        const response = await fetch(
          'https://educ-ar-lgxy.onrender.com/auth/authenticate',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
          }
        );

        if (response.ok) {
          const data = await response.json();
          document.cookie = `jwt=${data.token}; expires${new Date(
            Date.now() + 1 * 24 * 60 * 1000
          ).toUTCString()};path=/`;
        }
      } catch (error) {
        console.error('Error de red:', error);
      }

      e.target.reset();
    } else if (user === '' && password === '') {
      setErrorMessageEmail('Ingrese email');
      setErrorMessagePassword('Ingrese contraseña');
    } else if (user === '') {
      setErrorMessageEmail('Ingrese email');
    } else if (password === '') {
      setErrorMessagePassword('Ingrese contraseña');
    }
  };

  const handleUserChange = (e) => {
    const email = e.target.value;
    setUser(email);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onBlurInputEmail = (e) => {
    const email = e.target.value;
    if (email === '') {
      setErrorMessageEmail('Ingrese email');
    } else {
      setErrorMessageEmail('');
    }
  };

  const onBlurInputPassword = (e) => {
    const password = e.target.value;

    if (password === '') {
      setErrorMessagePassword('Ingrese contraseña');
    } else {
      setErrorMessagePassword('');
    }
  };

  return {
    handleFormSubmit,
    user,
    handleUserChange,
    password,
    handlePasswordChange,
    onBlurInputPassword,
    onBlurInputEmail,
    errorMessageEmail,
    errorMessagePassword
  };
};
