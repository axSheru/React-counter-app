import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en PrimeraApp.', () => {

    test('debe de retornar saludo.', () => {

        const saludo = 'Hola, soy Luke!';

        const /* wrapper */{ getByText } = render(<PrimeraApp saludo={ saludo }/>);

        expect( getByText( saludo ) ).toBeInTheDocument();

    });

});