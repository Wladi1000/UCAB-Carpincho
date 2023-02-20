import { Router } from 'express';
import { obtenerPE_J_TDGE, crearPE_J_TDGE,actualizarPE_J_TDGE,eliminarPE_J_TDGE,buscarPE_J_TDGE } from '../controllers/PE_J_TDGE.controller.js';

const router = Router();
router.get('/PE_J_TDGE',obtenerPE_J_TDGE);
router.post('/PE_J_TDGE',crearPE_J_TDGE);
router.put('/PE_J_TDGE/:id',actualizarPE_J_TDGE);
router.delete('/PE_J_TDGE/:id',eliminarPE_J_TDGE);
router.get('/PE_J_TDGE/:id',buscarPE_J_TDGE);

export default router;