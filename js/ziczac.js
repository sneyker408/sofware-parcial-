var global = 0;


function lineasInicio(){
    let canvas = document.getElementById("canvas-lineas")
    if(canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d")
        if (ctx) {
            let inicioX = 85;
            let inicioY = 70;
            let desplazamiento = 30;
            let lineas = 15;

            // grosor de linea
            ctx.lineWidth = 10;
            // asignar un estilo -> color
            ctx.strokeStyle = "red";
            //tipo de borde
            ctx.lineCap = "round";

            //movimiento
            ctx.beginPath();

            //inicio de las esquina superior
            //izquierda 
            ctx.moveTo(inicioX,inicioY);

            for(let i = 0; i<lineas; i++){
                let x = inicioX + ((i+1)*desplazamiento)
                let y = inicioY;
                if(i%2 == 0){
                    y= inicioY + 50 
                }

                ctx.lineTo(x,y)
            }
            //pintar con stroke
            ctx.stroke();
            
        }
    }

}

window.onload=lineasInicio()