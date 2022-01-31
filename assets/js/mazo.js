let mazo   = [],
    puntosJugadores = [0, 0],
    carta = '';

const creaMazo = () => {

    const letras = ['H', 'C', 'S', 'D'],
          especiales = ['A', 'J', 'Q', 'K'];

    for(let i = 2; i<=10; i++){
        for(let letra of letras){
            mazo.push(`${i}${letra}`);
        }
    }
    for(let especial of especiales){
        for(let letra of letras){
            mazo.push(`${especial}${letra}`);
        }
    }

    //mezcla el mazo y lo devuelve
     mazo = _.shuffle(mazo);
}

const obtieneCarta = () => {
    
    carta = mazo.pop();
    return carta;

} 

const sumaPuntos = (jugador) => {
    let datoCarta = carta.substring(0, carta.length-1)

    isNaN(datoCarta) ? 
                    puntosJugadores[jugador] += 10 : 
                    puntosJugadores[jugador] += datoCarta*1;
  
    return puntosJugadores;
}
//seguir a partir de esta parte
const compara = (jugador) => {

        if(jugador == 0){
            //compara al jugador1
            if (puntosJugadores[0] == 21){
                alert('Felicidades!!! Ganaste !!!');
            }else if(puntosJugadores[0] > 21){
                alert('Perdiste :(') ;
                limpiaPuntos();
            }                

        }else if(jugador == 1){
            //compara los resultados del jugadorPC
            if(puntosJugadores[1] == 21){
                alert(`La PC Gana`);
                return true;
            }else if(puntosJugadores[1] > 21){
                alert(`Ganaste !!! La pc se ha pasado`);
                return true;
            }else if(puntosJugadores[1] > puntosJugadores[0]){
                alert(`Perdiste, la computadora te ha ganado`);
                return true;
            }
        }

}

const limpiaPuntos = () => {
    puntosJugadores[0] = 0;
    puntosJugadores[1] = 0;

}


export  {
    creaMazo, 
    obtieneCarta,
    sumaPuntos,
    compara,
    limpiaPuntos
}