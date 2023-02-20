import express from "express";

import usuariosRoutes from './routes/Usuarios.routes.js'
import administradoresRoutes from './routes/Administradores.routes.js';
import profesoresRoutes from './routes/Profesores.routes.js';
import sptgRoutes from './routes/STDG.routes.js';
import empresasRoutes from './routes/Empresas.routes.js';
import cdeRoutes from './routes/CDE.routes.js'
import especialidadesRoutes from './routes/Especialidades.routes.js';
import ctgRoutes from './routes/CTG.routes.js'

var app = express();

app.use(express.json());

app.use(usuariosRoutes);
app.use(administradoresRoutes);
app.use(profesoresRoutes);
app.use(sptgRoutes);
app.use(empresasRoutes);
app.use(cdeRoutes);
app.use(especialidadesRoutes);
app.use(ctgRoutes);


export default app;