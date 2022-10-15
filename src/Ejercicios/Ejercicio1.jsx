// 1- Deberán hacer un input de texto y un párrafo que diga "vacío por ahora" abajo del mismo. Cuando el usuario escriba sobre ese input, que el texto de abajo cambie con el valor que escribe el usuario, recordar usar estados y el evento onChange.

import React from 'react';
import { useState } from 'react';
import './Ejercicio1.module.css'



const Ejercicio1 = () => {

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <div>
                <h1>Ejercicio 1</h1>

                <input className='input' type="text" onChange={handleChange} />

                <p>{input === '' ? 'Vacío por ahora' : input}</p>
            </div>
        </>
    );
};

export default Ejercicio1;

