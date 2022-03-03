import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string', () => {

    test('debe de retornar hola + nombre en getSaludo()', () => {

        const nombre = 'Alex';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola Alex' );

    });

    test('debe de retornar hola + valor default en getSaludo()', () => {

        expect( getSaludo() ).toBe( 'Hola Mariana' );

    });

});