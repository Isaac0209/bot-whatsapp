const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');
module.exports = {
    name: "teste", 
    aliases: [""], 
    async execute(message, client, link) {
        const media = await message.downloadMedia();
console.log(media)
    }}