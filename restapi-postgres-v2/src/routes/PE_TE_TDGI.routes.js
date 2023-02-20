import { Router } from 'express';
import { actualizarPE_TE_TDGI, buscarPE_TE_TDGI, crearPE_TE_TDGI, eliminarPE_TE_TDGI,obtenerPE_TE_TDGI } from '../controllers/PE_TE_TDGI.controller.js';

const router = Router();
router.get('/PE_TE_TDGI',obtenerPE_TE_TDGI);
router.post('/PE_TE_TDGI',crearPE_TE_TDGI);
router.put('/PE_TE_TDGI/:id',actualizarPE_TE_TDGI);
router.delete('/PE_TE_TDGI/:id',eliminarPE_TE_TDGI);
router.get('/PE_TE_TDGI/:id',buscarPE_TE_TDGI);

export default router;