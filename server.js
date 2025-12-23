const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

const db = new sqlite3.Database('./neurosensekit.db', (err) => {
  if (err) {
    console.error('Error al conectar BD:', err.message);
  } else {
    console.log('Conectado a SQLite');
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS respuestas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datos TEXT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

function validarJSON(data) {
  const schema = ['tipo_rehabilitacion', 'area_afectada', 'sintomas', 'rango_movimiento', 
    'historial_medico', 'duracion_rehabilitacion', 'intensidad_ejercicio', 'sensibilidad', 'objetivos', 'edad', 'nombre', 'email', 'telefono'];
  
  const campos = Object.keys(data);
  
  for (let campo of campos) {
    if (!schema.includes(campo)) {
      return { valido: false, error: `Campo inválido: ${campo}` };
    }
    if (typeof data[campo] !== 'string' && !Array.isArray(data[campo])) {
      return { valido: false, error: `Tipo inválido en ${campo}` };
    }
  }
  
  return { valido: true };
}

app.post('/api/respuestas', (req, res) => {
  const validacion = validarJSON(req.body);
  
  if (!validacion.valido) {
    return res.status(400).json({ error: validacion.error });
  }
  
  const datos = JSON.stringify(req.body);
  
  db.run('INSERT INTO respuestas (datos) VALUES (?)', [datos], function(err) {
    if (err) {
      console.error('Error al insertar:', err.message);
      res.status(500).json({ error: 'Error al guardar datos' });
    } else {
      res.json({ 
        success: true, 
        id: this.lastID,
        mensaje: 'Datos guardados correctamente'
      });
    }
  });
});

app.get('/api/respuestas', (req, res) => {
  db.all('SELECT * FROM respuestas ORDER BY fecha DESC', (err, rows) => {
    if (err) {
      console.error('Error al obtener:', err.message);
      res.status(500).json({ error: 'Error al obtener datos' });
    } else {
      const respuestas = rows.map(row => ({
        id: row.id,
        datos: JSON.parse(row.datos),
        fecha: row.fecha
      }));
      res.json(respuestas);
    }
  });
});

app.get('/api/respuestas/:id', (req, res) => {
  db.get('SELECT * FROM respuestas WHERE id = ?', [req.params.id], (err, row) => {
    if (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: 'Error al obtener dato' });
    } else if (!row) {
      res.status(404).json({ error: 'No encontrado' });
    } else {
      res.json({
        id: row.id,
        datos: JSON.parse(row.datos),
        fecha: row.fecha
      });
    }
  });
});

app.delete('/api/respuestas/:id', (req, res) => {
  db.run('DELETE FROM respuestas WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      console.error('Error al eliminar:', err.message);
      res.status(500).json({ error: 'Error al eliminar datos' });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'No encontrado' });
    } else {
      res.json({ success: true, mensaje: 'Respuesta eliminada' });
    }
  });
});

app.put('/api/respuestas/:id', (req, res) => {
  const validacion = validarJSON(req.body);
  
  if (!validacion.valido) {
    return res.status(400).json({ error: validacion.error });
  }
  
  const datos = JSON.stringify(req.body);
  
  db.run('UPDATE respuestas SET datos = ? WHERE id = ?', [datos, req.params.id], function(err) {
    if (err) {
      console.error('Error al actualizar:', err.message);
      res.status(500).json({ error: 'Error al actualizar datos' });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'No encontrado' });
    } else {
      res.json({ success: true, mensaje: 'Respuesta actualizada' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
