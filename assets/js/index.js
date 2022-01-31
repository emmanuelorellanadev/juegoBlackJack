import {creaMazo, 
        obtieneCarta, 
        sumaPuntos, 
        compara,
        limpiaPuntos
    } from './mazo.js';

(function(){

    const btnNuevo = document.querySelector('#btn-Nuevo'),
          btnPedir = document.querySelector('#btn-Pedir'),
          btnFin   = document.querySelector('#btn-Fin'),
          cartasJugador = document.querySelector('#cartasJugador'),
          cartasPC = document.querySelector('#cartasPC'),
          puntosPantalla = document.querySelectorAll('small');
    
    const juegoNuevo = () =>{
        creaMazo();

        // Activa botones
        btnPedir.disabled = false;
        btnFin.disabled = false;

        console.clear();
        cartasJugador.innerText = '';
        cartasPC.innerText = '';
        puntosPantalla[0].innerText = '0';
        puntosPantalla[1].innerText = '0';

        limpiaPuntos();
    }

    const pideCarta = () => {
        let carta = obtieneCarta();

        //0 es el jugador, 1 es la PC
        puntosPantalla[0].innerText = sumaPuntos(0)[0];
        
        cartasJugador.innerHTML += `<img src="./assets/cartas/${carta}.png"></img>`;
        compara(0);
    } 

    const finTurno = () => {
        
        let carta, puntos;
        do{
           carta = obtieneCarta();
           puntos = sumaPuntos(1);
           puntosPantalla[1].innerText = puntos[1];
           cartasPC.innerHTML += `<img src="./assets/cartas/${carta}.png"></img>`
           if (compara(1)){
               break;
           }

        }while(puntos[1] < puntos[0] || puntos[1] <21)
    } 

    // Eventos
    btnNuevo.addEventListener('click', juegoNuevo);
    btnPedir.addEventListener('click', pideCarta);
    btnFin.addEventListener('click', finTurno);
}());
