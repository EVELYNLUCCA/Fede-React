import React, { useState } from 'react';
import './LoginYLogout.css';

export default function LoginYLogout() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <p className={ isAdmin ? 'admin' : 'user'} >
        { isAdmin ? 'Hola administrador' : 'Hola usuario' }
      </p>

      <button onClick={() => setIsAdmin(!isAdmin)}>
        { isAdmin ? 'Salir' : 'Ingresar' }
      </button>
    </div>
  )
}
