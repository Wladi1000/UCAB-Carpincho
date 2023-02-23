import { Router } from 'express';
import { obtenerPTIG,crearPTIG,actualizarPTIG,eliminarPTIG,buscarPTIG } from '../controllers/PTIG.controller.js';

const router = Router();

router.get('/PTIG', obtenerPTIG);
router.post('/PTIG', crearPTIG)
router.put('/PTIG/:id', actualizarPTIG);
router.delete('/PTIG/:id', eliminarPTIG);
router.get('/PTIG/:id', buscarPTIG);


export default router;