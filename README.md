# Desafio: Sistema de Coleta e Armazenamento de Dados Pessoais

## 📝 Descrição

Este projeto implementa um sistema simples de coleta de dados pessoais (nome, peso e altura) que permite ao usuário inserir informações de múltiplas pessoas e salvá-las em um arquivo de texto estruturado.

## 🎯 Funcionalidades

- **Coleta de dados**: Captura nome, peso e altura de múltiplos usuários
- **Interface interativa**: Permite ao usuário continuar inserindo dados enquanto desejar
- **Criação de diretório**: Cria pasta no local especificado pelo usuário
- **Geração de arquivo**: Salva os dados em arquivo de texto formatado em colunas
- **Verificação**: Lê e exibe o conteúdo do arquivo gerado no console

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **Módulos nativos**:
  - `fs` (File System): Para manipulação de arquivos e diretórios
  - `path`: Para manipulação de caminhos
  - `prompt-sync`: Para entrada de dados via terminal

## 📋 Pré-requisitos

- Node.js instalado (versão 12 ou superior)
- Terminal/Command Prompt

## 🚀 Como Executar

1. Clone este repositório:
```bash
git clone https://github.com/yyhago/senai-js-challenge-data-collector
cd senai-js-challenge-data-collector
```

2. Execute o programa:
```bash
node index.js
```

3. Siga as instruções no terminal:
   - Informe o caminho onde deseja criar a pasta
   - Digite os dados solicitados (nome, peso, altura)
   - Escolha se deseja continuar inserindo mais dados
   - O programa criará automaticamente a pasta e o arquivo


## 📄 Formato do Arquivo Gerado

O arquivo de saída terá o seguinte formato:
```
Nome            Peso    Altura
João Silva      75.5    1.80
Maria Santos    62.0    1.65
Pedro Costa     80.2    1.75
```

## 🔧 Implementação

O desafio aborda os seguintes conceitos de programação:

- Manipulação de arrays (vetores)
- Entrada de dados do usuário
- Criação de diretórios
- Escrita e leitura de arquivos
- Formatação de dados em colunas
- Estruturas de repetição

## 📝 Exemplo de Uso

```
> node index.js

Digite o caminho onde deseja criar a pasta: ./meus-dados
Digite o nome: João Silva
Digite o peso (kg): 75.5
Digite a altura (m): 1.80
Deseja adicionar mais uma pessoa? (s/n): s

Digite o nome: Maria Santos
Digite o peso (kg): 62.0
Digite a altura (m): 1.65
Deseja adicionar mais uma pessoa? (s/n): n

Dados salvos em: ./meus-dados/pessoas.txt

Conteúdo do arquivo:
Nome            Peso    Altura
João Silva      75.5    1.80
Maria Santos    62.0    1.65
```
