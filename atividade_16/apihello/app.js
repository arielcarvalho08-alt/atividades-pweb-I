const express = require('express')
const path = require('path')
const app = express()
const PORT = 8000

app.set('json spaces', 4);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const translations = {
    'pt-br': { world: "Olá, mundo!", user: "Olá", post: "Olá, {name} do POST!" },
    'en':    { world: "Hello, world!", user: "Hello", post: "Hello, {name} from POST!" },
    'es':    { world: "¡Hola, mundo!", user: "Hola", post: "¡Hola, {name} de POST!" }
};

app.use((req, res, next) => {
    const originalJson = res.json;

    res.json = function (body) {
        const timestamp = new Date().toLocaleString('pt-BR');
        const endpoint = `${req.method} ${req.originalUrl}`;
        const output = JSON.stringify(body);

        console.log(`${timestamp}, ${endpoint}, ${output}`);

        return originalJson.call(this, body);
    };

    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

/* ==================== VERSÃO 1 (v1) ==================== */
app.get('/v1/hi', function(req, res) {
    const out = { msg: "Hello, world!" }
    res.status(200).json(out)
})

app.get('/v1/hi/user/:name', function(req, res) {
    const out = { msg: "Hello, " + req.params.name.toUpperCase() }
    res.status(200).json(out)
})

app.post('/v1/hi', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });

    const out = { msg: `Hello, ${name.toUpperCase()} from POST!` };
    res.status(200).json(out);
});


/* ==================== VERSÃO 2 (v2) ==================== */

app.get('/v2/hi/:lang', function(req, res) {
    const lang = req.params.lang.toLowerCase();
    
    if (!translations[lang]) {
        return res.status(400).json({ error: "Language not supported. Use pt-br, en or es." });
    }

    res.status(200).json({ msg: translations[lang].world });
});

app.get('/v2/hi/user/:name/:lang', function(req, res) {
    const name = req.params.name.toUpperCase();
    const lang = req.params.lang.toLowerCase();

    if (!translations[lang]) {
        return res.status(400).json({ error: "Language not supported. Use pt-br, en or es." });
    }

    res.status(200).json({ msg: `${translations[lang].user}, ${name}` });
});

app.post('/v2/hi', (req, res) => {
    const { name, lang } = req.body;

    if (!name) return res.status(400).json({ error: "Name is required" });
    if (!lang) return res.status(400).json({ error: "Language (lang) is required" });

    const chosenLang = lang.toLowerCase();
    if (!translations[chosenLang]) {
        return res.status(400).json({ error: "Language not supported. Use pt-br, en or es." });
    }

    const message = translations[chosenLang].post.replace('{name}', name.toUpperCase());
    res.status(200).json({ msg: message });
});


// express v4 use '/*'
// express v5 use '/*splat'
app.get('/*splat', function(req, res) {
    res.json({ error: 'Invalid endpoint' })
})

app.listen(PORT, ()=> {
    const msg = `Hello API running on PORT ${PORT}`
    const link = `http://localhost:${PORT}`
    const flink = `\x1b[1m${link}\x1b[0m`
    console.log(msg + '\n' + flink)
})
