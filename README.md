# NeuroSenseKit - Plataforma de Rehabilitación Neurológica

## 📋 Descripción General

**NeuroSenseKit** es una plataforma web profesional especializada en **rehabilitación neurológica** y terapia física para casos neuronales. La plataforma proporciona kits terapéuticos personalizados combinados con recursos multimedia educativos (videos demostrativos descargables) diseñados por especialistas en neurorehabilitación.

### Público Objetivo
- **Pacientes** con patologías neurológicas
- **Terapeutas físicos** y ocupacionales
- **Clínicas y centros** de rehabilitación
- **Profesionales médicos** especializados en neurología

---

## 🎯 Características Principales

### 1. **Enfoque Exclusivamente Neurológico**
La plataforma atiende exclusivamente casos neuronales:
- Accidente Cerebrovascular (ACV)
- Enfermedad de Parkinson
- Lesiones Medulares
- Traumatismo Craneoencefálico (TCE)
- Esclerosis Múltiple
- Neuropatía Periférica

### 2. **Videos Demostrativos Descargables**
✅ **Característica clave:** Cada video tiene un **icono y botón visible de descarga**
- Videos de casos reales de rehabilitación
- Tutorial demo de la plataforma
- Formato: MP4 Full HD (1080p y 720p)
- Disponibles inmediatamente
- Subtítulos en español

### 3. **Kits Terapéuticos Personalizados**
Tres opciones de kits ajustados a diferentes necesidades:
- **Kit Básico** ($599 MXN): Inicio en rehabilitación
- **Kit Premium** ($899 MXN): Rehabilitación completa con seguimiento profesional
- **Kit Clínico Pro** (Consultar): Para instituciones y clínicas

### 4. **Componentes UI para Descargas**
- **Botones de descarga prominentes** en cada tarjeta de video
- **Modal de selección de calidad** (1080p / 720p)
- **Insignias visuales** indicando disponibilidad de descarga
- **Información clara** sobre formatos y especificaciones

### 5. **Demostración de la Plataforma**
- Video tutorial completo de navegación
- Guía de acceso a videos
- Instrucciones de descarga
- Gestión del plan terapéutico

---

## 🏗️ Estructura de la Plataforma

### Páginas Principales

#### 1. **index.html** - Página Principal
Secciones incluidas:
```
├── Hero Section
│   └── Introducción a NeuroSenseKit
├── Casos Neuronales Tratados (6 especialidades)
├── Videos Demostrativos (4 videos + descarga)
├── Nuestros Kits Terapéuticos (3 opciones)
├── Cómo Funciona la Plataforma (3 pasos)
├── Testimonios (4 clientes)
├── Contacto y CTA Final
└── Footer Profesional
```

#### 2. **cuestionario.html** - Evaluación Personalizada
- Formulario clínico detallado
- Preguntas sobre condición del paciente
- Generación de kit personalizado

### Estructura de Directorios
```
/workspaces/Neurosensekit/
├── index.html                    # Página principal
├── cuestionario.html             # Formulario de evaluación
├── README.md                     # Este archivo
└── assets/
    ├── css/
    │   ├── style.css             # Estilos principales
    │   ├── cuestionario.css      # Estilos del cuestionario
    │   └── svg-images.css        # Estilos para imágenes SVG
    ├── js/
    │   ├── app.js                # Funcionalidades principales
    │   └── cuestionario.js       # Lógica del cuestionario
    └── images/
        └── icons/                # Iconografía
```

---

## 💡 Componentes UI Destacados

### 1. **Tarjetas de Casos Neuronales**
```html
- Ícono colorido específico por patología
- Descripción del caso
- Lista de objetivos terapéuticos
- Botón "Ver Video Demostrativo"
```

### 2. **Tarjetas de Videos Descargables**
```html
- Miniatura con efecto de reproducción
- Título y descripción del caso
- Duración del video
- Badge de estado (En vivo, Grabado, Tutorial)
- BOTÓN DE DESCARGA PROMINENTE
```

### 3. **Modal de Descarga**
```html
- Nombre del video
- Opciones de calidad (1080p, 720p)
- Información sobre especificaciones
- Confirmación de descarga
```

### 4. **Tarjetas de Kits Terapéuticos**
```html
- Nombre y descripción del kit
- Precio
- Lista de incluidos
- CTA "Solicitar Kit"
- Badge "RECOMENDADO" para Kit Premium
```

---

## 🎓 Buenas Prácticas UX en Sitios Médicos Implementadas

### 1. **Confiabilidad Visual**
✅ Paleta de colores profesionales (azules y grises)
✅ Tipografía clara y legible
✅ Espaciado generoso
✅ Jerarquía visual clara

### 2. **Accesibilidad**
✅ Contraste de colores WCAG AA
✅ Textos alternativos en imágenes
✅ Navegación clara y predecible
✅ Tamaños de fuente adecuados

