# TechStart

O **TechStart** é uma plataforma web voltada ao aprendizado e à prática de programação, buscando oferecer uma experiência interativa, gamificada e acessível para pessoas que desejam desenvolver e aprimorar suas habilidades na área.

A proposta da plataforma envolve desafios de programação, organização por salas, rankings de desempenho e feedback inteligente com Inteligência Artificial, proporcionando uma experiência de aprendizado dinâmica e personalizada.

## Sobre este repositório

Este repositório contém a **nova versão do TechStart**, desenvolvida a partir de uma reestruturação do projeto original.

A primeira versão da plataforma está disponível em:

**[TechStart — Projeto original](https://github.com/aquiinoo/techstart)**

O projeto original serve como base conceitual e visual para esta nova implementação. A partir dele, o TechStart está sendo gradualmente migrado e reconstruído com uma nova arquitetura e novas tecnologias.

A identidade, a proposta e as principais ideias da plataforma são preservadas, enquanto sua implementação é modernizada com foco em:

- organização e qualidade do código;
- componentização e reutilização;
- manutenibilidade;
- escalabilidade;
- responsividade;
- acessibilidade;
- segurança;
- boas práticas de desenvolvimento.

## Tecnologias

### Frontend

- React
- Vite
- JavaScript
- CSS
- React Router
- React Icons
- Firebase SDK

### Serviços

- Firebase Authentication
- Cloud Firestore

Outras tecnologias e serviços poderão ser incorporados conforme a evolução da arquitetura do projeto.

## Estrutura

A aplicação está sendo organizada de forma modular, separando páginas, componentes reutilizáveis, estilos, serviços e recursos estáticos.

```text
techstartr/
├── backend/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Executando o projeto

### Pré-requisitos

É necessário ter o **Node.js** e o **npm** instalados.

Clone o repositório:

```bash
git clone URL_DESTE_REPOSITORIO
```

Acesse o frontend:

```bash
cd techstartr/frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

## Status

> 🚧 **Projeto em desenvolvimento**

O TechStart está passando por um processo de migração e reestruturação. Funcionalidades, arquitetura e documentação poderão sofrer alterações durante o desenvolvimento.

## Equipe

Desenvolvido pela equipe **TechStart**.