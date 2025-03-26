function verificarPar(numero) {
    if (numero % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}

function calcular(num1, num2) {
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2;
    return { soma, subtracao, multiplicacao, divisao };
}

let contador = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}

function inverterTexto(texto) {
    return texto.split('').reverse().join('');
}

function contarCaracteres(texto) {
    return texto.length;
}

const carro = {
    marca: "Volkswagen",
    modelo: "gol",
    ano: 2015
};

console.log(carro.marca);
console.log(carro.ano)
console.log(carro.modelo)

function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(`${mensagem} ${nome}`);
}

function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(`${i} - Múltiplo de 3`);
    } else {
        console.log(`${i} - Não múltiplo de 3`);
    }
}

function verificarPalindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}