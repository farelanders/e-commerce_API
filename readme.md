<div align=center><img src='./imgpaste/gamalogo.png' width='300'></div>

  <h3 align="center">Projeto Gama grupo 8</h3>

  <p align="center">
    Projeto de criação de processos HTTP.
 

<details open="open">
  <summary>Conteúdo</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#usando">Usando</a></li>
    <li><a href="#contato">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



## Sobre o Projeto

//escrever aqui

## Começando

Para começar, você precisa tem instalado em sua máquina o Visual Code, NodeJS com os pacotes express e mysql2, mySQL instalado em sua maquina para rodar o banco de dados e também o Postman (ou semelhante) para executar os testes.

### Instalação

1. Clonar o repositório
   ```sh
   git clone https://github.com/farelanders/Gama_desafio_grupo8.git
   ```
2. Instalar os pacotes.
   ```sh
   npm install
   ```
## Usando

1 - Para usar a API, você precisa importar o arquivo DB.sql da pasta /db_mysql no mySQL Workbench ou via console. \ 
2 - Alterar no arquivo index.js seu usuário e senha do banco de dados
<img src='./imgpaste/2021-06-03-14-42-26.png'> \
3 - Rodar o arquivo index.js via console com o comando:
   ```sh
   node index.js
   ```
4 - Com a API em funcionamento, vamos rodar os testes que foram pedidos para o desafio via Postman(ou algum similar), estes são os testes:
|Endpoint|Operação HTTP|Explicação|Teste|
|-|-|-|-|
|/produto|GET|Retorna a lista de todos os produtos existentes. Uma lista em formato JSON contendo todos os produtos da tabela.  Para o Exercicio 1, a logica toda de verificação. de se o produto existe ou não deve ser feita. A lista de produtos deve estar hardcoded. Para o exercicio 2, vamos puxar essa lista de uma base de dados que voces podem usar a já criada ou criar uma nova se quiser.|http://localhost:3000/api/v1/produto|
|/produto/{id}|GET|Retorna os detalhes de 1 único produto. Um único objeto JSON recuperado a partir do ID fornecido como componente da URL. Se o ID existir na tabela, deve retornar o status HTTP 200 - ok, ou 404 caso contrário.|http://localhost:3000/api/v1/produto/:produtoId (produto do 10 ao 19 registrado no banco)|
|/produto|POST|Recebe um JSON com dados de um produto e o inclui na base de dados. Retorna para o usuário o Objeto que foi incluído na tabela. Se o objeto for enviado com alguma informação faltando (ex: sem descrição ou preço zerado), deve retornar um status HTTP 400 - Bad Request.|http://localhost:3000/api/v1/produto  http://localhost:3000/api/v1/produtoerro (quando vai sem alguma informação.)|
|/produto/{id}|PUT|Recebe um JSON com dados de um produto, cujo ID é especificado na URL e atualiza seus dados na base de dados. Se o ID do produto não existir na base de dados, deve retornar um status 404 - Not Found. Se for recebido um objeto incompleto ou com alguma propriedade inválida (preço zerado), retorna um status HTTP 400 - Bad Request. Se tudo estiver ok, retorna o próprio objeto atualizado com status 200 - Ok|http://localhost:3000/api/v1/produto/:produtoId (produto do 10 ao 19 registrado no banco) http://localhost:3000/api/v1/produtoerro/:produtoId (Quando vai sem alguma informação)|
|/departamento|GET|Retorna a lista de todos os departamentos|HTTP://localhost:3000/api/v1/departamento|
|/departamento/{id}|GET|Retorna o departamento e a lista de produtos que estão associadas a ele. Se o departamento não exisitir na base de Dados, retorna um status 404 - Not Found, ou o departamento e sua lista de produtos, com status 200 - Ok|HTTP://localhost:3000/api/v1/departamento/:departamentoId (Id do 1 ao 5 registrado no banco)|

## Contato

Milena Maganin - [Linkedin](https://www.linkedin.com/in/milenamaganin/) - mimaganin@gmail.com \
Marcos Travagin - [Linkedin](https://linkedin.com/in/marcos-antonio-travagin-41515985) - marcostravagin@outlook.com \
Jacson Oliveira Santos - jacson.oliveira.santos@gmail.com

Link do projeto: [https://github.com/farelanders/Gama_desafio_grupo8](https://github.com/farelanders/Gama_desafio_grupo8)

