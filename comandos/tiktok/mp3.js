const Whatsapp = require('whatsapp-web.js');
const axios = require('axios');
module.exports = {
    name: "tiktomp3", 
    showajuda: false,
    aliases: [""], 
    async execute(message, client, link) {
        const options = {
            method: 'GET',
            url: 'https://tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com/media-info/',
            params: {link: link},
            headers: {
              'X-RapidAPI-Key': '5cd41d6042msha0856a7b0f9ff56p15aca6jsnf2f45eec1dbb',
              'X-RapidAPI-Host': 'tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              const options = {
                method: 'POST',
                url: 'https://api.encurtador.dev/encurtamentos',
                data: {
                    url: response.data.result.music.url_list[0], 
                  }
               
              };
              axios.request(options).then(function (response) {
            client.sendMessage(message.from, `O Link de download do áudio: ${response.data.urlEncurtada}`)

              })
          }).catch(function (error) {
              console.error(error);
          });

}}