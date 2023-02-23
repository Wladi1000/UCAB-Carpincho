import { Router } from 'express';
import { obtenerAprueba_Consejo,crearAprueba_Consejo, actualizarAprueba_Consejo, eliminarAprueba_Consejo, buscarAprueba_Consejo } from '../controllers/Aprueba_Consejo.controller.js';

const router = Router();

router.get('/Aprueba_Consejo',obtenerAprueba_Consejo);
router.post('/Aprueba_Consejo',crearAprueba_Consejo);
router.put('/Aprueba_Consejo/',actualizarAprueba_Consejo);
router.delete('/Aprueba_Consejo/',eliminarAprueba_Consejo);
router.get('/Aprueba_Consejo/buscar',buscarAprueba_Consejo);


export default router;