import { useState } from 'react';

export const Index = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const userData = {
            user: formData.get('user'),
            password: formData.get('password')
        }

        console.log(userData)
    }

    
    return {handleFormSubmit, user, setUser, password, setPassword}
}

