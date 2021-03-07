<!-- PROJECT IDENTIFIER

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
5           Singleton       implementar no infra layer com PostgreSQL
6           Postgres        popular o db com informações sobre as plantas.
7           All/Load        deverá retorna todas as informações das plantas do db postgres.

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

<h1 align="center" color="red">IDENTIFIER</h1>

<p align="center">
  <a href="#-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Playground">Playground</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Challenge">Challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-License">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Credits">Credits</a>
</p><br/>

<div align="center">
  
  <a href="https://nodejs.org/en/" rel="nofollow">
    <img alt="NodeJs" src="https://img.shields.io/badge/Node-JS-red">
  </a>

  <a href="#" rel="nofollow">
    <img alt="ApolloServer" src="https://img.shields.io/badge/Apollo-SERVER-red">
  </a>
                                                                      
  <a href="#" rel="nofollow">
    <img alt="GraphQl" src="https://img.shields.io/badge/Graph-QL-red">
  </a>
                                                                      
  <a href="#" rel="nofollow">
    <img alt="MongoDB" src="https://img.shields.io/badge/Mongo-DB-red">
  </a>

  <a href="#" rel="nofollow">
    <img alt="Typescript" src="https://img.shields.io/badge/Typescript-TS-red">
  </a>
                                                                     
</div>

<h2><a id="user-content--project" class="anchor" aria-hidden="true" href="#-project"></a> PROJECT</h2>
<span color="red">  Identifier is a backend application that has CRUD users, has middleware for admin where this account can see all users, only one user and only logged-in users can delete their own accounts or update their own data. </a> <span><br/>
<span color="red">  This structure was created only to help those who are starting with studies in domain driven design, clean architecture and design pattern. </p><br/>

<h2><a id="user-content--requirements" class="anchor" aria-hidden="true" href="#-requirements"></a> REQUIREMENTS</h2>
<p> MongoDB </p><br/><br/>

<h2><a id="user-content--usage" class="anchor" aria-hidden="true" href="#-usage"></a> USAGE</h2>

<h4> Install the MongoDB. </h4>
<a href="https://docs.mongodb.com/manual/installation/">MongoDB</a><br/><br/>

<h4> Clone the repository to the desired folder. </h4>
<p> git clone https://github.com/th14g0d3v/identifier.git </p><br/>
<h4> Navigate to the repository folder. </h4>
<p> cd identifier </p><br/>

<h4> Install the necessary packages for the project. </h4>
<p> npm install or yarn </p><br/>

<h4> Start the mongoDB(on linux). </h4>
<p>  sudo systemctl start mongod </p><br/>

<h4> Build the the server. </h4>
<p>  yarn build </p><br/>

<h4> Turn on the server, which is at 127.0.0.1:7777. </h4>
<p> yarn start </p><br/>

<h2><a id="user-content--playground" class="anchor" aria-hidden="true" href="#-playground"></a> PLAYGROUND</h2>

<h4> In Browser </h4>
<p>http://localhost:7777/graphql</p>

```javascript
mutation {
  signUp (email: "jack@mail.com", password: "jack", passwordConfirmation: "jack") {
    code
  }
}
```

<br/><br/>

<h2><a id="user-content--challenge" class="anchor" aria-hidden="true" href="#-challenge"></a> CHALLENGE</h2>

- [x] Create an account.
      <br/><br/>

<h2><a id="user-content-memo-licença" class="anchor" aria-hidden="true" href="#memo-licença"></a> LICENSE</h2>
<p>This project is under the MIT license. See the <a href="https://github.com/th14g0d3v/identifier/blob/master/LICENSE"> LICENSE</a> file for more details.</p><br/>

<h2><a id="user-content-memo-credits" class="anchor" aria-hidden="true" href="#memo-credits"></a> CREDITS</h2>
<p>Made by <a href="https://github.com/th14g0d3v" rel="nofollow"> Thiago Gomes</a>.</p>
