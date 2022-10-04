import React, { useState } from 'react';

export default function States() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h3>Contador: </h3>
            <button style={{ marginRight: '20px' }} onClick={() => setContador(contador - 1)}>
                -
            </button>
            {contador}
            <button style={{ marginLeft: '20px' }} onClick={() => setContador(contador + 1)}>
                +
            </button>

            <button onClick={() => setContador(0)}>reset</button>
        </div>
    )
}
