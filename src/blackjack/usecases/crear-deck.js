import _ from 'underscore';

/**
 * Est función crea un nuevo deck de cartas
 * @param {array<string>} tiposCarta Ejemplo: ['C','D','H','S'];
 * @param {array<string>} tiposespeciales Ejemplo: ['A','J','Q','K'];
 * @returns {array<string>}
 */

export const crearDeck = ( tiposCarta, tiposespeciales ) => {

    if ( !Array.isArray( tiposCarta ) || tiposCarta.length === 0 ) {
        throw new Error('tiposCarta debe ser un arreglo de strings con al menos un elemento');
    }

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
