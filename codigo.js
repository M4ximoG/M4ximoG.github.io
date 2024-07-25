// URL da API
const apiURL = 'https://decapi.me/youtube/latest_pl_video?id=PLmpCIVtOTvKOUqm-w5ot2Aap7UH81ohVP&format={id}';

// Fazendo a chamada à API
fetch(apiURL)
    .then(response => response.text())
    .then(videoId => {
        // Concatenando o resultado com o link do YouTube
        const youtubeLink = `https://www.youtube.com/live_chat?is_popout=1&v=${videoId}`;
        console.log(youtubeLink);
    })
    .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
    });
