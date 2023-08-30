document.addEventListener("DOMContentLoaded", function(e){

    const parrafos= document.querySelectorAll(".description");

    let alturas=[];
    let alturaMaxima= 0;
    
    const aplicarAltura= (function aplicarAltura(){

        parrafos.forEach(parrafo =>{

            if(alturaMaxima== 0){
                alturas.push(parrafo.clientHeight);
            }else{
                parrafo.style.height = alturaMaxima + "px";
            }

        });

        return aplicarAltura;
    })();

    alturaMaxima=  Math.max.apply(Math, alturas);
    aplicarAltura()
})