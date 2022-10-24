const Whatsapp = require('whatsapp-web.js');
const axios = require('axios');
module.exports = {
    name: "youtubemp4", 
    aliases: [""], 
    showajuda: false,
    async execute(message, client, link) {
        const options = {
            method: 'GET',
            url: 'https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess',
            params: {
              url: link,
              format: 'mp3',
              responseFormat: 'json',
              lang: 'en'
            },
            headers: {
              'X-RapidAPI-Key': '5cd41d6042msha0856a7b0f9ff56p15aca6jsnf2f45eec1dbb',
              'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {     
        const id = response.data.YoutubeAPI.id
        const options = {
            method: 'GET',
            url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
            params: {id: id},
            headers: {
              'X-RapidAPI-Key': '5cd41d6042msha0856a7b0f9ff56p15aca6jsnf2f45eec1dbb',
              'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              const lista = response.data.formats;
              var qualidades = [];
            for(i = 0; i<lista.length; i++){
            const intp = parseInt(lista[i].qualityLabel)
            qualidades.push(intp)
            }
            const max = Math.max(...qualidades);
           
            for(i = 0; i<lista.length; i++){
                if(lista[i].qualityLabel == `${max}p`){
                    const downloadlink = lista[i].url;
                  
                    const options = {
                        method: 'POST',
                        url: 'https://api.encurtador.dev/encurtamentos',
                        data: {
                            url: downloadlink, 
                          }
                       
                      };
                      axios.request(options).then(function (response) {
                    client.sendMessage(message.from, `O Link de download do vídeo: ${response.data.urlEncurtada} \n`)

                      })
                   
                  
                }
            }
          }).catch(function (error) {
              console.error(error);
          });
                

              
          }).catch(function (error) {
              console.error(error);
          });

}}