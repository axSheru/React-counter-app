import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en CounterApp component.', () => {

    let wrapper;

    beforeEach(() =>{
        wrapper = shallow( <CounterApp /> );
    });

    test('debe de hacer match con el snapshot.', () => {

        

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el valor de 100.', () => {

        const wrapper = shallow( <CounterApp value={ 100 } /> );

        const valor = wrapper.find( 'h2' ).text();

        expect( valor ).toBe( '100' );

    });

    test('debe de incrementar el counter en 1 al hacer click al +1', () => {

        wrapper.find( 'button' ).at(0).simulate( 'click');

        const valor = wrapper.find( 'h2' ).text();

        expect( valor ).toBe( '13' );

    });

    test('debe de decrementar el counter en 1 al hacer click al -1', () => {

        wrapper.find( 'button' ).at(2).simulate( 'click');

        const valor = wrapper.find( 'h2' ).text();

        expect( valor ).toBe( '11' );

    });

});