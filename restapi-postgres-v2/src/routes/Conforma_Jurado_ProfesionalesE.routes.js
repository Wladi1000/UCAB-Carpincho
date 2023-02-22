import { Router } from 'express';
import { actualizarConforma_Jurado_ProfesionalExterno, buscarConforma_Jurado_ProfesionalExterno, crearConforma_Jurado_ProfesionalExterno, eliminarConforma_Jurado_ProfesionalExterno, obtenerConforma_Jurado_ProfesionalExterno } from '../controllers/Conforma_Jurado_ProfesionalesE.controller.js';

const router = Router();

router.get('/Conforma_Jurado_ProfesionalExterno',obtenerConforma_Jurado_ProfesionalExterno);
router.post('/Conforma_Jurado_ProfesionalExterno',crearConforma_Jurado_ProfesionalExterno)
router.put('/Conforma_Jurado_ProfesionalExterno/',actualizarConforma_Jurado_ProfesionalExterno);
router.delete('/Conforma_Jurado_ProfesionalExterno/',eliminarConforma_Jurado_ProfesionalExterno);
router.get('/Conforma_Jurado_ProfesionalExterno/buscar',buscarConforma_Jurado_ProfesionalExterno);


export default router;