import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en PrimeraApp.', () => {

    /* test('debe de retornar saludo.', () => {

        const saludo = 'Hola, soy Luke!';

        const { getByText } = render(<PrimeraApp saludo={ saludo }/>);

        expect( getByText( saludo ) ).toBeInTheDocument();

    }); */

    test('debe renderizar PrimeraApp correctamente.', () => {

        const saludo = 'Hola, soy Luke!';

        const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

        expect( wrapper ).toMatchSnapshot();

    });

});