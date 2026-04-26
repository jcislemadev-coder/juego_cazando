let gato = new Image();
gato.src = "gato.png";

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
let puntaje=0;
let tiempo = 15;

function graficarRectangulo (x,y,ancho,alto,color){
    ctx.drawImage(gato, x, y, 40, 40);
}

function graficarComidaR (x,y,ancho,alto,color){
    ctx.fillStyle = " #23a721";
    ctx.fillRect(comidaX, comidaY, 40, 60);
}

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"#8c5c13");
}

function graficarComida(){
    graficarComidaR(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#a7b73b")
}

function restarTiempo(){
    tiempo = tiempo-1;
    mostrarenSpan("tiempo",tiempo)
    if (puntaje < 6 && tiempo <= 0){
        alert("GAME OVER")
        clearInterval(intervalo);
        return;
    }
}
function iniciarJuego(){
    intervalo = setInterval(restarTiempo,1000)
    graficarGato();
    graficarComida();
    gato.onload = function() {
    dibujar(); // o la función donde dibujas el juego
}
}

function limpiarCanva(){
    ctx.clearRect(0,0,500,500);
}

function moverIzquierda(){
    gatoX= gatoX-40;
    actualizarPantalla();
    detectarColision();
}

function moverDerecha(){
    gatoX= gatoX+40;
    actualizarPantalla();
    detectarColision();
}
function moverArriba(){
    gatoY= gatoY-40;
    actualizarPantalla();
    detectarColision();
}

function moverAbajo(){
    gatoY= gatoY+40;
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
       puntaje = puntaje + 1;
       mostrarenSpan ("puntos",puntaje);
    aparecerComida();
        restarTiempo();
}
    if (puntaje >= 6  && tiempo > 0){
        alert("GANADOR")
        clearInterval(intervalo);
        return;
    }

}

function aparecerComida(){
    comidaX=generarAleatorio(canvas.width-ANCHO_COMIDA,0);
    comidaY=generarAleatorio(0,canvas.height-ALTO_COMIDA ,0);
    actualizarPantalla()
}

function reiniciar(){
    puntaje = 0
    tiempo = 10

    mostrarenSpan("puntos",puntaje);
    mostrarenSpan("tiempo",tiempo);

    comidaX =0;
    comidaY=0;

    gatoX = (canvas.width/2)-(ANCHO_GATO/2);
    gatoY= (canvas.height/2)-(ALTO_GATO/2);
    actualizarPantalla()
}
