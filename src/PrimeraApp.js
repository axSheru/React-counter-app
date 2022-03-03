import React, { Fragment } from 'react';
//Functional Component.
const PrimeraApp = ({ saludo = "Hola default" }) => {

    return(
        <>
            <h1>{ saludo }</h1>
            <p>Mi primera aplicación.</p>
        </>
    );
}

export default PrimeraApp;