import React, { useState } from 'react';
// Hacer un codificador de contraseñas. El usuario escribirá una contraseña y, al apretarse un botón, dicha contraseña se cambiará por lo siguiente: a por "xyz", "e" por "010110001", "i" por "s15", "o" por "5%8(" y la "u" por "$#!".

const cambios = {
    a: 'xyz',
    e: '010110001',
    i: 's15',
    o: '5%8(',
    u: '$#!'
};

export default function Ejercicio5() {
    const [resultado, setResultado] = useState('');

    const handleChange = (e) => {
        const arrayContrasenia = e.target.value.split('');
        const encriptacion = [];

        arrayContrasenia.forEach(element => {
            if(cambios[element]) {
                element = cambios[element];
            }
            
            encriptacion.push(element);
        })

        let resultadito = '';
        encriptacion.forEach(element => resultadito = resultadito + element);

        setResultado(resultadito);
    }
    

    return (
        <div>
            <h1>Ejercicio 5</h1>

            <input type="text" placeholder='Escriba su contraseña' onChange={(e) => handleChange(e)}/>

            <p>{resultado}</p>
        </div>
    )
}
