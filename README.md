# zenvia-flow

Este repositório contém a aplicação desenvolvida em um [tutorial de consumo da ferramenta Zenvia Flow](https://prensa.li/zenvia/saiba-como-desenvolver-uma-ferramenta-para-divulgacao-de-servicos-e-produtos/), disponível na [Prensa.li](https://prensa.li)

Esta aplicação é uma API Rest que serve como webhook para a ferramenta [Zenvia Flow](https://www.zenvia.com/produtos/zenvia-flow/). Ela possui a chamada `GET /hook` que recebe um _query param_ chamado **`categoria`** e através dele é feita uma busca ao banco de dados feito em [SQLite](https://www.sqlite.org/)

## Como rodar a aplicação

Instale as dependências deste projeto:

```bash
npm install
# ou com yarn
yarn
```

Crie o banco de dados:

```bash
npx prisma migrate dev --name init --preview-feature
```

Popule o banco de dados para testes:

```bash
npm run seed
# ou com yarn
yarn seed
```

Execute a aplicação

```bash
npm run dev
# ou com yarn
yarn dev
```

## [A Prensa](https://prensa.li/)

Feita para os ávidos e inconformados, aqueles que acreditam no real valor de um conteúdo de qualidade.

A Prensa é uma _media tech_ fundada em 26/12/2019. Somos uma startup que produz conteúdo para as marcas se conectarem com seu público-alvo. Na [**Prensa**](https://prensa.li/) atendemos marcas que precisam dialogar com desenvolvedores e é nesta parte que você entra! :)
