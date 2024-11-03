import React from 'react';
import { useState } from 'react';

const EstadosScreen = () => {
    const [contador, setContador] = useState(1);
    const [error_min_value, setError] = useState(false); 

    const restar = () => {
        if (contador <= 1) {
            setError(true);
        } else {
            setContador(contador - 1); 
            setError(false);
        }
    };

    const sumar = () => {
        setContador(contador + 1); 
        setError(false);
    };

    return (
        <div>
            <h1>Estados en React</h1>
            <div>
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={sumar}>+</button>
            </div>
            {error_min_value && <span>El estado no puede ser negativo</span>}
        </div>
    );
};

export default EstadosScreen;
