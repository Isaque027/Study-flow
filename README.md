# 🧠 Study-Flow

**Study-Flow** é uma aplicação web desenvolvida para auxiliar na organização de estudos por meio de **trilhas personalizadas**, permitindo que cada usuário construa seu próprio roadmap de aprendizado de forma flexível e visual.

O projeto foi desenvolvido como trabalho final da disciplina de Front-end, com foco em **boas práticas de organização de código, manipulação de DOM e consumo de API**.

---

## 🚀 Visão geral

A aplicação permite criar, visualizar, editar e remover conteúdos de uma trilha de estudos, exibidos em formato de **timeline**, facilitando o acompanhamento do progresso de aprendizagem.

Toda a lógica foi construída utilizando **JavaScript puro**, com uma API simulada através do **json-server**.

---

## ✨ Funcionalidades

- 📌 Criar conteúdos em uma trilha de estudos  
- 📝 Editar conteúdos existentes  
- 🗑️ Excluir conteúdos  
- 📋 Listar conteúdos dinamicamente em formato de trilha  
- 🔄 CRUD completo utilizando métodos HTTP  

---

## 🧾 Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES Modules)**
- **json-server**
- **Fetch API**
- **Git & GitHub**

---

## 📁 Estrutura do projeto

```text
Study-flow/
├─ backend/
│  └─ db.json
├─ js/
│  ├─ api.js
│  ├─ ui.js
│  └─ main.js
├─ index.html
├─ style.css
├─ package.json
└─ README.md
```
---

## ⚙️ Como rodar o projeto localmente
### 1️⃣ Clone o repositório
````
git clone https://github.com/Isaque027/Study-flow.git

````
### 2️⃣ Instale as dependências
```
npm install json-server

```
### 3️⃣ Inicie o json-server
```
npm start

```

O servidor será iniciado em:

http://localhost:3000

### 4️⃣ Abra o projeto

- Abra o arquivo index.html no navegador ou utilize um servidor local (ex: Live Server).

### 🔁 Métodos HTTP utilizados

- GET – Listar conteúdos da trilha

- POST – Criar novos conteúdos

- PUT – Editar conteúdos existentes

- DELETE – Remover conteúdos

## 🧠 Boas práticas aplicadas

- Separação de responsabilidades (api, ui, main)

- Manipulação de DOM sem uso de frameworks

- Código modularizado

- Uso correto do Git e GitHub

- Projeto reproduzível para avaliação

## 🎯 Objetivo do projeto

O objetivo principal foi desenvolver uma aplicação que resolvesse um problema real — organização dos estudos — ao mesmo tempo em que aplicasse conceitos fundamentais de desenvolvimento front-end.

## 👤 Autor

Isaque Samuel Miranda dos Reis

GitHub: https://github.com/Isaque027
