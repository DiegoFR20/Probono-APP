# Probono-APP

## Sobre o que é
Esse aqui, é um projeto que serve como teste técnico para o processos seletivo da Probono.
Processos judiciais podem ser extensos e cansativos, além de uma carga de complexidade, logo, surge então a probono. Esta aplicação serve como uma ferramenta de tradução para estes complexos processos judiciais.

## Como funciona
Antes, o advogado precisa se cadastrar, usando seu e-mail e uma senha, que é criptografada
E então ao realizar o login, o advogado pode realizar o cadastro de um processo com seu primeiro andamento e seu cliente, este vinculado por CPF. Além de visualizar todos os processos numa lista.
E então, o advogado pode cadastrar mais andamentos a medida em que o processo avança, e o principal, pode
cadastrar então uma tradução. A tradução consiste de um texto mais complexo, com jargões jurídicos e outros termos jurídicos mais dificeis de serem compreendidos pelas pessoas de fora do ramo, e então, pode-se cadastrar um texto que a julgar pelo advogado, é simples de ser compreendido.
Há também a opção de cadastro do cliente, onde o cliente se cadastra usando um CPF, de preferência vinculado a um processo, e uma senha criptografada.
Ao realizar login o cliente pode visualizar todos os processos vinculados à ele, ao clicar em um processo ele poderá visualizar os andamentos do processo, e ao lado, digitar ou copiar e colar o texto do andamento escolhido.

## Como executar
### Localmente
O projeto foi feito sobre uma máquina com Windows 10 1909 e NodeJS 12. Logo, pode-se fazer necessário NodeJS 12.X para ser executado localmente. Para ser executado é necessário rodar um comando "node app" em um terminal. E então, em um navegador, digitar na barra de endereços o seguinte: "localhost:3000", sem as aspas. Também há uma configuração para execução em Docker, caso se faça necessário.
    - Em um terminal: "Node app"
    - No navegador, na barra de endereços: localhost:3000
### Docker
Caso deseja inicia-lo pelo docker, digite docker-compose up. Talvez seja necessário Docker em sua versão 19 e Docker Compose em sua versão 1.2.
    - Na pasta do projeto, no terminal digite: docker build -t diego/probonoapp .
    - E então digite: docker run -p 3000:3000 -d diego/probonoapp
    - No navegador digite: localhost:3000
### Na Nuvem
A aplicação está salva em nuvem em um servidor da AWS. Para a sua execução é necessário digitar na barra de endereços o IP: "35.175.116.193:3000", sem aspas.
    - No navegador, na barra de endereços: 35.175.116.193:3000

## Erros conhecidos e coisas a serem adicionadas futuramente
### Erros
    - Não estão aparecendo as mensagens de erro de formulário.
    - Não estão apareendo as mensagens de erro para quando não há processos vinculados ao cliente.
### A serem adicionadas futuramente
    - Botão de voltar página.
    - Datas na tradução.
    - Melhor design.
    - Tradução de andamento também disponível na página principal do advogado.

## A especialização escolhida foi: "Especialista DEVOPS"