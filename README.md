Plataforma de películas - Adrimovies

Despliegue en Vercel: https://adri-movies.vercel.app/

Objetivo: Construir la estructura base de una aplicación en React, aplicando los
fundamentos vistos hasta el momento.

Requerimientos
1) Proyecto configurado con Vite + React
  El proyecto fue creado utilizando el comando: npm create vite@latest (plantilla react)
  se ejecuta mediante: npm create vite@latest

2) Estructura básica de componentes

  El proyecto está organizado dentro de la carpeta src/components/, donde se diseñó una estructura compuesta por:
  Navbar.jsx: encabezado de la aplicación.
  
    Container.jsx: componente contenedor que utiliza children para envolver otros elementos.
    
    MovieGrid.jsx: componente que organiza la lista de películas.
    
    MovieCard.jsx: componente que muestra cada película individual con su información.

3) Renderizado de una lista de datos mockeados

El renderizado de datos falsos se implementa en el archivo:
src/data/movies.js

4) Uso de estilos

Los estilos se aplican mediante estilos en línea utilizando la propiedad style en cada componente, garantizando coherencia visual en toda la aplicación.

5) Componente contenedor con children

El componente Container.jsx implementa el uso de la propiedad children, permitiendo envolver y reutilizar otros componentes en su interior:

6) Renderizado de los ítems

El componente MovieCard.jsx se encarga de renderizar la información básica de cada película.
