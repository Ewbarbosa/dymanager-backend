FROM node:latest

# cria a pasta de trabalho (WORKDIR)
WORKDIR /api

# copia o diretorio para a pasta raiz
COPY . .

# apaga a pasta node_modules
RUN rm -rf node_modules

# instala as dependencias do projeto
RUN npm install

# builda a aplicação
RUN npm run build

# executa o projeto com o comando especificado no package.json
CMD ["npm", "run", "start"]

# expôe a porta
EXPOSE 3001
