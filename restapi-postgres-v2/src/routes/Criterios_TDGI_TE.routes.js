import { Router } from 'express';
import { actualizarCriterios_TDGI_TE, buscarCriterios_TDGI_TE, crearCriterios_TDGI_TE, eliminarCriterios_TDGI_TE, obtenerCriterios_TDGI_TE } from '../controllers/Criterios_TDGI_TE.controller.js';

const router = Router();

router.get('/Criterios_TDGI_TE',obtenerCriterios_TDGI_TE);
router.post('/Criterios_TDGI_TE',crearCriterios_TDGI_TE);
router.put('/Criterios_TDGI_TE/:id',actualizarCriterios_TDGI_TE);
router.delete('/Criterios_TDGI_TE/:id',eliminarCriterios_TDGI_TE);
router.get('/Criterios_TDGI_TE/:id',buscarCriterios_TDGI_TE);


export default router;