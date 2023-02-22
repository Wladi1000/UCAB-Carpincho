import { Router } from 'express';
import { buscarTDG,crearTDG,actualizarTDG,eliminarTDG,obtenerTDG } from '../controllers/TDG.controller.js';

const router = Router();

router.get('/TDG',obtenerTDG);
router.post('/TDG',crearTDG);
router.put('/TDG/:id',actualizarTDG);
router.delete('/TDG/:id',eliminarTDG);
router.get('/TDG/:id',buscarTDG);


export default router;