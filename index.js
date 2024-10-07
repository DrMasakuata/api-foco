// Importar las dependencias
const express = require('express');
const app = express();

// Variable que alternará entre 0 y 1
let variable = 0;

// Ruta 1: Alterna el valor de la variable entre 0 y 1
app.get('/toggle', (req, res) => {
  variable = variable === 0 ? 1 : 0;
  res.json({ message: 'Valor alternado', newValue: variable });
});

// Ruta 2: Retorna el valor actual de la variable
app.get('/value', (req, res) => {
  res.json({ value: variable });
});

// Configurar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
