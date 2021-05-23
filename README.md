# CRUD-doces

### O presente projeto tem como objetivo construir uma API CRUD utilizando Node.js, o framework Express e  o banco de dados não-relacional Google Firestore. A API é consumida e os dados são moldados ao usuário via interface construída em React, exibindo e permitindo editar e apagar produtos, além de gravar novos.


### Como precaução em relação às dependências, suas versões e considerando que não serão modificadas ou substituidas, estão inclusas nos commits.


### O projeto foi separado em dois diretórios:
 - "server" inclui o backend; e
 - "client" inclui o frontend.

### Para o seu funcionamento, é necessário executar ambos, conforme o descrito a seguir.
 - Na pasta raiz do projeto, digite na linha de comando(shell ou bash) "cd server && npm run start" e pressione Enter. O backend será inicializado e utilizará a porta 8080. Este comportamento pode ser alterado no arquivo ".env" nas linhas 3 e 5, na propriedade "PORT" e após o ":" na propriedade "HOST_URL".


 - Na pasta raiz do projeto, digite na linha de comando "cd client && npm run start" e pressione Enter. O frontend será inicializado e utilizará a porta 3000. Este comportamento pode ser alterado no arquivo ".env" na linha 3, propriedade "PORT".



## Versões - V(versão)d(dia)#(número)

### Vd1:
 - Backend pronto;
 - Preparado o React, com create-react-app.
 ### to-do:
 - Frontend.