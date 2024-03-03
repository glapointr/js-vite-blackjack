import _ from 'underscore';

/**
 * Est función crea un nuevo deck de cartas
 * @param {array<string>} tiposCarta Ejemplo: ['C','D','H','S'];
 * @param {array<string>} tiposespeciales Ejemplo: ['A','J','Q','K'];
 * @returns {array<string>}
 */

export const crearDeck = ( tiposCarta, tiposespeciales) => {

    if (!tiposCarta) throw new Error('tiposCarta es un argumento obligatorio');
    if ( tiposCarta.lenght > 0 ) throw new Error('tiposCarta tiene que ser un arreglo de String');

    let deck         = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposespeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );

    deck = _.shuffle( deck );
    //console.log( deck );
    return deck;
}