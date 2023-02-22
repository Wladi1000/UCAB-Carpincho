import { Router } from 'express';
import { obtenerEspecialidad_profesor,crearEspecialidad_profesor,actualizarEspecialidad_profesor,eliminarEspecialidad_profesor,buscarEspecialidad_profesor } from '../controllers/Especialidad_profesor.controller.js';

const router = Router();

router.get('/Especialidad_profesor',obtenerEspecialidad_profesor);
router.post('/Especialidad_profesor',crearEspecialidad_profesor);
router.put('/Especialidad_profesor/',actualizarEspecialidad_profesor);
router.delete('/Especialidad_profesor/',eliminarEspecialidad_profesor);
router.get('/Especialidad_profesor/buscar',buscarEspecialidad_profesor);


export default router;