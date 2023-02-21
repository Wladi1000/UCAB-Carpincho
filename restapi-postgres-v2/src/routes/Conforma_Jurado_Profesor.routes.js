import { Router } from 'express';
import { 
    obtenerConforma_Jurado_Profesor,
    crearConforma_Jurado_Profesor,
    actualizarConforma_Jurado_Profesor,
    eliminarConforma_Jurado_Profesor,
    buscarConforma_Jurado_Profesor 
} from '../controllers/Conforma_Jurado_Profesor.controller.js';

const router = Router();

router.get('/Conforma_Jurado_Profesor',obtenerConforma_Jurado_Profesor);
router.post('/Conforma_Jurado_Profesor',crearConforma_Jurado_Profesor);
router.put('/Conforma_Jurado_Profesor/',actualizarConforma_Jurado_Profesor);
router.delete('/Conforma_Jurado_Profesor/',eliminarConforma_Jurado_Profesor);
router.get('/Conforma_Jurado_Profesor/buscar',buscarConforma_Jurado_Profesor);


export default router;