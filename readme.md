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
  - protegemos la rama
  - añadimos husky
  - añadimos GitHub Actions: audit y sonar
- Trabajamos en el repo
  - Creamos la rama de trabajo: features/sample
  - La publicamos y creamos la PR
  - Comprobamos el código con sonarCloud en la PR
  - Mergeamos la PR al finalizar, con todos los checks correctos
