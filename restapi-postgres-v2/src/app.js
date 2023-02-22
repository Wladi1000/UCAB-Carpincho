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
import profesionalesexternosRoutes from './routes/ProfesionalesExternos.routes.js';
import juradoRoutes from './routes/Jurado.routes.js';
import conforma_jurado_profesorRoutes from './routes/Conforma_Jurado_Profesor.routes.js';
import conforma_jurado_profesionaleRoutes from './routes/Conforma_Jurado_ProfesionalesE.routes.js';
import pe_ta_tdgiRoutes from './routes/PE_TA_TDGI.routes.js';
import pe_final_tdgiRoutes from './routes/PE_final_TDGI.routes.js';
import estudiantesRoutes from './routes/Estudiantes.routes.js';
import tdgeRoutes from './routes/TDGE.routes.js';
import tdgiRoutes from './routes/TDGI.routes.js';
import contiene_pe_te_tdgiRoutes from './routes/Contiene_PE_TE_TDGI.routes.js';
import especialidad_profesorRoutes from './routes/Especialidad_profesor.routes.js';
import sptgeRoutes from './routes/SPTGE.routes.js';
import sptgiRoutes from './routes/SPTGI.routes.js';
import realiza_sptgRoutes from './routes/Realiza_SPTG.routes.js';
import evalua_sptgRoutes from './routes/evalua_SPTG.routes.js';
import conforma_consejoRoutes from './routes/Conforma_Consejo.routes.js';
import ptgRoutes from './routes/PTG.routes.js';
import designa_revisorRoutes from './routes/Designa_Revisor.routes.js';
import tdgRoutes from './routes/TDG.routes.js';
import aprueba_comiteRoutes from './routes/Aprueba_Comite.routes.js';
import aprueba_consejoRoutes from './routes/Aprueba_Consejo.routes.js';
import designa_taRoutes from './routes/Designa_TA.routes.js';
import ptegRoutes from './routes/PTEG.routes.js';
import ptigRoutes from './routes/PTIG.routes.js';
import pe_revisor_ptegRoutes from './routes/PE_REVISOR_PTEG.routes.js';
import pe_revisor_ptigRoutes from './routes/PE_REVISOR_PTIG.routes.js';

import cors from 'cors'

var app = express();

app.use(cors())
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

app.use(estudiantesRoutes);
app.use(profesionalesexternosRoutes);
app.use(juradoRoutes);
app.use(conforma_jurado_profesorRoutes);
app.use(conforma_jurado_profesionaleRoutes);
app.use(pe_ta_tdgiRoutes);
app.use(pe_final_tdgiRoutes);
app.use(tdgeRoutes);
app.use(tdgiRoutes);
app.use(contiene_pe_te_tdgiRoutes);
app.use(especialidad_profesorRoutes);
app.use(sptgeRoutes);
app.use(sptgiRoutes);
app.use(realiza_sptgRoutes);
app.use(evalua_sptgRoutes);
app.use(conforma_consejoRoutes);
app.use(ptgRoutes);
app.use(designa_revisorRoutes);
app.use(tdgRoutes);
app.use(aprueba_comiteRoutes);
app.use(aprueba_consejoRoutes);
app.use(designa_taRoutes);
app.use(ptegRoutes);
app.use(ptigRoutes);
app.use(pe_revisor_ptegRoutes);
app.use(pe_revisor_ptigRoutes);

export default app;