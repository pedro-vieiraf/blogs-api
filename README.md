# :construction: README em construção ! :construction:
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
# Blogs API

> Esse projeto consisiste em uma API com as principais funcionalidades de um Blog no sistema Model, View e Controller além de um sistema de autenticação usando JWT (Json Web Token).

Nesse projeto eu desenvolvi os seguintes arquivos:
  - src/models;
  - src/services;
  - src/controllers;
  - src/routes;
  - src/migrations;
  - src/middlewares;
  - src/utils;
    
Realizei mudanças no seguinte arquivo:
  - src/app.js

> [!NOTE]
> Esse projeto utiliza Docker, é importante ter ele instalado para garantir seu funcionamento

# Antes de começar
É importante que, ao entrar na raiz do projeto você execute o container Docker com o seguinte comando:
```
docker compose up -d --build
```
Após isso, entre no container para executar os comandos do projeto com o seguinte código:
```
docker exec -it blogs_api /bin/bash
```

Agora, dentro do container é possível começar a execução do projeto com:
```
npm run start
```

# Instruções de uso simplificado da API
Para utilizar a API é necessário usar as rotas adequadamente, aqui estão as instruções de como usar cada rota:
> [!IMPORTANT]
> É importante que os comandos sejam executados na ordem mostrada, pois um depende do outro 

1- Para criar um usuário é necessário entrar na rota Post "http://127.0.0.1:3001/user/" e escrever um body no seguinte formato:
  
    "displayName": <STRING>,
    "email": <STRING>,
    "password": <STRING>,
    "image": <STRING>

2- Para fazer login, é necessário entrar na rota Post "http://127.0.0.1:3001/login/" e escrever o email e senha cadastrados no body

    "email": <STRING>,
    "password": <STRING>

  > [!TIP]
  > Isso irá lhe retornar um token, é importante que você copie ele.

3- Agora é necessário que, antes de criar um post, você crie uma categoria de post na rota Post "http://127.0.0.1:3001/categories/"
  > [!IMPORTANT]
  > Antes de fazer a requisição, é necessário preencher o header com "Authorization" com o valor "Bearer <Token que você copiou>"

    "name": <STRING>

3- Finalmente, para criar um post, é necessário ir na rota Post "http://127.0.0.1:3001/post/"
  > [!IMPORTANT]
  > Antes de fazer a requisição, é necessário preencher o header com "Authorization" com o valor "Bearer <Token que você copiou>"

    "title": <STRING>,
    "content": <STRING>,
    "categoryIds": [INT],
    "userId": INT

Com isso você já consegue criar um usuário, categoria e post.

# Instruções de uso completo da API



    
