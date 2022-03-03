import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp', () => {

    test('debe de retornar un héroes por id.', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    });

    test('debe de retornar undefined si héroe no existe.', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });

    test('debe de retornar un arreglo con los héroes de DC.', () => {

        const owner = 'DC';
        const heroesOwner = getHeroesByOwner( owner );

        const heroesOwnerData = heroes.filter( h => h.owner === owner );

        expect( heroesOwner ).toEqual( heroesOwnerData );

    });

    test('debe de retornar un arreglo con los héroes de Marvel.', () => {

        const heroesOwner = getHeroesByOwner( 'Marvel' );

        expect( heroesOwner.length ).toBe( 2 );

    });

});