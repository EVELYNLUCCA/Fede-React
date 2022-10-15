import React from 'react'
import './UsarCss.scss';
import styles from './UsarCss.module.scss';

export default function UsarCss() {
    console.log(styles);

    const estilito = {
        color: '#934052',
        fontSize: '20px',
        textTransform: 'uppercase',
        textDecoration: 'underline'
    }

    return (
        <div>
            <ul>
                <li style={estilito}>Estilos en línea (cuando un estilo depende de una variable o estado) </li>

                <li className='usarComunitos'>Archivos css comunitos (SON GLOBALES 😡😡😡😡)</li>

                <li className={styles.usarModulitos}>Archivos module 😱😱 
                    <span id={styles.piedritas}>Son los mejores</span>
                    son para cada componente
                </li>

                <li>Para usar SASS, es la misma mierda sólo que hay que instalarlo con npm i sass y cambiar todos los archivos e importaciones .css por .scss.</li>
            </ul>
        </div>
    )
}
