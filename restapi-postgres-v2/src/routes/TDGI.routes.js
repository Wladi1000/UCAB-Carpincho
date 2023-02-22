import { Router } from 'express';
import { actualizarTDGI, buscarTDGI, crearTDGI, eliminarTDGI, obtenerTDGI } from '../controllers/TDGI.controller.js';

const router = Router();

router.get('/TDGI',obtenerTDGI);
router.post('/TDGI',crearTDGI);
router.put('/TDGI/:id',actualizarTDGI);
router.delete('/TDGI/:id',eliminarTDGI);
router.get('/TDGI/:id',buscarTDGI);


export default router;