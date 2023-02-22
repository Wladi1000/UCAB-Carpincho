import { Router } from 'express';
import { crearPE_final_TDGI,obtenerPE_final_TDGI,buscarPE_final_TDGI,actualizarPE_final_TDGI,eliminarPE_final_TDGI } from '../controllers/PE_final_TDGI.controller.js';

const router = Router();
router.get('/PE_FINAL_TDGI',obtenerPE_final_TDGI);
router.post('/PE_FINAL_TDGI',crearPE_final_TDGI);
router.put('/PE_FINAL_TDGI/:id',actualizarPE_final_TDGI);
router.delete('/PE_FINAL_TDGI/:id',eliminarPE_final_TDGI);
router.get('/PE_FINAL_TDGI/:id',buscarPE_final_TDGI);

export default router;