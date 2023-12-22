import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Context } from '@/app/ContextProvider';

export const useFormLogin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');
  const [userError, setUserError] = useState('');
  const router = useRouter();
  const { setJwt, setEmailLogin } = useContext(Context);
  // console.log(jwt);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setUserError('');

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

        if (response.status === 200) {
          const data = await response.json();
          setEmailLogin(userData.email);
          // console.log('CORREO LOGIN:', data.email);
          setJwt(data.jwt);

          router.push('/panel-colegio');
        } else {
          setUserError('Usuario Incorrecto');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }

      // console.log(userData);
      e.target.reset();
    }
  };
  const handleUserChange = (e) => {
    setUser(e.target.value);
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
    errorMessagePassword,
    userError
  };
};
