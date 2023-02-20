import { Router } from 'express';
import { obtenerCriterios_TDGI_J,crearCriterios_TDGI_J,actualizarCriterios_TDGI_J,eliminarCriterios_TDGI_J,buscarCriterios_TDGI_J } from '../controllers/Criterios_TDGI_J.controller.js';

const router = Router();

router.get('/Criterios_TDGI_J',obtenerCriterios_TDGI_J);
router.post('/Criterios_TDGI_J',crearCriterios_TDGI_J);
router.put('/Criterios_TDGI_J/:id',actualizarCriterios_TDGI_J);
router.delete('/Criterios_TDGI_J/:id',eliminarCriterios_TDGI_J);
router.get('/Criterios_TDGI_J/:id',buscarCriterios_TDGI_J);


export default router;