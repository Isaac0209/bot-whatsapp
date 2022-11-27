# Um bot para o whatsapp com várias funções.
> Ele faz figurinhas|animadas, baixa vídeos do Tiktok ou Youtube, reconhece músicas que você manda por áudio, tira fundos das fotos ou figurinhas. Com passar do tempo irei melhorando ele e colocando novas funções com o apoio de vocês.
# Requisitos
Node JS e NPM Instalado. <br>
Conhecimento básico de JS. <br>
# Instalação
## Windows
1 - Baixe ou clone o projeto, abra o terminal e dê npm install. <br>
2 - Adicione uma pasta chamada upload no diretório. <br>
3 - Instale o FFMPEG para converter os vídeos para o formato WEBP para fazer figurinhas animadas. <br>
## Linux
1 - Baixe ou clone o projeto, abra o terminal e dê npm install. <br>
2 - Adicione uma pasta chamada upload no diretório. <br>
3 - Instale o FFMPEG para converter os vídeos para o formato WEBP para fazer figurinhas animadas. 
```bash
sudo apt install ffmpeg 
``` 
4 - Remova a seguinte linha do CLIENT(index.js)
```js
   ffmpegPath: './ffmpeg/bin/ffmpeg.exe',
```
5 - Para funcionar em ambientes sem GUI, coloque no CLIENT(index.js) o seguinte código: 
```js
puppeteer: {	
args: ['--no-sandbox'],
}
```
6 - Instale as seguintes Libs:
```bash <br>
sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```


## Configurações extras
No client(Index.js) Altere o local do chrome de acordo com seu dispositivo. <br>
WINDOWS: C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe <br>
MACOS: /Applications/Google Chrome.app/Contents/MacOS/Google Chrome <br>
LINUX: /usr/bin/google-chrome-stable <br>
