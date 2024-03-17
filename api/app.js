import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/app.routes.js';

const app = express();

const corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
// import userRoutes from './routes/user.routes.mjs';
// userRoutes(app);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API de la tienda de ropa." });
});

// Usar un router de Express para las rutas de la API bajo el prefijo '/api'
app.use('/api', router);

export default app;
