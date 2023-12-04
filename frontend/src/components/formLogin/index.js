import { useState } from 'react';
import Swal from 'sweetalert2';

export const Index = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if(user === '' || password === ''){
            Swal.fire({
                icon: 'error',
                title: 'Ingrese usuario y contraseña',
            });
        }

        console.log('Usuario:', user);
        console.log('Contraseña:', password);
    }

    return {handleFormSubmit, user, setUser, password, setPassword}
}

