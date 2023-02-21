import { Router } from 'express';
import { actualizarCriterios_TDGI_TA, buscarCriterios_TDGI_TA, crearCriterios_TDGI_TA, eliminarCriterios_TDGI_TA, obtenerCriterios_TDGI_TA } from '../controllers/Criterios_TDGI_TA.controller.js';

const router = Router();

router.get('/Criterios_TDGI_TA',obtenerCriterios_TDGI_TA);
router.post('/Criterios_TDGI_TA',crearCriterios_TDGI_TA);
router.put('/Criterios_TDGI_TA/:id',actualizarCriterios_TDGI_TA);
router.delete('/Criterios_TDGI_TA/:id',eliminarCriterios_TDGI_TA);
router.get('/Criterios_TDGI_TA/:id',buscarCriterios_TDGI_TA);


export default router;