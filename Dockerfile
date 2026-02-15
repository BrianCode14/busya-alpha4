FROM node:20-alpine

WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./
COPY server.js ./
COPY map-app.html ./
COPY index.html ./
COPY css/ ./css/
COPY js/ ./js/
COPY assets/ ./assets/

# Instalar dependencias
RUN npm ci --only=production

# Exponer puerto
EXPOSE 8000

# Usuario no root (seguridad)
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs

# Comando de inicio
CMD ["npm", "start"]
