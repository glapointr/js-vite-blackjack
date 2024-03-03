import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

// turno de la computadora

/**
 * 
 * @param {<Number>} puntosMinimos 
 * @param {<Array>} deck 
 * @param {<String>} puntosComputadora 
 * @param {Array<string>} puntosHTML
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosComputadora, puntosHTML, divCartasComputadora ) => {

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}