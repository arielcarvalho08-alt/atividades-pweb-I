# Atividade 06

Este diretório contém o desenvolvimento da Atividade 06 para a disciplina de Programação Web I.

📁 Estrutura do Projeto
- app.js: Arquivo principal contendo o servidor Node.js, configuração do Express, middlewares personalizados, rotas dinâmicas e tratamento de erro 404.

🎯 Escopo da Atividade
1. Middlewares por Rota: Criação de funções de middleware específicas para exibir o nome correspondente em cada rota.
2. Log de Acesso Global: Implementação de um middleware de aplicação para registrar no console o acesso a cada página.
3. Rota Dinâmica (Signin): Criação da rota `/users/:userid` para capturar o parâmetro e exibir uma mensagem de boas-vindas.
4. Redirecionamento: Uso de `res.redirect()` para direcionar acessos sem `userid` para a página de signup.
5. Tratamento de Erro 404: Configuração de captura para rotas não encontradas utilizando `res.status(404)` com link de retorno para o index.

Para instruções detalhadas de como instalar as dependências e rodar o servidor, consulte o código-fonte em `app.js`.
