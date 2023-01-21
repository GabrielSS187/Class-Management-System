# Class-Management-System
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/GabrielSS187/Class-Management-System/blob/main/LICENSE) 

<p align="center">
    <img src="frontend/public/img/person-icon.png" height="300px" />
</p>

# Sobre o projeto

### Link: [Class-Management-System](https://class-management-system.surge.sh/)

``Class-Management-System`` é uma aplicação full stack web construida para gerenciar turmas escolares.

A aplicação consiste em criar classes, apagar classes, criar alunos, editar alunos, apaga alunos,
e ver a presença atual dos alunos através de um gráfico que mostrar as porcetangens de presença de
cada aluno que estar na escolhida classe.


## Layout Desktop. Com demostração
https://user-images.githubusercontent.com/86306877/192336856-a1b37d95-a2a9-4cb6-a9bc-d3b3c4b13be1.mp4

## Layout Mobile e Tablet. Com demostração
https://user-images.githubusercontent.com/86306877/192336905-4bba055e-6c6e-4f31-a345-8f723246514b.mp4

## Modelo Conceitual / Estrutura de Dados
![Captura de Tela (188)](https://user-images.githubusercontent.com/86306877/188763110-89b0da92-f6af-4ee4-acb4-b6ecd3f6bfe2.png)

## Competências
- Princípios SOLID
- Responsividade
- Apis REST
- Testes Unitários / TDD
- Boas Práticas

# Tecnologias utilizadas

## Back end
- Node Js
- Typescript
- Express
- Knex
- Cors
- MySql
- Jest

## Front end
- HTML / CSS / JS / TypeScript
- ReactJS/TS
- Vite
- Framer-Motion
- Styled-Components
- react-router-dom
- react-google-charts
- react-lottie
- react-query
- Axios

## Implantação em produção

- Back end: Heroku
- Front end web: Surge
- Banco de dados:  MySQL

# Como executar o projeto

## Front end / Back-end
Pré-requisitos: npm / yarn, MySql

### Antes de tudo crie as tabelas necessárias no seu banco de dados MySql
## No arquivo "queries.sql"

```bash
# clonar repositório
git clone https://github.com/GabrielSS187/Class-Management-System.git

# entrar na pasta do projeto front end web
cd frontend

# instalar dependências
npm install

# executar o projeto
npm run dev

# voltar para a pasta pai
cd ..

# entrar na pasta do projeto back end
cd backend

# instalar dependências
npm install

# executar o projeto
npm run dev
```

# Autor

Gabriel Silva Souza

https://www.linkedin.com/in/gabriel-silva-souza-developer
