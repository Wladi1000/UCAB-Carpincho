import { Router } from 'express';
import { obtenerAprueba_Comite,crearAprueba_Comite,actualizarAprueba_Comite,eliminarAprueba_Comite,buscarAprueba_Comite } from '../controllers/Aprueba_Comite.controller.js';

const router = Router();

router.get('/Aprueba_Comite',obtenerAprueba_Comite);
router.post('/Aprueba_Comite',crearAprueba_Comite);
router.put('/Aprueba_Comite/',actualizarAprueba_Comite);
router.delete('/Aprueba_Comite/',eliminarAprueba_Comite);
router.get('/Aprueba_Comite/buscar',buscarAprueba_Comite);


export default router;