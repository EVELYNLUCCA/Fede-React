// 3- Vamos a hacer un validar de contraseñas, deberán crear un input:password para que el usuario ponga su contraseña, abajo habrá un texto que dirá si esa contraseña cumple con la condición o no. La condición es la siguiente: 
// Mínimo 8 carácteres, 1 letra mayúscula y 1 número:

// "^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$"

import React from 'react'
import { useState } from 'react';

const Ejercicio3 = () => {

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    };

    const password = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input);
    
    return (
        <>
        <h1>Ejercicio3</h1>

        <input type="password" onChange={handleChange}/>

        <p>{password ? 'contraseña válida': 'contraseña inválida'}</p>
        </>
    );
};

export default Ejercicio3