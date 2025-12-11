Plataforma de películas con interacción dinámica- Adrimovies

Despliegue en Vercel: https://adri-movies-git-entrega3-adriano-raffaultes-projects.vercel.app/

OBJETIVO

Incorporar un sistema de rutas completo en la aplicación, incluyendo rutas
públicas, rutas privadas y rutas exclusivas para usuarios no autenticados.
Cada alumno debe adaptar las consignas a su propia aplicación, manteniendo la
coherencia con la temática elegida.


REQUERIMIENTOS

Implementar React Router
  Configurar un sistema de navegación completo.
  
  Deben existir tres tipos de rutas:

1) RUTAS ACCESIBLES POR CUALQUIERA (PÚBLICAS GENERALES)

    Implementada en: Home → catálogo → catálogo de películas

2) RUTAS QUE DEBEN SER EXCLUSIVAMENTE PÚBLICAS

   Implementada en: login → Pantalla de inicio de sesión simulada

   Si el usuario ya está autenticado, se impide el acceso al login y se redirige automáticamente a:
   /favoritos

3) RUTAS PRIVADAS (PROTEGIDAS)

    Implementada en : /favoritos → Sección de películas favoritas

4) AUTENTICACION

   Implementada en: src/context/AuthContext.jsx
