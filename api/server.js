import app from './app.js';
import db from './config/db.config.js';

const PORT = process.env.PORT || 3000;


// Probar la conexión a la base de datos antes de iniciar el servidor
db.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida exitosamente.');
    // Iniciar el servidor solo si la conexión a la base de datos es exitosa
    app.listen(PORT, () => {
      console.log(`El servidor está corriendo en: http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });