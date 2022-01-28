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

export  {
    creaMazo, 
    obtieneCarta,
    sumaPuntos
}