# 🧪 GUÍA DE PRUEBA - Geolocalización Mejorada

## ✅ Verificación Rápida (2 minutos)

### En Teléfono Real:

1. **Abre la app**
   ```
   Abre map-app.html en tu navegador móvil
   ```

2. **Permite ubicación**
   ```
   Cuando pregunte: "¿Permitir acceso a ubicación?" → TAP EN PERMITIR
   ```

3. **Espera 2-3 segundos**
   ```
   El mapa cargará y verás un marcador azul con pulso
   ```

4. **Camina o maneja**
   ```
   Muévete unos metros
   Observa: El marcador azul te sigue automáticamente
   ```

5. **Verifica el botón 📍**
   ```
   Zoom out con los dedos
   Haz clic en el botón 📍 (esquina inferior derecha)
   El mapa debe centrarse en ti automáticamente
   ```

---

## 🔍 Puntos de Verificación Técnica

### 1. Consola del Navegador (F12)
```javascript
// Abre la consola y deberías ver:
"Ubicación actualizada: Object"
  lat: -32.012345
  lng: -60.456789
  accuracy: 25  // en metros
```

### 2. Verificar watchPosition Activo
```javascript
// En la consola:
console.log(watchId);
// Debe mostrar un número como: 1, 2, 3, etc.
// Si es null = no está activo
```

### 3. Verificar Precisión GPS
```javascript
// En la consola:
console.log(userLocation.accuracy);
// < 10 m   = Excelente (GPS activo)
// 10-50 m  = Bueno (WiFi + GPS)
// > 50 m   = Normal (WiFi solo)
```

---

## 📊 Pruebas Específicas

### Prueba 1: Actualización Continua
```
⏱️ Tiempo: 2 minutos

Pasos:
1. Abre app
2. Espera a que cargue
3. Camina en línea recta 50 metros
4. Observa: ¿El marcador azul te sigue?

✅ Éxito: El marcador se mueve contigo
❌ Fallo: El marcador permanece fijo
```

### Prueba 2: Botón Centrar
```
⏱️ Tiempo: 1 minuto

Pasos:
1. Mueve el mapa alejándolo
2. Haz zoom out
3. Haz clic en botón 📍 (abajo a la derecha)
4. Observa: ¿El mapa se centra en tu posición?

✅ Éxito: Mapa centra automáticamente
❌ Fallo: El mapa no se mueve
```

### Prueba 3: Precisión
```
⏱️ Tiempo: 1 minuto

Pasos:
1. Abre DevTools (F12) en el teléfono
2. Abre la consola
3. Escribe: console.log(userLocation)
4. Observa: accuracy (precisión en metros)

✅ Éxito: accuracy < 30 metros
⚠️ Normal: accuracy 30-50 metros
❌ Malo: accuracy > 100 metros
```

### Prueba 4: Manejo de Errores
```
⏱️ Tiempo: 1 minuto

Pasos (para móvil):
1. Abre Configuración → Privacidad → Ubicación
2. Desactiva acceso a ubicación
3. Recarga la app
4. Observa: ¿Muestra mensaje de error?

✅ Éxito: Muestra "Por favor, permite acceso"
❌ Fallo: No muestra nada o error genérico
```

---

## 🖥️ Pruebas en Desktop (Simulado)

### Con DevTools:

1. **Abre DevTools** (F12)
2. **Busca: "Sensors"** (o "More tools" → "Sensors")
3. **Habilita ubicación simulada**
4. **Cambia las coordenadas**
5. **Observa cómo el marcador se mueve**

### Pasos Específicos:

```
Chrome/Edge:
1. F12 → ⋮ (3 puntos) → More tools → Sensors
2. Location: Custom location
3. Ingresa: lat -32.0123, lng -60.4567
4. Presiona Enter
5. Recarga la página (F5)
6. El marcador debe aparecer en esa ubicación
```

```
Firefox:
1. F12 → ⋮ (3 puntos) → Settings
2. Busca: "Disable HTTP Caching"
3. F12 → Console
4. Simula geolocalización con: about:config
```

---

