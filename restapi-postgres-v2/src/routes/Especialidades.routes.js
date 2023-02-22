import { Router } from 'express';
import { obtenerEspecialidades, crearEspecialidades, actualizarEspecialidades, eliminarEspecialidades, buscarEspecialidades } from '../controllers/Especialidades.controller.js';

const router = Router();

router.get('/Especialidades',obtenerEspecialidades);
router.post('/Especialidades',crearEspecialidades);
router.put('/Especialidades/:id',actualizarEspecialidades);
router.delete('/Especialidades/:id',eliminarEspecialidades);
router.get('/Especialidades/:id',buscarEspecialidades);


export default router;