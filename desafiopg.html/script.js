let numero = 0;

function aumentar() {
    numero++;

    if (numero >= 20) {
        numero = 0;
    }

    document.getElementById("contador").textContent = numero;
}


function mudarTema() {
    document.body.classList.toggle("claro");
}