## API 
## Tecnologias e arquitetura utilizadas
- NodeJs
- Express
- MVC

A API desenvolvida consome um arquivo JSON já populado existente no projeto com duas rotas principais:
- /get_courts retorna os tribunais existentes 
- /get_process retorna os processos filtrados por tribunal e número do processo

# 💻 Como testar a aplicação criada:

- Clone este repositório no seu computador
- Com o projeto aberto você deve rodar os seguintes comandos em seu terminal para instalar as dependências;

```shell
    yarn install / npm install
```

- Para iniciar a API criada você deve realizar o seguinte comando:

```shell
    node . / node index.js
```

- Para realizar testes na aplicação:
```shell
    yarn test / npm run test
```
---
