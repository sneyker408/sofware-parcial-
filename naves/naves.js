let game = {
    canvas: null,
    ctx: null
};

var x = 100;
var y = 100;

const animar = () => {
    requestAnimationFrame(animar);
    verificar();
    pintar()
}
const verificar = () => {
    x += 2;
    if (x > game.canvas.width) x = 0
}



const pintar = () => {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    game.ctx.fillStyle = "blue"
    game.ctx.beginPath();
    game.ctx.arc(x, y, 20, 0, 2 * Math.PI);
    game.ctx.fill()
}


window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17)
        }
}
)()



function crearJuego() {
    game.canvas = document.getElementById("canvas-lineas");

    if (game.canvas && game.canvas.getContext) {
        game.ctx = game.canvas.getContext("2d");

        if (game.ctx) {

            animar()

        }
    }

}
window.onload = crearJuego