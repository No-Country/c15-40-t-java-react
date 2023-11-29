import { useState } from 'react';

export const Index = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if(user.length === '' || password.length === ''){
            alert('Por favor ingrese un usuario y contraseña.');
        }else{
            return
        }

        console.log('Usuario:', user);
        console.log('Contraseña:', password);
    }

    return {handleFormSubmit, user, setUser, password, setPassword}
}