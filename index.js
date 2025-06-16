const fs = require("fs");
const path = require("path");
const promptSync = require("prompt-sync")();


let nomes = [];
let pesos = [];
let alturas = [];

let inputUsuario = parseInt(promptSync("1 - Cadastrar Pessoa | X - Qualquer tecla para sair "));

while(inputUsuario == 1){
    let nome = promptSync("Digite o nome da pessoa: ");
    nomes.push(nome);

    let peso = parseFloat(promptSync("Digite o peso da pessoa: "));
    pesos.push(peso);

    let altura = parseFloat(promptSync("Digite a altura da pessoa: "));
    alturas.push(altura);

    
    
    let inputUsuario = promptSync("Deseja continuar? (s/n)");
    if (inputUsuario == "s"){
        continue;
    } else {
        console.log(`Dados:\nNomes:${nomes}\nPesos:${pesos}\nAlturas:${alturas}`);
        break;
    }

}