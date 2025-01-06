# Use a imagem base do Node.js
FROM node:22

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código para o container
COPY . .

# Executa o build da aplicação Next.js
RUN npm run build

# Expõe a porta 3000 para acesso à aplicação
EXPOSE 3000

# Comando para iniciar a aplicação em modo de produção
CMD ["npm", "start"]
