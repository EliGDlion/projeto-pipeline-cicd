GridTask 🏎️
Uma aplicação web simples, rápida e funcional para gerenciamento de tarefas diárias, desenvolvida com Node.js, Express e JavaScript puro.

📋 Sobre o Projeto
O GridTask foi criado com o objetivo de aplicar na prática os fundamentos do desenvolvimento web Full Stack, integrando um servidor backend (API RESTful) a uma interface dinâmica no frontend. O sistema permite que o usuário adicione, visualize e remova tarefas em tempo real através do navegador.

🛠️ Tecnologias Utilizadas
* Back-end:

Node.js — Ambiente de execução JavaScript no servidor.
Express — Framework web minimalista para criação das rotas da API e entrega de arquivos estáticos.

* Front-end:

HTML5 — Estruturação semântica da interface.
CSS3 — Estilização responsiva e limpa.
JavaScript (ES6+) — Consumo da API utilizando a Fetch API (async/await) para manipulação dinâmica do DOM.

📁 Estrutura de Arquivos
taskflow/
├── node_modules/       # Dependências instaladas pelo npm
├── public/             # Arquivos estáticos servidos ao navegador
│   └── index.html      # Interface principal e lógica do front-end
├── index.js            # Servidor Express e rotas da API
├── package.json        # Metadados e dependências do projeto
├── package-lock.json   # Controle de versões exatas das dependências
└── README.md           # Documentação do projeto

⚙️ Como Executar o Projeto Localmente
* Pré-requisitos

Certifique-se de ter o Node.js (e o gerenciador de pacotes npm) instalado em sua máquina.

* Passo a passo

1. Acesse a pasta do projeto pelo terminal: cd caminho/para/taskflow
2. Instale as dependências necessárias: npm install
3. Inicie o servidor: node index.js

O terminal exibirá a mensagem: Servidor rodando na porta 3000

4. Acesse no navegador:
Abra o seu navegador de preferência e acesse: http://localhost:3000

🔌 Endpoints da API
O servidor disponibiliza as seguintes rotas para comunicação entre o cliente e o backend:
Método

- GET /api/tasks: Retorna a lista de todas as tarefas cadastradas em formato JSON.
- POST /api/tasks: Recebe um JSON { "text": "Descrição" } e adiciona uma nova tarefa.
- DELETE /api/tasks/:id: Remove uma tarefa específica com base no seu id.

✨ Funcionalidades

[x] Adição de novas tarefas com validação de campo vazio.

[x] Listagem dinâmica sincronizada com o servidor backend.

[x] Remoção individual de tarefas.

[x] Persistência em memória enquanto o servidor estiver ativo.

👨‍💻 Autor

Desenvolvido por Elias Israel e Leandro Cordeiro como projeto prático de desenvolvimento web.