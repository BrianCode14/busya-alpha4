# 💻 EJEMPLOS DE CÓDIGO - BusYA

## Referencia de Desarrollador

### 1. Inicializar Mapa con Leaflet

```javascript
// Crear mapa centrado en coordenadas
let map = L.map('mapContainer').setView([-32.0, -60.5], 12);

// Agregar capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 19
}).addTo(map);
```

### 2. Obtener Ubicación del Usuario

```javascript
navigator.geolocation.getCurrentPosition(
    function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log(`Ubicación: ${lat}, ${lng}`);
    },
    function(error) {
        console.error('Error:', error.message);
    }
);
```

### 3. Crear Marcador en el Mapa

```javascript
// Icono personalizado
const stopIcon = L.icon({
    iconUrl: 'data:image/svg+xml;...',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

// Agregar marcador
const marker = L.marker([lat, lng], { icon: stopIcon })
    .addTo(map)
    .bindPopup('Información de parada')
    .on('click', function() {
        // Acción al hacer click
    });
```

### 4. localStorage - Guardar Datos

```javascript
// Guardar array de paradas
const stops = [
    { id: 1, name: "Parada A", lat: -32.0, lng: -60.5 },
    { id: 2, name: "Parada B", lat: -32.1, lng: -60.6 }
];

localStorage.setItem('busya_stops', JSON.stringify(stops));

// Cargar datos
const loadedStops = JSON.parse(localStorage.getItem('busya_stops'));
```

### 5. Validar Horarios Operativos

```javascript
function isOpen() {
    const now = new Date();
    const hour = now.getHours();
    const startHour = 6;   // 6 AM
    const endHour = 23;    // 11 PM
    
    return hour >= startHour && hour < endHour;
}

// Uso
if (isOpen()) {
    console.log('Colectivos en servicio');
} else {
    console.log('Fuera de horario');
}
```

### 6. Panel Deslizable (Bottom Sheet)

```javascript
// HTML
<div id="myPanel" class="sliding-panel">
    <!-- Contenido -->
</div>

// CSS
.sliding-panel {
    transform: translateY(100%);
    transition: transform 0.3s ease;
}
.sliding-panel.active {
    transform: translateY(0);
}

// JavaScript
function openPanel() {
    document.getElementById('myPanel').classList.add('active');
}

function closePanel() {
    document.getElementById('myPanel').classList.remove('active');
}
```

### 7. Formulario de Parada

```html
<!-- HTML -->
<form id="stopForm">
    <input type="text" id="stopName" placeholder="Nombre" required>
    <textarea id="stopDesc" placeholder="Descripción"></textarea>
    <button type="submit">Crear</button>
</form>

<!-- JavaScript -->
document.getElementById('stopForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const stop = {
        id: Date.now(),
        name: document.getElementById('stopName').value,
        description: document.getElementById('stopDesc').value,
        lat: userLocation.lat,
        lng: userLocation.lng,
        createdAt: new Date(),
        routes: [],
        messages: [],
        incidents: []
    };
    
    stops.push(stop);
    saveStops();
    addStopMarker(stop);
    
    this.reset();
});
```

### 8. Sistema de Chat

```javascript
// Estructura de mensaje
const message = {
    text: "¿Dónde está el colectivo?",
    timestamp: new Date().toISOString(),
    own: true,  // true si es mensaje propio
    user: "Tu nombre"
};

// Agregar a parada
currentStop.messages.push(message);
saveStops();

// Mostrar mensaje en UI
function displayMessage(msg) {
    const container = document.getElementById('chatMessages');
    const msgEl = document.createElement('div');
    msgEl.className = `chat-message ${msg.own ? 'own' : 'other'}`;
    
    const time = new Date(msg.timestamp).toLocaleTimeString();
    msgEl.innerHTML = `
        ${msg.text}
        <div class="chat-time">${time}</div>
    `;
    
    container.appendChild(msgEl);
    container.scrollTop = container.scrollHeight;
}
```

### 9. Notificaciones Toast

```javascript
function showNotification(message, type = 'success') {
    const toast = document.getElementById('notificationToast');
    const messageEl = document.getElementById('toastMessage');
    
    messageEl.textContent = message;
    toast.classList.add('show');
    
    // Colores por tipo
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107'
    };
    
    toast.style.background = colors[type] || colors.success;
    
    // Auto ocultar después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Uso
showNotification('¡Parada creada!', 'success');
showNotification('Error al guardar', 'error');
```

