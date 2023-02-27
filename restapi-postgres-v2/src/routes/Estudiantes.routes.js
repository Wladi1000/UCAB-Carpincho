import { Router } from 'express';
import {  obtenerEstudiantes, crearEstudiantes, actualizarEstudiantes,eliminarEstudiantes, buscarEstudiantes,buscarEstudiantesPorCedula, datosEstudiantes } from '../controllers/Estudiantes.controller.js';

const router = Router();

router.get('/Estudiantes',obtenerEstudiantes);
router.post('/Estudiantes',crearEstudiantes);
router.put('/Estudiantes/:id',actualizarEstudiantes);
router.delete('/Estudiantes/:id',eliminarEstudiantes);
router.get('/Estudiantes/:id',buscarEstudiantes);
router.get('/Estudiantes/cedula/:id',buscarEstudiantesPorCedula);
router.get('/listarEstudiantes',datosEstudiantes);


export default router;