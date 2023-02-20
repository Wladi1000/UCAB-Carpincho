import { Router } from 'express';
import { obtenerCriterios_TDGE_J, crearCriterios_TDGE_J,actualizarCriterios_TDGE_J,eliminarCriterios_TDGE_J, buscarCriterios_TDGE_J} from '../controllers/Criterios_TDGE_J.controller.js';

const router = Router();

router.get('/Criterios_TDGE_J',obtenerCriterios_TDGE_J);
router.post('/Criterios_TDGE_J',crearCriterios_TDGE_J);
router.put('/Criterios_TDGE_J/:id',actualizarCriterios_TDGE_J);
router.delete('/Criterios_TDGE_J/:id',eliminarCriterios_TDGE_J);
router.get('/Criterios_TDGE_J/:id',buscarCriterios_TDGE_J);


export default router;