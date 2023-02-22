import { Router } from 'express';
import { actualizarContiene_PE_TE_TDGI, buscarContiene_PE_TE_TDGI, crearContiene_PE_TE_TDGI, eliminarContiene_PE_TE_TDGI, obtenerContiene_PE_TE_TDGI } from '../controllers/Contiene_PE_TE_TDGI.controller.js';

const router = Router();
router.get('/Contiene_PE_TE_TDGI',obtenerContiene_PE_TE_TDGI);
router.post('/Contiene_PE_TE_TDGI',crearContiene_PE_TE_TDGI);
router.put('/Contiene_PE_TE_TDGI/',actualizarContiene_PE_TE_TDGI);
router.delete('/Contiene_PE_TE_TDGI/',eliminarContiene_PE_TE_TDGI);
router.get('/Contiene_PE_TE_TDGI/buscar',buscarContiene_PE_TE_TDGI);


export default router;