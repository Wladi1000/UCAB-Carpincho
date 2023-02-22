import { Router } from 'express';
import { obtenerPE_TA_TDGI,crearPE_TA_TDGI,actualizarPE_TA_TDGI,eliminarPE_TA_TDGI,buscarPE_TA_TDGI } from '../controllers/PE_TA_TDGI.controller.js';

const router = Router();
router.get('/PE_TA_TDGI',obtenerPE_TA_TDGI);
router.post('/PE_TA_TDGI',crearPE_TA_TDGI);
router.put('/PE_TA_TDGI/:id',actualizarPE_TA_TDGI);
router.delete('/PE_TA_TDGI/:id',eliminarPE_TA_TDGI);
router.get('/PE_TA_TDGI/:id',buscarPE_TA_TDGI);

export default router;