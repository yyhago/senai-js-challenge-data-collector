const fs = require("fs");
const path = require("path");
const promptSync = require("prompt-sync")();


let nomes = [];
let pesos = [];
let alturas = [];

let nomePasta = promptSync("Digite o nome da pasta que deseja salvar seus dados: ");
let caminhoPasta = promptSync("Digite o diretório que deseja salvar seus dados, exemplo -> (C:/Users/DES-MH/): ");
let caminhoDiretorioCompleto = path.join(caminhoPasta, nomePasta);
fs.mkdirSync(caminhoDiretorioCompleto, {recursive:true});

let caminhoArquivoTxt = path.join(caminhoDiretorioCompleto, "Dados.txt");

while(true){

    let nome = promptSync("Digite o nome para cadastrar: ");
    nomes.push(nome);
    let peso = parseFloat(promptSync("Digite o peso para cadastrar: "));
    pesos.push(peso);
    let altura = parseFloat(promptSync("Digite a altura para cadastrar: "));
    alturas.push(altura);

    fs.appendFileSync(caminhoArquivoTxt, `${nome}\t${peso}\t${altura}\n`, "utf-8");

    let inputNovamente = promptSync("Deseja continuar? (s/n)");
    if(inputNovamente == "s"){
        continue;
    } else{
        const resultadoDados = fs.readFileSync(caminhoArquivoTxt, {encoding:'utf8'});
        console.log(`Conteudo do arquivo:\n${resultadoDados}`);
        break;
    }
}