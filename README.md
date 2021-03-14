<!--
PROJECT IDENTIFIER

Conceito
    Identifier é uma aplicação fullstack frontend, backend e mobile que possui CRUD para usuários e alguns dados de plantas, possui uma inteligência artificial pre-treinada para identificar plantas por meio de fotos que ativa um chatbot interativo com informações sobre a planta pesquisada.

Uso
    Clientes front e mobile se cadastram e executam login, fazem atualização da conta ou sua exclusão.
    Clientes cadastrados podem executar consultas a respeito das plantas cadastradas.
    Backend recebe requisições de CRUD de usuários e devolve aos clientes.
    Backend recebe requisições de consultas de plantas e devolve aos clientes.
    Backend ao receber imagens executa a inteligência artificial que ao identificar a planta passa informações para o chatbot que passa um roll de informações a respeito da planta.

Tecnoçogias
    A aplicação segue principios do DDD, Arquitetura Limpa e Padrões de Projeto.
    Algumas tecnologias do projeto são:
        Node,
        Argon2,
        Typescript,
        MongoDB: Executará e guardará apenas informações de CRUD do usuário.
        PostgreSQL: Executará e guardará apenas informações de plantas.
        Watson Assistent Chatbot: Informará os clientes com uma lista de informações sobre as plantas pesquisadas.
        TensorFlow: Analisará as fotos e comunicará o chatbot a planta pesquisada.



IDENTIFIER IMPLEMENTATIONS

Backend

Number      Feature         JOBS
1           Login           deverá enviar o token para o navegador
2           All/Load        deverá retorna id, email, password, accessToken.
3           Middleware      implementar para usuários admin e users.
4           LoadAccount     verificar existe necessidade dessa feature do jeito que está ou se pode usar os recursos do login.
5           Singleton       na infra layer com PostgreSQL
6           Postgres        popular o db com informações sobre as plantas.
7           All/Load        deverá retorna todas as informações das plantas do db postgres.
8           Tests           cobertura completa da aplicação.
9           Express         torna-se uma API REST.

Frontend
Number      Feature         JOBS
1           AI              implementar AI pre-treinada para recochecer plantas e retornar ao chatbot a planta identificada.
2           Chatbot         implementar o recebimento da planta informada pela AI e retorna todas as informações ao usuário.



INFORMATIONS ABOUT IDENTIFIER

In package.json:
"_moduleAliases": {
    "@": "src"      // Funciona para typescript
    "@": "dist"     // Funciona para javascript
}

Como o jwt funciona
const jwtSign = jwt.sign({ foo: 'bar' }, 'fff', { expiresIn: '1h' })
console.log(jwtSign)

const jwtVerify = jwt.verify(jwtSign, 'fff')
console.log('jwtVerify: ', jwtVerify)

// função segura
const jwtDecoded = jwt.verify(jwtSign, 'fff');
console.log('jwtDecoded: ', jwtDecoded)

// função insegura, pois, não verifica o signature do token
const jwtDecode = jwt.decode(jwtSign, { complete: true })
console.log('jwtDecode.header: ', jwtDecode.header)
console.log('jwtDecode.payload: ', jwtDecode.payload)
console.log('jwtDecode.signature: ', jwtDecode.signature) -->

