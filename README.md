<h1 align="center" color"red">IDENTIFIER</h1>

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
<span>  Identifier is a backend application that has CRUD for users. </a> <span><br/>
<span>  Its purpose is to read, create, update, delete user accounts in mongoDB and return a token and the user name when executing signin. <span><br/>
<span>  This structure was created only to help those who are starting with studies in domain driven design, clean architecture and design pattern. </p><br/>

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
