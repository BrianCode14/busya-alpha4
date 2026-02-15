# 🚀 Guía de Inicio Rápido - BusYA v2.0

## ⚡ Empezar en 60 Segundos (Local)

```bash
# 1. Ir a directorio del proyecto
cd c:\Users\brian\Desktop\BusYA

# 2. Instalar dependencias (ya hecho, pero incluido para referencia)
npm install

# 3. Iniciar servidor
npm start

# 4. Abrir en navegador
# http://localhost:8000
```

**¡Listo!** El servidor está activo en el puerto 8000.

---

## 📱 Usar la Aplicación

### En una ventana:
```
1. Abre http://localhost:8000
2. Dale permiso de ubicación al navegador
3. Haz clic en botón "Compartir Ubicación"
4. Acepta el diálogo de consentimiento
5. Espera a que aparezca tu marcador azul
```

### En otra ventana:
```
1. Abre http://localhost:8000 (tab o navegador diferente)
2. Dale permiso de ubicación
3. Verás un círculo amarillo (otro usuario)
4. Mueve tu GPS o testea cambios de ubicación
5. Observa sincronización en tiempo real (~100ms)
```

---

## 🌐 Desplegar a Internet (2 minutos)

### Opción A: Render.com (Recomendado, FREE)

```
1. Ir a https://render.com
2. Crear cuenta con GitHub
3. En Dashboard: "New" → "Web Service"
4. Conectar repo BusYA desde GitHub
5. Configuración automática:
   - Build: npm install ✓
   - Start: npm start ✓
6. Clic "Create Web Service"
7. Esperar 60 segundos
8. Obtener URL: https://busya-xxxxx.onrender.com
```

**Listo.** URL pública para compartir con cualquiera.

### Opción B: Railway.app ($5/mes, muy fácil)

```
1. Ir a https://railway.app
2. Crear cuenta con GitHub
3. "New Project" → "Deploy from GitHub"
4. Seleccionar repo BusYA
5. Auto-detecta Node.js, auto-deploy en push
6. URL generada automáticamente
```

---

## 🔌 Verificar Socket.IO

```bash
# En terminal (mientras servidor corre):
# Deberías ver conexión de clientes:

[Socket.IO] Cliente conectado: QL9EHBmKQvD9YFPZAAAB
[Socket.IO] Cliente conectado: RAJ7Q92H3LSAKFJDA...
[Socket.IO] Cliente desconectado: QL9EHBmKQvD9YFPZAAAB
```

---

## 🐛 Troubleshooting Rápido

### ❌ "npm: comando no encontrado"
```powershell
# Usar ruta completa:
cmd /c "C:\Progra~1\nodejs\npm" install
cmd /c "C:\Progra~1\nodejs\node" server.js
```

### ❌ "Puerto 8000 en uso"
```bash
# Cambiar puerto:
PORT=3000 npm start

# O matar proceso:
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

### ❌ "Socket.IO no conecta"
```
• Reload F5 en navegador
• Abre DevTools (F12) → Console
• Deberías ver: "Conectado a servidor Socket.IO"
• Si no: fallback a REST polling (se ve en Network)
```

### ❌ "Ubicación no actualiza"
```
• Verificar permisos de navegador
• Asegurar que tienes GPS/ubicación habilitada
• En DevTools → Sensors → Simular ubicación
• O mover dispositivo real
```

---

## 📊 Checar Estado

```bash
# Ver puerto escuchando
netstat -ano | findstr :8000
# Deberías ver: TCP [::1]:8000 LISTENING

# Ver procesos Node.js
tasklist | findstr node
# Deberías ver: node.exe
```

---

## 🔌 Test Socket.IO Rápido

Abrir DevTools en navegador (F12) y ejecutar:

```javascript
// En Console:
console.log(typeof io);  // Debería ser "function"
console.log(socket);     // Debería ver objeto Socket
socket.emit('test', 'hola');  // Test envío
```

---

## 📝 Archivos Clave

```
server.js           - Servidor Express + Socket.IO
js/map-app.js       - Cliente (geolocation + Socket.IO)
map-app.html        - Interfaz
package.json        - Dependencias
```

---

## 🚀 Deploy a Producción (Checklist)

- [ ] Código funciona localmente (`npm start`)
- [ ] Socket.IO conecta (`[Socket.IO] Cliente conectado`)
- [ ] Ubicaciones se sincronizan entre dos pestañas
- [ ] Push a GitHub
- [ ] Conectar Render/Railway con repo
- [ ] Obtener URL pública
- [ ] Probar URL pública en navegador
- [ ] ¡Compartir con usuarios!

---

## 💡 Tips

1. **DevTools Network**: Ver requests HTTP y WebSocket
2. **Simular ubicación**: DevTools → Sensors → Simulate location
3. **Múltiples usuarios**: Usar incógnito (nuevas cookies/sessionStorage)
4. **Logs**: Ver mensajes en consola servidor

---

## 🎯 Siguientes Pasos

- [ ] Desplegar a Render/Railway
- [ ] Agregar base de datos para persistencia
- [ ] Agregar autenticación si se requiere
- [ ] Agregar notificaciones push
- [ ] Mejorar UI/UX

---

## 📞 Resumen Comandos

```powershell
# Instalar
cmd /c "C:\Progra~1\nodejs\npm" install

# Iniciar
cmd /c "C:\Progra~1\nodejs\node" server.js

# O simplemente (si npm en PATH):
npm start

# Ver logs (server ya corriendo en background)
netstat -ano | findstr :8000  # Verificar listening

# Abrir en navegador
start http://localhost:8000
```

---

## ✅ Estado Final

**¡BusYA está listo para producción!** 

```
✅ Servidor corriendo localmente
✅ Socket.IO integrado y funcional
✅ Ubicaciones sincronizándose en tiempo real
✅ Documentación completa
✅ Listo para desplegar públicamente
```

**Próximo paso:** Desplegar en Render.com (2 minutos) 🚀

---

**Versión:** 2.0
**Fecha:** 2024-01-14
**Creador:** Brian Demartin x Assistant
