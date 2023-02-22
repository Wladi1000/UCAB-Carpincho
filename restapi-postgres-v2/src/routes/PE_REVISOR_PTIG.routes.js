import { Router } from 'express';
import { obtenerPE_REVISOR_PTIG,crearPE_REVISOR_PTIG,actualizarPE_REVISOR_PTIG,eliminarPE_REVISOR_PTIG,buscarPE_REVISOR_PTIG } from '../controllers/PE_REVISOR_PTIG.controller.js';

const router = Router();
router.get('/PE_REVISOR_PTIG',obtenerPE_REVISOR_PTIG);
router.post('/PE_REVISOR_PTIG',crearPE_REVISOR_PTIG);
router.put('/PE_REVISOR_PTIG/:id',actualizarPE_REVISOR_PTIG);
router.delete('/PE_REVISOR_PTIG/:id',eliminarPE_REVISOR_PTIG);
router.get('/PE_REVISOR_PTIG/:id',buscarPE_REVISOR_PTIG);

export default router;