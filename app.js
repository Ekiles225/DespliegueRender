import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {config} from 'dotenv'
import pg from 'pg'

config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    //ssl: true
})

const port = process.env.PORT || 3000;

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express!');
});

// Ruta de db
app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()' )
    return res.json(result.rows[0])
});


// Servidor escuchando
app.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
});
