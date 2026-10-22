const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
        
        const frase = response.data[0];

        res.render('index', { frase: frase });
    } catch (error) {
        console.error("Erro ao buscar a frase:", error);
        res.render('index', { frase: "Não foi possível carregar a mensagem do dia. Tente novamente mais tarde!" });
    }
});

app.listen(PORT, () => {
    console.log(`Aplicação rodando em http://localhost:${PORT}`);
});
