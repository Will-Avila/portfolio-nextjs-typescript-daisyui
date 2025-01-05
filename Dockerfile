# Dockerfile (Node.js)
FROM node:22

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de dependência e instalá-las
COPY package*.json ./
RUN npm install

# Copiar o código da aplicação
COPY . .

# Construir a aplicação, se necessário
RUN npm run build

# Expor a porta onde o Node.js roda (3000)
EXPOSE 3000

# Comando para iniciar o servidor Node.js
CMD ["npm", "start"]
