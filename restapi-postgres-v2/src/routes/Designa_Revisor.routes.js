import { Router } from 'express';
import { obtenerDesigna_Revisor, crearDesigna_Revisor, actualizarDesigna_Revisor, eliminarDesigna_Revisor,buscarDesigna_Revisor } from '../controllers/Designa_Revisor.controller.js';

const router = Router();

router.get('/Designa_Revisor',obtenerDesigna_Revisor);
router.post('/Designa_Revisor',crearDesigna_Revisor);
router.put('/Designa_Revisor/',actualizarDesigna_Revisor);
router.delete('/Designa_Revisor/',eliminarDesigna_Revisor);
router.get('/Designa_Revisor/buscar',buscarDesigna_Revisor);


export default router;