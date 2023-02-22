import { Router } from 'express';
import { obtenerConforma_Consejo,crearConforma_Consejo,actualizarConforma_Consejo, eliminarConforma_Consejo, buscarConforma_Consejo } from '../controllers/Conforma_Consejo.controller.js';

const router = Router();

router.get('/Conforma_Consejo',obtenerConforma_Consejo);
router.post('/Conforma_Consejo',crearConforma_Consejo)
router.put('/Conforma_Consejo/',actualizarConforma_Consejo);
router.delete('/Conforma_Consejo/',eliminarConforma_Consejo);
router.get('/Conforma_Consejo/buscar',buscarConforma_Consejo);

export default router;