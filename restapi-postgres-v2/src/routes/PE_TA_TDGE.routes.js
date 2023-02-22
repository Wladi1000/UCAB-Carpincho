import { Router } from 'express';
import { crearPE_TA_TDGE, obtenerPE_TA_TDGE,actualizarPE_TA_TDGE,eliminarPE_TA_TDGE, buscarPE_TA_TDGE } from '../controllers/PE_TA_TDGE.controller.js';

const router = Router();
router.get('/PE_TA_TDGE',obtenerPE_TA_TDGE);
router.post('/PE_TA_TDGE',crearPE_TA_TDGE);
router.put('/PE_TA_TDGE/:id',actualizarPE_TA_TDGE);
router.delete('/PE_TA_TDGE/:id',eliminarPE_TA_TDGE);
router.get('/PE_TA_TDGE/:id',buscarPE_TA_TDGE);

export default router;