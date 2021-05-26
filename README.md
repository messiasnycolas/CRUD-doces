# CRUD-doces

![Print](http://prntscr.com/13gb33r)

### O presente projeto tem como objetivo construir uma API CRUD utilizando Node.js, o framework Express e  o banco de dados não-relacional Google Firestore. A API é consumida e os dados são moldados ao usuário via interface construída em React, exibindo e permitindo editar e apagar produtos, além de gravar novos.

&nbsp;

### Como precaução em relação às dependências, suas versões e considerando que não serão modificadas ou substituidas, estão inclusas nos commits.

&nbsp;

### O projeto foi separado em dois diretórios:
* `server` inclui o backend; e
* `client` inclui o frontend.

### Para o seu funcionamento, **é necessário executar ambos**, conforme o descrito a seguir.
 - Na pasta raiz do projeto, digite na linha de comando(shell ou bash):

 >  `cd server && npm run start`

 e pressione Enter. O backend será inicializado e utilizará a porta 8080. Este comportamento pode ser alterado no arquivo ".env" do diretório "server" nas linhas 3 e 5, na propriedade "PORT" e após o ":" na propriedade "HOST_URL", e no diretório "src", dentro de "client", no arquivo "http.js", na linha 3, após o ":" da constante "baseUrl". 


 - Na pasta raiz do projeto, digite na linha de comando:

>   `cd client && npm run start`

 e pressione Enter. O frontend será inicializado e utilizará a porta 3000. Este comportamento pode ser alterado no arquivo ".env" do diretório "client", na linha 3, propriedade "PORT".

&nbsp;




## **Endpoints da API - métodos, requerimentos e respostas:**
***
* `/api/products` - método `GET`: responde com um JSON contendo os dados armazenados, ou um código de erro caso não existam registros;
* `/api/product` - método `POST`: cria um novo registro, recebendo um arquivo JSON contendo "name" e "price", e retorna uma mensagem de sucesso ou de erro;
* `/api/product/(respectivo id)` - método `PUT`: atualiza o produto, recebendo um arquivo JSON contendo "name" e "price", caso haja registro e retorna uma mensagem de sucesso ou de erro;
* `/api/product/(respectivo id)` - método `DELETE`: apaga o produto, casa haja ragistro e retorna uma mensagem de sucesso ou de erro.

&nbsp;
 

## **Versões - V(versão)d(dia)#(número)**
***
## **Vd1:**
* Backend pronto;
* Preparado o React, com create-react-app.

&nbsp;

* to-do:
    * Frontend.

## **Vd2:**
* Frontend pronto e funcional.

&nbsp;

* to-do:
    * Exibir mensagem de aviso caso não existam registros; 
    * Bugfix: último elemento não é apagado visualmente, mas desaparece ao recarregar.

## **Vd3:**
* Implementada barra de pesquisa;
* Implementada caixinha com mensagens de feedback;
* Novas cores: branding e estilização temática;
* Corrigidos bugs de nomes que quebravam o layout e requisições passando vazias.

&nbsp;

* to-do:
    * Bugfix: último elemento não é apagado visualmente, mas desaparece ao recarregar.