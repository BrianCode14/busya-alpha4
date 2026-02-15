# 🏗️ ESTRUCTURA DEL PROYECTO - BusYA

## Árbol de Carpetas

```
c:\Users\brian\Desktop\BusYA/
│
├── 📄 index.html                    # 🏠 PÁGINA DE INICIO (Landing Page)
├── 📄 map-app.html                  # 🗺️ APP PRINCIPAL (Mapa Interactivo)
│
├── 📁 pages/                        # 📑 PÁGINAS SECUNDARIAS
│   ├── about.html                   # Acerca de BusYA
│   ├── contact.html                 # Contacto y soporte
│   └── driver.html                  # Para conductores
│
├── 📁 css/                          # 🎨 ESTILOS CSS
│   ├── style.css                    # Estilos generales (todas las páginas)
│   └── map-app.css                  # Estilos específicos del mapa
│
├── 📁 js/                           # ⚙️ JAVASCRIPT
│   ├── script.js                    # Lógica general
│   └── map-app.js                   # Lógica principal de la app
│
├── 📁 assets/                       # 🖼️ RECURSOS
│   ├── images/                      # Imágenes PNG, JPG, WebP
│   └── icons/                       # Iconos SVG personalizados
│
├── 🔧 serve.js                      # Servidor HTTP (Node.js)
│
├── 📘 README.md                     # Documentación principal
├── 📗 INICIO_RAPIDO.md              # Guía rápida de inicio
├── 📙 CONFIG.md                     # Configuraciones globales
├── 📕 CHANGELOG.md                  # Historial de cambios
├── 📓 VERIFICACION.md               # Checklist de funcionalidad
├── 📔 EJEMPLOS_CODIGO.md            # Ejemplos de código
└── 📖 ESTRUCTURA.md                 # Este archivo
```

## Mapeo de Archivos Principales

### 🏠 **INDEX.html** (Página de Inicio)
```
index.html
├── Header/Navbar
│   ├── Logo: BusYA
│   ├── Navegación: Inicio, Acerca de, Contacto, Para Conductores
│   └── Responsive: Hamburger menu en móvil
├── Hero Section
│   ├── Título: "Encuentra tu autobús"
│   ├── CTA Botón: "Abrir App Principal" ➜ map-app.html ⭐
│   └── Descripción
├── Features Section
│   ├── 4 Características: Tiempo Real, Horarios, Rutas, Alertas
│   └── Grid 2 columnas (móvil)
├── Search Section
│   ├── Formulario: Origen, Destino
│   └── Botón: Buscar
├── Results Section
│   └── Contenedor para resultados
├── Map Section
│   └── Mapa de autobuses cercanos
└── Footer
    ├── Links
    ├── Contacto
    └── Copyright
```

### 🗺️ **MAP-APP.html** (App Principal - ⭐ IMPORTANTE)
```
map-app.html
├── Head
│   ├── Meta tags: viewport, charset, etc.
│   ├── CDN: Bootstrap, Font Awesome, Leaflet
│   └── Estilos: map-app.css
├── Body
│   ├── 🗺️ Mapa Container (Leaflet)
│   │   ├── Mapa de OpenStreetMap
│   │   ├── Marcador azul: Tu ubicación
│   │   └── Marcadores naranjas: Paradas creadas
│   │
│   ├── 🔝 Header Flotante
│   │   ├── Logo: BusYA
│   │   └── Status Badge: "🟢 En Línea" / "🔴 Fuera de Línea"
│   │
│   ├── 🔘 Botones Flotantes (FAB)
│   │   ├── 🔵 Azul: Agregar Parada
│   │   ├── 🟠 Naranja: Reportar Incidencia
│   │   └── 🔷 Cian: Ir a Inicio
│   │
│   ├── 📍 Panel Deslizable #1: Agregar Parada
│   │   ├── Información de ubicación actual
│   │   ├── Campo: Nombre de parada (requerido)
│   │   ├── Campo: Descripción (opcional)
│   │   └── Botón: Crear Parada
│   │
│   ├── ⚠️ Panel Deslizable #2: Reportar Incidencia
│   │   ├── Campo: Número de ruta
│   │   ├── Select: Tipo de incidencia (6 opciones)
│   │   ├── Campo: Descripción
│   │   └── Botón: Enviar Reporte
│   │
│   ├── 📌 Panel Deslizable #3: Detalles de Parada
│   │   ├── Información
│   │   │   ├── Nombre de parada
│   │   │   ├── Coordenadas (lat, lng)
│   │   │   └── Descripción
│   │   ├── Rutas en Parada
│   │   │   └── Lista de rutas con status (online/offline)
│   │   └── Chat de Parada
│   │       ├── Contenedor de mensajes
│   │       ├── Área de entrada
│   │       └── Botón enviar
│   │
│   └── 🔔 Toast de Notificaciones
│       ├── Icono
│       └── Mensaje
│
└── Scripts
    ├── Bootstrap JS
    └── map-app.js (lógica principal)
```

