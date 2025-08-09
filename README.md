# API Rest para Aprendizado de Testes e Automação

Esta API foi desenvolvida para fins educacionais, permitindo o aprendizado de testes e automação a nível de API. A aplicação é construída com Node.js e Express, utilizando um banco de dados em memória.

## Funcionalidades

- Registro de usuários
- Login de usuários
- Consulta de usuários
- Transferência de valores

## Regras de Negócio

1. Login e senha devem ser informados para logar.
2. Não é possível registrar usuários duplicados.
3. Transferências para destinatários que não são marcados como “favorecido” só podem ser realizadas se o valor for menor que R$ 5.000,00.

## Configuração

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   node server.js
   ```

## Documentação da API

A documentação da API está disponível no endpoint `/api-docs`. Acesse em seu navegador:

```
http://localhost:3000/api-docs
```

## Endpoints

### Registro de Usuário
- **POST** `/users/register`

### Login de Usuário
- **POST** `/users/login`

### Transferência de Valores
- **POST** `/transfers`

## Tecnologias Utilizadas

- Node.js
- Express
- Swagger para documentação

## Licença

Este projeto é licenciado sob a licença MIT.