<div align="center">
  <h1><a id="user-content--identifier" class="anchor" aria-hidden="true" href="#-identifier">IDENTIFIER</h1><br/>

  <p><a href="#-IDENTIFIER"><img src="https://github.com/th14g0d3v/identifier/raw/main/public/eyes.png" alt="alt text" title="image" style="max-width:100%;"></a></p>
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--summary" class="anchor" aria-hidden="true" href="#-summary">SUMMARY</a></h3>
  <a href="#-Identifier">Identifier</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Summary">Summary</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Tecnologies">Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Playground">Playground</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Challenge">Challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-License">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Credits">Credits</a>
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--tecnologies" class="anchor" aria-hidden="true" href="#-tecnologies">TECNOLOGIES</a></h3>
  <a href="https://nodejs.org/en/" rel="nofollow">
    <img alt="NodeJs" src="https://img.shields.io/badge/Node-purple">&nbsp;&nbsp;&nbsp;
  </a>

  <a href="https://www.apollographql.com/docs/apollo-server/" rel="nofollow">
    <img alt="ApolloServer" src="https://img.shields.io/badge/ApolloServerExpress-purple">&nbsp;&nbsp;&nbsp;
  </a>
                                                                      
  <a href="https://expressjs.com/" rel="nofollow">
    <img alt="Express" src="https://img.shields.io/badge/Express-purple">&nbsp;&nbsp;&nbsp;
  </a>
                                                                      
  <a href="https://graphql.org/" rel="nofollow">
    <img alt="GraphQl" src="https://img.shields.io/badge/GraphQl-purple">&nbsp;&nbsp;&nbsp;
  </a>
                                                                      
  <a href="https://www.mongodb.com/3" rel="nofollow">
    <img alt="MongoDb" src="https://img.shields.io/badge/MongoDb-purple">&nbsp;&nbsp;&nbsp;
  </a>

  <a href="https://www.typescriptlang.org/" rel="nofollow">
    <img alt="Typescript" src="https://img.shields.io/badge/Typescript-purple">&nbsp;&nbsp;&nbsp;
  </a>

  <a href="https://jestjs.io/" rel="nofollow">
    <img alt="Jest" src="https://img.shields.io/badge/Jest-purple">&nbsp;&nbsp;&nbsp;
  </a>

  <a href="https://jwt.io/" rel="nofollow">
    <img alt="Jsonwebtoken" src="https://img.shields.io/badge/jsonwebtoken-purple">&nbsp;&nbsp;&nbsp;
  </a>

  <a href="https://github.com/p-h-c/phc-winner-argon2" rel="nofollow">
    <img alt="Argon2" src="https://img.shields.io/badge/argon2-purple">&nbsp;&nbsp;&nbsp;
  </a>                                    
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--project" class="anchor" aria-hidden="true" href="#-project">PROJECT</a></h3>
  <span color="red">  Identifier is a backend application that has CRUD users, has middleware for admin where this account can see all users, only one user and only logged-in users can delete their own accounts or update their own data. </a> <span><br/>
  <span color="red">  This structure was created only to help those who are starting with studies in test driven development, domain driven design, clean architecture and design pattern. </p>
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--usage" class="anchor" aria-hidden="true" href="#-usage">USAGE</a></h3>

  <h4>Install the MongoDB</h4>
  <p><a href="https://www.mongodb.com/try/download/community" rel="nofollow">MongoDB</a></p>

  <h4> Clone the repository to the desired folder. </h4>
  <p> git clone https://github.com/th14g0d3v/identifier.git </p>
  <h4> Navigate to the repository folder. </h4>
  <p> cd identifier/backend </p>

  <h4> Install the necessary packages for the project. </h4>
  <p> npm install or yarn </p>

  <h4> Start the mongoDB(on linux). </h4>
  <p>  sudo systemctl start mongod </p>

  <h4> Test the the server. </h4>
  <p>  yarn test </p>

  <h4> Turn on the server, which is at 127.0.0.1:7777. </h4>
  <p> yarn tsdev </p>
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--playground" class="anchor" aria-hidden="true" href="#-playground">PLAYGROUND</a></h3>

  <h4> In Browser </h4>
  <p>http://localhost:7777/graphql</p>

```javascript
mutation {
  signUp(
    email: "jack@mail.com"
    password: "jack"
    passwordConfirmation: "jack"
  ) {
    email
  }
}

query {
  login(email: "jack@mail.com", password: "jack") {
    accessToken
    email
  }
}

mutation {
  delete(email: "jack@mail.com") {
    result
  }
}

mutation {
  update(
    currentEmail: "jack@mail.com"
    newEmail: "sparrow@mail.com"
    newPassword: "sparrow"
  ) {
    email
  }
}

query {
  all {
    email
    password
  }
}

query {
  load(email: "jack@mail.com") {
    email
    password
  }
}
```

</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--challenge" class="anchor" aria-hidden="true" href="#-challenge">CHALLENGE</a></h3>

- [x] Create an account
- [x] Log in to an account
- [x] Delete an account just logged in
- [x] Update an account just logged in
- [x] View all accounts just logged in
- [x] View an account just logged in
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--license" class="anchor" aria-hidden="true" href="#-license">LICENSE</a></h3>
  <p>This project is under the MIT license. See the <a href="https://github.com/th14g0d3v/identifier/blob/main/LICENSE">LICENSE</a> file for more details.</p><br/>
</div><hr/><br/>

<div align="center">
  <h3><a id="user-content--credits" class="anchor" aria-hidden="true" href="#-credits">CREDITS</a></h3>
  <p>Made by <a href="https://github.com/th14g0d3v" rel="nofollow">Thiago Gomes</a></p>
</div>
