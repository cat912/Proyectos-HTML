let correctas = [1,1,1,1,1,1,1]

let opcion_elegida=[];

let cantidad_correctas=0;

function respuesta(num_pregunta, seleccionada){
    opcion_elegida[num_pregunta] = seleccionada.value;
    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.background = "white";
    labels[5].style.background = "white";
    labels[7].style.background = "white";

    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

function corregir(){
    cantidad_correctas == 0;
    for (i==0; i < correctas.length; i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }

    document.getElementById("resultado").innerHTML == cantidad_correctas;

}
