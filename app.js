import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express!');
});

// Servidor escuchando
app.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
});
