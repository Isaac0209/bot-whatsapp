const Whatsapp = require('whatsapp-web.js');
const axios = require('axios');
module.exports = {
    name: "tiktomp4", 
    aliases: [""], 
    showajuda: false,
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
            const link2 = "https://v16m-default.tiktokcdn-us.com/a8bd4e37c2609e6047aadcecd1988195/6354ebdb/video/tos/useast5/tos-useast5-ve-0068c002-tx/ab903ce248fd4e5c93d60489e11c52e3/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3314&bt=1657&cs=0&ds=6&ft=eXWR6HAEMyq8ZM8shhe2NgYrEE0Gb&mime_type=video_mp4&qs=0&rc=aDhmNTRoODc5aTw7OTQzNkBpMzh0a2Y6ZmxlZzMzZzczNEAvXzFjLV8xXjAxM2BfNWNeYSNsbWFzcjRfbTZgLS1kMS9zcw%3D%3D&l=20221023012254B728B032463DB6297C9C.mp4"
              const options = {
                method: 'POST',
                url: 'https://api.encurtador.dev/encurtamentos',
                data: {
                    url: response.data.result.video.url_list[0], 
                  }
               
              };
              axios.request(options).then(async function (response) {
               
                client.sendMessage(message.from,`O Link de download do vídeo: ${response.data.urlEncurtada}`)
              })
          }).catch(function (error) {
              console.error(error);
          });

}}