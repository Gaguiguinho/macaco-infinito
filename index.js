const tentativaElem = document.getElementById('tentativa');
const incorretaElem = document.getElementById('incorreta');
const cronometroElem = document.getElementById('cronometro');
const resElem = document.getElementById('caracteres');

const palavra = 'linux e coisa de comunista';
const alfabeto = Array.from('abcdefghijklmnopqrstuvwxyz ');
let tentativas = 0;
let tempoSegundos = 0;
let tempoMinutos = 0;
let tempoHoras = 0;

tentativas = 0;

function MacacoDigitando() {
    let caracteres = []; 
    let res = "xxxx"; 

    
    for (let i = 0; i < palavra.length; i++) {
        const indiceAleatorio = Math.floor(Math.random() * alfabeto.length);
        caracteres.push(alfabeto[indiceAleatorio]); 
    }

    res = caracteres.join(''); 
    tentativas++;

    tentativaElem.textContent = `Tentativas: ${tentativas}`;
    resElem.textContent = res;

    

    if (res === palavra) {
        incorretaElem.textContent = "A palavra está correta!";
        clearInterval(intervalo); 
    }  else {
        incorretaElem.textContent = "A palavra continua incorreta";
    }
}

function atualizarCronometro() {
    tempoSegundos++;
    if (tempoSegundos === 60) {
        tempoSegundos = 0;
        tempoMinutos++;
        if (tempoMinutos === 60) {
            tempoMinutos = 0;
            tempoHoras++;
        }
    }

   
    const tempoFormatado = `${String(tempoHoras).padStart(2, '0')}:${String(tempoMinutos).padStart(2, '0')}:${String(tempoSegundos).padStart(2, '0')}`;
    cronometroElem.textContent = tempoFormatado;
}


const intervalo = setInterval(MacacoDigitando, 100);  // A cada 100ms, tenta digitar
setInterval(atualizarCronometro, 1000);

