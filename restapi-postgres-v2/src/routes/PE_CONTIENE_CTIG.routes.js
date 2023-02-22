import { Router } from 'express';
import { obtenerPE_Contiene_CTIG,crearPE_Contiene_CTIG,actualizarPE_Contiene_CTIG,eliminarPE_Contiene_CTIG,buscarPE_Contiene_CTIG } from '../controllers/PE_CONTIENE_CTIG.controller.js';

const router = Router();

router.get('/PE_CONTIENE_CTIG',obtenerPE_Contiene_CTIG);
router.post('/PE_CONTIENE_CTIG',crearPE_Contiene_CTIG)
router.put('/PE_CONTIENE_CTIG/',actualizarPE_Contiene_CTIG);
router.delete('/PE_CONTIENE_CTIG/',eliminarPE_Contiene_CTIG);
router.get('/PE_CONTIENE_CTIG/buscar',buscarPE_Contiene_CTIG);

export default router;