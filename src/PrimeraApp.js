import React, { Fragment } from 'react';
//Functional Component.
const PrimeraApp = () => {

    const saludo = 'Hola mundo const';

    return(
        <>
            <h1>{ saludo }</h1>
            <p>Mi primera aplicación.</p>
        </>
    );
}

export default PrimeraApp;