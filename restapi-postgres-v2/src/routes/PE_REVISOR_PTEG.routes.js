import { Router } from 'express';
import { obtenerPE_REVISOR_PTEG,crearPE_REVISOR_PTEG,actualizarPE_REVISOR_PTEG,eliminarPE_REVISOR_PTEG,buscarPE_REVISOR_PTEG } from '../controllers/PE_REVISOR_PTEG.controller.js';

const router = Router();
router.get('/PE_REVISOR_PTEG',obtenerPE_REVISOR_PTEG);
router.post('/PE_REVISOR_PTEG',crearPE_REVISOR_PTEG);
router.put('/PE_REVISOR_PTEG/:id',actualizarPE_REVISOR_PTEG);
router.delete('/PE_REVISOR_PTEG/:id',eliminarPE_REVISOR_PTEG);
router.get('/PE_REVISOR_PTEG/:id',buscarPE_REVISOR_PTEG);

export default router;