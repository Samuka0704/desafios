let numero = 0;

document.getElementById("meubotao").addEventListener("click", function(){

    numero++;

    if (numero > 20) {
        numero = 0;
    }

    document.getElementById("contador").textContent = numero;

});