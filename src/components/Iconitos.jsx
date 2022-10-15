import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilSquare } from '@fortawesome/free-solid-svg-icons'

export default function Iconitos() {
  return (
    <div>
        <blockquote>
            npm i --save @fortawesome/fontawesome-svg-core <br />
            npm install --save @fortawesome/free-solid-svg-icons <br />
            npm install --save @fortawesome/react-fontawesome <br />
            
        </blockquote>

        <ol>
            <li>Instalar paquete en nuestro programa.</li>
            <li>Importar componente FontAwesomeIcon</li>
            <li>Importar ícono que querramos. (faNombre)</li>
            <li>Llamar componente, y en su propiedad icon va el ícono importado.</li>
        </ol>

        <FontAwesomeIcon icon={faPencilSquare} color='green'/>
    </div>
  )
}
