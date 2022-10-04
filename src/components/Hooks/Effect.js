import React, { useState, useEffect } from 'react';
 
export default function Effect() {
    const [scrollY, setScrollY] = useState(0);
 
    useEffect(() => {
        console.log("Escrito en el montaje");
        const detectarScroll = () =>  setScrollY(window.pageYOffset);
        window.addEventListener('scroll', detectarScroll);
    }, []); //Simulación fase de montaje
 
    useEffect(() => {
        console.log("Escrito en la actualización.");
    }, [scrollY]); //Simulación fase de actualización (sólo cuando cambie scrollY)
 
    return(
        <>
          <h2>Hooks - useEffect y el ciclo de vida</h2>  
          <p>Scroll Y del navegador: {scrollY}px</p>
        </>
    )
}
