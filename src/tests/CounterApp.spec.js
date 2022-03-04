import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en CounterApp component.', () => {

    test('debe de hacer match con el snapshot.', () => {

        const wrapper = shallow( <CounterApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el valor de 100.', () => {

        const wrapper = shallow( <CounterApp value={ 100 } /> );

        const valor = wrapper.find( 'h2' ).text();

        expect( valor ).toContain( '100' );

    });

});