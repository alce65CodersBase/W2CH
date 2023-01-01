# Week2 Challenges: Learning JS (ES6+)

- Day 1. Start project + sample.js

## Configuraciones

- Editor config
- EsLint + Prettier
- Git + Husky

## Instalación

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
  - creamos  la PR de la feature/config
  - Creamos la rama de trabajo: features/sample
  - La publicamos y creamos la PR
  - Comprobamos el código con sonarCloud en la PR
  - Mergeamos la PR al finalizar, con todos los checks correctos
