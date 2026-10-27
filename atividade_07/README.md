# Atividade 07

Este diretório contém o desenvolvimento da Atividade 07 para a disciplina de Programação Web I[cite: 3].

📁 Estrutura do Projeto
- bin/www: Arquivo de inicialização e subida do servidor HTTP[cite: 3].
- routes/: Diretório contendo os arquivos de rotas modularizadas (`index.js`, `users.js`) utilizando `express.Router`[cite: 3].
- views/: Contém os arquivos de template EJS (`index.ejs`, `error.ejs`)[cite: 3].
- public/stylesheets/: Contém os arquivos de estilo CSS[cite: 3].
- app.js: Configuração principal da aplicação Express[cite: 3].

🎯 Escopo da Atividade
1. Modularização com Router: Refatoração da aplicação utilizando instâncias de `express.Router` para separar as rotas de forma limpa.
2. Organização Estrutural: Estrutura padrão baseada no gerador do Express para desacoplar endpoints e lógica de negócio.

Para rodar o projeto, execute `npm install` para instalar as dependências e `npm start` (ou `node ./bin/www`) para iniciar o servidor.
