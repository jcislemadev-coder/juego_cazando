let canvas = document.getElementById("areaJuego");
let ctx= canvas.getContext("2d");

let gatoX = canvas.width/2-20;
let gatoY= canvas.height/2-10;
let comidaX= 0;
let comidaY= 0;

const ALTO_GATO=70;
const ANCHO_GATO=90;
const ALTO_COMIDA=80;
const ANCHO_COMIDA=40;

function graficarGato(){
    ctx.fillStyle = "#5f4a4a";
    ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

function graficarComida(){
    ctx.fillStyle = "#10b742";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
}