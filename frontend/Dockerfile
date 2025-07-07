FROM node:20-alpine

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar código fonte
COPY . .

# Expor porta padrão do Vite
EXPOSE 5173

# Comando para iniciar a aplicação em modo desenvolvimento
CMD ["npm", "run", "dev"]
