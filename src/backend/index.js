import express from 'express';
import pool from './db.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Ruta para obtener estudiantes
app.get('/api/estudiantes', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM estudiantes');
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al consultar la base de datos');
  }
});

app.listen(3001, () => {
  console.log('Servidor backend en http://localhost:3001');
});
