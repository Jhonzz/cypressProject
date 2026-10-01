# WebDojo - Testes Automatizados com Cypress

Projeto de testes automatizados **E2E** desenvolvido com **Cypress**
para validação da aplicação **WebDojo**.

A aplicação WebDojo e o projeto de automação estão localizados no mesmo
repositório.

## Tecnologias

-   JavaScript
-   Cypress
-   Node.js

## Estrutura do projeto

``` text
web/
├── cypress/
│   ├── e2e/
│   │   └── ...
│   ├── fixtures/
│   │   ├── address.json
│   │   ├── consultancy.json
│   │   ├── document.pdf
│   │   └── example.json
│   └── support/
│       ├── actions/
│       │   ├── consultancy.actions.js
│       │   └── utils.js
│       ├── commands.js
│       └── e2e.js
├── package.json
└── ...
```

### `cypress/e2e`

Contém os arquivos de testes E2E da aplicação WebDojo.

### `cypress/fixtures`

Contém arquivos utilizados como massa de dados durante a execução dos
testes.

-   `address.json` --- dados de endereço;
-   `consultancy.json` --- dados utilizados nos testes de consultoria;
-   `document.pdf` --- documento utilizado em cenários de upload;
-   `example.json` --- massa de dados auxiliar.

### `cypress/support/actions`

Contém funções e ações reutilizáveis utilizadas pelos testes.

-   `consultancy.actions.js` --- ações relacionadas aos fluxos de
    consultoria;
-   `utils.js` --- funções utilitárias compartilhadas entre os testes.

### `cypress/support/commands.js`

Contém comandos customizados do Cypress utilizados para reutilizar
comportamentos comuns entre diferentes cenários.

### `cypress/support/e2e.js`

Arquivo de configuração global carregado antes da execução dos testes
E2E.

## Pré-requisitos

Antes de executar o projeto, é necessário possuir:

-   Node.js
-   npm

Após clonar o repositório, instale as dependências:

``` bash
npm install
```

## Executando a aplicação WebDojo

Antes de executar os testes automatizados, a aplicação WebDojo precisa
estar disponível localmente.

Execute:

``` bash
npm run dev
```

A aplicação será iniciada utilizando:

``` bash
serve -s dist -p 3000
```

Por padrão, estará disponível em:

``` text
http://localhost:3000
```

> Mantenha a aplicação WebDojo em execução enquanto os testes Cypress
> estiverem sendo executados.

## Executando os testes

### Executar todos os testes

``` bash
npm test
```

Equivalente a:

``` bash
npx cypress run --config viewportWidth=1920,viewportHeight=1080
```

Os testes serão executados em modo headless utilizando resolução
**1920x1080**.

### Abrir o Cypress em modo interativo

``` bash
npm run test:ui
```

Equivalente a:

``` bash
npx cypress open
```

Esse comando abre a interface gráfica do Cypress, permitindo selecionar
e executar os testes individualmente.

### Executar somente os testes de Login

``` bash
npm run test:login
```

Equivalente a:

``` bash
npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1920,viewportHeight=1080
```

Executa apenas os cenários presentes em `cypress/e2e/login.cy.js`, com
resolução **1920x1080**.

### Executar testes de Login em resolução Mobile

``` bash
npm run test:login:mobile
```

Equivalente a:

``` bash
npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896 --headed
```

Executa os testes de login utilizando viewport mobile de **414x896**.

A opção `--headed` permite acompanhar visualmente a execução no
navegador.

## Scripts disponíveis

  -----------------------------------------------------------------------
  Script                              Descrição
  ----------------------------------- -----------------------------------
  `npm run dev`                       Inicia a aplicação WebDojo na porta
                                      `3000`

  `npm test`                          Executa toda a suíte Cypress em
                                      `1920x1080`

  `npm run test:ui`                   Abre a interface gráfica do Cypress

  `npm run test:login`                Executa somente os testes de Login

  `npm run test:login:mobile`         Executa os testes de Login em
                                      resolução mobile
  -----------------------------------------------------------------------

## Fluxo recomendado para execução

Em um terminal, inicie a aplicação:

``` bash
npm run dev
```

Em outro terminal, execute os testes:

``` bash
npm test
```

Para desenvolvimento e debug dos cenários, utilize:

``` bash
npm run test:ui
```

## Objetivo

Este projeto tem como objetivo garantir a qualidade da aplicação
**WebDojo** através da automação dos principais fluxos funcionais,
permitindo:

-   validação automatizada dos fluxos E2E;
-   reutilização de ações e comandos;
-   utilização de massas de dados através de fixtures;
-   execução dos testes em diferentes resoluções;
-   execução direcionada de suítes específicas;
-   maior segurança durante alterações e novas entregas da aplicação.

## Autor

**Jhon Pablo Borba do Nascimento**
