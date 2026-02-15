# 🚌 BusYA - App de Paradas en Tiempo Real

Una aplicación web 100% móvil para que usuarios y conductores compartan información de paradas de autobús en tiempo real, similar a Uber pero para transporte público.

## 📁 Estructura del Proyecto

```
BusYA/
├── index.html                 # Página principal
├── README.md                  # Este archivo
├── css/
│   └── style.css             # Estilos personalizados
├── js/
│   └── script.js             # Funcionalidad principal
├── assets/
│   ├── images/               # Imágenes de la app
│   └── icons/                # Iconos personalizados
└── pages/
    ├── about.html            # Página Acerca de
    ├── contact.html          # Página de Contacto
    └── driver.html           # Página para Conductores
```

## 🎯 Características Principales

### Para Usuarios
- 📍 Localización en tiempo real de autobuses
- 🕐 Horarios actualizados y precisos
- 🛣️ Exploración de rutas disponibles
- 🔔 Notificaciones cuando el autobús se acerca
- 📱 Diseño completamente responsivo

### Para Conductores
- 🚗 Panel de control profesional
- 📊 Estadísticas y reportes de desempeño
- 👥 Comunicación con pasajeros
- 🛡️ Herramientas de seguridad
- 💬 Soporte 24/7

## 🚀 Comenzar

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet

### Instalación

1. **Clona o descarga el repositorio:**
```bash
git clone https://github.com/tuusuario/busya.git
cd BusYA
```

2. **Abre el archivo index.html en tu navegador:**
```bash
# En Windows
start index.html

# En macOS
open index.html

# En Linux
xdg-open index.html
```

O puedes utilizar un servidor local (recomendado):

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego accede a `http://localhost:8000` en tu navegador.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos avanzados con variables CSS y animaciones
- **JavaScript (ES6+)**: Lógica e interactividad
- **Bootstrap 5**: Framework CSS responsivo
- **Font Awesome 6**: Biblioteca de iconos

## 📱 Características de Diseño

### Responsivo
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (<768px)

### Accesibilidad
- Semántica HTML correcta
- Contraste de colores adecuado
- Navegación accesible por teclado

## 📝 Páginas Incluidas

### 1. **index.html** - Página Principal
- Hero section con call-to-action
- Características principales
- Buscador de rutas
- Sección de resultados

### 2. **pages/about.html** - Acerca de
- Misión y visión
- Valores de la empresa
- Información del equipo

### 3. **pages/contact.html** - Contacto
- Formulario de contacto
- Información de ubicación
- Datos de contacto
- Mapa (placeholder)

### 4. **pages/driver.html** - Para Conductores
- Características para conductores
- Panel de control (dashboard preview)
- Requisitos de registro
- Call-to-action

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `css/style.css`:

```css
:root {
    --primary-color: #007bff;     /* Color principal */
    --secondary-color: #6c757d;   /* Color secundario */
    /* ... más variables */
}
```

### Agregar Contenido
Todas las páginas usan Bootstrap, facilitando:
- Agregar nueva información
- Crear nuevas secciones
- Modificar diseños

## 🔄 Actualización Futura

La estructura está preparada para:
- ✅ Integración con backend/API
- ✅ Autenticación de usuarios
- ✅ Base de datos de rutas
- ✅ Sistema de mapas interactivos
- ✅ Notificaciones en tiempo real
- ✅ Mobile app (React Native/Flutter)

## 📚 Recursos Útiles

- [Bootstrap 5 Documentación](https://getbootstrap.com/docs/5.3/)
- [Font Awesome Iconos](https://fontawesome.com/icons)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💼 Autor

BusYA Team - 2026

## 📞 Contacto

- Email: info@busya.com
- Teléfono: +1 (555) 123-4567

---

**Nota**: Esta es una versión frontend. Para funcionalidad completa, necesitarás:
1. Backend API
2. Sistema de geolocalización en tiempo real
3. Base de datos de rutas y horarios
4. Sistema de autenticación
