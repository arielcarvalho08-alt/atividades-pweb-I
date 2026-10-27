import axios from 'axios';

const btnBuscar = document.getElementById('btnBuscar');
const carouselContainer = document.getElementById('carouselContainer');
const carouselTrack = document.getElementById('carouselTrack');
const statusMessage = document.getElementById('statusMessage');
const btnAnterior = document.getElementById('btnAnterior');
const btnProximo = document.getElementById('btnProximo');

let imagensFiltradas = [];
let currentIndex = 0;

btnBuscar.addEventListener('click', buscarImagensNasa);

async function buscarImagensNasa() {
  const apiKey = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
  const astroAlvo = document.getElementById('inputAstro').value.trim().toLowerCase();

  if (!astroAlvo) {
    alert('Por favor, digite o nome de um astro para pesquisar.');
    return;
  }

  statusMessage.textContent = 'Buscando dados na NASA via Axios...';
  carouselContainer.style.display = 'none';
  carouselTrack.innerHTML = '';

  try {
    const url = `https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=${apiKey}&start_date=2026-08-01&end_date=2026-10-27`;
    
    console.log("A URL gerada foi:", url);

    const response = await axios.get(url);
    const data = response.data; 
    
    imagensFiltradas = data.filter(item => {
      const ehImagem = item.media_type === 'image';

      const copyrightLower = item.copyright ? item.copyright.toLowerCase() : '';
      const semCopyright = !item.copyright || 
                           copyrightLower.includes('nasa') || 
                           copyrightLower.includes('public domain') ||
                           copyrightLower.includes('domínio público');

      const contemAstro = (item.title && item.title.toLowerCase().includes(astroAlvo)) ||
                          (item.explanation && item.explanation.toLowerCase().includes(astroAlvo));

      return ehImagem && semCopyright && contemAstro;
    });

    if (imagensFiltradas.length > 0) {
      statusMessage.textContent = `Sucesso! Encontradas ${imagensFiltradas.length} imagens para "${astroAlvo}".`;
      gerarSlides();
    } else {
      statusMessage.textContent = `Nenhuma imagem sem copyright encontrada para "${astroAlvo}" neste período. Tente pesquisar outro astro (em inglês, ex: nebula, galaxy, moon, sun, comet, saturn).`;
    }

  } catch (error) {
    console.error(error);
    statusMessage.textContent = 'Erro ao processar dados. Certifique-se de que reiniciou o terminal após alterar o .env.';
  }
}

function gerarSlides() {
    currentIndex = 0;
    carouselTrack.style.transform = 'translateX(0%)';

    imagensFiltradas.forEach(item => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-item');

        slide.innerHTML = `
            <img src="${item.hdurl || item.url}" alt="${item.alt || item.title}" loading="lazy">
            <div class="carousel-caption">
                <h3>${item.title}</h3>
                <p>Data de Registro: ${item.date}</p>
            </div>
        `;
        carouselTrack.appendChild(slide);
    });

    carouselContainer.style.display = 'block';
}

function atualizarPosicao() {
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

btnProximo.addEventListener('click', () => {
    if (currentIndex < imagensFiltradas.length - 1) {
        currentIndex++;
        atualizarPosicao();
    }
});

btnAnterior.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        atualizarPosicao();
    }
});