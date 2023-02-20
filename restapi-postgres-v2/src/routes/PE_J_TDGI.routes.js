import { Router } from 'express';
import { obtenerPE_J_TDGI,crearPE_J_TDGI,actualizarPE_J_TDGI,eliminarPE_J_TDGI,buscarPE_J_TDGI } from '../controllers/PE_J_TDGI.controller.js';

const router = Router();
router.get('/PE_J_TDGI',obtenerPE_J_TDGI);
router.post('/PE_J_TDGI',crearPE_J_TDGI);
router.put('/PE_J_TDGI/:id',actualizarPE_J_TDGI);
router.delete('/PE_J_TDGI/:id',eliminarPE_J_TDGI);
router.get('/PE_J_TDGI/:id',buscarPE_J_TDGI);


export default router;