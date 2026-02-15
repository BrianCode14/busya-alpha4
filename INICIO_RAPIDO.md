# 🚀 GUÍA RÁPIDA DE INICIO - BusYA

## ¡Bienvenido! 🚌

Has completado la setup de la aplicación **BusYA**, una app 100% móvil para compartir información de paradas en tiempo real.

## ✅ Lo que ya está listo:

- ✅ Mapa interactivo con OpenStreetMap (Leaflet)
- ✅ Sistema de creación de paradas
- ✅ Chat en paradas
- ✅ Reportes de incidencias
- ✅ Validación de horarios (6 AM - 11 PM)
- ✅ Almacenamiento local (localStorage)
- ✅ Diseño 100% mobile-first

## 🎯 Pasos para comenzar:

### 1️⃣ **Abre la aplicación**

**Opción A - Con servidor local (recomendado):**
```bash
# Si tienes Node.js instalado:
node serve.js

# Luego abre en el navegador:
http://localhost:8000/map-app.html
```

**Opción B - Sin servidor (archivo local):**
- Abre directamente `map-app.html` en tu navegador
- O ve a `index.html` y haz clic en "Abrir App Principal"

### 2️⃣ **Permite la geolocalización**
- La app te pedirá permiso para acceder a tu ubicación
- ¡Acepta para ver tu posición en el mapa!

### 3️⃣ **Prueba las funciones principales**

#### Crear una Parada 📍
1. Haz clic en el botón **azul** con ícono de pin
2. Completa el nombre (ej: "Parada Centro")
3. Agrega una descripción (opcional)
4. ¡Listo! La parada aparecerá en el mapa

#### Ver Detalles 👁️
1. Haz clic en cualquier marcador de parada
2. Se abrirá un panel con información
3. Verás las rutas que pasan por ahí

#### Chatear 💬
1. Abre una parada
2. Escribe un mensaje
3. Haz clic en el botón de envío
4. ¡Tu mensaje aparecerá con timestamp!

#### Reportar Incidencia ⚠️
1. Haz clic en el botón **naranja** con ícono de exclamación
2. Selecciona el tipo (roto, demora, lleno, etc.)
3. Describe el problema
4. ¡Listo! Se guardará el reporte

## 📱 Pruebas Recomendadas

### En Móvil 📲
- Abre desde tu teléfono
- Prueba con geolocalización real
- Verifica que los botones sean fáciles de pulsar
- Prueba el chat en paradas

### En Desktop 💻
- Abre las herramientas de desarrollador (F12)
- Simula vista móvil (Ctrl+Shift+M)
- Prueba con geolocalización simulada

### Datos Persistentes 💾
- Crea varias paradas
- Recarga la página
- ¡Los datos seguirán ahí! Se guardan en localStorage

## 🔧 Archivos Importantes

```
map-app.html           ← UI principal (formularios, paneles)
css/map-app.css       ← Estilos de la app
js/map-app.js         ← Lógica y funcionalidad
index.html            ← Página de bienvenida
```

## ⚙️ Personalizaciones Posibles

### Cambiar Ubicación del Mapa
En `js/map-app.js`, línea ~60:
```javascript
const centerCoords = [-32.0, -60.5]; // Cambia a tu ubicación
```

### Cambiar Horarios Operativos
En `js/map-app.js`, función `checkBusySchedule()`:
```javascript
const startHour = 6;   // Cambiar a 8
const endHour = 23;    // Cambiar a 22
```

### Agregar Tipos de Incidencia
En `map-app.html`, línea ~119:
```html
<option value="accident">⚠️ Accidente</option>
<option value="mynewtype">🆕 Mi nuevo reporte</option>
```

## 🌐 URLs Útiles

- **Inicio**: http://localhost:8000/
- **App Mapa**: http://localhost:8000/map-app.html
- **Acerca de**: http://localhost:8000/pages/about.html
- **Contacto**: http://localhost:8000/pages/contact.html

## 📚 Documentación

Ver `README.md` para documentación completa:
- Características detalladas
- Estructura de datos
- Solución de problemas
- Actualizaciones futuras

## ⚡ Solución Rápida de Problemas

### "El mapa no carga"
→ Verifica tu conexión a internet (necesita OpenStreetMap)

### "No me obtiene la ubicación"
→ Verifica que le diste permiso al navegador
→ En HTTPS es obligatorio, en localhost no

### "Cambié la app pero no se ve"
→ Presiona Ctrl+Shift+R para limpiar cache

### "Desaparecieron mis paradas"
→ Revisa si estás en modo incógnito (localStorage no funciona ahí)

## 🎓 Próximos Pasos (Futuro)

Para una versión completa en producción, considera:

1. **Backend**: Node.js + Express / Python + Flask
2. **Base de Datos**: MongoDB / Firebase / PostgreSQL
3. **Chat Real-Time**: Socket.io / Firebase
4. **Autenticación**: Google Maps API / Auth0
5. **Notificaciones**: Firebase Cloud Messaging
6. **Deploy**: Vercel / Netlify / Heroku

## 💡 Tips Útiles

- 📍 El marcador azul eres **tú**
- 🟠 Los marcadores naranja son **paradas** creadas
- 🟢 El status verde significa **en línea** (6AM-11PM)
- 🔴 El status rojo significa **fuera de línea**
- 💬 Los mensajes se guardan por parada
- 📝 Los reportes se guardan en localStorage

## 🎉 ¡Listo!

Ya tienes una app funcional. Ahora puedes:

1. ✅ Crear paradas
2. ✅ Chatear con otros usuarios (simulado)
3. ✅ Reportar incidencias
4. ✅ Ver horarios de operación
5. ✅ Compartir ubicaciones

## 📞 Necesitas Ayuda?

- Lee el `README.md` para más detalles
- Revisa `js/map-app.js` para entender la lógica
- Modifica `css/map-app.css` para cambiar estilos
- Abre la consola (F12) para ver mensajes de error

---

**¡Espero que disfrutes usando BusYA! 🚌✨**

Cualquier pregunta, contacta a: contacto@busya.app