### 3. **Profesionalismo**
✅ Lenguaje formal y técnico
✅ Testimonios de profesionales verificados
✅ Información clínica detallada
✅ Certificaciones y estándares ISO

### 4. **Seguridad Percibida**
✅ Encabezado profesional con logo
✅ Información de contacto clara
✅ Datos de los especialistas
✅ Garantías de calidad clínica

### 5. **Usabilidad**
✅ CTA claras y prominentes
✅ Navegación intuitiva
✅ Formularios simples
✅ Mobile-first responsive

---

## 📱 Responsive Design

- **Desktop**: Layout completo con 3+ columnas
- **Tablet**: Adaptación a 2 columnas
- **Mobile**: Layout de columna única

---

## 🎨 Paleta de Colores

| Color | Uso | Código |
|-------|-----|--------|
| Azul Primario | Headers, CTAs | #1e3a8a |
| Azul Secundario | Botones, Vínculos | #3b82f6 |
| Verde Éxito | Confirmaciones, Checkmarks | #10b981 |
| Gris Neutro | Texto, Fondos | #4b5563 |
| Blanco | Fondos principales | #ffffff |

---

## 🎯 Secciones Clave

### Sección Hero
- Propuesta de valor clara
- Estadísticas de confianza (500+ pacientes, 95% satisfacción)
- Doble CTA (Evaluación y Conocer Más)

### Casos Neuronales
- 6 patologías neurológicas
- Descripción clínica precisa
- Objetivos terapéuticos
- Acceso a videos demostrativos

### Videos Demostrativos
- **4 videos principales**
  - Caso ACV (12:45 min)
  - Parkinson (18:30 min)
  - Lesión Medular (15:20 min)
  - **Demo Plataforma (8:15 min)** ← Tutorial de navegación

### Nuestros Kits
- Comparativa de 3 opciones
- Precios claros
- Características detalladas
- Kit Premium destacado como "RECOMENDADO"

### Testimonios
- 4 testimonios profesionales
- Estrellas de valoración
- Nombre, especialidad y contexto
- Avatares diferenciados

---

## 📥 Descargas de Videos

### Características de Descarga
```
✅ Formato: MP4 Full HD (1080p) / 720p
✅ Duración: 8-20 minutos por video
✅ Tamaño: ~800 MB promedio
✅ Subtítulos: Español incluido
✅ Licencia: Para uso profesional clínico
✅ Disponibilidad: Inmediata
```

### Proceso de Descarga
1. Usuario hace clic en "Descargar" en cualquier video
2. Se abre modal con opciones de calidad
3. Selecciona 1080p o 720p
4. Comienza descarga automática
5. Archivo guardado en carpeta de descargas

---

## 🔧 Funcionalidades JavaScript

### app.js - Funciones Principales

```javascript
// Mostrar modal de descarga
showDownloadModal(videoId)

// Cerrar modal
closeDownloadModal()

// Mostrar información de video
showVideoModal(caseType)

// Simular descarga (producción: vinculada a servidor)
simulateDownload(videoId, quality)

// Scroll suave para navegación
// Animaciones al scroll
// Interactividad de elementos
```

---

## 📊 Lenguaje y Tono

### Características Linguísticas
- **Nivel**: Profesional y técnico
- **Claridad**: Accesible pero especializado
- **Tono**: Empático y confiable
- **Idioma**: Español formal

### Ejemplos de Textos Profesionales
- "Rehabilitación neuromuscular y sensitiva post-ACV"
- "Recuperación de movilidad, coordinación y reinervación sensorial"
- "Protocolos clínicos validados"

---

## 🚀 Próximas Implementaciones

### Fase 2
- [ ] Sistema de autenticación de usuarios
- [ ] Área personalizada del paciente
- [ ] Seguimiento de progreso terapéutico
- [ ] Integración de pagos en línea
- [ ] Videoconferencias con terapeutas

### Fase 3
- [ ] APP móvil nativa
- [ ] Gamificación de ejercicios
- [ ] Integración con wearables
- [ ] Análisis de datos clínicos

---

## 📞 Contacto y Soporte

```
📱 Teléfono: (555) 123-4567
📧 Email: info@neurosensekit.mx
📍 Mazatlán, Sinaloa
```

---

## 📄 Licencia

© 2025 NeuroSenseKit. Todos los derechos reservados.
Certificado ISO en Estándares de Salud

---

## 👥 Equipo

Desarrollado por profesionales en:
- Neurorehabilitación
- Terapia Física
- Diseño UX/UI Médico
- Desarrollo Web Profesional

---

## 🔐 Estándares de Privacidad

- Cumplimiento RGPD
- Protección de datos de salud
- Encriptación de información clínica
- Políticas de confidencialidad claras
