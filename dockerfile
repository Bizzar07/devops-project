# Folosim o imagine oficială de Node.js
FROM node:18-slim

# Setăm folderul de lucru în container
WORKDIR /usr/src/app

# Copiem fișierele cu dependințe
COPY package*.json ./

# Instalăm bibliotecile necesare
RUN npm install

# Copiem restul codului
COPY . .

# Expunem portul 3000
EXPOSE 3000

# Pornim aplicația
CMD ["node", "app.js"]