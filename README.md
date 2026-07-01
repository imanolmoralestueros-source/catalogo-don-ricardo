# Catálogo de exportación - Agrícola Don Ricardo

Proyecto del segundo módulo (Frontend Interactive) del curso de Desarrollo Web Fullstack de Tecsup. Es un catálogo web de los productos de exportación de la empresa (uvas de mesa, arándanos y cítricos), hecho solo con HTML, CSS y JavaScript, sin frameworks.

Usé los productos, imágenes y logo reales de la empresa. El login es una simulación para practicar el flujo; no es un sistema de seguridad real.

## Qué hace

- Muestra el catálogo armando cada tarjeta desde JavaScript, con los datos de un archivo JSON.
- Buscador por nombre y filtro por categoría (Uvas, Berries, Cítricos).
- Página de detalle de cada producto, al que se entra por un id en la URL.
- Login simulado con control de acceso usando localStorage, y cierre de sesión.
- Muestra estados de "cargando", "sin resultados" y "error".
- Diseño responsive.

## Cómo verlo en local

Como el proyecto usa módulos de JavaScript y fetch, el navegador no lo deja abrir con doble clic en el archivo (da error de CORS). Hay que levantarlo con un servidor local.

Con la extensión Live Server de VS Code: clic derecho en `index.html` y "Open with Live Server".

O con Python:

```
python -m http.server 8000
```

Y entrar a http://localhost:8000

Para ingresar (usuario de prueba para revisión):

- Usuario: SoyGuardian
- Contraseña: iocarry

## Cómo está organizado

```
index.html            catálogo
pages/login.html      acceso
pages/producto.html   detalle de un producto
data/products.json    los productos
assets/css/           estilos
assets/img/           logo e imágenes
scripts/              todo el JavaScript
  services/productsService.js   lee los datos (fetch)
  authGuard.js                  sesión con localStorage
  createCard.js                 arma una tarjeta
  products.js                   catálogo (buscador y filtro)
  singleProduct.js              detalle
  login.js                      login
```

## Con qué está hecho

HTML5, CSS3 (variables, Flexbox, Grid y media queries) y JavaScript con módulos (import/export), fetch y async/await. Los datos salen de un JSON local. Se despliega en GitHub Pages.

## Notas

Separé la lectura de datos en `services/productsService.js`, así si más adelante los datos vienen de una API en vez de un JSON, solo cambio ese archivo.

El login guarda un token en localStorage solo para simular la sesión. En un proyecto real eso lo maneja el backend, porque localStorage no es seguro para autenticación.
