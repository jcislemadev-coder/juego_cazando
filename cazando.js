let canvas = document.getElementById("areaJuego");
let ctx= canvas.getContext("2d");

const ALTO_GATO= 70;
const ANCHO_GATO= 90;
const ALTO_COMIDA=70;
const ANCHO_COMIDA=90;

let gatoX = (canvas.width/2)-(ANCHO_GATO/2);
let gatoY= (canvas.height/2)-(ALTO_GATO/2);
let comidaX= 0;
let comidaY= 0;



function graficarRectangulo (x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,ancho,alto);
}

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"#8c5c13");
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#a7b73b")
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
}

function limpiarCanva(){
    ctx.clearRect(0,0,500,500);
}

function moverIzquierda(){
    gatoX= gatoX-10;
    actualizarPantalla();
    detectarColision();
}

function moverDerecha(){
    gatoX= gatoX+10;
    actualizarPantalla();
    detectarColision();
}
function moverArriba(){
    gatoY= gatoY-10;
    actualizarPantalla();
    detectarColision();
}

function moverAbajo(){
    gatoY= gatoY+10;
    actualizarPantalla();
    detectarColision();
}
function actualizarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function detectarColision(){
    if(gatoX + ANCHO_GATO > comidaX &&
       gatoX < comidaX + ANCHO_COMIDA &&
       gatoY + ALTO_GATO > comidaY &&
       gatoY <= comidaY + ALTO_COMIDA){
    alert("GATO COMIENDO");
    }
}
