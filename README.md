# api-github-backend

## Descrição
Projeto para estudar sobre crud no o typescript com informações que serão recuperadas pelo font-end, vindas do github.

## Pré-requisitos
 * Node js
 * npm ou yarn instalado
 
## Tecnologias utilizados
  * Node js
  * TypeScript
  
## Rotas

Nenhuma rota precisa de nenhum tipo de autênticação, confira a seguir:

1 - Cadastro: <br />
  Método: POST <br />
  JSON:<br />
  {<br />
    "name": "Seu nome",<br />
    "bio": "Sua bio",<br />
    "github_username": "Seu repositório",<br />
    "avatar_url": "sua url de imagem de perfil"<br />
  }<br />
