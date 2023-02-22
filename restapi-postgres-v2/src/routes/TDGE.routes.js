import { Router } from 'express';
import { actualizarTDGE, buscarTDGE, crearTDGE, eliminarTDGE, obtenerTDGE } from '../controllers/TDGE.controller.js';

const router = Router();

router.get('/TDGE',obtenerTDGE);
router.post('/TDGE',crearTDGE);
router.put('/TDGE/:id',actualizarTDGE);
router.delete('/TDGE/:id',eliminarTDGE);
router.get('/TDGE/:id',buscarTDGE);


export default router;