### 10. Reporte de Incidencias

```javascript
// Estructura de reporte
const report = {
    id: Date.now(),
    route: "B-101",
    type: "delay",  // broken, delay, full, traffic, accident, other
    description: "Viene con 15 minutos de demora",
    timestamp: new Date().toISOString(),
    location: {
        lat: userLocation.lat,
        lng: userLocation.lng
    }
};

// Guardar reporte
function saveReport(report) {
    let reports = JSON.parse(localStorage.getItem('busya_reports') || '[]');
    reports.push(report);
    localStorage.setItem('busya_reports', JSON.stringify(reports));
}

// Uso
saveReport(report);
showNotification('Reporte enviado', 'success');
```

### 11. Prevenir Zoom Móvil

```javascript
// Método 1: Meta viewport (en HTML head)
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

// Método 2: JavaScript
document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
}, false);
```

### 12. Validación de Campos

```javascript
function validateStopForm() {
    const name = document.getElementById('stopName').value.trim();
    const desc = document.getElementById('stopDesc').value.trim();
    
    if (!name) {
        showNotification('El nombre es requerido', 'error');
        return false;
    }
    
    if (name.length < 3) {
        showNotification('El nombre debe tener al menos 3 caracteres', 'error');
        return false;
    }
    
    return true;
}

// En el submit del formulario
if (validateStopForm()) {
    // Crear parada
}
```

### 13. Actualizar Ubicación en Tiempo Real

```javascript
// Actualizar ubicación cada 5 segundos
setInterval(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        
        // Actualizar marcador del usuario
        if (userMarker) {
            userMarker.setLatLng([userLocation.lat, userLocation.lng]);
        }
    });
}, 5000);
```

### 14. Clustering de Paradas (Futuro)

```javascript
// Requiere Leaflet.markercluster
L.markerClusterGroup().addTo(map);

// Para cada parada
stops.forEach(stop => {
    const marker = L.marker([stop.lat, stop.lng]);
    clusterGroup.addLayer(marker);
});
```

### 15. Styling Dinámico de Botones

```javascript
// Cambiar color de botón según horario
function updateButtonStyle() {
    const addBtn = document.getElementById('addStopBtn');
    const now = new Date().getHours();
    
    if (now >= 6 && now < 23) {
        addBtn.style.opacity = '1';
        addBtn.style.background = '#007bff';
    } else {
        addBtn.style.opacity = '0.5';
        addBtn.style.background = '#999';
    }
}

setInterval(updateButtonStyle, 60000); // Cada minuto
```

## Patrones Comunes

### Patrón: Abrir/Cerrar Panel

```javascript
// Abrir
function openPanel(panelId) {
    document.getElementById(panelId).classList.add('active');
}

// Cerrar
function closePanel(panelId) {
    document.getElementById(panelId).classList.remove('active');
}

// Toggle
function togglePanel(panelId) {
    document.getElementById(panelId).classList.toggle('active');
}
```

### Patrón: Guardar en localStorage

```javascript
// Guardar
function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Cargar
function load(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

// Uso
save('busya_stops', stops);
const loadedStops = load('busya_stops', []);
```

### Patrón: Formatear Fecha/Hora

```javascript
function formatTime(date) {
    return new Date(date).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Uso
console.log(formatTime(new Date())); // "14:30"
console.log(formatDate(new Date())); // "15 de enero de 2024"
```

## Debugging

### Ver localStorage en Console

```javascript
// Ver todos los datos
console.log(localStorage);

// Ver paradas guardadas
console.log(JSON.parse(localStorage.getItem('busya_stops')));

// Limpiar todo (cuidado!)
localStorage.clear();

// Ver tamaño usado
const size = JSON.stringify(localStorage).length;
console.log(`Tamaño usado: ${size} bytes`);
```

### Ver ubicación actual

```javascript
// En console
navigator.geolocation.getCurrentPosition(pos => {
    console.log(`Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`);
});
```

### Monitorear eventos del mapa

```javascript
map.on('click', function(e) {
    console.log(`Click en: ${e.latlng.lat}, ${e.latlng.lng}`);
});

map.on('zoom', function() {
    console.log(`Zoom actual: ${map.getZoom()}`);
});
```

---

**Estos ejemplos cubren los casos de uso más comunes en BusYA. Adapta según necesites.**
