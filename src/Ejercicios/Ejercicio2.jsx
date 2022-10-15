// 2- Una calculadora simple (suma, resta, división y multiplicación)
// se animan a tener uno con expresiones regulares?

import React from 'react';
import { useState } from 'react';
import './Ejercicio2.module.css'

const Ejercicio2 = () => {
    const [number, setNumber] = useState(0);
    const [numbertwo, setNumbertwo] = useState(0);
    const [resultado, setResultado] = useState(false);

    const handleChange = (e) => {
        if (e.target.name === 'numberOne') setNumber(parseInt(e.target.value));
        if (e.target.name === 'numberTwo') setNumbertwo(parseInt(e.target.value));
    };

    const sumar = (num1, num2) => setResultado(num1 + num2);

    const restar = (num1, num2) => setResultado(num1 - num2);

    const multiplicar = (num1, num2) => setResultado(num1 * num2);

    const dividir = (num1, num2) => setResultado(num1 / num2);

    return (
        <>
            <h1>Ejercicio 2</h1>
            <input type="number" name="numberOne" id="" onChange={(e) => handleChange(e)} />
            <input type="number" name="numberTwo" id="" onChange={(e) => handleChange(e)} />

            <button onClick={() => sumar(number, numbertwo)}>+</button>
            <button onClick={() => restar(number, numbertwo)}>-</button>
            <button onClick={() => multiplicar(number, numbertwo)}>*</button>
            <button onClick={() => dividir(number, numbertwo)}>/</button>

            <h1>{typeof resultado === 'number' ? resultado : 'Pruebe nuestro programa! :D'}</h1>


            {/* <input type="text" value={number} id='resultado' placeholder='0'/> <br></br>
        <button value={1} onClick={handleChange}>1</button>
        <button value={2} onClick={handleChange}>2</button>
        <button value={3} onClick={handleChange}>3</button>
        <button value={'+'} onClick={handleChangeSuma}>+</button><br></br>
        <button value={4} onClick={handleChange}>4</button>
        <button value={5} onClick={handleChange}>5</button>
        <button value={6} onClick={handleChange}>6</button>
        <button value={'-'} onClick={handleChange}>-</button><br></br>
        <button value={7} onClick={handleChange}>7</button>
        <button value={8} onClick={handleChange}>8</button>
        <button value={9} onClick={handleChange}>9</button>
        <button value={'/'} onClick={handleChange}>/</button><br></br>
        <button value={'C'} onClick={handleChange}>C</button>
        <button value={0} onClick={handleChange}>0</button>
        <button value={'='} onClick={handleChange}>=</button>
        <button value={'x'} onClick={handleChange}>x</button> */}
        </>
    );
};

export default Ejercicio2;