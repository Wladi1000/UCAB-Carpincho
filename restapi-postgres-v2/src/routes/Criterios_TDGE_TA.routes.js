import { Router } from 'express';
import { obtenerCriterios_TDGE_TA, crearCriterios_TDGE_TA,actualizarCriterios_TDGE_TA,eliminarCriterios_TDGE_TA, buscarCriterios_TDGE_TA} from '../controllers/Criterios_TDGE_TA.controller.js';

const router = Router();

router.get('/Criterios_TDGE_TA',obtenerCriterios_TDGE_TA);
router.post('/Criterios_TDGE_TA',crearCriterios_TDGE_TA);
router.put('/Criterios_TDGE_TA/:id',actualizarCriterios_TDGE_TA);
router.delete('/Criterios_TDGE_TA/:id',eliminarCriterios_TDGE_TA);
router.get('/Criterios_TDGE_TA/:id',buscarCriterios_TDGE_TA);


export default router;