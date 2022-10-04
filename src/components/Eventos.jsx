import React from 'react'

export default function Eventos() {

    const handleClick = (mensaje) => {
        console.log(mensaje);
    } 

  return (
    <button onClick={() => handleClick('Usa la fuerza joven skywalker')}>
        Evento (ver en consola)
    </button>
  )
}
