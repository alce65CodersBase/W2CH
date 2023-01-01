# Week2 Challenges: Learning JS (ES6+)

- Day 1. Start project + sample.js
- Day 2. Strict Equals

## Configuraciones (Day 1)

- Editor config
- EsLint + Prettier
- Git + Husky

## Configuraciones (Day 2)

- Jest + ES6

## Instalación (Day 1)

- Creamos proyecto incluido ESLint y prettier (CH1)
  - .editorconfig
  - .gitignore
  - readme.md
  - `npm init -y`: se crea package.json
  - `npx eslint --init`: se crea .eslintrc.json (opcionalmente Airbnb)
  - `npm i eslint-config-prettier` + configurar ESLint-prettier
- Creamos el repo (CH1)
  - initial commit
  - conectamos a GitHub
  - protegemos la rama: Require a pull request before merging
- Modificamos la configuración del repo
  - creamos la rama de trabajo: feature/config
  - añadimos huskies: commit-msg y pre-push
    - comprobamos su efecto: mensajes y nombre de rama
    - con el primer commit, publicamos la rama
    - opcionalmente creamos la PR
  - añadimos GitHub Actions: audit
    - carpeta .github/workflows
    - copiamos audit.yml
      - `npx eclint check` comprueba la validez de editorconfig
      - comprobar node_modules en gitignore
  - añadimos SonarCloud al repo
    - lo incorporamos en la página de Sonar
    - añadimos Secret en GitHub
    - añadimos workflow sonar.yml
    - creamos sonar-project.properties
- Trabajamos en el repo
  - si no existía, creamos la PR de la feature/config
    - en la propia PR se comprueban las GitHub actions
      - audit: se comprueba la valides (e.g. ESLint) de código
      - sonar: se comprueba el código con sonarCloud en la PR
      - mergeamos la PR al finalizar, con todos los checks correctos
      - eliminamos la PR, al menos en GitHub
  - [opción] Creamos la rama de trabajo: features/sample
    - añadimos fichero sample.js y hacemos un commit
    - publicamos rama y creamos la PR
    - modificamos sample.js y hacemos nuevos commits
    - comprobamos la validez da la PR cada vez que se actualiza
    - mergeamos la PR al finalizar, con todos los checks correctos
    - eliminamos la PR, al menos en GitHub

## Instalación (Day 2)

- Incorporamos testing (CH2)
  - Instalación de Jest

    ```shell
    npm i -D jest @babel/plugin-transform-modules-commonjs
    ```

  - Configuración de ESLint

    ```json
    "env": {
      "jest": true
    }
    ```

  - Configuración en package.json (Jest + ES6 Modules)

    ```json
    "scripts": {
    "test": "jest --watchAll --coverage"
    },
    "babel": {
        "env": {
            "test": {
                "plugins": [
                    "@babel/plugin-transform-modules-commonjs"
                ]
            }
        }
    }
    ```

  - GitHub Action de testing

      ```yml
      name: Testing Analysis

      on:
        push:
          branches: ['main']
        pull_request:
          types: [opened, synchronize, reopened]
        workflow_dispatch:

      jobs:
        Test:
          name: Tests
          runs-on: ubuntu-latest
          steps:
            - uses: actions/checkout@v3
              with:
                fetch-depth: 0 # Shallow clones should be disabled for a better relevancy of analysis
            - name: Install modules
              run: npm ci
            - name: Testing coverage
              run: npm run test:prod #Change for a valid npm script
      ```

  - Coverage en sonar (ampliar fichero sonar-project.properties)
