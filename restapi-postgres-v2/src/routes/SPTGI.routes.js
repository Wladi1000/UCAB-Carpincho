import { Router } from 'express';
import { crearSPTGI,buscarSPTGI,obtenerSPTGI,actualizarSPTGI,eliminarSPTGI } from '../controllers/SPTGI.controller.js';

const router = Router();

router.get('/SPTGI',obtenerSPTGI);
router.post('/SPTGI',crearSPTGI);
router.put('/SPTGI/:id',actualizarSPTGI);
router.delete('/SPTGI/:id',eliminarSPTGI);
router.get('/SPTGI/:id',buscarSPTGI);


export default router;