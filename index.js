const fs = require("fs");
const path = require("path");
const promptSync = require("prompt-sync")();


let nomes = [];
let pesos = [];
let alturas = [];

let arquivoTxt = "Dados.txt"
let inputUsuario = parseInt(promptSync("1 - Cadastrar Pessoa | X - Qualquer tecla para sair "));


while(inputUsuario == 1){

    let diretorioInput = promptSync("Digite o nome da pasta deseja salvar seu documento: ");
    if(isNaN(diretorioInput)){   
        const destino = promptSync("Digite aonde quer salvar sua pasta, o diretório. Exemplo:(C:/Users/DES-MH/)")
        const origem = path.join(__dirname);
        fs.mkdirSync(diretorioInput, {recursive:true});
        fs.cpSync(origem, destino, {recursive:true})

    let nome = promptSync("Digite o nome da pessoa: ");
    nomes.push(nome);
    fs.appendFileSync(arquivoTxt, `${nome}`, "utf-8");

    let peso = parseFloat(promptSync("Digite o peso da pessoa: "));
    pesos.push(peso);
    fs.appendFileSync(arquivoTxt, ` ${peso} `, "utf-8");

    let altura = parseFloat(promptSync("Digite a altura da pessoa: "));
    alturas.push(altura);
    fs.appendFileSync(arquivoTxt, `${altura}\n`, "utf-8");

    

    let inputUsuario = promptSync("Deseja continuar? (s/n)");
    if (inputUsuario == "s"){
        continue;
    } else {
        console.log(`Dados:\nNomes:${nomes}\nPesos:${pesos}\nAlturas:${alturas}`);
        break;
    }

    }
    console.log("Digite um nome válido");


}