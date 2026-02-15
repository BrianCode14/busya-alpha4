1. **Ir a [render.com](https://render.com)**
   - Crear cuenta gratuita con GitHub

2. **Conectar tu repositorio**
   - Dashboard → New → Web Service
   - Conectar repo GitHub (o crear repo primero)

3. **Configurar deploy**
   - **Name**: `busya` (o tu nombre preferido)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (suficiente para demo)

4. **Deploy**
   - Hacer clic en "Create Web Service"
   - Esperar ~60 segundos
   - Obtener URL como: `https://busya-xxxxx.onrender.com`

5. **Listo!** 🎉
   - Compartir URL con usuarios
   - Está públicamente disponible

---

1. **Ir a [railway.app](https://railway.app)**
   - Crear cuenta con GitHub

2. **Crear nuevo proyecto**
   - Crear conexión con GitHub
   - Seleccionar repo BusYA

3. **Configuración**
   - Variables de entorno (ninguna requerida si dejas defaults)
   - Build: automático (detecta Node.js)
   - Start: `npm start`

4. **Deploy**
   - Automático al hacer push a GitHub
   - URL generada: `https://busya-prod.railway.app`

---

## Opción 3: Heroku (Legacy, ahora requiere tarjeta) 

No recomendado porque ahora requiere información de pago aunque sea plan free.

---

## Opción 4: DigitalOcean ($5/mes) 💧

### Pasos:

1. **Crear droplet**
   - Ubuntu 22.04
   - $5/mes (suficiente)

2. **SSH y configurar**
   ```bash
   # En tu droplet
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   git clone <tu-repo-url>
   cd busya
   npm install
   npm start
   ```

3. **Nginx reverse proxy**
   ```bash
   sudo apt install nginx
   # Configurar proxy a localhost:8000
   ```

4. **SSL con Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d tusitio.com
   ```

---

## Opción 5: Fly.io (Global, $15/mes+)

Para apps que necesitan baja latencia en múltiples regiones.

---

## Verificación Post-Deploy

Una vez desplegado en producción, verificar:

```bash
# 1. El servidor responde
curl https://tu-dominio.app

# 2. Socket.IO funciona
curl https://tu-dominio.app/socket.io/?transport=polling

# 3. Abrir en navegador
https://tu-dominio.app
- Haz clic en "Compartir Ubicación"
- En otra pestaña, verás marcador amarillo en tiempo real
```

---

## Variables de Entorno (Opcional)

Si quieres customizar:

```
PORT=8000              # Puerto (se configura automáticamente en cloud)
HOST=0.0.0.0          # Escuchar todas las interfaces
NODE_ENV=production   # Optimizar para prod
```

En Render/Railway, esto está pre-configurado.

---

## Troubleshooting

### "Error: Cannot find module 'express'"
```bash
npm install
```

### "Port 8000 already in use"
- Usar `PORT=3000 npm start`

### "Socket.IO not connecting"
- Verificar CORS en `server.js` (ya está `origin: "*"`)
- Reload página del navegador

### "Ubicaciones no se actualizan"
- Abrir DevTools (F12)
- Ver errores en Console
- Verificar que Socket.IO se conecta (debería haber log en servidor)

---

## Próximos Pasos Opcionales

### 1. Agregar Base de Datos
```javascript
// Cambiar línea en server.js de:
// const tracksStore = new Map()
// a:
// const tracksStore = new PostgreSQL()  // o MongoDB
```

Con Railway, agregar servicio PostgreSQL es 1 clic.

### 2. Agregar Autenticación
- Login con Google / GitHub
- Mostrar perfil de usuario

### 3. Historial de Ubicaciones
- Guardar en BD todas las ubicaciones anteriores
- Query: "¿Dónde estuvo usuario X hace 1 hora?"

### 4. Mapas de Calor
- ¿Dónde están concentrados los usuarios?
- Visualización avanzada

### 5. Notificaciones
- Push notifications cuando usuario cerca
- Email alerts

---

## URL de Demostración

Una vez desplegado, la URL será como:
```
https://busya-xxxxxx.onrender.com
https://busya-prod.railway.app
```

Compartir con cualquier persona del mundo - está públicamente disponible! 🌍

---

## Costo Estimado

- **Render (Free)**: $0/mes
- **Railway (Starter)**: $5/mes
- **DigitalOcean (Droplet)**: $5/mes
- **Fly.io (Free Plan)**: $0/mes (limitado)

**Recomendación**: Usar **Render Free** para exploración, luego **Railway** para producción seria.

---

## ¿Problemas?

Checks:
1. ¿npm install se ejecutó sin errores?
2. ¿npm start muestra mensajes de inicio?
3. ¿El puerto está abierto en firewalls?
4. ¿El navegador puede acceder a la URL?

Si todo falla:
```bash
npm start
# Ver en consola qué error aparece
```

---

**¡Listo para producción!** 🚀

Para desplegar en Render ahora:
1. Push a GitHub
2. Ir a render.com
3. Conectar repo BusYA
4. Create Web Service
5. Esperar 60 segundos
6. ¡Compartir URL pública!
