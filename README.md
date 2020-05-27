# api-github-backend

## Descrição
Projeto para estudar sobre crud no o typescript com informações que serão recuperadas pelo font-end, vindas do github.

## Pré-requisitos
 * Node js
 * npm ou yarn instalado
 * Mongodb instalado e rodando na porta 27017 do localhost
 
## Tecnologias utilizados
  * Node js
  * TypeScript
  
## Instalação
Você pode instalar o projeto com o comando `git clone https://github.com/henrique2003/api-github-backend.git` ou clicando em clone or download
  
## Como usar
Para iniciar o projeto basta entrar na aplicação pelo cmd/terminal, e rodar o comando `npm run dev` ou `yarn dev`.
Espere as seguintes menssagens aparecerem no console:<br />
  MongoDb connect...<br />
  API running<br />
Pronto, agora está tudo pronto para começar a suar a api

## Rotas

Nenhuma rota precisa de nenhum tipo de autênticação, confira a seguir:

1 - Cadastro: <br />
  Rota - http://localhost:3001/api/user<br />
  Método - POST <br />
  JSON - <br />
  {<br />
    "name": "Seu nome",<br />
    "bio": "Sua bio",<br />
    "github_username": "Seu repositório",<br />
    "avatar_url": "sua url de imagem de perfil"<br />
  }<br /><br />

2 - Lista de usuários: <br />
  Rota - http://localhost:3001/api/users<br />
  Método - GET <br /><br />
  
3 - Ver um único usuário: <br />
  Rota - http://localhost:3001/api/user/:idUsuário<br />
  Método - GET <br /><br />
  
4 - Editar usuário: <br />
  Rota - http://localhost:3001/api/user/:idUsuário<br />
  Método - PUT <br />
  JSON - <br />
  {<br />
    "name": "Seu nome",<br />
    "bio": "Sua bio",<br />
    "github_username": "Seu repositório",<br />
    "avatar_url": "sua url de imagem de perfil"<br />
  }<br /><br />
  
   
3 - Deletar um usuário: <br />
  Rota - http://localhost:3001/api/user/:idUsuário<br />
  Método - DELETE <br /><br />
