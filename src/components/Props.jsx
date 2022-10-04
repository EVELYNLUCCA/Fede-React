import React from 'react'

export default function Props ( /* props */  /* props deestructrado ->  */ { mensaje } ) {
  return (
    <h4> Mi padre me dijo: {/* props.mensaje */} {mensaje && mensaje} </h4>
  )
  
  {/* terminario solo para la condicion verdadera -> && */}
}
