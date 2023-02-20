import express from "express";

import usuariosRoutes from './routes/Usuarios.routes.js'
import administradoresRoutes from './routes/Administradores.routes.js';
import profesoresRoutes from './routes/Profesores.routes.js';
import sptgRoutes from './routes/STDG.routes.js';
import empresasRoutes from './routes/Empresas.routes.js';
import cdeRoutes from './routes/CDE.routes.js'
import especialidadesRoutes from './routes/Especialidades.routes.js';
import ctgRoutes from './routes/CTG.routes.js';
import pe_j_tdgiRoutes from './routes/PE_J_TDGI.routes.js';
import pe_ta_tdgeRoutes from './routes/PE_TA_TDGE.routes.js';
import pe_te_tdgiRoutes from './routes/PE_TE_TDGI.routes.js';
import pe_j_tdgeRoutes from './routes/PE_J_TDGE.routes.js';

import criterios_rev_tegRoutes from './routes/Criterios_Rev_TEG.routes.js';
import criterios_rev_tigRoutes from './routes/Criterios_Rev_TIG.routes.js';
import criterios_tdge_jRoutes from './routes/Criterios_TDGE_J.routes.js';
import criterios_tdge_taRoutes from './routes/Criterios_TDGE_TA.routes.js';
import criterios_tdgi_taRoutes from './routes/Criterios_TDGI_TA.routes.js';
import criterios_tdgi_jRoutes from './routes/Criterios_TDGI_J.routes.js';
import criterios_tdgi_teRoutes from './routes/Criterios_TDGI_TE.routes.js';

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
app.use(pe_j_tdgiRoutes);
app.use(pe_ta_tdgeRoutes);
app.use(pe_te_tdgiRoutes);
app.use(pe_j_tdgeRoutes);
app.use(criterios_rev_tegRoutes);
app.use(criterios_rev_tigRoutes);
app.use(criterios_tdge_jRoutes);
app.use(criterios_tdge_taRoutes);

app.use(criterios_tdgi_taRoutes);
app.use(criterios_tdgi_jRoutes);
app.use(criterios_tdgi_teRoutes);
export default app;