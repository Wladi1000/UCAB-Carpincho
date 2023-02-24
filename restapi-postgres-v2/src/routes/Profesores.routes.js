import { Router } from 'express';
import { actualizarProfesores, buscarProfesores, crearProfesores, eliminarProfesores, obtenerProfesores, buscarProfesoresPorCedula} from '../controllers/Profesores.controller.js'
const router = Router();
router.get('/Profesores',obtenerProfesores);
router.post('/Profesores',crearProfesores);
router.put('/Profesores/:id',actualizarProfesores);
router.delete('/Profesores/:id',eliminarProfesores);
router.get('/Profesores/:id',buscarProfesores);
router.get('/Profesores/cedula/:id',buscarProfesoresPorCedula);


export default router;