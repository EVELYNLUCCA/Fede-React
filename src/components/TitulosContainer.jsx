import React from 'react'
import Titulo from './Titulo'

export default function TitulosContainer() {
    const nombres = ['R2-D2', 'Luke', 'Leia', 'Maestro Yoda'];

  return (
    <div>
        {nombres.map((elemento, index) => {
            return (
                <Titulo nombre={elemento} key={index}/>
            )
        })}
    </div>
  )
}
