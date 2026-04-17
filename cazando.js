let canvas = document.getElementById("areaJuego");
let ctx= canvas.getContext("2d");

function graficarGato(){
    ctx.fillStyle = "#c02020";
    ctx.fillRect(canvas.width/2-20 , canvas.height/2-10, 40, 20);
}