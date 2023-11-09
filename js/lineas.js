function cargarLineaInicio(){

    let canvas = document.getElementById("canvas-lineas")
    if( canvas && canvas.getContext){
        let ctx = canvas.getContext("2d")

        if(ctx){
            ctx.lineWidth = 10;
            ctx.strokeStyle = "yellow";

            //inicar trazo
            ctx.beginPath();
            ctx.lineCap ="round";
            ctx.moveTo(50,50);
            ctx.lineTo(300,50);
            ctx.stroke();

        }
    }
}
window.onload = cargarLineaInicio()