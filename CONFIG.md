# Configuración de BusYA

## Horarios Operativos

- **Inicio**: 6:00 AM
- **Cierre**: 11:00 PM (23:00)
- **Zona Horaria**: Argentina (UTC-3)

## Ubicación Predeterminada

- **Latitud**: -32.0
- **Longitud**: -60.5
- **Región**: Entre Ríos, Argentina

## Tipos de Incidencia

1. **broken** - 🔧 Colectivo Roto
2. **delay** - ⏱️ Con Demora
3. **full** - 👥 Lleno
4. **traffic** - 🚗 Tráfico Pesado
5. **accident** - ⚠️ Accidente
6. **other** - 📝 Otro

## Almacenamiento Local

- **Clave localStorage**: `busya_stops`
- **Formato**: JSON Array
- **Estructura por parada**:
  ```
  {
    id: timestamp,
    name: string,
    description: string,
    lat: number,
    lng: number,
    createdAt: ISO Date,
    routes: array,
    messages: array,
    incidents: array
  }
  ```

## Colores de la App

- **Primario**: #007bff (Azul)
- **Secundario**: #6c757d (Gris)
- **Éxito**: #28a745 (Verde)
- **Advertencia**: #ffc107 (Amarillo)
- **Peligro**: #dc3545 (Rojo)
- **Info**: #17a2b8 (Cian)

## Tamaños y Espaciados

- **Touch targets mínimo**: 44x44px
- **FAB (Floating Action Button)**: 56x56px
- **Padding estándar**: 1rem
- **Border radius**: 6px

## Fuentes

- **Principal**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Tamaño base mobile**: 0.9-1.1rem
- **Tamaño heading**: 1.1-1.5rem

## Dependencias Externas

- **Bootstrap**: 5.3.0
- **Leaflet**: 1.9.4
- **Font Awesome**: 6.4.0
- **OpenStreetMap**: Tiles gratuitos

## API Keys Necesarias

- ❌ Google Maps - NO necesaria (usamos OpenStreetMap)
- ✅ Geolocation API - Nativa del navegador
- ✅ localStorage - Nativa del navegador

## Puntos de Entrada

- **Inicio**: index.html
- **App Principal**: map-app.html
- **Servidor local**: npm run serve o node serve.js

---

Última actualización: 2024
