# Blogs API

> Esse projeto consisiste em uma API com as principais funcionalidades de um Blog utilizando arquitetura em camadas (Model, View e Controller) com o ORM Sequelize, conectado a um banco de dados MySQL além de um sistema de autenticação usando JWT (Json Web Token).

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

# Antes de começar/Como executar
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

  ```
  {
    "displayName": <STRING>,
    "email": <STRING>,
    "password": <STRING>,
    "image": <STRING>
  }
  ```

2- Para fazer login, é necessário entrar na rota Post "http://127.0.0.1:3001/login/" e escrever o email e senha cadastrados no body
  
  ```
  {
    "email": <STRING>,
    "password": <STRING>
  }
  ```

  > [!TIP]
  > Isso irá lhe retornar um token, é importante que você copie ele.

3- Agora é necessário que, antes de criar um post, você crie uma categoria de post na rota Post "http://127.0.0.1:3001/categories/"
  > [!IMPORTANT]
  > Antes de fazer a requisição, é necessário preencher o header com "Authorization" com o valor "Bearer <Token que você copiou>"

  ```
  {
    "name": <STRING>
  }
  ```

4- Finalmente, para criar um post, é necessário ir na rota Post "http://127.0.0.1:3001/post/"
  > [!IMPORTANT]
  > Antes de fazer a requisição, é necessário preencher o header com "Authorization" com o valor "Bearer <Token que você copiou>"

  ```
  {
    "title": <STRING>,
    "content": <STRING>,
    "categoryIds": [INT],
    "userId": <INT>
  }
  ```
Com isso você já consegue criar um usuário, categoria e post.

# Instruções de todas as rotas da API

<details>
<summary>Rota Categories</summary>

### Post Category

A rota Post "http://127.0.0.1:3001/categories/" é usada para criar uma nova categoria.

É necessário fazer uma requisição com o Authorization no header usando o Token criado no login e o body:
  
```
{
"name": <STRING>
}
```

### Get Category

A rota Get "http://127.0.0.1:3001/categories/" é usada para retornar todas as categorias já criadas.

É necessário fazer uma requisição com o Authorization no header usando o Token criado no login e o body vazio.

# Instruções de todas as rotas da API
</details>

<details>
<summary>Rota User</summary>

### Post User

A rota Post "http://127.0.0.1:3001/user/" é usada para criar um novo User.

```
{
  "displayName": <STRING>,
  "email": "<STRING>",
  "password": <STRING>,
  "image": <STRING>
}
```

### Get User

A rota Get "http://127.0.0.1:3001/user/" é usada para retornar todos os usuários já criados.

É necessário fazer uma requisição com o Authorization no header usando o Token criado no login e o body vazio.

### Get User com ID

A rota Get "http://127.0.0.1:3001/user/:id" é usada para retornar o user com o ID especificado.

É necessário fazer uma requisição com o Authorization no header usando o Token criado no login e o body vazio.

### Delete User

A rota Delete "http://127.0.0.1:3001/user/me" é usada para deletar o usuário que deu origem ao Token inserido.

É necessário fazer uma requisição com o Authorization no header usando o Token criado no login e o body vazio.

</details>

<details>
<summary>Rota Login</summary>

### Post Login

A rota Post "http://127.0.0.1:3001/login/" é usada para logar com os dados criados na rota User.

É necessário usar o seguinte body na requisição:

```
{
  "email": <STRING>,
  "password": <STRING>
}
```

</details>

<details>
<summary>Rota Post</summary>

### Post Post

A rota Post "http://127.0.0.1:3001/post/" é usada para criar uma publicação.

É necessário fazer uma requisição com o Authorization no header usando o Token criado no login e o seguinte body:

```
{
  "title": <STRING>,
  "content": <STRING>,
  "categoryIds": [INT],
  "userId": <INT>
}
```

### Get Post

A rota Get "http://127.0.0.1:3001/post/" é usada para retornar todos os posts já criados.

É necessário fazer uma requisição com o Authorization no header usando o Token criado no login e o body vazio.

### Get Post com ID

A rota Get "http://127.0.0.1:3001/post/:id" é usada para retornar todos os posts já criados.

É necessário fazer uma requisição com o Authorization no header usando o Token criado no login e o body vazio.

### Put Post

A rota Put "http://127.0.0.1:3001/post/:id" é usada para atualizar um post já criado com o ID especificado.

É necessário fazer uma requisição com o Authorization no header usando o Token criado no login e o seguinte body:

```
{
  "title": <STRING>,
  "content": <STRING>,
  "userId": <INT>
}
```

### Delete Post

A rota Delete "http://127.0.0.1:3001/post/:id" é usada para deletar o post do usuário que deu origem ao Token inserido e somente dele, sendo impossível deletar posts de outro usuário.

É necessário fazer uma requisição com o Authorization no header usando o Token criado no login e o body vazio.

</details>

Com isso, você pode acecssar todas as rotas do código.