## Flujos de Datos

### 📍 Crear Parada (Flujo Completo)

```
Usuario hace click en botón azul "Agregar Parada"
    ↓
openAddStopPanel() abre panel deslizable
    ↓
Usuario llena formulario:
    - Nombre: "Parada Centro"
    - Descripción: "Frente a banco"
    ↓
Usuario hace click: "Crear Parada"
    ↓
createStop(event) se ejecuta:
    - e.preventDefault()
    - Lee valores del formulario
    - Crea objeto stop con datos
    - stops.push(stop)
    - saveStops() → localStorage
    - addStopMarker(stop) → Mapa
    - Cierra panel
    - Muestra notificación ✅
    ↓
Nuevo marcador aparece en el mapa 🟠
Parada guardada en localStorage ✅
```

### 💬 Enviar Mensaje en Chat (Flujo)

```
Usuario hace click en parada
    ↓
openStopDetail(stop) abre panel
    ↓
Panel muestra:
    - Información de parada
    - Rutas disponibles
    - Chat con mensajes anteriores
    ↓
Usuario escribe mensaje
    ↓
Usuario hace click: Botón envío
    ↓
sendChatMessage(event) se ejecuta:
    - Lee texto del input
    - Crea objeto mensaje
    - currentStop.messages.push(message)
    - saveStops() → localStorage
    - displayChatMessages() → UI
    - Limpia input
    - Auto-scroll al final ↓
    ↓
Mensaje aparece en chat ✅
Se guarda en localStorage ✅
Scroll automático 🔄
```

### ⏰ Validación de Horarios (Cada Minuto)

```
App carga
    ↓
checkBusySchedule() se ejecuta (línea 32)
    ↓
Obtiene hora actual: new Date().getHours()
    ↓
¿Está entre 6 AM y 11 PM?
    │
    ├─ SÍ → Status = "🟢 En Línea"
    │        Badge = Verde #28a745
    │        Botones = Opacidad 100%
    │
    └─ NO → Status = "🔴 Fuera de Línea"
             Badge = Rojo #dc3545
             Botones = Opacidad 50%
    ↓
Se repite cada 60 segundos
setInterval(checkBusySchedule, 60000)
```

## Relaciones Entre Archivos

```
index.html
    ├─ Enlaza a: css/style.css
    ├─ Enlaza a: js/script.js
    ├─ CDN: Bootstrap 5.3.0
    ├─ CDN: Font Awesome 6.4.0
    ├─ CDN: Leaflet 1.9.4
    └─ Botón ➜ map-app.html ⭐

map-app.html
    ├─ Enlaza a: css/map-app.css ⭐
    ├─ Enlaza a: js/map-app.js ⭐
    ├─ CDN: Bootstrap 5.3.0
    ├─ CDN: Font Awesome 6.4.0
    └─ CDN: Leaflet 1.9.4

css/map-app.css
    └─ Estiliza: map-app.html
       ├─ Container del mapa
       ├─ FAB buttons
       ├─ Paneles deslizables
       ├─ Chat UI
       └─ Headers flotantes

js/map-app.js ⭐ ARCHIVO PRINCIPAL
    ├─ Inicializa: Leaflet map
    ├─ Obtiene: Geolocalización
    ├─ Maneja: CRUD paradas
    ├─ Valida: Horarios (6AM-11PM)
    ├─ Gestiona: Chat por parada
    ├─ Procesa: Reportes
    ├─ Persiste: localStorage
    └─ Abre/cierra: Paneles deslizables

localStorage
    ├─ Clave: "busya_stops"
    └─ Contenido: Array JSON de paradas
       ├─ id, name, description
       ├─ lat, lng (coordenadas)
       ├─ createdAt (timestamp)
       ├─ routes (array)
       ├─ messages (array con chat)
       └─ incidents (array con reportes)
```

