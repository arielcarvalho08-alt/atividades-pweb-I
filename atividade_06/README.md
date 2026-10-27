# Atividade 06

Este diretório contém o desenvolvimento da Atividade 06 para a disciplina de Programação Web I.

📁 Estrutura do Projeto
- app.js: Arquivo principal contendo a configuração do servidor Express, rotas e middlewares personalizados.

🎯 Escopo da Atividade
1. Middlewares por Rota: Criação de funções de middleware específicas para cada rota exibindo o nome correspondente.
2. Log de Acesso Global: Implementação de um middleware de nível de aplicação para registrar no console o acesso a cada página.
3. Rota Dinâmica (Signin): Criação da rota `/users/:userid` para capturar o parâmetro e exibir uma mensagem de boas-vindas personalizada.
4. Redirecionamento: Uso de `res.redirect()` para direcionar usuários sem `userid` para a página de signup.
5. Tratamento de Erro 404: Configuração de captura para rotas não encontradas utilizando `res.status(404)` com link de retorno para o index.

Para instruções detalhadas de como instalar as dependências e rodar o servidor, consulte o arquivo `package.json`.
