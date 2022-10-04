import React from 'react';
import './Saludo.css';

export default function Saludo() {
    let isAdmin = false;

  return (
    <div>
      <p className={ isAdmin ? 'admin' : 'user'} >
        { isAdmin ? 'Hola administrador' : 'Hola usuario' }
      </p>

      <button >
        { isAdmin ? 'Salir' : 'Ingresar' }
      </button>
    </div>
  )
}
