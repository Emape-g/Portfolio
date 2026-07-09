# Plan de Rediseño — Portfolio Emanuel Perez

Estilo elegido: **Tech / Dev oscuro** · Paleta: **Violeta / Índigo con acentos rosados**

---

## 1. Diagnóstico del sitio actual

Lo que ya funciona y conviene conservar:

- Estructura sólida de secciones (Hero, Sobre mí, Educación, Proyectos, Contacto).
- HTML semántico con buen uso de `section`, `article`, `nav` y atributos `aria`.
- Animaciones reveal con `IntersectionObserver` y menú hamburguesa funcional.
- Uso de variables CSS (`:root`), lo que facilita un cambio total de paleta.

Problemas detectados:

1. **Paleta apagada**: azul marino sobre azul marino, poco contraste y poca personalidad. El acento rojo (`#C1121F`) choca con el azul.
2. **Tipografía Orbitron en exceso**: usar la fuente sci-fi en todos los títulos cansa y resta legibilidad.
3. **Hero plano**: solo título + texto + botón, sin jerarquía visual ni elementos que enganchen.
4. **Falta sección de skills/tecnologías**, que es lo primero que mira un reclutador.
5. **Enlace del CV roto**: apunta a `assets/cv.pdf` pero el archivo es `CV_Emanuel_Perez.pdf` en la raíz.
6. **Enlaces de proyectos y redes vacíos** (`href="#"`): no llevan a ningún lado.
7. **Sin favicon, sin metadatos** (Open Graph / description) para compartir el sitio.
8. **Cards uniformes y estáticas**: poco feedback visual al interactuar.

---

## 2. Dirección de diseño

Un look de "developer moderno": fondo oscuro profundo con un degradado sutil violeta-índigo, tarjetas con efecto *glassmorphism* (vidrio esmerilado), acentos rosados/violeta que brillan en hover, y micro-animaciones que dan sensación de producto cuidado.

### Paleta nueva

| Rol | Color | Uso |
|-----|-------|-----|
| Fondo base | `#0B0A1A` | Cuerpo de la página |
| Fondo elevado | `#13112B` | Header y zonas |
| Vidrio (card) | `rgba(255,255,255,0.04)` | Tarjetas glassmorphism |
| Primario | `#7C5CFF` (violeta) | Botones, links, acentos |
| Secundario | `#A78BFA` (índigo claro) | Hover, detalles |
| Acento | `#EC4899` (rosa) | Highlights, gradientes |
| Texto título | `#F4F2FF` | Encabezados |
| Texto cuerpo | `#A6A3C2` | Párrafos |
| Borde sutil | `rgba(124,92,255,0.18)` | Bordes de tarjetas |

Gradiente estrella: `linear-gradient(135deg, #7C5CFF, #EC4899)` para títulos destacados, botón principal y la línea de acento.

### Tipografía

- **Space Grotesk** para títulos: moderna, geométrica, con carácter tech pero legible (reemplaza Orbitron).
- **Inter** para cuerpo: estándar de la industria, excelente legibilidad (reemplaza Roboto).
- Se elimina el `text-transform: uppercase` global; se usa solo donde aporta.

---

## 3. Mejoras de estructura

1. **Hero rediseñado**: título con gradiente, subtítulo con rol ("Desarrollador Web · Estudiante UTN"), dos botones (Descargar CV + Ver proyectos), y un fondo con resplandor (glow) animado. Badge de "Disponible para trabajar".
2. **Nueva sección Skills/Tecnologías**: grid de chips con íconos (HTML, CSS, JS, Python, SQL, Supabase, Git) — lo primero que escanea un reclutador.
3. **Sobre mí**: foto/avatar opcional + texto, en dos columnas.
4. **Educación**: timeline con la línea pintada en gradiente y dots que brillan.
5. **Proyectos**: cards glassmorphism con hover elevado, etiquetas de stack con color, y botón con borde gradiente.
6. **Contacto**: formulario con inputs de estilo moderno y estados de focus con glow.
7. **Footer** nuevo con copyright y enlaces.

## 4. Detalles técnicos y accesibilidad

- Corregir enlace del CV → `CV_Emanuel_Perez.pdf`.
- Añadir `<meta name="description">`, Open Graph y favicon SVG inline.
- Respetar `prefers-reduced-motion` para usuarios sensibles a animaciones.
- Mantener contraste AA en textos.
- Placeholders claros en los `href="#"` para que completes tus links reales de GitHub/LinkedIn.

## 5. Checklist de implementación

- [x] Definir paleta y tipografía
- [ ] Reescribir `styles.css` (tema oscuro violeta + glassmorphism)
- [ ] Actualizar `index.html` (hero, skills, footer, metadatos)
- [ ] Mejorar `index.js` (animaciones, sin romper el form)
- [ ] Verificar en navegador (desktop + móvil)
- [ ] Tareas para vos: completar links de GitHub/LinkedIn y claves de EmailJS

---

*Nota: el rediseño se aplica directamente sobre los archivos del proyecto. Tu código original queda en el historial de Git por si querés volver atrás.*
