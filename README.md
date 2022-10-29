# Um bot para o whatsapp com várias funções
> Ele faz figurinhas|animadas, baixa vídeos do Tiktok ou Youtube, reconhece músicas que você mandar por áudio, tira fundos das fotos ou figurinhas. Com passar do tempo irei melhorando ele e colocando novas funções com o apoio de vocês.
## Instalação
1 - Baixe ou clone o projeto, abra o terminal e dê npm install. <br>
2 - Instale o FFMPEG para converter os vídeos para o formato WEBP para fazer figurinhas animadas. <br>
3 - LINUX(Para funcionar em sistemas linux sem nenhuma GUI(EX:VPS), Instale as seguintes Libs: <br>
```bash 
sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget

```
Abra o index.js e altere o seguinte código no client: <br>
```js
puppeteer: {	
args: ['--no-sandbox'],
}
```
4 - No client(Index.js) Altere o local do chrome de acordo com seu dispositivo. <br>
WINDOWS: C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe <br>
MACOS: /Applications/Google Chrome.app/Contents/MacOS/Google Chrome <br>
LINUX: /usr/bin/google-chrome-stable <br>
