import React from 'react'
import { useRef, useState, useEffect } from 'react'

export default function Ref() {
    const [color, setColor] = useState('#000000');
    const titulito = useRef();

    useEffect(() => {
        // console.log(titulito.current);
        titulito.current.style.color = color;
    }, [titulito, color])
    

  return (
    <div>
        <h2 ref={titulito}>Titulo referenciado</h2>

        <input type='color' onChange={(e) => setColor(e.target.value)}/>
    </div>
  )
}
