import { Router } from 'express';
import { obtenerDesigna_TA,crearDesigna_TA, actualizarDesigna_TA,eliminarDesigna_TA,buscarDesigna_TA} from '../controllers/Designa_TA.controller.js';

const router = Router();

router.get('/Designa_TA',obtenerDesigna_TA)
router.post('/Designa_TA',crearDesigna_TA);
router.put('/Designa_TA/',actualizarDesigna_TA);
router.delete('/Designa_TA/',eliminarDesigna_TA);
router.get('/Designa_TA/buscar',buscarDesigna_TA);


export default router;