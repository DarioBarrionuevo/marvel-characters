# Marvel Characters - Aplicación Web

## Descripción del Proyecto

Este proyecto es una aplicación web diseñada para explorar personajes de Marvel, consultar información detallada sobre ellos y gestionar una lista de favoritos. Permite realizar búsquedas, ver cómics relacionados y marcar personajes como favoritos para un acceso rápido.

## Requisitos Funcionales

La aplicación incluye las siguientes funcionalidades:

- **Página Principal**: Muestra una lista de 50 personajes de Marvel, permite buscar personajes por nombre y añadirlos a favoritos.
- **Página de Favoritos**: Permite visualizar y gestionar los personajes marcados como favoritos, con opción de búsqueda.
- **Detalles del Personaje**: Proporciona información detallada sobre cada personaje, junto con una lista de cómics en los que aparece. También permite agregar o quitar personajes de favoritos.
- **Navegación**: Barra de navegación para acceder a la página principal y a la sección de favoritos, junto con un contador de personajes guardados.
- **Otros requisitos**:
  - Diseño responsive para diferentes dispositivos.
  - Accesibilidad mejorada.
  - Pruebas para validar el correcto funcionamiento de los componentes.

## Instrucciones para Ejecutar la Aplicación

Para ejecutar la aplicación en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio**  
   ```bash
   git clone <URL_DEL_REPOSITORIO>

2. **Instalar dependencias**  
   ```bash
   npm install

3. **Ejecutar la aplicación**  
   ```bash
   npm run dev

4. **Abrir en el navegador**  
   Para acceder, abre tu navegador y visita: http://localhost:3000

## Estructura del Proyecto

La estructura del proyecto está organizada en las siguientes carpetas:

- **/components**: Contiene los componentes reutilizables como la barra de navegación, tarjetas de personajes y botones.  
- **/app**: Define las páginas principales de la aplicación, como la lista de personajes, favoritos y detalles de personaje.  
- **/context**: Manejo del estado global de la aplicación usando React Context API para gestionar favoritos.  
- **/theme**: Contiene estilos globales, incluyendo colores, tipografía, espaciado y reglas de media queries.  
- **/tests**: Pruebas automatizadas para validar el funcionamiento de los componentes clave.  
- **/types**: Definiciones de tipos TypeScript utilizadas en la aplicación.  
- **/api**: Peticiones a la API.  

## Dependencias Utilizadas

- **axios**: Para realizar peticiones HTTP a la API de Marvel.  
- **styled-components**: Para gestionar los estilos de los componentes.  
- **vitest**: Para realizar pruebas unitarias y de integración.  
- **md5**: Para hashear mensajes.  
- **Eslint & Prettier**: Para el formato de código.  
- **Jest & React Testing Library**: Para realizar los tests.  

## Despliegue

La aplicación está desplegada en **Netlify**. Puedes acceder a la versión en producción desde el siguiente enlace:  
[Marvel Characters App](https://marvel-characters-heroes.netlify.app)
