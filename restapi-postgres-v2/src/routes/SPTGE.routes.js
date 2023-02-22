import { Router } from 'express';
import { obtenerSPTGE,crearSPTGE,actualizarSPTGE,eliminarSPTGE,buscarSPTGE } from '../controllers/SPTGE.controller.js';

const router = Router();

router.get('/SPTGE',obtenerSPTGE);
router.post('/SPTGE',crearSPTGE);
router.put('/SPTGE/:id',actualizarSPTGE);
router.delete('/SPTGE/:id',eliminarSPTGE);
router.get('/SPTGE/:id',buscarSPTGE);


export default router;