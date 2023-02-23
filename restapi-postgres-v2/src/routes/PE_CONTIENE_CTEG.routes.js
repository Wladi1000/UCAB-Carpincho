import { Router } from 'express';
import { crearPE_Contiene_CTEG,obtenerPE_Contiene_CTEG,buscarPE_Contiene_CTEG,eliminarPE_Contiene_CTEG,actualizarPE_Contiene_CTEG } from '../controllers/PE_CONTIENE_CTEG.controller.js';

const router = Router();

router.get('/PE_CONTIENE_CTEG',obtenerPE_Contiene_CTEG);
router.post('/PE_CONTIENE_CTEG',crearPE_Contiene_CTEG)
router.put('/PE_CONTIENE_CTEG/',actualizarPE_Contiene_CTEG);
router.delete('/PE_CONTIENE_CTEG/',eliminarPE_Contiene_CTEG);
router.get('/PE_CONTIENE_CTEG/buscar',buscarPE_Contiene_CTEG);


export default router;