## 📈 Indicadores de Buen Funcionamiento

### ✅ Checklist de Funcionamiento

- [ ] El mapa carga correctamente
- [ ] Aparece un marcador azul con pulso
- [ ] El marcador está en tu ubicación real
- [ ] Accuracy es < 50 metros
- [ ] Cuando te mueves, el marcador te sigue
- [ ] El botón 📍 funciona y centra el mapa
- [ ] La consola no muestra errores (F12)
- [ ] Funciona en modo incógnito
- [ ] Funciona en diferentes navegadores
- [ ] Funciona sin recargar la página

---

## 🔧 Troubleshooting

### "El marcador no aparece"
```
Posibles causas:
1. No permitiste acceso a ubicación
   → Solución: Recarga y permite

2. Navegador sin soporte GPS
   → Solución: Usa Chrome, Firefox, Safari

3. Sin conexión a internet
   → Solución: Verifica WiFi
```

### "El marcador está en lugar equivocado"
```
Posibles causas:
1. GPS no calibrado en teléfono
   → Solución: Abre Google Maps, calibra brújula

2. Ubicación en caché antigua
   → Solución: Limpia cache (Ctrl+Shift+Del)

3. WiFi sin ubicación exacta
   → Solución: Activa GPS, espera 30 segundos
```

### "El marcador no se mueve"
```
Posibles causas:
1. watchPosition no está activo
   → Solución: Abre Console, verifica watchId

2. Permisos deshabilitados
   → Solución: Recarga y habilita ubicación

3. Teléfono sin GPS activo
   → Solución: Activa GPS en configuración
```

### "Botón 📍 no funciona"
```
Posibles causas:
1. JavaScript deshabilitado
   → Solución: Habilita JavaScript

2. Navegador antiguo
   → Solución: Actualiza navegador

3. userLocation es null
   → Solución: Espera a que obtenga ubicación
```

---

## 🎯 Prueba de Carga

### Verificar Rendimiento:

1. **Abre DevTools** (F12)
2. **Tab: Performance**
3. **Graba** (presiona círculo rojo)
4. **Abre la app**
5. **Espera 5 segundos**
6. **Detén grabación**

**Deberías ver:**
- Tiempo de carga: < 2 segundos
- FPS: > 30 en móvil
- Sin jank (interrupciones visuales)

---

## 📊 Resultados Esperados

### En Teléfono Moderno:
- Precisión: 5-15 metros
- Tiempo de actualización: < 1 segundo
- Consumo de batería: Bajo
- Consumo de datos: Mínimo

### En Teléfono Antiguo:
- Precisión: 15-50 metros
- Tiempo de actualización: 1-3 segundos
- Consumo de batería: Bajo-Medio
- Consumo de datos: Mínimo

---

## 🎬 Video de Demostración (Paso a Paso)

```
1. Abre app                     (5 segundos)
2. Permite ubicación            (3 segundos)
3. Observa marcador aparecer    (3 segundos)
4. Camina 20 metros             (15 segundos)
5. Observa marcador movimiento  (5 segundos)
6. Prueba botón centrar         (5 segundos)

Total: ~40 segundos de prueba
```

---

## ✨ Resumen de Verificación

| Función | Resultado | Estado |
|---------|-----------|--------|
| Ubicación inicial | Aparece marcador | ✅ |
| Seguimiento | Marcador se mueve | ✅ |
| Botón centrar | Mapa se centra | ✅ |
| Precisión | < 50 metros | ✅ |
| Errores | Manejo correcto | ✅ |
| Rendimiento | Suave y rápido | ✅ |
| Batería | Bajo consumo | ✅ |

---

## 📞 Si Algo No Funciona

1. **Abre la consola** (F12)
2. **Copia el error** si lo hay
3. **Verifica permisos** de ubicación
4. **Recarga la página** (Ctrl+F5 hard refresh)
5. **Prueba en otro navegador**
6. **Prueba en modo incógnito**

---

**¡Tu geolocalización está lista para probar! 📍✨**

Cualquier duda, revisa `GEOLOCATION_UPGRADE.md`
