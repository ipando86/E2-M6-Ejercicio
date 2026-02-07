// Importar la librería Express
const express = require('express');

// Crear una instancia de la aplicación
const app = express();

// Definir el puerto
const PORT = 3000;

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola Mundo con Express!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:3000. `);
});