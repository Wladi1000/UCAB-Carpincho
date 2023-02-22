import { Router } from 'express';
import { actualizarSPTG, buscarSPTG, crearSPTG, eliminarSPTG, obtenerSPTG,datosEstudianteSPTG } from '../controllers/SPTG.controller.js';

const router = Router();

router.get('/SPTG',obtenerSPTG);
router.post('/SPTG',crearSPTG);
router.put('/SPTG/:id',actualizarSPTG);
router.delete('/SPTG/:id',eliminarSPTG);
router.get('/SPTG/:id',buscarSPTG);
router.get('/datosEstudiantes/',datosEstudianteSPTG);


export default router;