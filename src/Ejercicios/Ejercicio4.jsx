// 4- Ejercicio extra y un poquito más difícil. Haremos un validador de la expresión regex que ponga el usuario, al igual que el anterior pero esta vez el usuario pondrá la expresión regular que desee.
//  el usuario pone una expresión regular:
//  "^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$"
//  esa por ejemplo
//  abajo va a haber un input
//  y ese input, al cambiarse nos indica si esa regex se cumple o no.

import React, { useState, useEffect } from 'react';

const Ejercicio4 = () => {
    const [textoUsuario, setTextoUsuario] = useState('');
    const [regexUsuario, setRegexUsuario] = useState(/  /);
    const [resultado, setResultado] = useState(false);

    useEffect(() => {
        try {
            const expresion = new RegExp(regexUsuario);
            const comparacion = expresion.test(textoUsuario);
            setResultado(comparacion);
        } catch (error) {
            setResultado(false);
        }
    }, [regexUsuario, textoUsuario]);

    return (
        <>
            <div>Ejercicio4</div>
            <input type="text" placeholder='Elija su texto' onChange={(e) => setTextoUsuario(e.target.value)}/>
            
            <input type="text" placeholder='Elija su regex' onChange={(e) => new RegExp(setRegexUsuario(e.target.value), 'i')}/>

            <p>{ resultado ? 'Expresión cumplida!' : 'Expresión no cumplida o no válida. '}</p>
        </>
    );
};

export default Ejercicio4