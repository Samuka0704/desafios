alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numerosSecreto = parseInt(Mth.random() * numeroMaximo+ 1);
console.log(numerosSecreto);
let chute;
let tentativas = 1;

// enquanto chute for igual ao numero secreto
while (chute != numerosSecreto) {

    chute = prompt (`Escolha um numero entre 1 e ${numeroMaximo}`);
//se chute for igual ao numero secreto
    if (numerosSecreto == chute) {
        break;
    } else {
        if (chute > numerosSecreto){
        alert(`o numero secreto é menor que ${chute}`);
        } else {
        alert(`o numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    } 
 }   

 let palavaTentativa = tentativa > 1 ? 'tentativas' : 'tentativas';