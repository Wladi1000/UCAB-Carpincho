import express from "express";

import usuariosRoutes from './routes/Usuarios.routes.js'
import administradoresRoutes from './routes/Administradores.routes.js';
import profesoresRoutes from './routes/Profesores.routes.js'
var app = express();

app.use(express.json());

app.use(usuariosRoutes);
app.use(administradoresRoutes);
app.use(profesoresRoutes);


export default app;