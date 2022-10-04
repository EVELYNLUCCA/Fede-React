import React from 'react'
/* 
    TODO COMPONENTE SIEMPRE TIENE EL PARÁMETRO PROPS (OBJECT) 
    QUE ES LO QUE EL PADRE LE PASA AL HIJO
*/

export default function Titulo(props) {
    const contenido = 'Hola mundo desde React';
    const clase = 'active'; 

    // console.log(props); 

  return (
    <h3 className={clase}>Hola {props.nombre}</h3>
  )
}