## Funciones Principales en map-app.js

```
🎯 INICIALIZACIÓN
  ├─ DOMContentLoaded event
  ├─ preventMobileZoom()
  ├─ initializeMap()
  ├─ checkBusySchedule()
  ├─ setupEventListeners()
  ├─ getUserLocation()
  └─ loadStops()

🗺️ MAPA
  ├─ initializeMap() - Crea Leaflet map
  ├─ addUserLocation() - Marcador azul
  ├─ getUserLocation() - Geolocalización
  ├─ addStopMarker() - Marcador parada

📍 PARADAS
  ├─ openAddStopPanel() - Abre formulario
  ├─ closeAddStopPanel() - Cierra formulario
  ├─ createStop(event) - Crea parada
  ├─ openStopDetail(stop) - Abre detalles
  └─ closeStopDetailPanel() - Cierra detalles

💬 CHAT
  ├─ displayChatMessages(stop) - Muestra chat
  ├─ sendChatMessage(event) - Envía mensaje
  └─ (Chat persistente en stop.messages)

⚠️ REPORTES
  ├─ openReportPanel() - Abre formulario
  ├─ closeReportPanel() - Cierra formulario
  └─ submitReport(event) - Envía reporte

⏰ HORARIOS
  └─ checkBusySchedule() - Valida 6AM-11PM

💾 ALMACENAMIENTO
  ├─ saveStops() - Guarda en localStorage
  └─ loadStops() - Carga desde localStorage

🔔 NOTIFICACIONES
  └─ showNotification() - Muestra toast

📑 RUTAS
  └─ displayRoutes() - Muestra rutas en parada

🌐 UTILIDADES
  └─ preventMobileZoom() - Deshabilita zoom
```

## Eventos Principales

```
Usuario                    Evento              Función
────────────────────────────────────────────────────────────
Carga página              DOMContentLoaded     inicializar app
Hace click botón azul     click #addStopBtn    openAddStopPanel
Completa formulario       submit #stopForm     createStop
Hace click parada         marker click         openStopDetail
Envía mensaje             click envío          sendChatMessage
Hace click botón naranja   click #reportBtn     openReportPanel
Envía reporte             submit #reportForm   submitReport
Hace click inicio          onclick              location.href
Cada minuto               setInterval          checkBusySchedule
Reload página             reload               loadStops
```

## Estructura de Datos - localStorage

```javascript
// Clave: "busya_stops"
// Tipo: JSON Array
// Ubicación: window.localStorage['busya_stops']

[
  {
    // Identificador único
    id: 1705330200000,  // Timestamp en ms
    
    // Información básica
    name: "Parada Centro",
    description: "Frente al banco principal",
    
    // Ubicación geográfica
    lat: -32.012345,
    lng: -60.456789,
    
    // Timestamps
    createdAt: "2024-01-15T10:30:00.000Z",
    
    // Rutas que pasan
    routes: [
      { number: "B-101", status: true },
      { number: "B-205", status: false }
    ],
    
    // Mensajes del chat
    messages: [
      {
        text: "¿Dónde está el 101?",
        timestamp: "2024-01-15T10:35:00.000Z",
        own: true,
        user: "Tú"
      },
      {
        text: "Viene en 5 minutos",
        timestamp: "2024-01-15T10:36:00.000Z",
        own: false,
        user: "Usuario 2"
      }
    ],
    
    // Reportes de incidencias
    incidents: [
      {
        id: 1705330300000,
        route: "B-101",
        type: "delay",
        description: "Viene con demora",
        timestamp: "2024-01-15T10:40:00.000Z",
        location: {
          lat: -32.012345,
          lng: -60.456789
        }
      }
    ]
  }
]
```

## Responsabilidades de Cada Archivo

| Archivo | Responsabilidad | Estado |
|---------|-----------------|--------|
| index.html | Landing page, navegación | ✅ Completo |
| map-app.html | UI del mapa, paneles, formularios | ✅ Completo |
| css/style.css | Estilos generales | ✅ Completo |
| css/map-app.css | Estilos mapa, FAB, paneles | ✅ Completo |
| js/script.js | Lógica general | ✅ Completo |
| js/map-app.js | Lógica principal app | ✅ Completo |
| localStorage | Persistencia de datos | ✅ Implementado |
| serve.js | Servidor HTTP | ✅ Listo |

---

**Todos los archivos están interconectados y funcionan en armonía. 🎵✨**
