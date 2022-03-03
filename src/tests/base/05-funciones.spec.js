import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones.', () => {

    test('debe de obtener el objeto usuario.', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        expect( getUser() ).toEqual( userTest );

    });

    test('debe de obtener el usuario activo con el username enviado.', () => {

        expect( getUsuarioActivo( 'Alex' ) ).toEqual({
            uid: 'ABC567',
            username: 'Alex'
        });

    });

});