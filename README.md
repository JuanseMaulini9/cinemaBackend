# Cine Backend

Este repositorio contiene el backend para una aplicación de cine que gestiona horarios de funciones y cines. El servidor proporciona una API para interactuar con la base de datos y manejar las operaciones CRUD para los cines y funciones.

## Características

- **Gestión de Funciones y Cines:** Permite obtener, crear, actualizar y eliminar cines.
- **Obtención de Datos:** Facilita la recuperación de películas y cines.
- **Persistencia de Datos:** Usa MongoDB para almacenar datos de funciones, cines y películas.

## Tecnologías Utilizadas

- **Node.js:** Entorno de ejecución para el servidor.
- **Express:** Framework para la gestión de rutas y middleware.
- **MongoDB:** Base de datos NoSQL para la persistencia de datos.
- **Mongoose:** Librería de modelado de objetos MongoDB para Node.js.

## Instalación

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/tuusuario/cine-backend.git
    ```

2. **Navega al directorio del proyecto:**
    ```bash
    cd cine-backend
    ```

3. **Instala las dependencias:**
    ```bash
    npm install
    ```

4. **Configura las variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    ```

5. **Inicia el servidor:**
    ```bash
    npm start
    ```

## Endpoints

- **GET /api/getMovies:** Obtiene todas las películas.
- **GET /api/getMovie/:movieId:** Obtiene una película específica por su ID.
- **GET /api/getThreaters:** Obtiene todos los cines.
- **GET /api/getThreater:** Obtiene un cine específico por su ID.
- **POST /api/postThreater:** Crea un nuevo cine.
- **DELETE /api/deleteThreater:** Elimina un cine específico por su ID.
- **PUT /api/editThreater:** Actualiza un cine existente por su ID.
