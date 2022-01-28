import {creaMazo, obtieneCarta, sumaPuntos} from './mazo.js';

(function(){

    const btnNuevo = document.querySelector('#btn-Nuevo'),
          btnPedir = document.querySelector('#btn-Pedir'),
          btnFin   = document.querySelector('#btn-Fin'),
          cartasJugador = document.querySelector('#cartasJugador'),
          puntosPantalla = document.querySelectorAll('small');
    const juegoNuevo = () =>{
        creaMazo();

        // Activa botones
        btnPedir.disabled = false;
        btnFin.disabled = false;

        cartasJugador.innerText = ''
        
    }

    const pideCarta = () => {
        let carta = obtieneCarta();

        //0 es el jugador, 1 es la PC
        puntosPantalla[0].innerText = sumaPuntos(0);
        
        cartasJugador.innerHTML += `<img src="./assets/cartas/${carta}.png"></img>`
    } 


    // Eventos
    btnNuevo.addEventListener('click', juegoNuevo);
    btnPedir.addEventListener('click', pideCarta);
}());
