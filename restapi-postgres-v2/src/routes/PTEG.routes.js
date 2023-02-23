import { Router } from 'express';
import { obtenerPTEG,crearPTEG,actualizarPTEG,eliminarPTEG,buscarPTEG } from '../controllers/PTEG.controller.js';

const router = Router();

router.get('/PTEG', obtenerPTEG);
router.post('/PTEG', crearPTEG)
router.put('/PTEG/:id', actualizarPTEG);
router.delete('/PTEG/:id',eliminarPTEG);
router.get('/PTEG/:id',buscarPTEG);


export default router;